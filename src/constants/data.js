// @flow

const data = {
  filter: "",
  filterID: [],
  locale: {
    lang: "en"
  },
  books: [
    {
      id: "1",
      titleRU: "Angular 5: From Theory To Practice",
      titleEN: "Angular 5: From Theory To Practice",
      authorsRU: "Asim Hussain",
      authorsEN: "Asim Hussain",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Angular-Practice-applications-tomorrow-framework-ebook/dp/B01N9S0CZN"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Angular-Practice-applications-tomorrow-framework-ebook/dp/B01N9S0CZN"
      },
      lengthRU: 846,
      lengthEN: 846,
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>After reading this book, you are going to be able to:</p><ul><li>Understand the latest features of ES6 JavaScript and TypeScript.</li><li>Build an Angular 2 application from scratch using TypeScript and the Angular command line interface.</li><li>Write code using the paradigm of reactive programming with RxJS and Observables.</li><li>Know how to Unit Test Angular using Jasmine, Karma and the Angular Test Bed</li></ul><p>The first chapter in the course is a quickstart where you dive straight into writing your first Angular application. We use the web editor plunker so you can get started writing code ASAP.</p><p>In this quickstart you'll get a 50,000 foot view of the major features of Angular.</p><p>Then chapter by chapter we go much deeper into each of these features. I'll cover the theory for that feature, using plunker as much as possible so you can try out the code yourself in a browser. Then you'll practice what you've learnt with either an online quiz or a set of flash cards.</p>",
      descEN:
        "<p>After reading this book, you are going to be able to:</p><ul><li>Understand the latest features of ES6 JavaScript and TypeScript.</li><li>Build an Angular 2 application from scratch using TypeScript and the Angular command line interface.</li><li>Write code using the paradigm of reactive programming with RxJS and Observables.</li><li>Know how to Unit Test Angular using Jasmine, Karma and the Angular Test Bed</li></ul><p>The first chapter in the course is a quickstart where you dive straight into writing your first Angular application. We use the web editor plunker so you can get started writing code ASAP.</p><p>In this quickstart you'll get a 50,000 foot view of the major features of Angular.</p><p>Then chapter by chapter we go much deeper into each of these features. I'll cover the theory for that feature, using plunker as much as possible so you can try out the code yourself in a browser. Then you'll practice what you've learnt with either an online quiz or a set of flash cards.</p>",
      tag: ["2", "3", "12", "19"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/51SRFX--KdL._SX260_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51SRFX--KdL._SX260_.jpg"
    },
    {
      id: "2",
      titleRU:
        "Создаем динамические веб-сайты с помощью PHP, MySQL, JavaScript, CSS и HTML5",
      titleEN: "Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5",
      authorsRU: "Robin Nixon",
      authorsEN: "Robin Nixon",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/141664758/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Learning-PHP-MySQL-JavaScript-jQuery/dp/1491978910"
      },
      lengthRU: 832,
      lengthEN: 832,
      lang: ["English", "Русский"],
      date: "2018",
      free: false,
      descRU:
        "<p>Эта книга поможет вам освоить динамическое веб-программирование с применением самых современных технологий. Книга изобилует ценными практическими советами, содержит исчерпывающий теоретический материал. Для закрепления материала автор рассказывает, как создать полнофункциональный сайт, работающий по принципу социальной сети.</p><ul><li>Изучите важнейшие аспекты языка PHP и основы объектно-ориентированного программирования</li><li>Познакомьтесь с базой данных MySQL</li><li>Управляйте cookie-файлами и сеансами, обеспечивайте высокий уровень безопасности</li><li>Пользуйтесь фундаментальными возможностями языка JavaScript</li><li>Применяйте вызовы AJAX, чтобы значительно повысить динамику вашего сайта</li><li>Изучите основы CSS для форматирования и оформления ваших страниц</li><li>Освойте продвинутые возможности HTML5: геолокацию, обработку аудио и видео, отрисовку на холсте</li></ul>",
      descEN:
        "<p>Build interactive, data-driven websites with the potent combination of open source technologies and web standards, even if you have only basic HTML knowledge. In this update to this popular hands-on guide, you’ll tackle dynamic web programming with the latest versions of today’s core technologies: PHP, MySQL, JavaScript, CSS, HTML5, and key jQuery libraries.</p><p>Web designers will learn how to use these technologies together and pick up valuable web programming practices along the way—including how to optimize websites for mobile devices. At the end of the book, you’ll put everything together to build a fully functional social networking site suitable for both desktop and mobile browsers.</p><ul><li>Explore MySQL, from database structure to complex queries</li><li>Use the MySQLi extension, PHP’s improved MySQL interface</li><li>Create dynamic PHP web pages that tailor themselves to the user</li><li>Manage cookies and sessions and maintain a high level of security</li><li>Enhance the JavaScript language with jQuery and jQuery mobile libraries</li><li>Use Ajax calls for background browser-server communication</li><li>Style your web pages by acquiring CSS2 and CSS3 skills</li><li>Implement HTML5 features, including geolocation, audio, video, and the canvas element</li><li>Reformat your websites into mobile web apps</li></ul>",
      tag: ["1", "2", "5", "7", "8", "16", "18"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1019775280.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51aUTzDIxxL._SX379_BO1,204,203,200_.jpg"
    },
    {
      id: "3",
      titleRU: "HTML5. Рецепты программирования",
      titleEN: "HTML5 Cookbook",
      authorsRU: "Christopher Schmitt, Kyle Simpson",
      authorsEN: "Christopher Schmitt, Kyle Simpson",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/17513568/",
        Питер:
          "https://www.piter.com/collection/all/product/html5-retsepty-programmirovaniya"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/HTML5-Cookbook-Solutions-Developers-Cookbooks/dp/1449396798/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920016038.do"
      },
      lengthRU: "288",
      lengthEN: "284",
      lang: ["English", "Русский"],
      date: "2011",
      free: false,
      descRU:
        "<p>Эта книга, представляющая собой сборник рецептов и готовых решений, позволит вам получить практический опыт работы с основными элементами HTML5. Издание охватывает широкий круг вопросов: от семантической разметки, веб-форм и мультимедийных элементов до технологий геолокации и JavaScript API. Каждый рецепт, рассматриваемый в книге, включает в себя задачу, пример кода и подробное описание решения.</p><p>Книга идеально подходит для веб-программистов начального и среднего уровней, которые хотят быстро освоить практические приемы применения HTML5 в веб-разработках.</p>",
      descEN:
        "<p>With scores of practical recipes you can use in your projects right away, this cookbook helps you gain hands-on experience with HTML5’s versatile collection of elements. You get clear solutions for handling issues with everything from markup semantics, web forms, and audio and video elements to related technologies such as geolocation and rich JavaScript APIs.</p><p>Each informative recipe includes sample code and a detailed discussion on why and how the solution works. Perfect for intermediate to advanced web and mobile web developers, this handy book lets you choose the HTML5 features that work for you—and helps you experiment with the rest.</p><ul><li>Test browsers for HTML5 support, and use techniques for applying unsupported features</li><li>Discover how HTML5 makes web form implementation much simpler</li><li>Overcome challenges for implementing native audio and video elements</li><li>Learn techniques for using HTML5 with ARIA accessibility guidelines</li><li>Explore examples that cover using geolocation data in your applications</li><li>Draw images, use transparencies, add gradients and patterns, and more with Canvas</li><li>ring HTML5 features to life with a variety of advanced JavaScript APIs</li></ul>",
      tag: ["1", "2", "7", "22", "28", "19"],
      pictureRU:
        "https://static12.insales.ru/images/products/1/3645/25513533/45901265.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920016038/lrg.jpg"
    },
    {
      id: "4",
      titleRU: "Веб-разработка. Исчерпывающее руководство",
      titleEN: "Creating a Website: The Missing Manual ",
      authorsRU: "Matthew MacDonald",
      authorsEN: "Matthew MacDonald",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/138132784/",
        Питер:
          "https://www.piter.com/collection/all/product/veb-razrabotka-ischerpyvayuschee-rukovodstvo"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Creating-Website-Missing-Matthew-MacDonald/dp/1491918071/"
      },
      lengthRU: "640",
      lengthEN: "622",
      lang: ["English", "Русский"],
      date: "2015",
      free: false,
      descRU:
        "<p>Можно без труда создать добротный веб-сайт, вооружившись обычным компьютером и некоторыми амбициями. Хотите сделать собственный блог, интернет-магазин, форум, ресурс с рекламой мероприятия? Не проблема! Эта доступная книга, не перегруженная терминами, расскажет обо всех приемах, инструментах и навыках, необходимых, чтобы создать сайт и запустить его в Вебе.</p>",
      descEN:
        "<p>You can easily create a professional-looking website with nothing more than an ordinary computer and some raw ambition. Want to build a blog, sell products, create forums, or promote an event? No problem! This friendly, jargon-free book gives you the techniques, tools, and advice you need to build a site and get it up on the Web.</p>",
      tag: ["1", "2", "7", "5", "18"],
      pictureRU:
        "https://static-eu.insales.ru/images/products/1/7572/93838740/49602463.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920036364/lrg.jpg"
    },
    {
      id: "5",
      titleRU: "HTML5 для веб-дизайнеров",
      titleEN: "HTML5 FOR WEB DESIGNERS",
      authorsRU: "Jeremy Keith, Rachel Andrew",
      authorsEN: "Jeremy Keith, Rachel Andrew",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/19431055/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/DESIGNERS-Second-JEREMY-RACHEL-ANDREW/dp/1937557243/"
      },
      lengthRU: "112",
      lengthEN: "112",
      lang: ["English", "Русский"],
      date: "2015",
      free: false,
      descRU:
        "<p>О чем эта книга Эту книгу можно назвать инструкцией по использованию HTML5. Из нее вы узнаете все необходимое об истории и развитии HTML, принципах устройства и что стало определяющим фактором в разработке. О спецификациях HTML5 и о том, что должны делать браузеры, когда им встречаются документы с ошибками разметки. О том, как указывать кодировки документа разметки. О технологических нововведениях: элементе img, появлении JavaScript, быстром росте количества Ajax-приложений. О том, как использовать структурные элементы HTML5 прямо сейчас, например, назначить стиль любому элементу, который вы захотите изобрести, или начать использовать доступные вам дополнительные уровни заголовков. ...и множество, множество атрибутов, элементов, списков опций, кодов.</p><p>Почему мы решили издать эту книгу <br> Потому что ни одна другая тема, ни «полноценные шрифты», ни CSS3 не волнует сообщество разработчиков, работающих по стандартам, больше, чем появление HTML5. </p><p>Для кого эта книга</p><ul><li>Для тех, кто создает контент и делает семантическую разметку веб-страниц. </li><li>Для тех, кто разрабатывает доступные интерфейсы. </li></ul>",
      descEN:
        "<p>HTML5 isn't as confusing as it once was, but it still isn't straightforward. It's an evolutionary, rather than revolutionary, change in the ongoing story of markup-and if you're currently creating websites with any version of HTML, you're already using HTML5. Harness the power of this essential evolving spec with help from Jeremy Keith and Rachel Andrew. Brush up on syntax and updated elements, and get ready to work with responsive images, microformats, and microdata. Through clear, practical examples, you'll be up to speed in no time.</p>",
      tag: ["1", "2", "7", "19"],
      pictureRU:
        "http://igrafo.ru/wp-content/uploads/2014/05/ee2d913559a1ad7d723205224807c174.jpg",
      pictureEN:
        "https://cdn.shopify.com/s/files/1/0051/7692/products/ABA-cover-1_566e3825-31ab-4d44-8b80-342df1bc5a4d_100x@3x.png?v=1463456059"
    },
    {
      id: "6",
      titleRU: "Изучаем HTML5. Библиотека специалиста",
      titleEN: "Introducing HTML5",
      authorsRU: "Bruce Lawson, Remy Sharp",
      authorsEN: "Bruce Lawson, Remy Sharp",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/7622650/",
        Питер:
          "https://www.piter.com/collection/all/product/izuchaem-html5-biblioteka-spetsialista-2-e-izd"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Introducing-HTML5-Voices-That-Matter/dp/0321784421/"
      },
      lengthRU: "304",
      lengthEN: "312",
      lang: ["English", "Русский"],
      date: "2011",
      free: false,
      descRU:
        '<p>Эта книга, существенно обновленная и дополненная во втором издании, посвящена изучению нового стандарта веб-программирования HTML5 и использованию новых функциональных возможностей, предоставляемых веб-разработчикам. Написанная опытными программистами, давно работающими с HTML5, книга расскажет, как приступить к освоению этого языка программирования и адаптации веб-проектов для того, чтобы в полной мере воспользоваться преимуществами нового стандарта. Авторы не заставляют вас читать избыточно подробные спецификации языка, а учат применять HTML5 на конкретных примерах. С помощью этой книги вы узнаете, каковы новые семантики и структуры HTML5, как использовать мультимедийные элементы HTML5 для размещения аудио- и видеоданных, как разрабатывать "умные" веб-формы и усовершенствовать приложения, использующие географическую привязку, с помощью API геолокации.</p><p>Новое издание книги дополнено более подробной информацией о работе с аудио, видео и графикой, о функциях геолокации, автономном режиме хранения данных, применении HTML5 в старых браузерах.</p>',
      descEN:
        "<p>HTML5 continues to evolve, browsers are implementating at break-neck speed and HTML5 web sites spring up like flowers after rain. More than ever, you need to get acquainted with the powerful new possibilities in web and application design. That’s why we’ve crafted a second edition of this book to help you stay on top of current developments.</p><p>This book shows you how to start adapting the language now to realize its benefits on today’s browsers. It concentrates on the practical—the problems HTML5 can solve for you right away. By following the book’s hands-on HTML5 code examples you’ll learn about:</p><ul><li>new semantics and structures to help your site become richer and more accessible</li><li>applying the most important JavaScript APIs that are already implemented</li><li>using and controlling native multimedia</li><li>how to build more intelligent web forms</li><li>implementing new storage options and web databases, including both WebSQL and IndexedDB</li><li>how geolocation works with HTML5 in both web and mobile applications</li></ul><p>And this new edition adds:</p><ul><li>even more detail on canvas, geolocation and offline storage options</li><li>a peek around the corner for audio and video’s new element, subtitling formats, in-browser web conference</li><li>browser history controls to make applications more usable and bookmarkable</li><li>ways to use HTML5 now in older browsers</li></ul>",
      tag: ["1", "2", "22", "19"],
      pictureRU:
        "https://static12.insales.ru/images/products/1/3864/25431832/45901156.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/41Mb80aByoL._SX387_BO1,204,203,200_.jpg"
    },
    {
      id: "7",
      titleRU: "HTML5. Карманный справочник",
      titleEN: "HTML5 Pocket Reference",
      authorsRU: "Jennifer Niederst Robbins",
      authorsEN: "Jennifer Niederst Robbins",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/138552248/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/HTML5-Pocket-Reference-Comprehensive-Indispensable-ebook/dp/B00FM0OC84/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920029274.do"
      },
      lengthRU: "192",
      lengthEN: "184",
      lang: ["English", "Русский"],
      date: "2013",
      free: false,
      descRU:
        "<p>Хотите быстро найти описание элемента или атрибута HTML5, используемого на веб-странице или в веб-приложении? Перед вами классический справочник, который веб-дизайнеры и веб-разработчики стараются всегда держать под рукой на протяжении вот уже более 15 лет.Пятое издание книги включает полное описание элементов и атрибутов HTML5 в соответствии со стандартами HTML5 Candidate Recommendation, HTML5.1 Working Draft и WHATWG.</p>",
      descEN:
        "<p>Need help finding the right HTML5 element or attribute for your web page or application? HTML5 Pocket Reference is the classic reference that web designers and developers have been keeping close at hand for more than thirteen years.</p><p>This fifth edition has been updated to reflect the current state of HTML5, including the HTML5 Candidate Recommendation, the emerging HTML5.1 Working Draft, and the living WHATWG standard. Features include:</p><ul><li>An alphabetical listing of every element and attribute in HTML5, HTML5.1, and the WHATWG living standard</li><li>Descriptions, markup examples, content categories, content models, and start- and end-tag requirements for every element</li><li>At-a-glance notes indicating the differences between the HTML5 specifications and HTML 4.01</li><li>Useful charts of special characters</li><li>An overview of HTML5 APIs</li></ul><p>If you’re an experienced web designer or developer who needs a quick resource for working with established web standards, this handy book is indispensable.</p>",
      tag: ["1", "2", "7", "20"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1016536116.jpg",
      pictureEN:
        "https://d188rgcu4zozwl.cloudfront.net/content/B00FM0OC84/resources/1791241043"
    },
    {
      id: "8",
      titleRU: "HTML5 Canvas",
      titleEN: "HTML5 Canvas",
      authorsRU: "Steve Fulton, Jeff Fulton",
      authorsEN: "Steve Fulton, Jeff Fulton",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/25358313/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/HTML5-Canvas-Native-Interactivity-Animation-ebook/dp/B00CBM1WG6/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920026266.do"
      },
      lengthRU: "752",
      lengthEN: "752",
      lang: ["English"],
      date: "2013",
      free: false,
      descRU:
        "<p>Flash is fading fast as Canvas continues to climb. The second edition of this popular book gets you started with HTML5 Canvas by showing you how to build interactive multimedia applications. You’ll learn how to draw, render text, manipulate images, and create animation—all in the course of building an interactive web game throughout the book.</p><p>Updated for the latest implementations of Canvas and related HTML5 technologies, this edition includes clear and reusable code examples to help you quickly pick up the basics—whether you currently use Flash, Silverlight, or just HTML and JavaScript. Discover why HTML5 is the future of innovative web development.</p><ul><li>Create and modify 2D drawings, text, and bitmap images</li><li>Use algorithms for math-based movement and physics interactions</li><li>Incorporate and manipulate video, and add audio</li><li>Build a basic framework for creating a variety of games</li><li>Use bitmaps and tile sheets to develop animated game graphics</li><li>Go mobile: build web apps and then modify them for iOS devices</li><li>Explore ways to use Canvas for 3D and multiplayer game applications</li></ul>",
      descEN:
        "<p>Flash is fading fast as Canvas continues to climb. The second edition of this popular book gets you started with HTML5 Canvas by showing you how to build interactive multimedia applications. You’ll learn how to draw, render text, manipulate images, and create animation—all in the course of building an interactive web game throughout the book.</p><p>Updated for the latest implementations of Canvas and related HTML5 technologies, this edition includes clear and reusable code examples to help you quickly pick up the basics—whether you currently use Flash, Silverlight, or just HTML and JavaScript. Discover why HTML5 is the future of innovative web development.</p><ul><li>Create and modify 2D drawings, text, and bitmap images</li><li>Use algorithms for math-based movement and physics interactions</li><li>Incorporate and manipulate video, and add audio</li><li>Build a basic framework for creating a variety of games</li><li>Use bitmaps and tile sheets to develop animated game graphics</li><li>Go mobile: build web apps and then modify them for iOS devices</li><li>Explore ways to use Canvas for 3D and multiplayer game applications</li></ul>",
      tag: ["2", "7", "22", "29", "20"],
      pictureRU:
        "https://d188rgcu4zozwl.cloudfront.net/content/B00CBM1WG6/resources/170992404",
      pictureEN:
        "https://d188rgcu4zozwl.cloudfront.net/content/B00CBM1WG6/resources/170992404"
    },
    {
      id: "9",
      titleRU: "Секреты CSS. Идеальные решения ежедневных задач",
      titleEN: "CSS Secrets: Better Solutions to Everyday Web Design Problems",
      authorsRU: "Lea Verou",
      authorsEN: "Lea Verou",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/137213400/",
        Питер:
          "https://www.piter.com/collection/all/product/sekrety-css-idealnye-resheniya-ezhednevnyh-zadach"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/CSS-Secrets-Solutions-Everyday-Problems-ebook/dp/B0131MQ1NS/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920031123.do"
      },
      lengthRU: "336",
      lengthEN: "370",
      lang: ["English", "Русский"],
      date: "2015",
      free: false,
      descRU:
        '<p>Гибкий легкий код, соответствующий стандартам - его можно получить, если подойти к проблеме аналитически. Леа Веру познакомит вас с недокументированными приемами, позволяющими найти изящные решения для самого широкого круга задач веб-дизайна. В основу книги легли доклады автора на шестидесяти международных конференциях веб-разработчиков, так что она затрагивает самые актуальные темы - от взаимодействия с пользователем до типографики и визуальных эффектов. Множество книг, доступных на сегодняшнем рынке, документируют возможности CSS от A до Я. Хорошо это или плохо, но "Секреты CSS" - не одна из них. Ее назначение - заполнить пробелы в знаниях, оставшиеся после того, как вы уже ознакомились со справочными материалами, открыть ваш разум новым способам применения функциональности, которая вам уже известна, а также познакомить вас с полезными возможностями CSS, которые не так модны и популярны, но заслуживают не меньшей любви. Главная задача этой книги - научить вас решать проблемы с помощью CSS.</p>',
      descEN:
        "<p>In this practical guide, CSS expert Lea Verou provides 47 undocumented techniques and tips to help intermediate-to advanced CSS developers devise elegant solutions to a wide range of everyday web design problems.</p><p>Rather than focus on design, CSS Secrets shows you how to solve problems with code. You'll learn how to apply Lea's analytical approach to practically every CSS problem you face to attain DRY, maintainable, flexible, lightweight, and standards-compliant results.</p><p>Inspired by her popular talks at over 60 international web development conferences, Lea Verou provides a wealth of information for topics including:</p><ul><li>Backgrounds and Borders</li><li>Shapes</li><li>Visual Effects</li><li>Typography</li><li>User Experience</li><li>Structure and Layout</li><li>Transitions and Animations</li></ul>",
      tag: ["1", "2", "5", "29", "20"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1015094867.jpg",
      pictureEN:
        "https://d188rgcu4zozwl.cloudfront.net/content/B0131MQ1NS/resources/269387856"
    },
    {
      id: "10",
      titleRU: "CSS3 для веб-дизайнеров",
      titleEN: "CSS3 FOR WEB DESIGNERS",
      authorsRU: "Дэн Сидерхолм",
      authorsEN: "Dan Cederholm",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/19431033/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/CSS3-WEB-DESIGNERS-Second-Cederholm/dp/B01J667SD0/"
      },
      lengthRU: "144",
      lengthEN: "139",
      lang: ["English", "Русский"],
      date: "2015",
      free: false,
      descRU:
        "<p>О чем эта книга</p><ul><li>Об использовании CSS3, области взаимодействия и свойствах, которые можно использовать прямо сейчас и в каких частях интерфейса их следует применять.</li><li>О спецификации CSS3; об используемых браузерах и связанными с ними префиксами WebKit, Mozilla и Opera и о том, как работают эти браузерные префиксы.</li><li>О том, что такое CSS-переходы, полная запись и состояние и как переходы позволяют делать так, чтобы изменения значений CSS-свойств происходили плавно в течение указанного интервала времени.</li></ul><p>Для кого эта книга<br>Для владельцев сайтов, программистов, веб-дизайнеров, как опытных, так и начинающих.</p><p>Прочитав книгу Дэна Синдерхолма, вы сможете: </p><ul><li>создавать элементы со сглаженными углами, скруглять углы фона; </li><li>осуществлять разметку; </li><li>создавать линейные и сферические градиенты, создавать градиентные переходы между цветами, не используя картинки; </li><li>оформлять фоновую картинку элементов; </li><li>добавлять к элементам и тексту элементов тени; </li><li>создавать анимацию и различные эффекты переходов; </li><li>добавлять цвета новыми способами и многое другое. </li></ul>",
      descEN:
        "<p>From advanced selectors to generated content to web fonts, and from gradients, shadows, and rounded corners to elegant animations, CSS3 holds a universe of creative possibilities. No one can better guide you through these galaxies than Dan Cederholm. In this second edition, he tackles new properties and techniques, including micro layouts. Learn what works, how it works, and how to adapt for browsers where it doesn’t. WHAT’S NEW IN THE SECOND EDITION? Many of the CSS3 properties Dan discussed in 2010 now have wider browser support, which means you can feel even more confident putting them to use. In this updated edition, Dan has carefully refreshed code samples, removed old hacks that are no longer necessary, and written a whole new chapter on micro layouts. There’s no better time to dive in to—or polish up—your CSS3 skills.</p>",
      tag: ["1", "2", "5", "18"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1011228484.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/41%2Bl78I%2BvqL.jpg"
    },
    {
      id: "11",
      titleRU: "Новая большая книга CSS",
      titleEN: "CSS: The Missing Manual",
      authorsRU: "Дэвид Сойер Макфарланд",
      authorsEN: "David Sawyer McFarland",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/135731189/",
        Питер:
          "https://www.piter.com/collection/all/product/novaya-bolshaya-kniga-css"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/CSS-Missing-David-Sawyer-McFarland/dp/1491918055/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920036357.do"
      },
      lengthRU: "720",
      lengthEN: "718",
      lang: ["English", "Русский"],
      date: "2015",
      free: false,
      descRU:
        "<p>Технология CSS3 позволяет создавать профессионально оформленные сайты, но тонкости этого языка могут оказаться довольно сложными даже для опытных веб-разработчиков. Полностью переработанное четвертое издание этой книги поможет вам поднять навыки работы с HTML и CSS на новый уровень; она содержит множество ценных советов, описаний приемов, а также инструкции, написанные в стиле справочного руководства. Веб-дизайнеры, как начинающие, так и опытные, при помощи этой книги быстро научатся создавать красивые веб-страницы, которые при этом молниеносно загружаются как на ПК, так и на мобильных устройствах.</p>",
      descEN:
        "<p>CSS lets you create professional-looking websites, but learning its finer points can be tricky—even for seasoned web developers. This fully updated edition provides the most modern and effective tips, tricks, and tutorial-based instruction on CSS available today. Learn how to use new tools such as Flexbox and Sass to build web pages that look great and run fast on any desktop or mobile device. Ideal for casual and experienced designers alike.</p><p>The important stuff you need to know:</p><ul><li><b>Start with the basics.</b> Write CSS-friendly HTML, including the HTML5 tags recognized by today’s browsers.</li><li><b>Design for mobile devices.</b> Create web pages that look great when visitors use them on the go.</li><li><b>Make your pages work for you.</b> Add animations that capture the imagination, and forms that get the job done.</li><li><b>Take control of page layouts.</b> Use professional design techniques such as floats and positioning.</li><li><b>Make your layouts more flexible.</b> Design websites with Flexbox that adjust to different devices and screen sizes.</li><li><b>Work more efficiently.</b> Write less CSS code and work with smaller files, using Syntactically Awesome Stylesheets (Sass).</li></ul>",
      tag: ["1", "2", "5", "7", "19", "29"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1014337293.jpg",
      pictureEN:
        "https://d1b14unh5d6w7g.cloudfront.net/1491918055.01.S001.LXXXXXXX.jpg?Expires=1534537125&Signature=GJcn843j12fOTSxkZG7x/KQPaewFFWWe8Uf5+t4UMpttT083U2HqZoeLoSpYQ6C+4BzXHjMTIZG1gp6jDtfeqfffIrKtDmP4d/CWI+JlUgC4Nh+02ruVKsUM4syzVMIaDHfsHfp3REKahmRG0DzSqYPbnzBBnrKFXUllH6Zg6Qw=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
    },
    {
      id: "12",
      titleRU: "CSS. Карманный справочник",
      titleEN: "CSS Pocket Reference",
      authorsRU: "Эрик А. Мейер",
      authorsEN: "Eric A. Meyer",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/135656602/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/CSS-Pocket-Reference-Visual-Presentation/dp/1492033391/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920146353.do"
      },
      lengthRU: "288",
      lengthEN: "206",
      lang: ["English", "Русский"],
      date: "2018",
      free: false,
      descRU:
        "<p>Работая с каскадными таблицами стилей (CSS), читатель может быстро найти нужный ответ в этом удобном кратком справочнике, в котором предоставляются все основные сведения, необходимые для оперативной реализации CSS. Этот карманный справочник идеально подходит для веб-разработчиков от промежуточного до продвинутого уровня квалификации, а его четвертое издание дополнено согласно спецификации CSS3. Помимо полного перечня в алфавитном порядке селекторов и свойств CSS3, вы найдете в этом издании краткое введение в основные понятия CSS. В основу этого справочника положен материал книги CSS. Каскадные таблицы стилей. Подробное руководство того же автора. Он служит удобной памяткой по спецификациям CSS при решении текущих задач веб-разработки. «CSS. Карманный справочник» поможет вам: Быстро найти и адаптировать нужные элементы стилевого оформления Узнать, каким образом средства CSS3 дополняют и расширяют ваши практические навыки применения CSS Обнаружить новые типы значений и новые CSS-селекторы Реализовать падающие тени, несколько задних планов, скругленные углы и изображения границ элементов разметки веб-страниц Получить новые сведения о преобразованиях и переходах.</p>",
      descEN:
        "<p>When you’re working with CSS and need an answer now, this concise yet comprehensive quick reference provides the essential information you need. Revised and updated for CSS3, this fifth edition is ideal for intermediate to advanced web designers and developers.</p><p>You’ll find a short introduction to the key concepts of CSS and alphabetical summaries of CSS selectors and properties. You’ll also discover information on new properties, including grid, flexbox, clipping, masking, and compositing.</p><ul><li>Quickly find the information you need</li><li>Explore CSS concepts, values, selectors and queries, and properties</li><li>Learn how new features complement and extend your CSS practices</li><li>Discover new properties including animations, grid, flexbox, masking, filtering, and compositing in this new edition</li></ul>",
      tag: ["1", "2", "5", "19", "29"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1014275857.jpg",
      pictureEN:
        "https://d1b14unh5d6w7g.cloudfront.net/1492033391.01.S001.LXXXXXXX.jpg?Expires=1534537897&Signature=YUB5i/HWywm/XvwVxV5e82gCw6umZPi4ClYZ/qmun5nWfrUH48q1UGsTRMwfy7BBj0sL7l/qp7k11ul2HgBjeB3rVyepUTqyPFIlQ4/Fc3PM1tjXRPEivzbJmEh4hUSl6UwVAKyHt+FiWUkO5wJYINrOegA/ioQs3laCL2SfzN0=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
    },
    {
      id: "13",
      titleRU: "Flexbox in CSS",
      titleEN: "Flexbox in CSS",
      authorsRU: "Эстель Вейль",
      authorsEN: "Estelle Weyl",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Flexbox-CSS-Estelle-Weyl-ebook/dp/B072JHT5L4/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920066682.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Flexbox-CSS-Estelle-Weyl-ebook/dp/B072JHT5L4/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920066682.do"
      },
      lengthRU: "232",
      lengthEN: "232",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>Layout designers rejoice: now you can greatly simplify the task of laying out your web page or application with Flexbox, the CSS Flexible Box Module. In this concise guide, author Estelle Weyl shows you how, with just few lines of code, you can easily create almost any responsive feature your site requires—whether it’s a widget, carousel, or anything else your designer dreams up. You’ll learn how to put your newfound knowledge of Flexbox into practice through several hands-on examples.</p><p>Short and deep, this book is an excerpt from the upcoming fourth edition of CSS: The Definitive Guide. When you purchase the ebook edition of Flexbox in CSS, you’ll receive a discount on the entire Definitive Guide once it’s released. Why wait? Learn how to make your web pages come alive today.</p><ul><li>Solve layout challenges for applications that grow, shrink, or change orientation on different viewports</li><li>Specify the direction material flows, how content wraps, and ways that components expand to fill a space—without altering the underlying markup</li><li>Explore CSS properties that apply to the flex container, and those that impact the layout of individual flex items</li><li>Work with examples for a responsive two-column layout, a power grid home page, sticky footer, and a calendar</li></ul>",
      descEN:
        "<p>Layout designers rejoice: now you can greatly simplify the task of laying out your web page or application with Flexbox, the CSS Flexible Box Module. In this concise guide, author Estelle Weyl shows you how, with just few lines of code, you can easily create almost any responsive feature your site requires—whether it’s a widget, carousel, or anything else your designer dreams up. You’ll learn how to put your newfound knowledge of Flexbox into practice through several hands-on examples.</p><p>Short and deep, this book is an excerpt from the upcoming fourth edition of CSS: The Definitive Guide. When you purchase the ebook edition of Flexbox in CSS, you’ll receive a discount on the entire Definitive Guide once it’s released. Why wait? Learn how to make your web pages come alive today.</p><ul><li>Solve layout challenges for applications that grow, shrink, or change orientation on different viewports</li><li>Specify the direction material flows, how content wraps, and ways that components expand to fill a space—without altering the underlying markup</li><li>Explore CSS properties that apply to the flex container, and those that impact the layout of individual flex items</li><li>Work with examples for a responsive two-column layout, a power grid home page, sticky footer, and a calendar</li></ul>",
      tag: ["2", "5", "18"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920066682/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920066682/lrg.jpg"
    },
    {
      id: "14",
      titleRU: "CSS: The Definitive Guide: Visual Presentation for the Web",
      titleEN: "CSS: The Definitive Guide: Visual Presentation for the Web",
      authorsRU: "Эрик Мейер, Эстель Вейль",
      authorsEN: "Eric Meyer, Estelle Weyl",
      linkRU: {
        Amazon:
          "https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920012726.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920012726.do"
      },
      lengthRU: "1090",
      lengthEN: "1090",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>If you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you. This revised edition provides a comprehensive guide to CSS implementation, along with a thorough review of the latest CSS specifications.</p><p>CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows. It is used by all browsers on all screen sizes on all types of IoT devices, including phones, computers, video games, televisions, watches, kiosks, and auto consoles. Authors Eric Meyer and Estelle Weyl show you how to improve user experience, speed development, avoid potential bugs, and add life and depth to your applications through layout, transitions and animations, borders, backgrounds, text properties, and many other tools and techniques.</p><p>This guide covers:</p><ul><li>Selectors, specificity, and the cascade</li><li>Values, units, fonts, and text properties</li><li>Padding, borders, outlines, and margins</li><li>Colors, backgrounds, and gradients</li><li>Floats and positioning tricks</li><li>Flexible box layout</li><li>The new Grid layout system</li><li>2D and 3D transforms, transitions, and animation</li><li>Filters, blending, clipping, and masking</li><li>Media and feature queries</li></ul>",
      descEN:
        "<p>If you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you. This revised edition provides a comprehensive guide to CSS implementation, along with a thorough review of the latest CSS specifications.</p><p>CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows. It is used by all browsers on all screen sizes on all types of IoT devices, including phones, computers, video games, televisions, watches, kiosks, and auto consoles. Authors Eric Meyer and Estelle Weyl show you how to improve user experience, speed development, avoid potential bugs, and add life and depth to your applications through layout, transitions and animations, borders, backgrounds, text properties, and many other tools and techniques.</p><p>This guide covers:</p><ul><li>Selectors, specificity, and the cascade</li><li>Values, units, fonts, and text properties</li><li>Padding, borders, outlines, and margins</li><li>Colors, backgrounds, and gradients</li><li>Floats and positioning tricks</li><li>Flexible box layout</li><li>The new Grid layout system</li><li>2D and 3D transforms, transitions, and animation</li><li>Filters, blending, clipping, and masking</li><li>Media and feature queries</li></ul>",
      tag: ["2", "5", "28", "29", "20"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920012726/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920012726/lrg.jpg"
    },
    {
      id: "15",
      titleRU: "Using SVG with CSS3 and HTML5",
      titleEN: "Using SVG with CSS3 and HTML5",
      authorsRU: "Курт Кэгл, Амелия Беллами-Ройдс, Дадли Стори",
      authorsEN: "Kurt Cagle, Amelia Bellamy-Royds, Dudley Storey",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics/dp/1491921978/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920037972.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics/dp/1491921978/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920037972.do"
      },
      lengthRU: "844",
      lengthEN: "844",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>Using Scalable Vector Graphics (SVG) for illustrations only scratches the surface of this format’s potential on the web. With this practical guide, you’ll learn how to use SVG not only for illustrations but also as graphical documents that you can integrate into complex HTML5 web pages, and style with custom CSS. Web developers will discover ways to adapt designs by adding data based graphics, dynamic styles, interaction, or animation.</p><p>Divided into five parts, this book includes:</p><ul><li>SVG on the web: Understand how SVG works with HTML, CSS, and JavaScript to define graphics</li><li>Drawing with markup: Learn the vector language of x and y coordinates that let SVG create basic and custom shapes</li><li>Putting graphics in their place: Use the coordinate system to draw SVG shapes and text at different scales and positions</li><li>Artistic touches: Explore how color is used, how strokes are created and manipulated, and how graphical effects like filters, clipping, and masking are applied</li><li>SVG as an application: Make your graphic more accessible to humans and computers, and learn how to make it interactive or animated</li></ul>",
      descEN:
        "<p>Using Scalable Vector Graphics (SVG) for illustrations only scratches the surface of this format’s potential on the web. With this practical guide, you’ll learn how to use SVG not only for illustrations but also as graphical documents that you can integrate into complex HTML5 web pages, and style with custom CSS. Web developers will discover ways to adapt designs by adding data based graphics, dynamic styles, interaction, or animation.</p><p>Divided into five parts, this book includes:</p><ul><li>SVG on the web: Understand how SVG works with HTML, CSS, and JavaScript to define graphics</li><li>Drawing with markup: Learn the vector language of x and y coordinates that let SVG create basic and custom shapes</li><li>Putting graphics in their place: Use the coordinate system to draw SVG shapes and text at different scales and positions</li><li>Artistic touches: Explore how color is used, how strokes are created and manipulated, and how graphical effects like filters, clipping, and masking are applied</li><li>SVG as an application: Make your graphic more accessible to humans and computers, and learn how to make it interactive or animated</li></ul>",
      tag: ["2", "24", "29", "20"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920037972/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920037972/lrg.jpg"
    },
    {
      id: "16",
      titleRU: "SVG Animations",
      titleEN: "SVG Animations",
      authorsRU: "Сара Дреснер",
      authorsEN: "Sarah Drasner",
      linkRU: {
        Amazon:
          "https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920045335.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920045335.do"
      },
      lengthRU: "246",
      lengthEN: "246",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>SVG is extremely powerful, with its reduced HTTP requests and crispness on any display. It becomes increasingly more interesting as you explore its capabilities for responsive animation and performance boons. When you animate SVG, you must be aware of normal image traits like composition, color, implementation, and optimization. But when you animate, it increases the complexity of each of these factors exponentially.</p><p>This practical book takes a deep dive into how you can to solve these problems with stability, performance, and creativity in mind.</p><ul><li>Learn how to make SVG cross-browser compatible, backwards compatible, optimized, and responsive</li><li>Plan and debug animation</li><li>Make a complex animation responsive, as many sites are responsive</li><li>Profile each animation technique in terms of performance so that you know what you're getting in to with each library or native technology</li></ul>",
      descEN:
        "<p>SVG is extremely powerful, with its reduced HTTP requests and crispness on any display. It becomes increasingly more interesting as you explore its capabilities for responsive animation and performance boons. When you animate SVG, you must be aware of normal image traits like composition, color, implementation, and optimization. But when you animate, it increases the complexity of each of these factors exponentially.</p><p>This practical book takes a deep dive into how you can to solve these problems with stability, performance, and creativity in mind.</p><ul><li>Learn how to make SVG cross-browser compatible, backwards compatible, optimized, and responsive</li><li>Plan and debug animation</li><li>Make a complex animation responsive, as many sites are responsive</li><li>Profile each animation technique in terms of performance so that you know what you're getting in to with each library or native technology</li></ul>",
      tag: ["2", "5", "29", "20"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920045335/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920045335/lrg.jpg"
    }
  ],
  tags: [
    {
      id: "1",
      tagGroup: "lang",
      titleRU: "На русском",
      titleEN: "In Russian",
      language: "ru"
    },
    {
      id: "2",
      tagGroup: "lang",
      titleRU: "На английском",
      titleEN: "In English",
      language: "all"
    },
    {
      id: "8",
      tagGroup: "tech",
      titleRU: "JavaScript",
      titleEN: "JavaScript",
      language: "all"
    },
    {
      id: "7",
      tagGroup: "tech",
      titleRU: "HTML",
      titleEN: "HTML",
      language: "all"
    },
    {
      id: "5",
      tagGroup: "tech",
      titleRU: "CSS",
      titleEN: "CSS",
      language: "all"
    },
    {
      id: "9",
      tagGroup: "tech",
      titleRU: "Node.js",
      titleEN: "Node.js",
      language: "all"
    },
    {
      id: "6",
      tagGroup: "tech",
      titleRU: "GIT",
      titleEN: "GIT",
      language: "all"
    },
    {
      id: "3",
      tagGroup: "tech",
      titleRU: "Angular",
      titleEN: "Angular",
      language: "all"
    },
    {
      id: "10",
      tagGroup: "tech",
      titleRU: "React",
      titleEN: "React",
      language: "all"
    },
    {
      id: "11",
      tagGroup: "tech",
      titleRU: "Redux",
      titleEN: "Redux",
      language: "all"
    },
    {
      id: "14",
      tagGroup: "tech",
      titleRU: "Vue",
      titleEN: "Vue",
      language: "all"
    },
    {
      id: "12",
      tagGroup: "tech",
      titleRU: "TypeScript",
      titleEN: "TypeScript",
      language: "all"
    },
    {
      id: "13",
      tagGroup: "tech",
      titleRU: "Flow",
      titleEN: "Flow",
      language: "all"
    },
    {
      id: "4",
      tagGroup: "tech",
      titleRU: "Babel",
      titleEN: "Babel",
      language: "all"
    },
    {
      id: "15",
      tagGroup: "tech",
      titleRU: "Webpack",
      titleEN: "Webpack",
      language: "all"
    },
    {
      id: "17",
      tagGroup: "tech",
      titleRU: "npm",
      titleEN: "npm",
      language: "all"
    },
    {
      id: "16",
      tagGroup: "tech",
      titleRU: "jQuery",
      titleEN: "jQuery",
      language: "all"
    },
    {
      id: "24",
      tagGroup: "tech",
      titleRU: "SVG",
      titleEN: "SVG",
      language: "all"
    },
    {
      id: "22",
      tagGroup: "tech",
      titleRU: "Canvas",
      titleEN: "Canvas",
      language: "all"
    },
    {
      id: "25",
      tagGroup: "tech",
      titleRU: "WebGL",
      titleEN: "WebGL",
      language: "all"
    },
    {
      id: "27",
      tagGroup: "tech",
      titleRU: "Тестирование",
      titleEN: "Testing",
      language: "all"
    },
    {
      id: "26",
      tagGroup: "tech",
      titleRU: "Дизайн",
      titleEN: "Design",
      language: "all"
    },
    {
      id: "28",
      tagGroup: "tech",
      titleRU: "Доступность",
      titleEN: "Accessibility",
      language: "all"
    },
    {
      id: "29",
      tagGroup: "tech",
      titleRU: "Анимация",
      titleEN: "Animation",
      language: "all"
    },
    {
      id: "21",
      tagGroup: "tech",
      titleRU: "Разработка веб-приложений",
      titleEN: "Building web-applications",
      language: "all"
    },
    {
      id: "23",
      tagGroup: "tech",
      titleRU: "Шаблоны проектирования",
      titleEN: "Design Patterns",
      language: "all"
    },
    {
      id: "18",
      tagGroup: "level",
      titleRU: "Начальный уровень",
      titleEN: "First level",
      language: "all"
    },
    {
      id: "19",
      tagGroup: "level",
      titleRU: "Средний уровень",
      titleEN: "Average level",
      language: "all"
    },
    {
      id: "20",
      tagGroup: "level",
      titleRU: "Продвинутый уровень",
      titleEN: "Advanced level",
      language: "all"
    }
  ]
};

export default data;
