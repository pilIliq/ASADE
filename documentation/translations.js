const DEFAULT_LANG = 'en';

// Order of KEYS and the order of every language array below must stay identical.
// Each value line ends with a comment naming its key, so you can check alignment at a glance.
const KEYS = [
  'site.title',
  'search.placeholder',
  'search.empty',
  'tab0.title',
  'tab0.option1.name',
  'tab0.option1.description',
  'tab0.option2.name',
  'tab0.option2.description',
  'tab1.title',
  'tab1.alt',
  'tab1.text',
  'tab1.option1.name',
  'tab1.option1.description',
  'tab1.option2.name',
  'tab1.option2.description',
  'tab2.title',
  'tab2.alt',
  'tab2.text',
  'tab2.option1.name',
  'tab2.option1.description',
  'tab2.option2.name',
  'tab2.option2.description',
  'tab2.option3.name',
  'tab2.option3.description',
  'tab3.title',
  'tab3.text',
  'tab3.option1.name',
  'tab3.option1.description',
  'tab3.global.title',
  'tab3.global.text',
  'tab3.global.alt',
  'tab3.global.option1.name',
  'tab3.global.option1.description',
  'tab3.global.option2.name',
  'tab3.global.option2.description',
  'tab3.global.option3.name',
  'tab3.global.option3.description',
  'tab3.element.title',
  'tab3.element.text',
  'tab3.element.alt',
  'tab3.element.default.title',
  'tab3.element.default.alt',
  'tab3.element.default.option1.name',
  'tab3.element.default.option1.description',
  'tab3.element.default.option2.name',
  'tab3.element.default.option2.description',
  'tab3.element.default.option3.name',
  'tab3.element.default.option3.description',
  'tab3.element.default.option4.name',
  'tab3.element.default.option4.description',
  'tab3.element.text.title',
  'tab3.element.text.text',
  'tab3.element.text.alt',
  'tab3.element.text.text.title',
  'tab3.element.text.text.alt',
  'tab3.element.text.text.text',
  'tab3.text.text.option1.name',
  'tab3.text.text.option1.description',
  'tab3.text.text.option1.style',
  'tab3.text.text.option1.style1',
  'tab3.text.text.option1.style2',
  'tab3.text.text.option1.style3',
  'tab3.text.text.option1.style4',
  'tab3.text.text.option1.style5',
  'tab3.text.text.option1.style6',
  'tab3.text.text.option1.style7',
  'tab3.text.text.option1.style8',
  'tab3.text.text.option1.style9',
  'tab3.text.text.option1.style10',
  'tab3.text.text.option1.style11',
  'tab3.text.text.option1.style12',
  'tab3.text.text.option1.style13',
  'tab3.text.text.option1.style14',
  'tab3.text.text.option1.style15',
  'tab3.text.text.option1.style16',
  'tab3.text.text.option2.name',
  'tab3.text.text.option2.description',
  'tab3.text.text.option3.name',
  'tab3.text.text.option3.description',
  'tab3.text.text.option4.name',
  'tab3.text.text.option4.description',
  'tab3.text.text.option5.name',
  'tab3.text.text.option5.description',
  'tab3.element.text.textstyle.title',
  'tab3.element.text.textstyle.text',
  'tab3.element.text.textstyle.alt',
  'tab3.text.textstyle.option1.name',
  'tab3.text.textstyle.option1.description',
  'tab3.text.textstyle.option2.name',
  'tab3.text.textstyle.option2.description',
  'tab3.text.textstyle.option3.name',
  'tab3.text.textstyle.option3.description',
  'tab3.element.polygon.title',
  'tab3.element.polygon.alt',
  'tab3.element.polygon.text',
  'tab3.element.polygon.polygon.title',
  'tab3.element.polygon.polygon.alt',
  'tab3.element.polygon.polygon.text',
  'tab3.polygon.polygon.option1.name',
  'tab3.polygon.polygon.option1.description',
  'tab3.polygon.polygon.option2.name',
  'tab3.polygon.polygon.option2.description',
  'tab3.polygon.polygon.option3.name',
  'tab3.polygon.polygon.option3.description',
  'tab3.polygon.polygon.option4.name',
  'tab3.polygon.polygon.option4.description',
  'tab3.element.polygon.shape.title',
  'tab3.element.polygon.shape.alt',
  'tab3.element.polygon.shape.text',
  'tab3.polygon.shape.option1.name',
  'tab3.polygon.shape.option1.description',
  'tab3.polygon.shape.option2.name',
  'tab3.polygon.shape.option2.description',
  'tab3.polygon.shape.option3.name',
  'tab3.polygon.shape.option3.description',
  'tab3.element.polygon.style.title',
  'tab3.element.polygon.style.alt',
  'tab3.element.polygon.style.text',
  'tab3.polygon.style.option1.name',
  'tab3.polygon.style.option1.description',
  'tab3.polygon.style.option2.name',
  'tab3.polygon.style.option2.description',
  'tab3.polygon.style.option3.name',
  'tab3.polygon.style.option3.description',
  'tab3.polygon.style.option4.name',
  'tab3.polygon.style.option4.description',
  'tab3.polygon.style.option5.name',
  'tab3.polygon.style.option5.description',
  'footerlinktext',
];

const TRANSLATIONS = {
  en: [
    'ASADE: Accessible Simple Air Document Editor', // site.title
    'Search tabs and content…', // search.placeholder
    'No matches found', // search.empty
    'Camera movement', // tab0.title
    'Touchscreen (phone, tablet)', // tab0.option1.name
    'Swipe with one finger to move the camera horizontally and vertically. Pinch with two fingers to zoom in or out.', // tab0.option1.description
    'Mouse and keyboard (PC)', // tab0.option2.name
    'Drag with the mouse or use the arrow keys to move the camera horizontally and vertically. Use the mouse wheel or scroll vertically on a laptop touchpad to zoom in or out.', // tab0.option2.description
    'Screen UI', // tab1.title
    'Screen UI', // tab1.alt
    'The screen controls let you add elements, create save points, and move between save points.', // tab1.text
    'Adding an element', // tab1.option1.name
    'Use the dropdown next to the “+” button to choose the type of element to add. Then press the “+” button. A new element with default settings will be added at the camera position.', // tab1.option1.description
    'Using save points', // tab1.option2.name
    'Press the “▽” button to create a save point. It stores the document in its current state. Use the arrows to move between save points. Switching to another save point completely replaces the current document with the saved version. Save points are kept in chronological order. If you create a save point after selecting an earlier one, all later save points are deleted. The selected save point’s number is displayed between the arrows.', // tab1.option2.description
    'Object list UI', // tab2.title
    'Object list UI', // tab2.alt
    'This list contains all elements in the document’s current state, ordered by their rendering order (layer).', // tab2.text
    'Selecting and deselecting an element', // tab2.option1.name
    'Click an element’s name to select it. Its properties panel will then appear. Click the name of an already selected element to deselect it and show the global document properties.', // tab2.option1.description
    'Changing element order', // tab2.option2.name
    'When an element is selected, two arrows appear to the right of its name. Press them to move the selected element one position up or down in the rendering order.', // tab2.option2.description
    'Customizing the list', // tab2.option3.name
    'Drag the right edge, bottom edge, or corner of the list box to resize it. Press the triangle to the right of the list box to collapse or expand it.', // tab2.option3.description
    'Properties UI', // tab3.title
    'This panel displays the global document settings or, when an element is selected, that element’s properties.', // tab3.text
    'Customizing the panel', // tab3.option1.name
    'Drag the left edge of the panel to resize it. Press the triangle to the left of the panel to collapse or expand it.', // tab3.option1.description
    'Global document properties', // tab3.global.title
    'This panel contains the document-wide settings and a link to this documentation.', // tab3.global.text
    'Global properties UI', // tab3.global.alt
    'Renaming the document', // tab3.global.option1.name
    'Enter any name for the document in the name field.', // tab3.global.option1.description
    'Changing the document background colour', // tab3.global.option2.name
    'Enter a HEX colour code in the colour field, or press the button to open the colour palette and choose the document background colour.', // tab3.global.option2.description
    'Exporting (saving) and importing (loading) a document', // tab3.global.option3.name
    'Copy the document link from the “Current document” field. You can use it as the site address to open the document in viewing mode. To replace the current document with another one, paste its link into the “Load document” field and press “Load”. The field is cleared after loading. If the “Load document” field is empty (contains no characters) when you press “Load”, a fresh empty document is loaded: the same one shown when the application first launches, named “My Document”, with a completely white (#ffffff) background and no elements. Under the "Current document" input there is a label showing amount of characters of the link. Remember that some browsers have a limit to the link’s length, so keep your documents optimised.', // tab3.global.option3.description
    'Element properties', // tab3.element.title
    'When an element is selected, this panel displays its properties. From here, you can open the general element properties or the properties specific to its type. You can also copy or delete the selected element.', // tab3.element.text
    'Element properties UI', // tab3.element.alt
    'Default element properties', // tab3.element.default.title
    'Default element properties UI', // tab3.element.default.alt
    'Renaming an element', // tab3.element.default.option1.name
    'Enter a name in the name field. An element’s name does not affect its appearance; it is used only as an identifier in the document data. Every element must have a unique name. If you enter a name that is already in use, it is automatically changed to a similar available name (for example, “Text 1” becomes “Text 2” if “Text 1” already exists).', // tab3.element.default.option1.description
    'Moving an element', // tab3.element.default.option2.name
    'Use the separate X and Y position fields to set the element’s position, or drag the joystick in the movement control. The joystick’s movement sensitivity depends on the camera zoom level.', // tab3.element.default.option2.description
    'Rotating an element', // tab3.element.default.option3.name
    'Use the direction field to set the element’s rotation, or drag the rotation control to rotate it. The direction field is limited to the range [-180°, 180°). Values outside this range are wrapped into it; for example, -300° becomes 60°.', // tab3.element.default.option3.description
    'Resizing an element', // tab3.element.default.option4.name
    'Use the size field or slider to resize the element. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.element.default.option4.description
    'Text element properties', // tab3.element.text.title
    'Properties specific to text elements.', // tab3.element.text.text
    'Text element properties UI', // tab3.element.text.alt
    'Text', // tab3.element.text.text.title
    'Text element properties UI: Text', // tab3.element.text.text.alt
    'Additional text-element settings.', // tab3.element.text.text.text
    'Text field', // tab3.text.text.option1.name
    'Enter text of any length in this field; it will be rendered in the document. Drag the line below the field to change the field width. Text formatting is controlled by paired markers: type a backslash (\\) followed by a style symbol to turn that style on, and use the same combination again to turn it off. The formatting applies to the text between the two markers.', // tab3.text.text.option1.description
    'Backslash formatting combinations:', // tab3.text.text.option1.style
    '\\b — toggle bold text', // tab3.text.text.option1.style1
    '\\i — toggle italic text', // tab3.text.text.option1.style2
    '\\u — toggle underline', // tab3.text.text.option1.style3
    '\\m — toggle strikethrough (line through the text)', // tab3.text.text.option1.style4
    '\\o — toggle overline (line above the text)', // tab3.text.text.option1.style5
    '\\n — start a new line', // tab3.text.text.option1.style6
    '\\l — start a new line and set left alignment for subsequent text', // tab3.text.text.option1.style7
    '\\c — start a new line and set centre alignment for subsequent text', // tab3.text.text.option1.style8
    '\\r — start a new line and set right alignment for subsequent text', // tab3.text.text.option1.style9
    '\\_ — toggle subscript', // tab3.text.text.option1.style10
    '\\^ — toggle superscript', // tab3.text.text.option1.style11
    '\\s — toggle spoiler text; press and hold the hidden text to reveal it', // tab3.text.text.option1.style12
    '\\d — apply a “drunk” effect: each character is given a random offset, rotation, and independent horizontal and vertical scale. The effect is static; it does not animate.', // tab3.text.text.option1.style13
    '\\v — turn the text upside down by rotating it 180°', // tab3.text.text.option1.style14
    '\\x — clear active text styles, except flipped text and alignment', // tab3.text.text.option1.style15
    '\\\\ — display a literal backslash (\\) in the text', // tab3.text.text.option1.style16
    'Line width', // tab3.text.text.option2.name
    'Use the line-width field or slider to set how much text fits on one line before wrapping. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.text.text.option2.description
    'Text size', // tab3.text.text.option3.name
    'Use the text-size field or slider to change the size of the text. This setting and the element size have a similar effect and do not change text wrapping. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.text.text.option3.description
    'Letter spacing', // tab3.text.text.option4.name
    'Use the letter-spacing field or slider to set the additional space between characters. Letter spacing affects text wrapping. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.text.text.option4.description
    'Line spacing', // tab3.text.text.option5.name
    'Use the line-spacing field or slider to set the space between wrapped text lines. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.text.text.option5.description
    'Text style', // tab3.element.text.textstyle.title
    'Appearance settings for text elements.', // tab3.element.text.textstyle.text
    'Text element properties UI: Text style', // tab3.element.text.textstyle.alt
    'Text colour', // tab3.text.textstyle.option1.name
    'Use the colour field to enter a HEX code, or press the button to open the colour palette and choose the text colour.', // tab3.text.textstyle.option1.description
    'Text transparency', // tab3.text.textstyle.option2.name
    'Use the transparency field or slider to set text transparency. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.text.textstyle.option2.description
    'Text blending', // tab3.text.textstyle.option3.name
    'Use the blending dropdown to choose the text blending mode.', // tab3.text.textstyle.option3.description
    'Polygon element properties', // tab3.element.polygon.title
    'Polygon element properties UI', // tab3.element.polygon.alt
    'Properties specific to polygon elements.', // tab3.element.polygon.text
    'Polygon', // tab3.element.polygon.polygon.title
    'Polygon element properties UI: Polygon', // tab3.element.polygon.polygon.alt
    'Basic geometry of the polygon: how it is stretched and how many vertices it has.', // tab3.element.polygon.polygon.text
    'Direction offset', // tab3.polygon.polygon.option1.name
    'Use the field or slider to turn the polygon by an additional angle without affecting its stretching. Each element has its own direction, but only the polygon has separate X and Y stretch, and that stretch follows the element’s direction. For example, a polygon pointing right with a larger X stretch than Y stretch looks wide, but when the element is rotated to point up, it looks tall. Direction offset turns the polygon so that the stretching stays unaffected: the sample polygon is still wide, only turned. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.polygon.option1.description
    'Stretch X', // tab3.polygon.polygon.option2.name
    'Use the field or slider to stretch or squeeze the polygon along its X axis (the axis that follows the element’s direction). Larger values make the polygon longer along this axis, smaller values make it shorter. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.polygon.option2.description
    'Stretch Y', // tab3.polygon.polygon.option3.name
    'Use the field or slider to stretch or squeeze the polygon along its Y axis (perpendicular to the X axis). Larger values make the polygon longer along this axis, smaller values make it shorter. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.polygon.option3.description
    'Vertices amount', // tab3.polygon.polygon.option4.name
    'Use the field or slider to set the number of points (vertices) the polygon has. A low number gives a shape with sharp corners (for example, 3 vertices make a triangle); a high number makes the polygon look like a circle.', // tab3.polygon.polygon.option4.description
    'Polygon shape', // tab3.element.polygon.shape.title
    'Polygon element properties UI: Polygon shape', // tab3.element.polygon.shape.alt
    'Settings that give the polygon’s surface waves. Imagine a polygon with so many vertices that it looks like a circle. Each vertex can be moved away from the centre or towards it by a different amount, so the edge turns into a wavy line. The options below control these waves. For smooth waves, first set a high vertices amount on the “Polygon” page.', // tab3.element.polygon.shape.text
    'Wave period', // tab3.polygon.shape.option1.name
    'Use the field or slider to set the length of the waves. The value is already converted into the number of waves visible around the polygon: 1 shows one wave, 2 shows two waves, 15 shows fifteen waves, and so on. Decimal values are allowed, but a fractional number of waves cannot fit evenly around the polygon, so a sharp step appears at one point of its surface. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.shape.option1.description
    'Wave amplitude', // tab3.polygon.shape.option2.name
    'Use the field or slider to set the height of the waves, that is, how far the vertices are moved away from the centre or towards it. The larger the amplitude, the taller and deeper the waves; the smaller it is, the smoother the surface. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.shape.option2.description
    'Wave offset', // tab3.polygon.shape.option3.name
    'Use the field or slider to slide the waves along the polygon’s surface. The peaks and troughs move around the polygon, but the number and height of the waves do not change. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.shape.option3.description
    'Polygon style', // tab3.element.polygon.style.title
    'Polygon element properties UI: Polygon style', // tab3.element.polygon.style.alt
    'Appearance settings for polygon elements.', // tab3.element.polygon.style.text
    'Fill colour', // tab3.polygon.style.option1.name
    'Use the colour field to enter a HEX code, or press the button to open the colour palette and choose the polygon’s fill colour.', // tab3.polygon.style.option1.description
    'Fill transparency', // tab3.polygon.style.option2.name
    'Use the transparency field or slider to set the fill transparency. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.style.option2.description
    'Outline colour', // tab3.polygon.style.option3.name
    'Use the colour field to enter a HEX code, or press the button to open the colour palette and choose the polygon’s outline colour.', // tab3.polygon.style.option3.description
    'Outline transparency', // tab3.polygon.style.option4.name
    'Use the transparency field or slider to set the outline transparency. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.style.option4.description
    'Outline width', // tab3.polygon.style.option5.name
    'Use the outline-width field or slider to set the width of the polygon’s outline. The field accepts values outside the slider’s minimum and maximum limits.', // tab3.polygon.style.option5.description
    'Back to editor', // footerlinktext
  ],

  uk: [
    'ASADE: Доступний простий редактор повітряних документів', // site.title
    'Пошук вкладок і вмісту…', // search.placeholder
    'Збігів не знайдено', // search.empty
    'Рух камери', // tab0.title
    'Сенсорний екран (телефон, планшет)', // tab0.option1.name
    'Проведіть одним пальцем, щоб переміщувати камеру горизонтально та вертикально. Зведіть або розведіть два пальці, щоб наблизити чи віддалити зображення.', // tab0.option1.description
    'Миша та клавіатура (ПК)', // tab0.option2.name
    'Перетягуйте мишею або використовуйте клавіші зі стрілками, щоб переміщувати камеру горизонтально та вертикально. Використовуйте коліщатко миші або вертикальне прокручування сенсорної панелі ноутбука, щоб наближати чи віддаляти зображення.', // tab0.option2.description
    'Інтерфейс екрана', // tab1.title
    'Інтерфейс екрана', // tab1.alt
    'Елементи керування на екрані дають змогу додавати елементи, створювати точки збереження та переміщатися між ними.', // tab1.text
    'Додавання елемента', // tab1.option1.name
    'За допомогою списку поруч із кнопкою «+» виберіть тип елемента, який потрібно додати. Потім натисніть кнопку «+». Новий елемент зі стандартними налаштуваннями буде додано в позиції камери.', // tab1.option1.description
    'Використання точок збереження', // tab1.option2.name
    'Натисніть кнопку «▽», щоб створити точку збереження. Вона збереже документ у його поточному стані. Використовуйте стрілки, щоб переходити між точками збереження. Перехід до іншої точки повністю замінює поточний документ збереженою версією. Точки збереження впорядковані хронологічно. Якщо створити точку збереження після вибору ранішої, усі пізніші точки буде видалено. Номер вибраної точки збереження відображається між стрілками.', // tab1.option2.description
    'Інтерфейс списку об’єктів', // tab2.title
    'Інтерфейс списку об’єктів', // tab2.alt
    'У цьому списку наведено всі елементи поточного стану документа, упорядковані за порядком відображення (шарами).', // tab2.text
    'Вибір і зняття вибору елемента', // tab2.option1.name
    'Натисніть назву елемента, щоб вибрати його. Після цього з’явиться панель його властивостей. Натисніть назву вже вибраного елемента, щоб зняти з нього вибір і показати глобальні властивості документа.', // tab2.option1.description
    'Зміна порядку елементів', // tab2.option2.name
    'Коли елемент вибрано, праворуч від його назви з’являються дві стрілки. Натискайте їх, щоб перемістити вибраний елемент на одну позицію вище або нижче в порядку відображення.', // tab2.option2.description
    'Налаштування списку', // tab2.option3.name
    'Перетягуйте правий край, нижній край або кут рамки списку, щоб змінити її розмір. Натисніть трикутник праворуч від рамки списку, щоб згорнути або розгорнути її.', // tab2.option3.description
    'Інтерфейс властивостей', // tab3.title
    'Ця панель показує глобальні налаштування документа або, якщо вибрано елемент, властивості цього елемента.', // tab3.text
    'Налаштування панелі', // tab3.option1.name
    'Перетягуйте лівий край панелі, щоб змінити її розмір. Натисніть трикутник ліворуч від панелі, щоб згорнути або розгорнути її.', // tab3.option1.description
    'Глобальні властивості документа', // tab3.global.title
    'Ця панель містить загальні налаштування документа та посилання на цю документацію.', // tab3.global.text
    'Інтерфейс глобальних властивостей', // tab3.global.alt
    'Перейменування документа', // tab3.global.option1.name
    'Введіть будь-яку назву документа в поле назви.', // tab3.global.option1.description
    'Зміна кольору тла документа', // tab3.global.option2.name
    'Введіть HEX-код кольору в поле кольору або натисніть кнопку, щоб відкрити палітру й вибрати колір тла документа.', // tab3.global.option2.description
    'Експорт (збереження) та імпорт (завантаження) документа', // tab3.global.option3.name
    'Скопіюйте посилання на документ із поля «Поточний документ». Його можна використати як адресу сайту, щоб відкрити документ у режимі перегляду. Щоб замінити поточний документ іншим, вставте його посилання в поле «Завантажити документ» і натисніть «Завантажити». Після завантаження поле очиститься. Якщо поле «Завантажити документ» порожнє (не містить жодного символу), коли ви натискаєте «Завантажити», завантажується новий порожній документ: той самий, що відображається під час першого запуску застосунку, з назвою «Мій документ», повністю білим (#ffffff) тлом і без жодного елемента.', // tab3.global.option3.description
    'Властивості елемента', // tab3.element.title
    'Якщо вибрано елемент, ця панель показує його властивості. Тут можна відкрити загальні властивості елемента або властивості, специфічні для його типу. Також тут можна копіювати або видаляти вибраний елемент.', // tab3.element.text
    'Інтерфейс властивостей елемента', // tab3.element.alt
    'Стандартні властивості елемента', // tab3.element.default.title
    'Інтерфейс стандартних властивостей елемента', // tab3.element.default.alt
    'Перейменування елемента', // tab3.element.default.option1.name
    'Введіть назву в поле назви. Назва елемента не впливає на його вигляд і використовується лише як ідентифікатор у даних документа. Кожен елемент повинен мати унікальну назву. Якщо ввести вже зайняту назву, її буде автоматично змінено на схожу вільну назву (наприклад, «Текст 1» стане «Текст 2», якщо «Текст 1» уже існує).', // tab3.element.default.option1.description
    'Переміщення елемента', // tab3.element.default.option2.name
    'Використовуйте окремі поля координат X та Y, щоб задати позицію елемента, або перетягуйте джойстик у блоці переміщення. Чутливість переміщення джойстика залежить від масштабу камери.', // tab3.element.default.option2.description
    'Обертання елемента', // tab3.element.default.option3.name
    'Використовуйте поле напрямку, щоб задати кут повороту елемента, або перетягуйте регулятор обертання. Поле напрямку обмежене діапазоном [-180°, 180°). Значення поза цим діапазоном автоматично приводяться до нього; наприклад, -300° перетвориться на 60°.', // tab3.element.default.option3.description
    'Зміна розміру елемента', // tab3.element.default.option4.name
    'Використовуйте поле розміру або повзунок, щоб змінити розмір елемента. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.element.default.option4.description
    'Властивості текстового елемента', // tab3.element.text.title
    'Властивості, притаманні текстовим елементам.', // tab3.element.text.text
    'Інтерфейс властивостей текстового елемента', // tab3.element.text.alt
    'Текст', // tab3.element.text.text.title
    'Інтерфейс властивостей текстового елемента: Текст', // tab3.element.text.text.alt
    'Додаткові налаштування текстового елемента.', // tab3.element.text.text.text
    'Текстове поле', // tab3.text.text.option1.name
    'Введіть у це поле текст будь-якої довжини — його буде відображено в документі. Перетягуйте лінію під полем, щоб змінити ширину поля. Форматування тексту керується парними маркерами: введіть зворотну скісну риску (\\), а потім символ стилю, щоб увімкнути стиль; повторіть ту саму комбінацію, щоб вимкнути його. Форматування застосовується до тексту між двома маркерами.', // tab3.text.text.option1.description
    'Комбінації зі зворотною скісною рискою:', // tab3.text.text.option1.style
    '\\b — перемикання напівжирного тексту', // tab3.text.text.option1.style1
    '\\i — перемикання курсиву', // tab3.text.text.option1.style2
    '\\u — перемикання підкреслення', // tab3.text.text.option1.style3
    '\\m — перемикання закреслення (лінія крізь текст)', // tab3.text.text.option1.style4
    '\\o — перемикання надкреслення (лінія над текстом)', // tab3.text.text.option1.style5
    '\\n — початок нового рядка', // tab3.text.text.option1.style6
    '\\l — початок нового рядка та вирівнювання всього подальшого тексту ліворуч', // tab3.text.text.option1.style7
    '\\c — початок нового рядка та вирівнювання всього подальшого тексту по центру', // tab3.text.text.option1.style8
    '\\r — початок нового рядка та вирівнювання всього подальшого тексту праворуч', // tab3.text.text.option1.style9
    '\\_ — перемикання нижнього індексу', // tab3.text.text.option1.style10
    '\\^ — перемикання верхнього індексу', // tab3.text.text.option1.style11
    '\\s — перемикання прихованого тексту («спойлера»); натисніть і утримуйте прихований текст, щоб показати його', // tab3.text.text.option1.style12
    '\\d — ефект «п’яного» тексту: кожен символ отримує випадкове зміщення, поворот і незалежну зміну горизонтального та вертикального масштабу. Ефект статичний, без анімації.', // tab3.text.text.option1.style13
    '\\v — перевертання тексту догори дриґом шляхом повороту на 180°', // tab3.text.text.option1.style14
    '\\x — скасування активних стилів тексту, крім перевертання та вирівнювання', // tab3.text.text.option1.style15
    '\\\\ — відображення звичайної зворотної скісної риски (\\) у тексті', // tab3.text.text.option1.style16
    'Ширина рядка', // tab3.text.text.option2.name
    'Використовуйте поле ширини рядка або повзунок, щоб задати кількість тексту в одному рядку до перенесення. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.text.text.option2.description
    'Розмір тексту', // tab3.text.text.option3.name
    'Використовуйте поле розміру тексту або повзунок, щоб змінити розмір тексту. Цей параметр і розмір елемента мають схожий ефект і не змінюють перенесення рядків. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.text.text.option3.description
    'Міжлітерний інтервал', // tab3.text.text.option4.name
    'Використовуйте поле міжлітерного інтервалу або повзунок, щоб задати додаткову відстань між символами. Міжлітерний інтервал впливає на перенесення рядків. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.text.text.option4.description
    'Міжрядковий інтервал', // tab3.text.text.option5.name
    'Використовуйте поле міжрядкового інтервалу або повзунок, щоб задати відстань між перенесеними рядками. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.text.text.option5.description
    'Стиль тексту', // tab3.element.text.textstyle.title
    'Налаштування вигляду текстових елементів.', // tab3.element.text.textstyle.text
    'Інтерфейс властивостей текстового елемента: Стиль тексту', // tab3.element.text.textstyle.alt
    'Колір тексту', // tab3.text.textstyle.option1.name
    'Введіть HEX-код у поле кольору або натисніть кнопку, щоб відкрити палітру й вибрати колір тексту.', // tab3.text.textstyle.option1.description
    'Прозорість тексту', // tab3.text.textstyle.option2.name
    'Використовуйте поле прозорості або повзунок, щоб задати прозорість тексту. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.text.textstyle.option2.description
    'Змішування тексту', // tab3.text.textstyle.option3.name
    'Використовуйте список режимів змішування, щоб вибрати режим змішування тексту.', // tab3.text.textstyle.option3.description
    'Властивості елемента-багатокутника', // tab3.element.polygon.title
    'Інтерфейс властивостей елемента-багатокутника', // tab3.element.polygon.alt
    'Властивості, притаманні елементам-багатокутникам.', // tab3.element.polygon.text
    'Багатокутник', // tab3.element.polygon.polygon.title
    'Інтерфейс властивостей елемента-багатокутника: Багатокутник', // tab3.element.polygon.polygon.alt
    'Основна геометрія багатокутника: як він розтягнутий і скільки вершин має.', // tab3.element.polygon.polygon.text
    'Зсув напрямку', // tab3.polygon.polygon.option1.name
    'Використовуйте поле або повзунок, щоб додатково повернути багатокутник, не змінюючи його розтягування. Кожен елемент має власний напрямок, але лише багатокутник має окреме розтягування за X та Y, і це розтягування залежить від напрямку елемента. Наприклад, багатокутник, спрямований праворуч, із більшим розтягуванням за X, ніж за Y, виглядає широким, але якщо повернути елемент так, щоб він був спрямований угору, той самий багатокутник виглядатиме високим. «Зсув напрямку» повертає багатокутник так, що розтягування залишається незмінним: показаний багатокутник і далі широкий, лише повернутий. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.polygon.option1.description
    'Розтягування за X', // tab3.polygon.polygon.option2.name
    'Використовуйте поле або повзунок, щоб розтягнути чи стиснути багатокутник уздовж осі X (осі, що збігається з напрямком елемента). Більші значення роблять багатокутник довшим уздовж цієї осі, менші — коротшим. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.polygon.option2.description
    'Розтягування за Y', // tab3.polygon.polygon.option3.name
    'Використовуйте поле або повзунок, щоб розтягнути чи стиснути багатокутник уздовж осі Y (перпендикулярної до осі X). Більші значення роблять багатокутник довшим уздовж цієї осі, менші — коротшим. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.polygon.option3.description
    'Кількість вершин', // tab3.polygon.polygon.option4.name
    'Використовуйте поле або повзунок, щоб задати кількість точок (вершин) багатокутника. Мала кількість дає форму з гострими кутами (наприклад, 3 вершини утворюють трикутник), а велика робить багатокутник схожим на коло.', // tab3.polygon.polygon.option4.description
    'Форма багатокутника', // tab3.element.polygon.shape.title
    'Інтерфейс властивостей елемента-багатокутника: Форма багатокутника', // tab3.element.polygon.shape.alt
    'Налаштування, що надають поверхні багатокутника хвилястості. Уявіть багатокутник із такою кількістю вершин, що він виглядає як коло. Кожну вершину можна зсунути від центра або до центра на різну відстань, і тоді край перетворюється на хвилясту лінію. Параметри нижче керують цими хвилями. Щоб хвилі були плавними, спочатку задайте велику кількість вершин на сторінці «Багатокутник».', // tab3.element.polygon.shape.text
    'Період хвилі', // tab3.polygon.shape.option1.name
    'Використовуйте поле або повзунок, щоб задати довжину хвилі. Значення вже перераховано так, що воно відповідає кількості хвиль, видимих навколо багатокутника: 1 — одна хвиля, 2 — дві хвилі, 15 — п’ятнадцять хвиль тощо. Можна вводити десяткові значення, але дробова кількість хвиль не вкладається рівно по колу, тому в одній точці поверхні з’явиться різкий уступ. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.shape.option1.description
    'Амплітуда хвилі', // tab3.polygon.shape.option2.name
    'Використовуйте поле або повзунок, щоб задати висоту хвиль, тобто наскільки вершини зсуваються від центра або до нього. Що більша амплітуда, то вищі та глибші хвилі; що менша — то рівніша поверхня. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.shape.option2.description
    'Зсув хвилі', // tab3.polygon.shape.option3.name
    'Використовуйте поле або повзунок, щоб посунути хвилі вздовж поверхні багатокутника. Гребені й западини переміщуються навколо багатокутника, а кількість і висота хвиль не змінюються. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.shape.option3.description
    'Стиль багатокутника', // tab3.element.polygon.style.title
    'Інтерфейс властивостей елемента-багатокутника: Стиль багатокутника', // tab3.element.polygon.style.alt
    'Налаштування вигляду елементів-багатокутників.', // tab3.element.polygon.style.text
    'Колір заливки', // tab3.polygon.style.option1.name
    'Введіть HEX-код у поле кольору або натисніть кнопку, щоб відкрити палітру й вибрати колір заливки багатокутника.', // tab3.polygon.style.option1.description
    'Прозорість заливки', // tab3.polygon.style.option2.name
    'Використовуйте поле прозорості або повзунок, щоб задати прозорість заливки. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.style.option2.description
    'Колір контуру', // tab3.polygon.style.option3.name
    'Введіть HEX-код у поле кольору або натисніть кнопку, щоб відкрити палітру й вибрати колір контуру багатокутника.', // tab3.polygon.style.option3.description
    'Прозорість контуру', // tab3.polygon.style.option4.name
    'Використовуйте поле прозорості або повзунок, щоб задати прозорість контуру. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.style.option4.description
    'Товщина контуру', // tab3.polygon.style.option5.name
    'Використовуйте поле товщини контуру або повзунок, щоб задати товщину контуру багатокутника. Поле приймає значення за межами мінімального та максимального значень повзунка.', // tab3.polygon.style.option5.description
    'Назад до редактора', // footerlinktext
  ],

  de: [
    'ASADE: Einfacher, barrierearmer Editor für Luftdokumente', // site.title
    'Registerkarten und Inhalte durchsuchen…', // search.placeholder
    'Keine Treffer gefunden', // search.empty
    'Kamerabewegung', // tab0.title
    'Touchscreen (Smartphone, Tablet)', // tab0.option1.name
    'Wischen Sie mit einem Finger, um die Kamera horizontal und vertikal zu bewegen. Ziehen Sie zwei Finger auseinander oder zusammen, um hinein- oder herauszuzoomen.', // tab0.option1.description
    'Maus und Tastatur (PC)', // tab0.option2.name
    'Ziehen Sie mit der Maus oder verwenden Sie die Pfeiltasten, um die Kamera horizontal und vertikal zu bewegen. Verwenden Sie das Mausrad oder das vertikale Scrollen auf dem Touchpad eines Laptops, um hinein- oder herauszuzoomen.', // tab0.option2.description
    'Bildschirmoberfläche', // tab1.title
    'Bildschirmoberfläche', // tab1.alt
    'Mit den Bildschirm-Steuerelementen können Sie Elemente hinzufügen, Speicherpunkte erstellen und zwischen ihnen wechseln.', // tab1.text
    'Element hinzufügen', // tab1.option1.name
    'Wählen Sie über das Dropdown-Menü neben der Schaltfläche „+“ den Typ des hinzuzufügenden Elements aus. Drücken Sie anschließend auf „+“. Ein neues Element mit Standardeinstellungen wird an der Kameraposition eingefügt.', // tab1.option1.description
    'Speicherpunkte verwenden', // tab1.option2.name
    'Drücken Sie „▽“, um einen Speicherpunkt zu erstellen. Er speichert das Dokument in seinem aktuellen Zustand. Verwenden Sie die Pfeile, um zwischen Speicherpunkten zu wechseln. Beim Wechsel wird das aktuelle Dokument vollständig durch die gespeicherte Version ersetzt. Speicherpunkte sind chronologisch geordnet. Wenn Sie nach der Auswahl eines früheren Speicherpunkts einen neuen erstellen, werden alle späteren Speicherpunkte gelöscht. Die Nummer des ausgewählten Speicherpunkts wird zwischen den Pfeilen angezeigt.', // tab1.option2.description
    'Objektlisten-Oberfläche', // tab2.title
    'Objektlisten-Oberfläche', // tab2.alt
    'Diese Liste enthält alle Elemente im aktuellen Dokumentzustand, sortiert nach ihrer Zeichenreihenfolge (Ebene).', // tab2.text
    'Element auswählen und Auswahl aufheben', // tab2.option1.name
    'Klicken Sie auf den Namen eines Elements, um es auszuwählen. Daraufhin wird dessen Eigenschaftenbereich angezeigt. Klicken Sie erneut auf den Namen eines bereits ausgewählten Elements, um die Auswahl aufzuheben und die globalen Dokumenteigenschaften anzuzeigen.', // tab2.option1.description
    'Elementreihenfolge ändern', // tab2.option2.name
    'Wenn ein Element ausgewählt ist, erscheinen rechts neben seinem Namen zwei Pfeile. Drücken Sie darauf, um das ausgewählte Element in der Zeichenreihenfolge um eine Position nach oben oder unten zu verschieben.', // tab2.option2.description
    'Liste anpassen', // tab2.option3.name
    'Ziehen Sie den rechten oder unteren Rand beziehungsweise eine Ecke des Listenfelds, um seine Größe zu ändern. Drücken Sie das Dreieck rechts neben dem Listenfeld, um es ein- oder auszuklappen.', // tab2.option3.description
    'Eigenschaften-Oberfläche', // tab3.title
    'Dieser Bereich zeigt die globalen Dokumenteinstellungen oder, wenn ein Element ausgewählt ist, dessen Eigenschaften.', // tab3.text
    'Bereich anpassen', // tab3.option1.name
    'Ziehen Sie den linken Rand des Bereichs, um seine Größe zu ändern. Drücken Sie das Dreieck links neben dem Bereich, um ihn ein- oder auszuklappen.', // tab3.option1.description
    'Globale Dokumenteigenschaften', // tab3.global.title
    'Dieser Bereich enthält die dokumentweiten Einstellungen und einen Link zu dieser Dokumentation.', // tab3.global.text
    'Oberfläche der globalen Eigenschaften', // tab3.global.alt
    'Dokument umbenennen', // tab3.global.option1.name
    'Geben Sie im Namensfeld einen beliebigen Dokumentnamen ein.', // tab3.global.option1.description
    'Dokumenthintergrund ändern', // tab3.global.option2.name
    'Geben Sie im Farbfeld einen HEX-Farbcode ein oder öffnen Sie über die Schaltfläche die Farbpalette, um die Hintergrundfarbe des Dokuments auszuwählen.', // tab3.global.option2.description
    'Dokument exportieren (speichern) und importieren (laden)', // tab3.global.option3.name
    'Kopieren Sie den Dokumentlink aus dem Feld „Aktuelles Dokument“. Sie können ihn als Website-Adresse verwenden, um das Dokument im Ansichtsmodus zu öffnen. Um das aktuelle Dokument durch ein anderes zu ersetzen, fügen Sie dessen Link in das Feld „Dokument laden“ ein und drücken Sie „Laden“. Nach dem Laden wird das Feld geleert. Ist das Feld „Dokument laden“ leer (enthält es kein einziges Zeichen), wenn Sie „Laden“ drücken, wird ein neues, leeres Dokument geladen: dasselbe, das beim ersten Start der Anwendung angezeigt wird, mit dem Namen „Mein Dokument“, einem vollständig weißen (#ffffff) Hintergrund und ohne jedes Element.', // tab3.global.option3.description
    'Elementeigenschaften', // tab3.element.title
    'Wenn ein Element ausgewählt ist, zeigt dieser Bereich seine Eigenschaften. Hier können Sie die allgemeinen Elementeigenschaften oder die für den jeweiligen Elementtyp spezifischen Eigenschaften öffnen. Außerdem können Sie das ausgewählte Element kopieren oder löschen.', // tab3.element.text
    'Oberfläche der Elementeigenschaften', // tab3.element.alt
    'Allgemeine Elementeigenschaften', // tab3.element.default.title
    'Oberfläche der allgemeinen Elementeigenschaften', // tab3.element.default.alt
    'Element umbenennen', // tab3.element.default.option1.name
    'Geben Sie im Namensfeld einen Namen ein. Der Name beeinflusst das Aussehen des Elements nicht, sondern dient nur als Kennung in den Dokumentdaten. Jedes Element muss einen eindeutigen Namen haben. Wenn Sie einen bereits verwendeten Namen eingeben, wird er automatisch durch einen ähnlichen freien Namen ersetzt (zum Beispiel wird „Text 1“ zu „Text 2“, wenn „Text 1“ bereits existiert).', // tab3.element.default.option1.description
    'Element verschieben', // tab3.element.default.option2.name
    'Verwenden Sie die getrennten X- und Y-Positionsfelder, um die Position festzulegen, oder ziehen Sie den Joystick im Bewegungsfeld. Die Empfindlichkeit des Joysticks hängt von der Kameravergrößerung ab.', // tab3.element.default.option2.description
    'Element drehen', // tab3.element.default.option3.name
    'Legen Sie die Drehung über das Richtungsfeld fest oder ziehen Sie den Drehregler. Das Richtungsfeld ist auf [-180°, 180°) begrenzt. Werte außerhalb dieses Bereichs werden in den Bereich zurückgeführt; beispielsweise wird -300° zu 60°.', // tab3.element.default.option3.description
    'Elementgröße ändern', // tab3.element.default.option4.name
    'Verwenden Sie das Größenfeld oder den Schieberegler, um die Elementgröße zu ändern. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.element.default.option4.description
    'Textelementeigenschaften', // tab3.element.text.title
    'Eigenschaften, die speziell für Textelemente gelten.', // tab3.element.text.text
    'Oberfläche der Textelementeigenschaften', // tab3.element.text.alt
    'Text', // tab3.element.text.text.title
    'Oberfläche der Textelementeigenschaften: Text', // tab3.element.text.text.alt
    'Weitere Einstellungen für Textelemente.', // tab3.element.text.text.text
    'Textfeld', // tab3.text.text.option1.name
    'Geben Sie Text beliebiger Länge in dieses Feld ein; er wird im Dokument dargestellt. Ziehen Sie die Linie unter dem Feld, um dessen Breite zu ändern. Die Textformatierung wird mit Markerpaaren gesteuert: Geben Sie einen umgekehrten Schrägstrich (\\) und anschließend das Stilzeichen ein, um den Stil einzuschalten. Wiederholen Sie dieselbe Kombination, um ihn auszuschalten. Die Formatierung gilt für den Text zwischen den beiden Markern.', // tab3.text.text.option1.description
    'Formatierungskombinationen mit umgekehrtem Schrägstrich:', // tab3.text.text.option1.style
    '\\b — Fettdruck umschalten', // tab3.text.text.option1.style1
    '\\i — Kursivschrift umschalten', // tab3.text.text.option1.style2
    '\\u — Unterstreichung umschalten', // tab3.text.text.option1.style3
    '\\m — Durchstreichung umschalten', // tab3.text.text.option1.style4
    '\\o — Überstreichung umschalten (Linie über dem Text)', // tab3.text.text.option1.style5
    '\\n — neue Zeile beginnen', // tab3.text.text.option1.style6
    '\\l — neue Zeile beginnen und den folgenden Text linksbündig ausrichten', // tab3.text.text.option1.style7
    '\\c — neue Zeile beginnen und den folgenden Text zentrieren', // tab3.text.text.option1.style8
    '\\r — neue Zeile beginnen und den folgenden Text rechtsbündig ausrichten', // tab3.text.text.option1.style9
    '\\_ — Tiefstellung umschalten', // tab3.text.text.option1.style10
    '\\^ — Hochstellung umschalten', // tab3.text.text.option1.style11
    '\\s — Spoilertext umschalten; halten Sie den verborgenen Text gedrückt, um ihn anzuzeigen', // tab3.text.text.option1.style12
    '\\d — „Betrunken“-Effekt: Jedes Zeichen erhält einen zufälligen Versatz, eine zufällige Drehung sowie eine unabhängig zufällige horizontale und vertikale Skalierung. Der Effekt ist statisch und nicht animiert.', // tab3.text.text.option1.style13
    '\\v — Text durch eine Drehung um 180° auf den Kopf stellen', // tab3.text.text.option1.style14
    '\\x — aktive Textstile zurücksetzen, außer Umkehrung und Ausrichtung', // tab3.text.text.option1.style15
    '\\\\ — einen normalen umgekehrten Schrägstrich (\\) im Text anzeigen', // tab3.text.text.option1.style16
    'Zeilenbreite', // tab3.text.text.option2.name
    'Legen Sie mit dem Feld oder Schieberegler für die Zeilenbreite fest, wie viel Text in eine Zeile passt, bevor er umgebrochen wird. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.text.text.option2.description
    'Textgröße', // tab3.text.text.option3.name
    'Ändern Sie mit dem Textgrößenfeld oder dem Schieberegler die Textgröße. Diese Einstellung und die Elementgröße wirken sich ähnlich aus und ändern den Zeilenumbruch nicht. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.text.text.option3.description
    'Zeichenabstand', // tab3.text.text.option4.name
    'Legen Sie mit dem Feld oder Schieberegler für den Zeichenabstand den zusätzlichen Abstand zwischen Zeichen fest. Der Zeichenabstand beeinflusst den Zeilenumbruch. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.text.text.option4.description
    'Zeilenabstand', // tab3.text.text.option5.name
    'Legen Sie mit dem Feld oder Schieberegler für den Zeilenabstand den Abstand zwischen umgebrochenen Zeilen fest. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.text.text.option5.description
    'Textstil', // tab3.element.text.textstyle.title
    'Darstellungseinstellungen für Textelemente.', // tab3.element.text.textstyle.text
    'Oberfläche der Textelementeigenschaften: Textstil', // tab3.element.text.textstyle.alt
    'Textfarbe', // tab3.text.textstyle.option1.name
    'Geben Sie im Farbfeld einen HEX-Code ein oder öffnen Sie über die Schaltfläche die Farbpalette, um die Textfarbe auszuwählen.', // tab3.text.textstyle.option1.description
    'Texttransparenz', // tab3.text.textstyle.option2.name
    'Legen Sie mit dem Transparenzfeld oder dem Schieberegler die Texttransparenz fest. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.text.textstyle.option2.description
    'Textüberblendung', // tab3.text.textstyle.option3.name
    'Wählen Sie im Dropdown-Menü den Überblendungsmodus für den Text aus.', // tab3.text.textstyle.option3.description
    'Polygonelementeigenschaften', // tab3.element.polygon.title
    'Oberfläche der Polygonelementeigenschaften', // tab3.element.polygon.alt
    'Eigenschaften, die speziell für Polygonelemente gelten.', // tab3.element.polygon.text
    'Polygon', // tab3.element.polygon.polygon.title
    'Oberfläche der Polygonelementeigenschaften: Polygon', // tab3.element.polygon.polygon.alt
    'Grundgeometrie des Polygons: wie es gestreckt ist und wie viele Eckpunkte es hat.', // tab3.element.polygon.polygon.text
    'Richtungsversatz', // tab3.polygon.polygon.option1.name
    'Legen Sie mit dem Feld oder Schieberegler eine zusätzliche Drehung des Polygons fest, ohne seine Streckung zu verändern. Jedes Element hat seine eigene Richtung, aber nur das Polygon besitzt getrennte Streckungen in X- und Y-Richtung, und diese folgen der Richtung des Elements. Beispiel: Ein nach rechts zeigendes Polygon mit größerer X- als Y-Streckung wirkt breit; wird das Element so gedreht, dass es nach oben zeigt, wirkt es hoch. Der Richtungsversatz dreht das Polygon so, dass die Streckung unbeeinflusst bleibt: Das Beispielpolygon ist weiterhin breit, nur gedreht. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.polygon.option1.description
    'Streckung X', // tab3.polygon.polygon.option2.name
    'Strecken oder stauchen Sie das Polygon mit dem Feld oder Schieberegler entlang seiner X-Achse (der Achse, die der Richtung des Elements folgt). Größere Werte machen das Polygon entlang dieser Achse länger, kleinere Werte kürzer. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.polygon.option2.description
    'Streckung Y', // tab3.polygon.polygon.option3.name
    'Strecken oder stauchen Sie das Polygon mit dem Feld oder Schieberegler entlang seiner Y-Achse (senkrecht zur X-Achse). Größere Werte machen das Polygon entlang dieser Achse länger, kleinere Werte kürzer. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.polygon.option3.description
    'Anzahl der Eckpunkte', // tab3.polygon.polygon.option4.name
    'Legen Sie mit dem Feld oder Schieberegler fest, wie viele Punkte (Eckpunkte) das Polygon hat. Eine kleine Zahl ergibt eine Form mit scharfen Ecken (3 Eckpunkte ergeben zum Beispiel ein Dreieck), eine große Zahl lässt das Polygon wie einen Kreis aussehen.', // tab3.polygon.polygon.option4.description
    'Polygonform', // tab3.element.polygon.shape.title
    'Oberfläche der Polygonelementeigenschaften: Polygonform', // tab3.element.polygon.shape.alt
    'Einstellungen, die der Oberfläche des Polygons Wellen verleihen. Stellen Sie sich ein Polygon mit so vielen Eckpunkten vor, dass es wie ein Kreis aussieht. Jeder Eckpunkt kann um einen anderen Betrag vom Mittelpunkt weg oder auf ihn zu verschoben werden, sodass der Rand zu einer Wellenlinie wird. Die folgenden Optionen steuern diese Wellen. Für gleichmäßige Wellen stellen Sie zuerst auf der Seite „Polygon“ eine hohe Anzahl von Eckpunkten ein.', // tab3.element.polygon.shape.text
    'Wellenperiode', // tab3.polygon.shape.option1.name
    'Legen Sie mit dem Feld oder Schieberegler die Länge der Wellen fest. Der Wert ist bereits so umgerechnet, dass er der Anzahl der sichtbaren Wellen um das Polygon entspricht: 1 zeigt eine Welle, 2 zeigen zwei Wellen, 15 zeigen fünfzehn Wellen usw. Dezimalwerte sind möglich, doch eine gebrochene Wellenzahl geht rund um das Polygon nicht auf, sodass an einer Stelle der Oberfläche eine scharfe Stufe entsteht. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.shape.option1.description
    'Wellenamplitude', // tab3.polygon.shape.option2.name
    'Legen Sie mit dem Feld oder Schieberegler die Höhe der Wellen fest, also wie weit die Eckpunkte vom Mittelpunkt weg oder auf ihn zu verschoben werden. Je größer die Amplitude, desto höher und tiefer die Wellen; je kleiner sie ist, desto glatter die Oberfläche. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.shape.option2.description
    'Wellenversatz', // tab3.polygon.shape.option3.name
    'Verschieben Sie mit dem Feld oder Schieberegler die Wellen entlang der Oberfläche des Polygons. Wellenberge und -täler wandern um das Polygon, während Anzahl und Höhe der Wellen gleich bleiben. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.shape.option3.description
    'Polygonstil', // tab3.element.polygon.style.title
    'Oberfläche der Polygonelementeigenschaften: Polygonstil', // tab3.element.polygon.style.alt
    'Darstellungseinstellungen für Polygonelemente.', // tab3.element.polygon.style.text
    'Füllfarbe', // tab3.polygon.style.option1.name
    'Geben Sie im Farbfeld einen HEX-Code ein oder öffnen Sie über die Schaltfläche die Farbpalette, um die Füllfarbe des Polygons auszuwählen.', // tab3.polygon.style.option1.description
    'Fülltransparenz', // tab3.polygon.style.option2.name
    'Legen Sie mit dem Transparenzfeld oder dem Schieberegler die Transparenz der Füllung fest. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.style.option2.description
    'Konturfarbe', // tab3.polygon.style.option3.name
    'Geben Sie im Farbfeld einen HEX-Code ein oder öffnen Sie über die Schaltfläche die Farbpalette, um die Konturfarbe des Polygons auszuwählen.', // tab3.polygon.style.option3.description
    'Konturtransparenz', // tab3.polygon.style.option4.name
    'Legen Sie mit dem Transparenzfeld oder dem Schieberegler die Transparenz der Kontur fest. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.style.option4.description
    'Konturbreite', // tab3.polygon.style.option5.name
    'Legen Sie mit dem Feld oder Schieberegler für die Konturbreite die Breite der Polygonkontur fest. Das Feld akzeptiert Werte außerhalb der Mindest- und Höchstgrenzen des Schiebereglers.', // tab3.polygon.style.option5.description
    'Zurück zum Editor', // footerlinktext
  ],

  pl: [
    'ASADE: Prosty i dostępny edytor dokumentów powietrznych', // site.title
    'Szukaj kart i treści…', // search.placeholder
    'Nie znaleziono wyników', // search.empty
    'Ruch kamery', // tab0.title
    'Ekran dotykowy (telefon, tablet)', // tab0.option1.name
    'Przesuń jednym palcem, aby poruszać kamerą w poziomie i w pionie. Rozsuń lub zsuń dwa palce, aby przybliżyć lub oddalić widok.', // tab0.option1.description
    'Mysz i klawiatura (PC)', // tab0.option2.name
    'Przeciągaj myszą lub używaj klawiszy strzałek, aby poruszać kamerą w poziomie i w pionie. Użyj kółka myszy lub pionowego przewijania na touchpadzie laptopa, aby przybliżyć lub oddalić widok.', // tab0.option2.description
    'Interfejs ekranu', // tab1.title
    'Interfejs ekranu', // tab1.alt
    'Elementy sterujące na ekranie umożliwiają dodawanie elementów, tworzenie punktów zapisu i przechodzenie między nimi.', // tab1.text
    'Dodawanie elementu', // tab1.option1.name
    'Użyj listy rozwijanej obok przycisku „+”, aby wybrać typ elementu do dodania. Następnie naciśnij przycisk „+”. Nowy element z domyślnymi ustawieniami zostanie dodany w pozycji kamery.', // tab1.option1.description
    'Korzystanie z punktów zapisu', // tab1.option2.name
    'Naciśnij przycisk „▽”, aby utworzyć punkt zapisu. Zapisuje on dokument w jego bieżącym stanie. Użyj strzałek, aby przechodzić między punktami zapisu. Przełączenie na inny punkt całkowicie zastępuje bieżący dokument zapisaną wersją. Punkty zapisu są uporządkowane chronologicznie. Jeśli utworzysz punkt zapisu po wybraniu wcześniejszego, wszystkie późniejsze punkty zostaną usunięte. Numer wybranego punktu zapisu jest wyświetlany między strzałkami.', // tab1.option2.description
    'Interfejs listy obiektów', // tab2.title
    'Interfejs listy obiektów', // tab2.alt
    'Lista zawiera wszystkie elementy w bieżącym stanie dokumentu, uporządkowane według kolejności renderowania (warstwy).', // tab2.text
    'Wybieranie i odznaczanie elementu', // tab2.option1.name
    'Kliknij nazwę elementu, aby go wybrać. Następnie pojawi się panel jego właściwości. Kliknij nazwę już wybranego elementu, aby go odznaczyć i wyświetlić globalne właściwości dokumentu.', // tab2.option1.description
    'Zmiana kolejności elementów', // tab2.option2.name
    'Po wybraniu elementu po prawej stronie jego nazwy pojawią się dwie strzałki. Naciśnij je, aby przesunąć wybrany element o jedną pozycję w górę lub w dół kolejności renderowania.', // tab2.option2.description
    'Dostosowywanie listy', // tab2.option3.name
    'Przeciągnij prawą lub dolną krawędź albo róg pola listy, aby zmienić jego rozmiar. Naciśnij trójkąt po prawej stronie pola listy, aby je zwinąć lub rozwinąć.', // tab2.option3.description
    'Interfejs właściwości', // tab3.title
    'Ten panel wyświetla globalne ustawienia dokumentu lub właściwości wybranego elementu.', // tab3.text
    'Dostosowywanie panelu', // tab3.option1.name
    'Przeciągnij lewą krawędź panelu, aby zmienić jego rozmiar. Naciśnij trójkąt po lewej stronie panelu, aby go zwinąć lub rozwinąć.', // tab3.option1.description
    'Globalne właściwości dokumentu', // tab3.global.title
    'Panel zawiera ustawienia całego dokumentu oraz link do tej dokumentacji.', // tab3.global.text
    'Interfejs właściwości globalnych', // tab3.global.alt
    'Zmiana nazwy dokumentu', // tab3.global.option1.name
    'Wpisz dowolną nazwę dokumentu w polu nazwy.', // tab3.global.option1.description
    'Zmiana koloru tła dokumentu', // tab3.global.option2.name
    'Wpisz kod koloru HEX w polu koloru lub naciśnij przycisk, aby otworzyć paletę i wybrać kolor tła dokumentu.', // tab3.global.option2.description
    'Eksportowanie (zapisywanie) i importowanie (wczytywanie) dokumentu', // tab3.global.option3.name
    'Skopiuj link dokumentu z pola „Bieżący dokument”. Możesz użyć go jako adresu strony, aby otworzyć dokument w trybie podglądu. Aby zastąpić bieżący dokument innym, wklej jego link w polu „Wczytaj dokument” i naciśnij „Wczytaj”. Po wczytaniu pole zostanie wyczyszczone. Jeśli pole „Wczytaj dokument” jest puste (nie zawiera żadnego znaku) w chwili naciśnięcia „Wczytaj”, zostanie wczytany nowy, pusty dokument: ten sam, który jest wyświetlany po pierwszym uruchomieniu aplikacji, o nazwie „Mój dokument”, z całkowicie białym (#ffffff) tłem i bez żadnych elementów.', // tab3.global.option3.description
    'Właściwości elementu', // tab3.element.title
    'Po wybraniu elementu panel wyświetla jego właściwości. Możesz tu otworzyć ogólne właściwości elementu lub właściwości specyficzne dla jego typu. Możesz także skopiować lub usunąć wybrany element.', // tab3.element.text
    'Interfejs właściwości elementu', // tab3.element.alt
    'Domyślne właściwości elementu', // tab3.element.default.title
    'Interfejs domyślnych właściwości elementu', // tab3.element.default.alt
    'Zmiana nazwy elementu', // tab3.element.default.option1.name
    'Wpisz nazwę w polu nazwy. Nazwa elementu nie wpływa na jego wygląd; służy wyłącznie jako identyfikator w danych dokumentu. Każdy element musi mieć unikalną nazwę. Jeśli wpiszesz nazwę, która jest już używana, zostanie ona automatycznie zastąpiona podobną, wolną nazwą (na przykład „Tekst 1” zmieni się na „Tekst 2”, jeśli „Tekst 1” już istnieje).', // tab3.element.default.option1.description
    'Przesuwanie elementu', // tab3.element.default.option2.name
    'Użyj osobnych pól pozycji X i Y, aby ustawić położenie elementu, albo przeciągaj joystick w kontrolce ruchu. Czułość ruchu joysticka zależy od powiększenia kamery.', // tab3.element.default.option2.description
    'Obracanie elementu', // tab3.element.default.option3.name
    'Użyj pola kierunku, aby ustawić obrót elementu, lub przeciągnij regulator obrotu. Pole kierunku jest ograniczone do zakresu [-180°, 180°). Wartości spoza tego zakresu są do niego zawijane; na przykład -300° zmienia się na 60°.', // tab3.element.default.option3.description
    'Zmiana rozmiaru elementu', // tab3.element.default.option4.name
    'Użyj pola rozmiaru lub suwaka, aby zmienić rozmiar elementu. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.element.default.option4.description
    'Właściwości elementu tekstowego', // tab3.element.text.title
    'Właściwości charakterystyczne dla elementów tekstowych.', // tab3.element.text.text
    'Interfejs właściwości elementu tekstowego', // tab3.element.text.alt
    'Tekst', // tab3.element.text.text.title
    'Interfejs właściwości elementu tekstowego: Tekst', // tab3.element.text.text.alt
    'Dodatkowe ustawienia elementu tekstowego.', // tab3.element.text.text.text
    'Pole tekstowe', // tab3.text.text.option1.name
    'Wpisz w tym polu tekst o dowolnej długości; zostanie on wyświetlony w dokumencie. Przeciągnij linię pod polem, aby zmienić jego szerokość. Formatowanie tekstu jest sterowane parami znaczników: wpisz ukośnik odwrotny (\\), a następnie symbol stylu, aby go włączyć. Powtórz tę samą kombinację, aby go wyłączyć. Formatowanie obejmuje tekst między dwoma znacznikami.', // tab3.text.text.option1.description
    'Kombinacje z ukośnikiem odwrotnym:', // tab3.text.text.option1.style
    '\\b — przełączanie pogrubienia', // tab3.text.text.option1.style1
    '\\i — przełączanie kursywy', // tab3.text.text.option1.style2
    '\\u — przełączanie podkreślenia', // tab3.text.text.option1.style3
    '\\m — przełączanie przekreślenia', // tab3.text.text.option1.style4
    '\\o — przełączanie nadkreślenia (linia nad tekstem)', // tab3.text.text.option1.style5
    '\\n — rozpoczęcie nowego wiersza', // tab3.text.text.option1.style6
    '\\l — rozpoczęcie nowego wiersza i wyrównanie kolejnego tekstu do lewej', // tab3.text.text.option1.style7
    '\\c — rozpoczęcie nowego wiersza i wyśrodkowanie kolejnego tekstu', // tab3.text.text.option1.style8
    '\\r — rozpoczęcie nowego wiersza i wyrównanie kolejnego tekstu do prawej', // tab3.text.text.option1.style9
    '\\_ — przełączanie indeksu dolnego', // tab3.text.text.option1.style10
    '\\^ — przełączanie indeksu górnego', // tab3.text.text.option1.style11
    '\\s — przełączanie tekstu typu spoiler; naciśnij i przytrzymaj ukryty tekst, aby go odsłonić', // tab3.text.text.option1.style12
    '\\d — efekt „pijanego” tekstu: każdy znak otrzymuje losowe przesunięcie, obrót oraz niezależną zmianę skali w poziomie i pionie. Efekt jest statyczny, bez animacji.', // tab3.text.text.option1.style13
    '\\v — odwrócenie tekstu do góry nogami przez obrót o 180°', // tab3.text.text.option1.style14
    '\\x — wyczyszczenie aktywnych stylów tekstu, z wyjątkiem odwrócenia i wyrównania', // tab3.text.text.option1.style15
    '\\\\ — wyświetlenie zwykłego ukośnika odwrotnego (\\) w tekście', // tab3.text.text.option1.style16
    'Szerokość wiersza', // tab3.text.text.option2.name
    'Użyj pola szerokości wiersza lub suwaka, aby ustawić ilość tekstu mieszczącą się w jednym wierszu przed zawinięciem. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.text.text.option2.description
    'Rozmiar tekstu', // tab3.text.text.option3.name
    'Użyj pola rozmiaru tekstu lub suwaka, aby zmienić rozmiar tekstu. To ustawienie i rozmiar elementu działają podobnie i nie zmieniają zawijania tekstu. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.text.text.option3.description
    'Odstęp między znakami', // tab3.text.text.option4.name
    'Użyj pola odstępu między znakami lub suwaka, aby ustawić dodatkową przestrzeń między znakami. Odstęp między znakami wpływa na zawijanie tekstu. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.text.text.option4.description
    'Odstęp między wierszami', // tab3.text.text.option5.name
    'Użyj pola odstępu między wierszami lub suwaka, aby ustawić przestrzeń między zawiniętymi wierszami. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.text.text.option5.description
    'Styl tekstu', // tab3.element.text.textstyle.title
    'Ustawienia wyglądu elementów tekstowych.', // tab3.element.text.textstyle.text
    'Interfejs właściwości elementu tekstowego: Styl tekstu', // tab3.element.text.textstyle.alt
    'Kolor tekstu', // tab3.text.textstyle.option1.name
    'Wpisz kod HEX w polu koloru lub naciśnij przycisk, aby otworzyć paletę i wybrać kolor tekstu.', // tab3.text.textstyle.option1.description
    'Przezroczystość tekstu', // tab3.text.textstyle.option2.name
    'Użyj pola przezroczystości lub suwaka, aby ustawić przezroczystość tekstu. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.text.textstyle.option2.description
    'Tryb mieszania tekstu', // tab3.text.textstyle.option3.name
    'Użyj listy rozwijanej trybów mieszania, aby wybrać tryb mieszania tekstu.', // tab3.text.textstyle.option3.description
    'Właściwości elementu wielokąta', // tab3.element.polygon.title
    'Interfejs właściwości elementu wielokąta', // tab3.element.polygon.alt
    'Właściwości charakterystyczne dla elementów wielokątnych.', // tab3.element.polygon.text
    'Wielokąt', // tab3.element.polygon.polygon.title
    'Interfejs właściwości elementu wielokąta: Wielokąt', // tab3.element.polygon.polygon.alt
    'Podstawowa geometria wielokąta: jak jest rozciągnięty i ile ma wierzchołków.', // tab3.element.polygon.polygon.text
    'Przesunięcie kierunku', // tab3.polygon.polygon.option1.name
    'Użyj pola lub suwaka, aby dodatkowo obrócić wielokąt bez zmiany jego rozciągnięcia. Każdy element ma własny kierunek, ale tylko wielokąt ma osobne rozciągnięcie w osiach X i Y, a to rozciągnięcie zależy od kierunku elementu. Na przykład wielokąt skierowany w prawo, o większym rozciągnięciu X niż Y, wygląda na szeroki, ale po obróceniu elementu tak, by był skierowany w górę, ten sam wielokąt wygląda na wysoki. Przesunięcie kierunku obraca wielokąt tak, aby rozciągnięcie pozostało nienaruszone: przykładowy wielokąt nadal jest szeroki, tylko obrócony. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.polygon.option1.description
    'Rozciągnięcie X', // tab3.polygon.polygon.option2.name
    'Użyj pola lub suwaka, aby rozciągnąć lub ścisnąć wielokąt wzdłuż osi X (osi zgodnej z kierunkiem elementu). Większe wartości wydłużają wielokąt wzdłuż tej osi, mniejsze go skracają. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.polygon.option2.description
    'Rozciągnięcie Y', // tab3.polygon.polygon.option3.name
    'Użyj pola lub suwaka, aby rozciągnąć lub ścisnąć wielokąt wzdłuż osi Y (prostopadłej do osi X). Większe wartości wydłużają wielokąt wzdłuż tej osi, mniejsze go skracają. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.polygon.option3.description
    'Liczba wierzchołków', // tab3.polygon.polygon.option4.name
    'Użyj pola lub suwaka, aby ustawić liczbę punktów (wierzchołków) wielokąta. Mała liczba daje kształt z ostrymi rogami (na przykład 3 wierzchołki tworzą trójkąt), a duża sprawia, że wielokąt wygląda jak koło.', // tab3.polygon.polygon.option4.description
    'Kształt wielokąta', // tab3.element.polygon.shape.title
    'Interfejs właściwości elementu wielokąta: Kształt wielokąta', // tab3.element.polygon.shape.alt
    'Ustawienia nadające powierzchni wielokąta falistość. Wyobraź sobie wielokąt z tak dużą liczbą wierzchołków, że wygląda jak koło. Każdy wierzchołek można przesunąć od środka lub w jego stronę o inną wartość, dzięki czemu krawędź staje się falistą linią. Poniższe opcje sterują tymi falami. Aby fale były gładkie, najpierw ustaw dużą liczbę wierzchołków na stronie „Wielokąt”.', // tab3.element.polygon.shape.text
    'Okres fali', // tab3.polygon.shape.option1.name
    'Użyj pola lub suwaka, aby ustawić długość fali. Wartość jest już przeliczona tak, że odpowiada liczbie fal widocznych wokół wielokąta: 1 oznacza jedną falę, 2 — dwie fale, 15 — piętnaście fal itd. Można wpisywać wartości dziesiętne, ale ułamkowa liczba fal nie zmieści się równo wokół wielokąta, więc w jednym miejscu jego powierzchni pojawi się ostry uskok. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.shape.option1.description
    'Amplituda fali', // tab3.polygon.shape.option2.name
    'Użyj pola lub suwaka, aby ustawić wysokość fal, czyli o ile wierzchołki są odsuwane od środka lub przysuwane do niego. Im większa amplituda, tym wyższe i głębsze fale; im mniejsza, tym gładsza powierzchnia. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.shape.option2.description
    'Przesunięcie fali', // tab3.polygon.shape.option3.name
    'Użyj pola lub suwaka, aby przesunąć fale wzdłuż powierzchni wielokąta. Grzbiety i doliny fal wędrują wokół wielokąta, a liczba i wysokość fal pozostają bez zmian. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.shape.option3.description
    'Styl wielokąta', // tab3.element.polygon.style.title
    'Interfejs właściwości elementu wielokąta: Styl wielokąta', // tab3.element.polygon.style.alt
    'Ustawienia wyglądu elementów wielokątnych.', // tab3.element.polygon.style.text
    'Kolor wypełnienia', // tab3.polygon.style.option1.name
    'Wpisz kod HEX w polu koloru lub naciśnij przycisk, aby otworzyć paletę i wybrać kolor wypełnienia wielokąta.', // tab3.polygon.style.option1.description
    'Przezroczystość wypełnienia', // tab3.polygon.style.option2.name
    'Użyj pola przezroczystości lub suwaka, aby ustawić przezroczystość wypełnienia. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.style.option2.description
    'Kolor obrysu', // tab3.polygon.style.option3.name
    'Wpisz kod HEX w polu koloru lub naciśnij przycisk, aby otworzyć paletę i wybrać kolor obrysu wielokąta.', // tab3.polygon.style.option3.description
    'Przezroczystość obrysu', // tab3.polygon.style.option4.name
    'Użyj pola przezroczystości lub suwaka, aby ustawić przezroczystość obrysu. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.style.option4.description
    'Grubość obrysu', // tab3.polygon.style.option5.name
    'Użyj pola grubości obrysu lub suwaka, aby ustawić grubość obrysu wielokąta. Pole przyjmuje wartości spoza minimalnego i maksymalnego zakresu suwaka.', // tab3.polygon.style.option5.description
    'Powrót do edytora', // footerlinktext
  ],

  es: [
    'ASADE: Editor sencillo y accesible de documentos de aire', // site.title
    'Buscar pestañas y contenido…', // search.placeholder
    'No se encontraron coincidencias', // search.empty
    'Movimiento de la cámara', // tab0.title
    'Pantalla táctil (teléfono, tableta)', // tab0.option1.name
    'Desliza un dedo para mover la cámara horizontal y verticalmente. Separa o junta dos dedos para acercar o alejar la vista.', // tab0.option1.description
    'Ratón y teclado (PC)', // tab0.option2.name
    'Arrastra con el ratón o usa las teclas de flecha para mover la cámara horizontal y verticalmente. Usa la rueda del ratón o el desplazamiento vertical del panel táctil del portátil para acercar o alejar la vista.', // tab0.option2.description
    'Interfaz de pantalla', // tab1.title
    'Interfaz de pantalla', // tab1.alt
    'Los controles de pantalla permiten añadir elementos, crear puntos de guardado y desplazarse entre ellos.', // tab1.text
    'Añadir un elemento', // tab1.option1.name
    'Usa el menú desplegable junto al botón «+» para elegir el tipo de elemento que quieres añadir. Después, pulsa el botón «+». Se añadirá un elemento nuevo con los ajustes predeterminados en la posición de la cámara.', // tab1.option1.description
    'Usar puntos de guardado', // tab1.option2.name
    'Pulsa el botón «▽» para crear un punto de guardado. Este guarda el documento en su estado actual. Usa las flechas para cambiar de un punto de guardado a otro. Al cambiar de punto, el documento actual se sustituye por completo por la versión guardada. Los puntos de guardado se ordenan cronológicamente. Si creas un punto de guardado después de seleccionar uno anterior, se eliminarán todos los puntos posteriores. El número del punto seleccionado aparece entre las flechas.', // tab1.option2.description
    'Interfaz de la lista de objetos', // tab2.title
    'Interfaz de la lista de objetos', // tab2.alt
    'Esta lista contiene todos los elementos del estado actual del documento, ordenados según su orden de renderizado (capa).', // tab2.text
    'Seleccionar y deseleccionar un elemento', // tab2.option1.name
    'Haz clic en el nombre de un elemento para seleccionarlo. A continuación, aparecerá su panel de propiedades. Haz clic en el nombre de un elemento ya seleccionado para deseleccionarlo y mostrar las propiedades globales del documento.', // tab2.option1.description
    'Cambiar el orden de los elementos', // tab2.option2.name
    'Cuando hay un elemento seleccionado, aparecen dos flechas a la derecha de su nombre. Púlsalas para mover el elemento seleccionado una posición hacia arriba o hacia abajo en el orden de renderizado.', // tab2.option2.description
    'Personalizar la lista', // tab2.option3.name
    'Arrastra el borde derecho, el borde inferior o una esquina del cuadro de la lista para cambiar su tamaño. Pulsa el triángulo situado a la derecha del cuadro para contraerlo o expandirlo.', // tab2.option3.description
    'Interfaz de propiedades', // tab3.title
    'Este panel muestra los ajustes globales del documento o, si hay un elemento seleccionado, las propiedades de ese elemento.', // tab3.text
    'Personalizar el panel', // tab3.option1.name
    'Arrastra el borde izquierdo del panel para cambiar su tamaño. Pulsa el triángulo situado a la izquierda del panel para contraerlo o expandirlo.', // tab3.option1.description
    'Propiedades globales del documento', // tab3.global.title
    'Este panel contiene los ajustes generales del documento y un enlace a esta documentación.', // tab3.global.text
    'Interfaz de propiedades globales', // tab3.global.alt
    'Cambiar el nombre del documento', // tab3.global.option1.name
    'Escribe cualquier nombre para el documento en el campo de nombre.', // tab3.global.option1.description
    'Cambiar el color de fondo del documento', // tab3.global.option2.name
    'Introduce un código de color HEX en el campo de color o pulsa el botón para abrir la paleta y elegir el color de fondo del documento.', // tab3.global.option2.description
    'Exportar (guardar) e importar (cargar) un documento', // tab3.global.option3.name
    'Copia el enlace del documento del campo «Documento actual». Puedes usarlo como dirección del sitio para abrir el documento en modo de visualización. Para sustituir el documento actual por otro, pega su enlace en el campo «Cargar documento» y pulsa «Cargar». El campo se vacía después de la carga. Si el campo «Cargar documento» está vacío (no contiene ningún carácter) cuando pulsas «Cargar», se carga un documento nuevo y vacío: el mismo que se muestra al iniciar la aplicación, con el nombre «Mi documento», un fondo completamente blanco (#ffffff) y ningún elemento.', // tab3.global.option3.description
    'Propiedades del elemento', // tab3.element.title
    'Cuando se selecciona un elemento, este panel muestra sus propiedades. Desde aquí puedes abrir las propiedades generales del elemento o las específicas de su tipo. También puedes copiar o eliminar el elemento seleccionado.', // tab3.element.text
    'Interfaz de propiedades del elemento', // tab3.element.alt
    'Propiedades predeterminadas del elemento', // tab3.element.default.title
    'Interfaz de propiedades predeterminadas del elemento', // tab3.element.default.alt
    'Cambiar el nombre de un elemento', // tab3.element.default.option1.name
    'Escribe un nombre en el campo correspondiente. El nombre no afecta al aspecto del elemento; solo se utiliza como identificador en los datos del documento. Cada elemento debe tener un nombre único. Si introduces un nombre que ya está en uso, se sustituirá automáticamente por otro similar disponible (por ejemplo, «Texto 1» pasará a ser «Texto 2» si «Texto 1» ya existe).', // tab3.element.default.option1.description
    'Mover un elemento', // tab3.element.default.option2.name
    'Usa los campos de posición X e Y por separado para establecer la posición del elemento, o arrastra el joystick del control de movimiento. La sensibilidad del joystick depende del nivel de zoom de la cámara.', // tab3.element.default.option2.description
    'Girar un elemento', // tab3.element.default.option3.name
    'Usa el campo de dirección para establecer la rotación del elemento o arrastra el control de rotación. El campo de dirección está limitado al intervalo [-180°, 180°). Los valores fuera de este intervalo se ajustan automáticamente; por ejemplo, -300° se convierte en 60°.', // tab3.element.default.option3.description
    'Cambiar el tamaño de un elemento', // tab3.element.default.option4.name
    'Usa el campo de tamaño o el control deslizante para cambiar el tamaño del elemento. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.element.default.option4.description
    'Propiedades del elemento de texto', // tab3.element.text.title
    'Propiedades específicas de los elementos de texto.', // tab3.element.text.text
    'Interfaz de propiedades del elemento de texto', // tab3.element.text.alt
    'Texto', // tab3.element.text.text.title
    'Interfaz de propiedades del elemento de texto: Texto', // tab3.element.text.text.alt
    'Ajustes adicionales del elemento de texto.', // tab3.element.text.text.text
    'Campo de texto', // tab3.text.text.option1.name
    'Introduce texto de cualquier longitud en este campo; se mostrará en el documento. Arrastra la línea situada debajo del campo para cambiar su anchura. El formato del texto se controla mediante marcadores por parejas: escribe una barra inversa (\\) seguida del símbolo de estilo para activarlo. Repite la misma combinación para desactivarlo. El formato se aplica al texto situado entre los dos marcadores.', // tab3.text.text.option1.description
    'Combinaciones de barra inversa:', // tab3.text.text.option1.style
    '\\b — activar o desactivar la negrita', // tab3.text.text.option1.style1
    '\\i — activar o desactivar la cursiva', // tab3.text.text.option1.style2
    '\\u — activar o desactivar el subrayado', // tab3.text.text.option1.style3
    '\\m — activar o desactivar el tachado', // tab3.text.text.option1.style4
    '\\o — activar o desactivar la línea sobre el texto', // tab3.text.text.option1.style5
    '\\n — comenzar una nueva línea', // tab3.text.text.option1.style6
    '\\l — comenzar una nueva línea y alinear a la izquierda el texto siguiente', // tab3.text.text.option1.style7
    '\\c — comenzar una nueva línea y centrar el texto siguiente', // tab3.text.text.option1.style8
    '\\r — comenzar una nueva línea y alinear a la derecha el texto siguiente', // tab3.text.text.option1.style9
    '\\_ — activar o desactivar el subíndice', // tab3.text.text.option1.style10
    '\\^ — activar o desactivar el superíndice', // tab3.text.text.option1.style11
    '\\s — activar o desactivar el texto oculto («spoiler»); mantén pulsado el texto oculto para mostrarlo', // tab3.text.text.option1.style12
    '\\d — efecto de texto «borracho»: cada carácter recibe un desplazamiento y una rotación aleatorios, además de una escala horizontal y vertical independiente y aleatoria. El efecto es estático, no está animado.', // tab3.text.text.option1.style13
    '\\v — poner el texto boca abajo girándolo 180°', // tab3.text.text.option1.style14
    '\\x — borrar los estilos de texto activos, excepto el texto volteado y la alineación', // tab3.text.text.option1.style15
    '\\\\ — mostrar una barra inversa literal (\\) en el texto', // tab3.text.text.option1.style16
    'Anchura de línea', // tab3.text.text.option2.name
    'Usa el campo de anchura de línea o el control deslizante para establecer cuánto texto cabe en una línea antes de ajustarse a la siguiente. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.text.text.option2.description
    'Tamaño del texto', // tab3.text.text.option3.name
    'Usa el campo de tamaño del texto o el control deslizante para cambiar el tamaño del texto. Este ajuste y el tamaño del elemento tienen un efecto parecido y no modifican el ajuste de línea. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.text.text.option3.description
    'Espaciado entre caracteres', // tab3.text.text.option4.name
    'Usa el campo de espaciado entre caracteres o el control deslizante para establecer el espacio adicional entre caracteres. Este espaciado afecta al ajuste de línea. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.text.text.option4.description
    'Espaciado entre líneas', // tab3.text.text.option5.name
    'Usa el campo de espaciado entre líneas o el control deslizante para establecer el espacio entre las líneas ajustadas. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.text.text.option5.description
    'Estilo del texto', // tab3.element.text.textstyle.title
    'Ajustes de apariencia de los elementos de texto.', // tab3.element.text.textstyle.text
    'Interfaz de propiedades del elemento de texto: Estilo del texto', // tab3.element.text.textstyle.alt
    'Color del texto', // tab3.text.textstyle.option1.name
    'Introduce un código HEX en el campo de color o pulsa el botón para abrir la paleta y elegir el color del texto.', // tab3.text.textstyle.option1.description
    'Transparencia del texto', // tab3.text.textstyle.option2.name
    'Usa el campo de transparencia o el control deslizante para establecer la transparencia del texto. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.text.textstyle.option2.description
    'Mezcla del texto', // tab3.text.textstyle.option3.name
    'Usa el menú desplegable de modos de mezcla para elegir el modo de mezcla del texto.', // tab3.text.textstyle.option3.description
    'Propiedades del elemento polígono', // tab3.element.polygon.title
    'Interfaz de propiedades del elemento polígono', // tab3.element.polygon.alt
    'Propiedades específicas de los elementos polígono.', // tab3.element.polygon.text
    'Polígono', // tab3.element.polygon.polygon.title
    'Interfaz de propiedades del elemento polígono: Polígono', // tab3.element.polygon.polygon.alt
    'Geometría básica del polígono: cómo está estirado y cuántos vértices tiene.', // tab3.element.polygon.polygon.text
    'Desplazamiento de dirección', // tab3.polygon.polygon.option1.name
    'Usa el campo o el control deslizante para girar el polígono un ángulo adicional sin afectar a su estiramiento. Cada elemento tiene su propia dirección, pero solo el polígono tiene un estiramiento independiente en X e Y, y ese estiramiento sigue la dirección del elemento. Por ejemplo, un polígono que apunta hacia la derecha y tiene un estiramiento X mayor que el Y se ve ancho, pero si el elemento se gira para apuntar hacia arriba, se ve alto. El desplazamiento de dirección gira el polígono de modo que el estiramiento no se vea afectado: el polígono de ejemplo sigue siendo ancho, solo que girado. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.polygon.option1.description
    'Estiramiento X', // tab3.polygon.polygon.option2.name
    'Usa el campo o el control deslizante para estirar o comprimir el polígono a lo largo del eje X (el eje que sigue la dirección del elemento). Los valores mayores alargan el polígono en este eje y los menores lo acortan. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.polygon.option2.description
    'Estiramiento Y', // tab3.polygon.polygon.option3.name
    'Usa el campo o el control deslizante para estirar o comprimir el polígono a lo largo del eje Y (perpendicular al eje X). Los valores mayores alargan el polígono en este eje y los menores lo acortan. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.polygon.option3.description
    'Cantidad de vértices', // tab3.polygon.polygon.option4.name
    'Usa el campo o el control deslizante para establecer el número de puntos (vértices) del polígono. Un número bajo da una forma con esquinas marcadas (por ejemplo, 3 vértices forman un triángulo); un número alto hace que el polígono parezca un círculo.', // tab3.polygon.polygon.option4.description
    'Forma del polígono', // tab3.element.polygon.shape.title
    'Interfaz de propiedades del elemento polígono: Forma del polígono', // tab3.element.polygon.shape.alt
    'Ajustes que dan ondas a la superficie del polígono. Imagina un polígono con tantos vértices que parece un círculo. Cada vértice puede alejarse del centro o acercarse a él en una cantidad distinta, de modo que el borde se convierte en una línea ondulada. Las opciones siguientes controlan esas ondas. Para que las ondas sean suaves, primero establece una cantidad alta de vértices en la página «Polígono».', // tab3.element.polygon.shape.text
    'Periodo de onda', // tab3.polygon.shape.option1.name
    'Usa el campo o el control deslizante para establecer la longitud de las ondas. El valor ya está convertido para que corresponda al número de ondas visibles alrededor del polígono: 1 muestra una onda, 2 muestran dos ondas, 15 muestran quince ondas, etc. Se admiten decimales, pero un número fraccionario de ondas no encaja de forma uniforme alrededor del polígono, por lo que aparecerá un escalón brusco en un punto de la superficie. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.shape.option1.description
    'Amplitud de onda', // tab3.polygon.shape.option2.name
    'Usa el campo o el control deslizante para establecer la altura de las ondas, es decir, cuánto se alejan los vértices del centro o se acercan a él. Cuanto mayor es la amplitud, más altas y profundas son las ondas; cuanto menor, más lisa es la superficie. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.shape.option2.description
    'Desplazamiento de onda', // tab3.polygon.shape.option3.name
    'Usa el campo o el control deslizante para desplazar las ondas a lo largo de la superficie del polígono. Las crestas y los valles se mueven alrededor del polígono, pero el número y la altura de las ondas no cambian. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.shape.option3.description
    'Estilo del polígono', // tab3.element.polygon.style.title
    'Interfaz de propiedades del elemento polígono: Estilo del polígono', // tab3.element.polygon.style.alt
    'Ajustes de apariencia de los elementos polígono.', // tab3.element.polygon.style.text
    'Color de relleno', // tab3.polygon.style.option1.name
    'Introduce un código HEX en el campo de color o pulsa el botón para abrir la paleta y elegir el color de relleno del polígono.', // tab3.polygon.style.option1.description
    'Transparencia del relleno', // tab3.polygon.style.option2.name
    'Usa el campo de transparencia o el control deslizante para establecer la transparencia del relleno. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.style.option2.description
    'Color del contorno', // tab3.polygon.style.option3.name
    'Introduce un código HEX en el campo de color o pulsa el botón para abrir la paleta y elegir el color del contorno del polígono.', // tab3.polygon.style.option3.description
    'Transparencia del contorno', // tab3.polygon.style.option4.name
    'Usa el campo de transparencia o el control deslizante para establecer la transparencia del contorno. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.style.option4.description
    'Grosor del contorno', // tab3.polygon.style.option5.name
    'Usa el campo de grosor del contorno o el control deslizante para establecer el grosor del contorno del polígono. El campo acepta valores fuera de los límites mínimo y máximo del control deslizante.', // tab3.polygon.style.option5.description
    'Volver al editor', // footerlinktext
  ],

  fr: [
    'ASADE : Éditeur simple et accessible de documents aériens', // site.title
    'Rechercher dans les onglets et le contenu…', // search.placeholder
    'Aucun résultat trouvé', // search.empty
    'Déplacement de la caméra', // tab0.title
    'Écran tactile (téléphone, tablette)', // tab0.option1.name
    'Faites glisser un doigt pour déplacer la caméra horizontalement et verticalement. Écartez ou rapprochez deux doigts pour zoomer ou dézoomer.', // tab0.option1.description
    'Souris et clavier (PC)', // tab0.option2.name
    'Faites glisser avec la souris ou utilisez les touches fléchées pour déplacer la caméra horizontalement et verticalement. Utilisez la molette de la souris ou le défilement vertical du pavé tactile d’un ordinateur portable pour zoomer ou dézoomer.', // tab0.option2.description
    'Interface de l’écran', // tab1.title
    'Interface de l’écran', // tab1.alt
    'Les commandes à l’écran permettent d’ajouter des éléments, de créer des points de sauvegarde et de passer de l’un à l’autre.', // tab1.text
    'Ajouter un élément', // tab1.option1.name
    'Utilisez la liste déroulante à côté du bouton « + » pour choisir le type d’élément à ajouter. Appuyez ensuite sur le bouton « + ». Un nouvel élément avec les paramètres par défaut sera ajouté à la position de la caméra.', // tab1.option1.description
    'Utiliser les points de sauvegarde', // tab1.option2.name
    'Appuyez sur le bouton « ▽ » pour créer un point de sauvegarde. Il enregistre le document dans son état actuel. Utilisez les flèches pour passer d’un point de sauvegarde à l’autre. Le passage à un autre point remplace entièrement le document actuel par la version enregistrée. Les points de sauvegarde sont classés par ordre chronologique. Si vous créez un point après en avoir sélectionné un plus ancien, tous les points suivants sont supprimés. Le numéro du point sélectionné est affiché entre les flèches.', // tab1.option2.description
    'Interface de la liste des objets', // tab2.title
    'Interface de la liste des objets', // tab2.alt
    'Cette liste contient tous les éléments de l’état actuel du document, classés selon leur ordre de rendu (calque).', // tab2.text
    'Sélectionner et désélectionner un élément', // tab2.option1.name
    'Cliquez sur le nom d’un élément pour le sélectionner. Son panneau de propriétés apparaît alors. Cliquez sur le nom d’un élément déjà sélectionné pour le désélectionner et afficher les propriétés globales du document.', // tab2.option1.description
    'Modifier l’ordre des éléments', // tab2.option2.name
    'Lorsqu’un élément est sélectionné, deux flèches apparaissent à droite de son nom. Appuyez dessus pour déplacer l’élément sélectionné d’une position vers le haut ou vers le bas dans l’ordre de rendu.', // tab2.option2.description
    'Personnaliser la liste', // tab2.option3.name
    'Faites glisser le bord droit, le bord inférieur ou un coin du cadre de la liste pour en modifier la taille. Appuyez sur le triangle à droite du cadre pour le réduire ou le développer.', // tab2.option3.description
    'Interface des propriétés', // tab3.title
    'Ce panneau affiche les paramètres globaux du document ou, lorsqu’un élément est sélectionné, les propriétés de cet élément.', // tab3.text
    'Personnaliser le panneau', // tab3.option1.name
    'Faites glisser le bord gauche du panneau pour en modifier la taille. Appuyez sur le triangle à gauche du panneau pour le réduire ou le développer.', // tab3.option1.description
    'Propriétés globales du document', // tab3.global.title
    'Ce panneau contient les paramètres généraux du document ainsi qu’un lien vers cette documentation.', // tab3.global.text
    'Interface des propriétés globales', // tab3.global.alt
    'Renommer le document', // tab3.global.option1.name
    'Saisissez le nom souhaité dans le champ de nom du document.', // tab3.global.option1.description
    'Modifier la couleur d’arrière-plan du document', // tab3.global.option2.name
    'Saisissez un code couleur HEX dans le champ de couleur ou appuyez sur le bouton pour ouvrir la palette et choisir la couleur d’arrière-plan du document.', // tab3.global.option2.description
    'Exporter (enregistrer) et importer (charger) un document', // tab3.global.option3.name
    'Copiez le lien du document depuis le champ « Document actuel ». Vous pouvez l’utiliser comme adresse du site pour ouvrir le document en mode consultation. Pour remplacer le document actuel par un autre, collez son lien dans le champ « Charger un document » et appuyez sur « Charger ». Le champ est vidé après le chargement. Si le champ « Charger un document » est vide (ne contient aucun caractère) lorsque vous appuyez sur « Charger », un nouveau document vide est chargé : celui qui s’affiche au premier lancement de l’application, nommé « Mon document », avec un arrière-plan entièrement blanc (#ffffff) et aucun élément.', // tab3.global.option3.description
    'Propriétés de l’élément', // tab3.element.title
    'Lorsqu’un élément est sélectionné, ce panneau affiche ses propriétés. Vous pouvez y ouvrir les propriétés générales de l’élément ou celles qui sont propres à son type. Vous pouvez également copier ou supprimer l’élément sélectionné.', // tab3.element.text
    'Interface des propriétés de l’élément', // tab3.element.alt
    'Propriétés par défaut de l’élément', // tab3.element.default.title
    'Interface des propriétés par défaut de l’élément', // tab3.element.default.alt
    'Renommer un élément', // tab3.element.default.option1.name
    'Saisissez un nom dans le champ correspondant. Le nom n’a aucun effet sur l’apparence de l’élément ; il sert uniquement d’identifiant dans les données du document. Chaque élément doit avoir un nom unique. Si vous saisissez un nom déjà utilisé, il est automatiquement remplacé par un nom similaire disponible (par exemple, « Texte 1 » devient « Texte 2 » si « Texte 1 » existe déjà).', // tab3.element.default.option1.description
    'Déplacer un élément', // tab3.element.default.option2.name
    'Utilisez les champs de position X et Y séparés pour définir la position de l’élément, ou faites glisser le joystick du contrôle de déplacement. La sensibilité du joystick dépend du niveau de zoom de la caméra.', // tab3.element.default.option2.description
    'Faire pivoter un élément', // tab3.element.default.option3.name
    'Utilisez le champ de direction pour définir la rotation de l’élément ou faites glisser le contrôleur de rotation. Le champ de direction est limité à l’intervalle [-180°, 180°). Les valeurs en dehors de cet intervalle y sont automatiquement ramenées ; par exemple, -300° devient 60°.', // tab3.element.default.option3.description
    'Redimensionner un élément', // tab3.element.default.option4.name
    'Utilisez le champ de taille ou le curseur pour redimensionner l’élément. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.element.default.option4.description
    'Propriétés de l’élément texte', // tab3.element.text.title
    'Propriétés propres aux éléments texte.', // tab3.element.text.text
    'Interface des propriétés de l’élément texte', // tab3.element.text.alt
    'Texte', // tab3.element.text.text.title
    'Interface des propriétés de l’élément texte : Texte', // tab3.element.text.text.alt
    'Paramètres supplémentaires de l’élément texte.', // tab3.element.text.text.text
    'Champ de texte', // tab3.text.text.option1.name
    'Saisissez un texte de longueur quelconque dans ce champ ; il sera affiché dans le document. Faites glisser la ligne sous le champ pour modifier sa largeur. Le formatage du texte est contrôlé par des marqueurs par paires : saisissez une barre oblique inverse (\\), puis le symbole du style pour l’activer. Répétez la même combinaison pour le désactiver. Le formatage s’applique au texte situé entre les deux marqueurs.', // tab3.text.text.option1.description
    'Combinaisons avec la barre oblique inverse :', // tab3.text.text.option1.style
    '\\b — activer ou désactiver le gras', // tab3.text.text.option1.style1
    '\\i — activer ou désactiver l’italique', // tab3.text.text.option1.style2
    '\\u — activer ou désactiver le soulignement', // tab3.text.text.option1.style3
    '\\m — activer ou désactiver le barré', // tab3.text.text.option1.style4
    '\\o — activer ou désactiver le surlignement par une ligne au-dessus du texte', // tab3.text.text.option1.style5
    '\\n — commencer une nouvelle ligne', // tab3.text.text.option1.style6
    '\\l — commencer une nouvelle ligne et aligner le texte suivant à gauche', // tab3.text.text.option1.style7
    '\\c — commencer une nouvelle ligne et centrer le texte suivant', // tab3.text.text.option1.style8
    '\\r — commencer une nouvelle ligne et aligner le texte suivant à droite', // tab3.text.text.option1.style9
    '\\_ — activer ou désactiver l’indice inférieur', // tab3.text.text.option1.style10
    '\\^ — activer ou désactiver l’exposant', // tab3.text.text.option1.style11
    '\\s — activer ou désactiver le texte masqué (« spoiler ») ; maintenez le doigt ou le bouton enfoncé sur le texte masqué pour le révéler', // tab3.text.text.option1.style12
    '\\d — effet de texte « ivre » : chaque caractère reçoit un décalage et une rotation aléatoires, ainsi qu’une mise à l’échelle horizontale et verticale indépendante et aléatoire. L’effet est statique, sans animation.', // tab3.text.text.option1.style13
    '\\v — retourner le texte à l’envers en le faisant pivoter de 180°', // tab3.text.text.option1.style14
    '\\x — effacer les styles de texte actifs, sauf le retournement et l’alignement', // tab3.text.text.option1.style15
    '\\\\ — afficher une barre oblique inverse littérale (\\) dans le texte', // tab3.text.text.option1.style16
    'Largeur de ligne', // tab3.text.text.option2.name
    'Utilisez le champ de largeur de ligne ou le curseur pour définir la quantité de texte pouvant tenir sur une ligne avant le retour à la ligne. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.text.text.option2.description
    'Taille du texte', // tab3.text.text.option3.name
    'Utilisez le champ de taille du texte ou le curseur pour modifier la taille du texte. Ce paramètre et la taille de l’élément ont un effet similaire et ne modifient pas le retour à la ligne. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.text.text.option3.description
    'Espacement des caractères', // tab3.text.text.option4.name
    'Utilisez le champ d’espacement des caractères ou le curseur pour définir l’espace supplémentaire entre les caractères. Cet espacement influe sur le retour à la ligne. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.text.text.option4.description
    'Espacement des lignes', // tab3.text.text.option5.name
    'Utilisez le champ d’espacement des lignes ou le curseur pour définir l’espace entre les lignes après retour à la ligne. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.text.text.option5.description
    'Style du texte', // tab3.element.text.textstyle.title
    'Paramètres d’apparence des éléments texte.', // tab3.element.text.textstyle.text
    'Interface des propriétés de l’élément texte : Style du texte', // tab3.element.text.textstyle.alt
    'Couleur du texte', // tab3.text.textstyle.option1.name
    'Saisissez un code HEX dans le champ de couleur ou appuyez sur le bouton pour ouvrir la palette et choisir la couleur du texte.', // tab3.text.textstyle.option1.description
    'Transparence du texte', // tab3.text.textstyle.option2.name
    'Utilisez le champ de transparence ou le curseur pour définir la transparence du texte. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.text.textstyle.option2.description
    'Fusion du texte', // tab3.text.textstyle.option3.name
    'Utilisez la liste déroulante des modes de fusion pour choisir le mode de fusion du texte.', // tab3.text.textstyle.option3.description
    'Propriétés de l’élément polygone', // tab3.element.polygon.title
    'Interface des propriétés de l’élément polygone', // tab3.element.polygon.alt
    'Propriétés propres aux éléments polygone.', // tab3.element.polygon.text
    'Polygone', // tab3.element.polygon.polygon.title
    'Interface des propriétés de l’élément polygone : Polygone', // tab3.element.polygon.polygon.alt
    'Géométrie de base du polygone : son étirement et son nombre de sommets.', // tab3.element.polygon.polygon.text
    'Décalage de direction', // tab3.polygon.polygon.option1.name
    'Utilisez le champ ou le curseur pour faire pivoter le polygone d’un angle supplémentaire sans modifier son étirement. Chaque élément a sa propre direction, mais seul le polygone possède des étirements X et Y distincts, et cet étirement suit la direction de l’élément. Par exemple, un polygone orienté vers la droite avec un étirement X supérieur à l’étirement Y paraît large, mais lorsque l’élément est tourné vers le haut, il paraît haut. Le décalage de direction fait pivoter le polygone de sorte que l’étirement reste inchangé : le polygone de l’exemple reste large, mais tourné. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.polygon.option1.description
    'Étirement X', // tab3.polygon.polygon.option2.name
    'Utilisez le champ ou le curseur pour étirer ou comprimer le polygone le long de l’axe X (l’axe qui suit la direction de l’élément). Des valeurs plus grandes allongent le polygone sur cet axe, des valeurs plus petites le raccourcissent. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.polygon.option2.description
    'Étirement Y', // tab3.polygon.polygon.option3.name
    'Utilisez le champ ou le curseur pour étirer ou comprimer le polygone le long de l’axe Y (perpendiculaire à l’axe X). Des valeurs plus grandes allongent le polygone sur cet axe, des valeurs plus petites le raccourcissent. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.polygon.option3.description
    'Nombre de sommets', // tab3.polygon.polygon.option4.name
    'Utilisez le champ ou le curseur pour définir le nombre de points (sommets) du polygone. Un petit nombre donne une forme à angles vifs (par exemple, 3 sommets forment un triangle) ; un grand nombre donne au polygone l’apparence d’un cercle.', // tab3.polygon.polygon.option4.description
    'Forme du polygone', // tab3.element.polygon.shape.title
    'Interface des propriétés de l’élément polygone : Forme du polygone', // tab3.element.polygon.shape.alt
    'Paramètres qui donnent des ondulations à la surface du polygone. Imaginez un polygone avec tant de sommets qu’il ressemble à un cercle. Chaque sommet peut être éloigné du centre ou rapproché de lui d’une valeur différente, de sorte que le bord devienne une ligne ondulée. Les options ci-dessous contrôlent ces ondes. Pour obtenir des ondes régulières, définissez d’abord un grand nombre de sommets sur la page « Polygone ».', // tab3.element.polygon.shape.text
    'Période des ondes', // tab3.polygon.shape.option1.name
    'Utilisez le champ ou le curseur pour définir la longueur des ondes. La valeur est déjà convertie pour correspondre au nombre d’ondes visibles autour du polygone : 1 affiche une onde, 2 affichent deux ondes, 15 affichent quinze ondes, etc. Les décimales sont autorisées, mais un nombre fractionnaire d’ondes ne se raccorde pas autour du polygone : une marche abrupte apparaît alors en un point de sa surface. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.shape.option1.description
    'Amplitude des ondes', // tab3.polygon.shape.option2.name
    'Utilisez le champ ou le curseur pour définir la hauteur des ondes, c’est-à-dire de combien les sommets sont éloignés du centre ou rapprochés de lui. Plus l’amplitude est grande, plus les ondes sont hautes et profondes ; plus elle est petite, plus la surface est lisse. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.shape.option2.description
    'Décalage des ondes', // tab3.polygon.shape.option3.name
    'Utilisez le champ ou le curseur pour faire glisser les ondes le long de la surface du polygone. Les crêtes et les creux se déplacent autour du polygone, mais le nombre et la hauteur des ondes ne changent pas. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.shape.option3.description
    'Style du polygone', // tab3.element.polygon.style.title
    'Interface des propriétés de l’élément polygone : Style du polygone', // tab3.element.polygon.style.alt
    'Paramètres d’apparence des éléments polygone.', // tab3.element.polygon.style.text
    'Couleur de remplissage', // tab3.polygon.style.option1.name
    'Saisissez un code HEX dans le champ de couleur ou appuyez sur le bouton pour ouvrir la palette et choisir la couleur de remplissage du polygone.', // tab3.polygon.style.option1.description
    'Transparence du remplissage', // tab3.polygon.style.option2.name
    'Utilisez le champ de transparence ou le curseur pour définir la transparence du remplissage. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.style.option2.description
    'Couleur du contour', // tab3.polygon.style.option3.name
    'Saisissez un code HEX dans le champ de couleur ou appuyez sur le bouton pour ouvrir la palette et choisir la couleur du contour du polygone.', // tab3.polygon.style.option3.description
    'Transparence du contour', // tab3.polygon.style.option4.name
    'Utilisez le champ de transparence ou le curseur pour définir la transparence du contour. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.style.option4.description
    'Épaisseur du contour', // tab3.polygon.style.option5.name
    'Utilisez le champ d’épaisseur du contour ou le curseur pour définir l’épaisseur du contour du polygone. Le champ accepte des valeurs en dehors des limites minimale et maximale du curseur.', // tab3.polygon.style.option5.description
    'Retour à l’éditeur', // footerlinktext
  ],

  ru: [
    'ASADE: Простой и доступный редактор воздушных документов', // site.title
    'Поиск по вкладкам и содержимому…', // search.placeholder
    'Совпадений не найдено', // search.empty
    'Перемещение камеры', // tab0.title
    'Сенсорный экран (телефон, планшет)', // tab0.option1.name
    'Проведите одним пальцем, чтобы перемещать камеру по горизонтали и вертикали. Разведите или сведите два пальца, чтобы приблизить или отдалить изображение.', // tab0.option1.description
    'Мышь и клавиатура (ПК)', // tab0.option2.name
    'Перетаскивайте мышью или используйте клавиши со стрелками, чтобы перемещать камеру по горизонтали и вертикали. Используйте колесо мыши или вертикальную прокрутку на сенсорной панели ноутбука, чтобы приблизить или отдалить изображение.', // tab0.option2.description
    'Интерфейс экрана', // tab1.title
    'Интерфейс экрана', // tab1.alt
    'Экранные элементы управления позволяют добавлять элементы, создавать точки сохранения и переключаться между ними.', // tab1.text
    'Добавление элемента', // tab1.option1.name
    'С помощью списка рядом с кнопкой «+» выберите тип добавляемого элемента. Затем нажмите кнопку «+». Новый элемент со стандартными настройками будет добавлен в позиции камеры.', // tab1.option1.description
    'Использование точек сохранения', // tab1.option2.name
    'Нажмите кнопку «▽», чтобы создать точку сохранения. Она сохраняет документ в его текущем состоянии. Используйте стрелки, чтобы переключаться между точками сохранения. При переключении текущий документ полностью заменяется сохранённой версией. Точки сохранения упорядочены хронологически. Если создать точку сохранения после выбора более ранней, все последующие точки будут удалены. Номер выбранной точки отображается между стрелками.', // tab1.option2.description
    'Интерфейс списка объектов', // tab2.title
    'Интерфейс списка объектов', // tab2.alt
    'В этом списке перечислены все элементы текущего состояния документа, упорядоченные по порядку отрисовки (слоям).', // tab2.text
    'Выбор и снятие выбора элемента', // tab2.option1.name
    'Нажмите на название элемента, чтобы выбрать его. После этого появится панель его свойств. Нажмите на название уже выбранного элемента, чтобы снять выбор и показать глобальные свойства документа.', // tab2.option1.description
    'Изменение порядка элементов', // tab2.option2.name
    'Когда элемент выбран, справа от его названия появляются две стрелки. Нажимайте их, чтобы переместить выбранный элемент на одну позицию выше или ниже в порядке отрисовки.', // tab2.option2.description
    'Настройка списка', // tab2.option3.name
    'Перетаскивайте правый край, нижний край или угол рамки списка, чтобы изменить её размер. Нажмите на треугольник справа от рамки, чтобы свернуть или развернуть её.', // tab2.option3.description
    'Интерфейс свойств', // tab3.title
    'Эта панель отображает глобальные настройки документа или, если выбран элемент, свойства этого элемента.', // tab3.text
    'Настройка панели', // tab3.option1.name
    'Перетаскивайте левый край панели, чтобы изменить её размер. Нажмите на треугольник слева от панели, чтобы свернуть или развернуть её.', // tab3.option1.description
    'Глобальные свойства документа', // tab3.global.title
    'Эта панель содержит общие настройки документа и ссылку на эту документацию.', // tab3.global.text
    'Интерфейс глобальных свойств', // tab3.global.alt
    'Переименование документа', // tab3.global.option1.name
    'Введите любое название документа в поле имени.', // tab3.global.option1.description
    'Изменение цвета фона документа', // tab3.global.option2.name
    'Введите HEX-код цвета в поле цвета или нажмите кнопку, чтобы открыть палитру и выбрать цвет фона документа.', // tab3.global.option2.description
    'Экспорт (сохранение) и импорт (загрузка) документа', // tab3.global.option3.name
    'Скопируйте ссылку на документ из поля «Текущий документ». Её можно использовать в качестве адреса сайта, чтобы открыть документ в режиме просмотра. Чтобы заменить текущий документ другим, вставьте его ссылку в поле «Загрузить документ» и нажмите «Загрузить». После загрузки поле очистится. Если поле «Загрузить документ» пусто (не содержит ни одного символа) в момент нажатия «Загрузить», загружается новый пустой документ: тот же, что отображается при первом запуске приложения, с названием «Мой документ», полностью белым (#ffffff) фоном и без единого элемента.', // tab3.global.option3.description
    'Свойства элемента', // tab3.element.title
    'Если выбран элемент, эта панель отображает его свойства. Здесь можно открыть общие свойства элемента или свойства, характерные для его типа. Также здесь можно копировать или удалять выбранный элемент.', // tab3.element.text
    'Интерфейс свойств элемента', // tab3.element.alt
    'Стандартные свойства элемента', // tab3.element.default.title
    'Интерфейс стандартных свойств элемента', // tab3.element.default.alt
    'Переименование элемента', // tab3.element.default.option1.name
    'Введите название в поле имени. Название элемента не влияет на его внешний вид и используется только как идентификатор в данных документа. У каждого элемента должно быть уникальное название. Если ввести уже занятое название, оно автоматически заменится на похожее свободное (например, «Текст 1» станет «Текст 2», если «Текст 1» уже существует).', // tab3.element.default.option1.description
    'Перемещение элемента', // tab3.element.default.option2.name
    'Используйте отдельные поля координат X и Y, чтобы задать положение элемента, или перетаскивайте джойстик в блоке перемещения. Чувствительность джойстика зависит от масштаба камеры.', // tab3.element.default.option2.description
    'Поворот элемента', // tab3.element.default.option3.name
    'Используйте поле направления, чтобы задать поворот элемента, или перетаскивайте регулятор вращения. Поле направления ограничено диапазоном [-180°, 180°). Значения за пределами этого диапазона автоматически приводятся к нему; например, -300° превращается в 60°.', // tab3.element.default.option3.description
    'Изменение размера элемента', // tab3.element.default.option4.name
    'Используйте поле размера или ползунок, чтобы изменить размер элемента. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.element.default.option4.description
    'Свойства текстового элемента', // tab3.element.text.title
    'Свойства, характерные для текстовых элементов.', // tab3.element.text.text
    'Интерфейс свойств текстового элемента', // tab3.element.text.alt
    'Текст', // tab3.element.text.text.title
    'Интерфейс свойств текстового элемента: Текст', // tab3.element.text.text.alt
    'Дополнительные настройки текстового элемента.', // tab3.element.text.text.text
    'Текстовое поле', // tab3.text.text.option1.name
    'Введите в это поле текст любой длины — он будет отображён в документе. Перетаскивайте линию под полем, чтобы изменить его ширину. Форматирование текста задаётся парными маркерами: введите обратную косую черту (\\), а затем символ стиля, чтобы включить его. Повторите ту же комбинацию, чтобы выключить стиль. Форматирование применяется к тексту между двумя маркерами.', // tab3.text.text.option1.description
    'Комбинации с обратной косой чертой:', // tab3.text.text.option1.style
    '\\b — переключение полужирного начертания', // tab3.text.text.option1.style1
    '\\i — переключение курсива', // tab3.text.text.option1.style2
    '\\u — переключение подчёркивания', // tab3.text.text.option1.style3
    '\\m — переключение зачёркивания', // tab3.text.text.option1.style4
    '\\o — переключение надчёркивания (линия над текстом)', // tab3.text.text.option1.style5
    '\\n — начало новой строки', // tab3.text.text.option1.style6
    '\\l — начало новой строки и выравнивание последующего текста по левому краю', // tab3.text.text.option1.style7
    '\\c — начало новой строки и выравнивание последующего текста по центру', // tab3.text.text.option1.style8
    '\\r — начало новой строки и выравнивание последующего текста по правому краю', // tab3.text.text.option1.style9
    '\\_ — переключение нижнего индекса', // tab3.text.text.option1.style10
    '\\^ — переключение верхнего индекса', // tab3.text.text.option1.style11
    '\\s — переключение скрытого текста («спойлера»); нажмите и удерживайте скрытый текст, чтобы показать его', // tab3.text.text.option1.style12
    '\\d — эффект «пьяного» текста: каждый символ получает случайное смещение, поворот и независимое случайное изменение горизонтального и вертикального масштаба. Эффект статичный, без анимации.', // tab3.text.text.option1.style13
    '\\v — переворот текста вверх ногами поворотом на 180°', // tab3.text.text.option1.style14
    '\\x — сброс активных стилей текста, кроме переворота и выравнивания', // tab3.text.text.option1.style15
    '\\\\ — отображение обычной обратной косой черты (\\) в тексте', // tab3.text.text.option1.style16
    'Ширина строки', // tab3.text.text.option2.name
    'Используйте поле ширины строки или ползунок, чтобы задать, сколько текста помещается в одной строке до переноса. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.text.text.option2.description
    'Размер текста', // tab3.text.text.option3.name
    'Используйте поле размера текста или ползунок, чтобы изменить размер текста. Этот параметр и размер элемента действуют похожим образом и не влияют на перенос строк. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.text.text.option3.description
    'Межбуквенный интервал', // tab3.text.text.option4.name
    'Используйте поле межбуквенного интервала или ползунок, чтобы задать дополнительное расстояние между символами. Межбуквенный интервал влияет на перенос строк. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.text.text.option4.description
    'Межстрочный интервал', // tab3.text.text.option5.name
    'Используйте поле межстрочного интервала или ползунок, чтобы задать расстояние между перенесёнными строками. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.text.text.option5.description
    'Стиль текста', // tab3.element.text.textstyle.title
    'Настройки внешнего вида текстовых элементов.', // tab3.element.text.textstyle.text
    'Интерфейс свойств текстового элемента: Стиль текста', // tab3.element.text.textstyle.alt
    'Цвет текста', // tab3.text.textstyle.option1.name
    'Введите HEX-код в поле цвета или нажмите кнопку, чтобы открыть палитру и выбрать цвет текста.', // tab3.text.textstyle.option1.description
    'Прозрачность текста', // tab3.text.textstyle.option2.name
    'Используйте поле прозрачности или ползунок, чтобы задать прозрачность текста. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.text.textstyle.option2.description
    'Смешивание текста', // tab3.text.textstyle.option3.name
    'Используйте выпадающий список режимов смешивания, чтобы выбрать режим смешивания текста.', // tab3.text.textstyle.option3.description
    'Свойства элемента-многоугольника', // tab3.element.polygon.title
    'Интерфейс свойств элемента-многоугольника', // tab3.element.polygon.alt
    'Свойства, характерные для элементов-многоугольников.', // tab3.element.polygon.text
    'Многоугольник', // tab3.element.polygon.polygon.title
    'Интерфейс свойств элемента-многоугольника: Многоугольник', // tab3.element.polygon.polygon.alt
    'Базовая геометрия многоугольника: как он растянут и сколько у него вершин.', // tab3.element.polygon.polygon.text
    'Смещение направления', // tab3.polygon.polygon.option1.name
    'Используйте поле или ползунок, чтобы дополнительно повернуть многоугольник, не затрагивая его растяжение. У каждого элемента есть собственное направление, но только у многоугольника есть отдельное растяжение по X и Y, и это растяжение следует за направлением элемента. Например, многоугольник, направленный вправо, с растяжением по X больше, чем по Y, выглядит широким, но если повернуть элемент так, чтобы он был направлен вверх, он будет выглядеть высоким. «Смещение направления» поворачивает многоугольник так, чтобы растяжение осталось нетронутым: показанный многоугольник по-прежнему широкий, только повёрнутый. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.polygon.option1.description
    'Растяжение по X', // tab3.polygon.polygon.option2.name
    'Используйте поле или ползунок, чтобы растянуть или сжать многоугольник вдоль оси X (оси, совпадающей с направлением элемента). Большие значения делают многоугольник длиннее вдоль этой оси, меньшие — короче. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.polygon.option2.description
    'Растяжение по Y', // tab3.polygon.polygon.option3.name
    'Используйте поле или ползунок, чтобы растянуть или сжать многоугольник вдоль оси Y (перпендикулярной оси X). Большие значения делают многоугольник длиннее вдоль этой оси, меньшие — короче. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.polygon.option3.description
    'Количество вершин', // tab3.polygon.polygon.option4.name
    'Используйте поле или ползунок, чтобы задать количество точек (вершин) многоугольника. Малое количество даёт форму с острыми углами (например, 3 вершины образуют треугольник), а большое делает многоугольник похожим на круг.', // tab3.polygon.polygon.option4.description
    'Форма многоугольника', // tab3.element.polygon.shape.title
    'Интерфейс свойств элемента-многоугольника: Форма многоугольника', // tab3.element.polygon.shape.alt
    'Настройки, придающие поверхности многоугольника волнистость. Представьте многоугольник с таким количеством вершин, что он выглядит как круг. Каждую вершину можно сместить от центра или к центру на разную величину, и тогда край превращается в волнистую линию. Параметры ниже управляют этими волнами. Чтобы волны были плавными, сначала задайте большое количество вершин на странице «Многоугольник».', // tab3.element.polygon.shape.text
    'Период волны', // tab3.polygon.shape.option1.name
    'Используйте поле или ползунок, чтобы задать длину волны. Значение уже пересчитано так, что соответствует количеству волн, видимых вокруг многоугольника: 1 — одна волна, 2 — две волны, 15 — пятнадцать волн и т. д. Можно вводить десятичные значения, но дробное количество волн не укладывается ровно по кругу, поэтому в одной точке поверхности появится резкий уступ. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.shape.option1.description
    'Амплитуда волны', // tab3.polygon.shape.option2.name
    'Используйте поле или ползунок, чтобы задать высоту волн, то есть насколько вершины смещаются от центра или к центру. Чем больше амплитуда, тем выше и глубже волны; чем меньше, тем ровнее поверхность. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.shape.option2.description
    'Смещение волны', // tab3.polygon.shape.option3.name
    'Используйте поле или ползунок, чтобы сдвинуть волны вдоль поверхности многоугольника. Гребни и впадины перемещаются вокруг многоугольника, а количество и высота волн не меняются. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.shape.option3.description
    'Стиль многоугольника', // tab3.element.polygon.style.title
    'Интерфейс свойств элемента-многоугольника: Стиль многоугольника', // tab3.element.polygon.style.alt
    'Настройки внешнего вида элементов-многоугольников.', // tab3.element.polygon.style.text
    'Цвет заливки', // tab3.polygon.style.option1.name
    'Введите HEX-код в поле цвета или нажмите кнопку, чтобы открыть палитру и выбрать цвет заливки многоугольника.', // tab3.polygon.style.option1.description
    'Прозрачность заливки', // tab3.polygon.style.option2.name
    'Используйте поле прозрачности или ползунок, чтобы задать прозрачность заливки. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.style.option2.description
    'Цвет контура', // tab3.polygon.style.option3.name
    'Введите HEX-код в поле цвета или нажмите кнопку, чтобы открыть палитру и выбрать цвет контура многоугольника.', // tab3.polygon.style.option3.description
    'Прозрачность контура', // tab3.polygon.style.option4.name
    'Используйте поле прозрачности или ползунок, чтобы задать прозрачность контура. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.style.option4.description
    'Толщина контура', // tab3.polygon.style.option5.name
    'Используйте поле толщины контура или ползунок, чтобы задать толщину контура многоугольника. Поле принимает значения за пределами минимального и максимального значений ползунка.', // tab3.polygon.style.option5.description
    'Назад к редактору', // footerlinktext
  ]
};

// Build the LANGUAGES object using the shared key list.
const LANGUAGES = Object.fromEntries(
  Object.entries(TRANSLATIONS).map(([code, values]) => [
    code,
    {
      name: {
        en: 'English',
        uk: 'Українська',
        de: 'Deutsch',
        pl: 'Polski',
        es: 'Español',
        fr: 'Français',
        ru: 'Русский'
      }[code],
      strings: Object.fromEntries(
        KEYS.map((key, index) => [key, values[index]])
      )
    }
  ])
);

// Check that every language contains exactly the expected number of entries.
for (const [code, values] of Object.entries(TRANSLATIONS)) {
  if (values.length !== KEYS.length) {
    console.error(
      `Translation ${code}: expected ${KEYS.length} entries, got ${values.length}.`
    );
  }
}