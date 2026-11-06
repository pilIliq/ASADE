(() => {
  const input = document.getElementById('search');
  const list = document.getElementById('results');
  const root = document.getElementById('content');
  const langSelect = document.getElementById('language');
  const MAX_RESULTS = 50;
  let active = -1;
  let lang = DEFAULT_LANG;

  /* ================= languages ================= */
  function t(key) {
    const own = LANGUAGES[lang].strings[key];
    return own !== undefined ? own : (LANGUAGES[DEFAULT_LANG].strings[key] ?? key);
  }

  function applyLanguage(code) {
    if (!LANGUAGES[code]) code = DEFAULT_LANG;
    clearHighlight();
    lang = code;
    document.documentElement.lang = code;
    document.title = t('site.title');
    langSelect.value = code;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    try { localStorage.setItem('lang', code); } catch (e) {}
    if (!list.hidden) showResults();     // refresh an open dropdown in the new language
  }

  function initLanguage() {
    for (const [code, l] of Object.entries(LANGUAGES)) {
      langSelect.add(new Option(l.name, code));
    }
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    const browser = (navigator.language || '').slice(0, 2);
    applyLanguage(saved && LANGUAGES[saved] ? saved : (LANGUAGES[browser] ? browser : DEFAULT_LANG));
  }

  /* ================= search ================= */
  function clearHighlight() {
    root.querySelectorAll('mark.found').forEach(m => {
      m.replaceWith(document.createTextNode(m.textContent));
    });
    root.normalize();
  }

  function collect(query) {
    const needle = query.toLowerCase();
    const found = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode() && found.length < MAX_RESULTS) {
      const node = walker.currentNode;
      if (node.parentElement.closest('script, style')) continue;
      const lower = node.nodeValue.toLowerCase();
      for (let i = lower.indexOf(needle); i !== -1 && found.length < MAX_RESULTS;
           i = lower.indexOf(needle, i + needle.length)) {
        found.push({ node, start: i, length: needle.length });
      }
    }
    return found;
  }

  function tabPath(node) {
    const names = [];
    let d = node.parentElement.closest('details');
    while (d) {
      names.unshift(d.querySelector(':scope > summary').textContent.trim());
      d = d.parentElement.closest('details');
    }
    return names.join(' › ');
  }

    function buildItem(m) {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    const path = document.createElement('span');
    path.className = 'path';
    path.textContent = tabPath(m.node);

    // Use the surrounding block (paragraph, heading, tab name...), not just one text node
    const block = m.node.parentElement.closest(
      'p, li, summary, h1, h2, h3, h4, h5, h6, td, th, blockquote, pre, button, div'
    ) || root;
    const toMatch = document.createRange();
    toMatch.setStart(block, 0);
    toMatch.setEnd(m.node, m.start);
    const offset = toMatch.toString().length;   // where the match starts inside the block
    const text = block.textContent;

    const from = Math.max(0, offset - 30);
    const to = Math.min(text.length, offset + m.length + 50);
    const flat = s => s.replace(/\s+/g, ' ');   // tidy line breaks and extra spaces

    const mark = document.createElement('mark');
    mark.textContent = text.slice(offset, offset + m.length);
    li.append(path,
      (from > 0 ? '…' : '') + flat(text.slice(from, offset)), mark,
      flat(text.slice(offset + m.length, to)) + (to < text.length ? '…' : ''));
    return li;
  }

  function showResults() {
    const query = input.value.trim();
    list.replaceChildren();
    active = -1;
    if (!query) return closeList();
    const found = collect(query);
    if (!found.length) {
      const li = document.createElement('li');
      li.className = 'empty';
      li.textContent = t('search.empty');
      list.append(li);
    }
    found.forEach((m, i) => {
      const li = buildItem(m);
      li.dataset.index = i;
      list.append(li);
    });
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function closeList() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }

  function goTo(index) {
    clearHighlight();
    const m = collect(input.value.trim())[index];
    if (!m) return;

    let d = m.node.parentElement.closest('details');
    if (m.node.parentElement.closest('summary') && d) d = d.parentElement.closest('details');
    while (d) { d.open = true; d = d.parentElement.closest('details'); }

    const range = document.createRange();
    range.setStart(m.node, m.start);
    range.setEnd(m.node, m.start + m.length);
    const mark = document.createElement('mark');
    mark.className = 'found';
    range.surroundContents(mark);

    closeList();
    mark.scrollIntoView({ block: 'center' });
  }

  function setActive(i) {
    const items = [...list.querySelectorAll('li[data-index]')];
    if (!items.length) return;
    active = (i + items.length) % items.length;
    items.forEach((li, n) => li.classList.toggle('active', n === active));
    items[active].scrollIntoView({ block: 'nearest' });
  }

  input.addEventListener('input', () => { clearHighlight(); showResults(); });
  input.addEventListener('focus', () => { if (input.value.trim()) showResults(); });
  input.addEventListener('click', () => { if (input.value.trim()) showResults(); });  // reopen after a choice
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (list.hidden) showResults(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter' && active >= 0) { e.preventDefault(); goTo(active); }
    else if (e.key === 'Escape') closeList();
  });
  list.addEventListener('mousedown', e => {
    const li = e.target.closest('li[data-index]');
    if (li) { e.preventDefault(); goTo(+li.dataset.index); }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search')) closeList();
  });
  langSelect.addEventListener('change', () => applyLanguage(langSelect.value));

  initLanguage();
})();
