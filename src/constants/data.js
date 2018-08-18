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
    },
    {
      id: "17",
      titleRU: "SVG Essentials",
      titleEN: "SVG Essentials",
      authorsRU: "Дж. Айзенберг, Амелия Беллами-Ройдс",
      authorsEN: "J. Eisenberg, Amelia Bellamy-Royds",
      linkRU: {
        Amazon:
          "https://www.amazon.com/SVG-Essentials-Producing-Scalable-Graphics/dp/1449374352/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920032335.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/SVG-Essentials-Producing-Scalable-Graphics/dp/1449374352/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920032335.do"
      },
      lengthRU: "360",
      lengthEN: "360",
      lang: ["English"],
      date: "2014",
      free: false,
      descRU:
        "<p>Learn the essentials of Scalable Vector Graphics, the mark-up language used by most vector drawing programs and interactive web graphics tools. SVG Essentials takes you through SVG’s capabilities, beginning with simple line drawings and moving through complicated features such as filters, transformations, gradients, and patterns.</p><p>This thoroughly updated edition includes expanded coverage of animation, interactive graphics, and scripting SVG. Interactive examples online make it easy for you to experiment with SVG features in your web browser. Geared toward experienced designers, this book also includes appendices that explain basic concepts such as XML markup and CSS styling, so even if you have no web design experience, you can start learning SVG.</p><ul><li>Create and style graphics to match your web design in a way that looks great when printed or displayed on high-resolution screens</li><li>Make your charts and decorative headings accessible to search engines and assistive technologies</li><li>Add artistic effects to your graphics, text, and photographs using SVG masks, filters, and transformations</li><li>Animate graphics with SVG markup, or add interactivity with CSS and JavaScript</li><li>Create SVG from existing vector data or XML data, using programming languages and XSLT</li></ul>",
      descEN:
        "<p>Learn the essentials of Scalable Vector Graphics, the mark-up language used by most vector drawing programs and interactive web graphics tools. SVG Essentials takes you through SVG’s capabilities, beginning with simple line drawings and moving through complicated features such as filters, transformations, gradients, and patterns.</p><p>This thoroughly updated edition includes expanded coverage of animation, interactive graphics, and scripting SVG. Interactive examples online make it easy for you to experiment with SVG features in your web browser. Geared toward experienced designers, this book also includes appendices that explain basic concepts such as XML markup and CSS styling, so even if you have no web design experience, you can start learning SVG.</p><ul><li>Create and style graphics to match your web design in a way that looks great when printed or displayed on high-resolution screens</li><li>Make your charts and decorative headings accessible to search engines and assistive technologies</li><li>Add artistic effects to your graphics, text, and photographs using SVG masks, filters, and transformations</li><li>Animate graphics with SVG markup, or add interactivity with CSS and JavaScript</li><li>Create SVG from existing vector data or XML data, using programming languages and XSLT</li></ul>",
      tag: ["2", "24", "20", "29"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920032335/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920032335/lrg.jpg"
    },
    {
      id: "18",
      titleRU: "Programming 3D Applications with HTML5 and WebGL",
      titleEN: "Programming 3D Applications with HTML5 and WebGL",
      authorsRU: "Тони Паризи",
      authorsEN: "Tony Parisi",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Programming-Applications-HTML5-WebGL-Visualization/dp/1449362966/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920029205.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Programming-Applications-HTML5-WebGL-Visualization/dp/1449362966/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920029205.do"
      },
      lengthRU: "404",
      lengthEN: "404",
      lang: ["English"],
      date: "2014",
      free: false,
      descRU:
        "<p>Create high-performance, visually stunning 3D applications for the Web, using HTML5 and related technologies such as CSS3 and WebGL—the emerging web graphics standard. With this book, you’ll learn how to use the tools, frameworks, and libraries for building 3D models and animations, mind-blowing visual effects, and advanced user interaction in both desktop and mobile browsers.</p><p>In two parts—Foundations and Application Development Techniques—author Tony Parisi provides a thorough grounding in theory and practice for designing everything from a simple 3D product viewer to immersive games and interactive training systems. Ideal for developers with Javascript and HTML experience.</p><ul><li>Explore HTML5 APIs and related technologies for creating 3D web graphics, including WebGL, Canvas, and CSS</li><li>Work with the popular JavaScript 3D rendering and animation libraries Three.js and Tween.js</li><li>Delve into the 3D content creation pipeline, and the modeling and animation tools for creating killer 3D content</li><li>Look into several game engines and frameworks for building 3D applications, including the author’s Vizi framework</li><li>Create 3D environments with multiple objects and complex interaction, using examples and supporting code</li><li>Examine the issues involved in building WebGL-based 3D applications for mobile browsers</li></ul>",
      descEN:
        "<p>Create high-performance, visually stunning 3D applications for the Web, using HTML5 and related technologies such as CSS3 and WebGL—the emerging web graphics standard. With this book, you’ll learn how to use the tools, frameworks, and libraries for building 3D models and animations, mind-blowing visual effects, and advanced user interaction in both desktop and mobile browsers.</p><p>In two parts—Foundations and Application Development Techniques—author Tony Parisi provides a thorough grounding in theory and practice for designing everything from a simple 3D product viewer to immersive games and interactive training systems. Ideal for developers with Javascript and HTML experience.</p><ul><li>Explore HTML5 APIs and related technologies for creating 3D web graphics, including WebGL, Canvas, and CSS</li><li>Work with the popular JavaScript 3D rendering and animation libraries Three.js and Tween.js</li><li>Delve into the 3D content creation pipeline, and the modeling and animation tools for creating killer 3D content</li><li>Look into several game engines and frameworks for building 3D applications, including the author’s Vizi framework</li><li>Create 3D environments with multiple objects and complex interaction, using examples and supporting code</li><li>Examine the issues involved in building WebGL-based 3D applications for mobile browsers</li></ul>",
      tag: ["2", "7", "8", "22", "25", "29", "20"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920029205/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920029205/lrg.jpg"
    },
    {
      id: "19",
      titleRU: "WebGL. Программирование трехмерной графики",
      titleEN:
        "WebGL Programming Guide: Interactive 3D Graphics Programming with WebGL",
      authorsRU: "Коичи Мацуда, Роджер Ли",
      authorsEN: "Kouichi Matsuda, Rodger Lea",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/31239396/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920/"
      },
      lengthRU: "494",
      lengthEN: "552",
      lang: ["English", "Русский"],
      date: "2013",
      free: false,
      descRU:
        "<p>WebGL является новой веб-технологией, позволяющей использовать в браузере преимущества аппаратного ускорения трехмерной графики без установки дополнительного программного обеспечения. WebGL основана на спецификации OpenGL и привносит новые концепции программирования трехмерной графики в веб- разработку. Снабженная большим количеством примеров, книга показывает, что овладеть технологией WebGL совсем несложно, несмотря на то, что она выглядит незнакомой и инородной. Каждая глава описывает один из важнейших аспектов программирования трехмерной графики и представляет разные варианты их реализации. Отдельные разделы, описывающие эксперименты с примерами программ, позволят читателю исследовать изучаемые концепции на практике.</p><p>Издание предназначено для программистов, желающих научиться использовать в своих веб-проектах 3D- графику.</p>",
      descEN:
        "<p>Using WebGL®, you can create sophisticated interactive 3D graphics inside web browsers, without plug-ins. WebGL makes it possible to build a new generation of 3D web games, user interfaces, and information visualization solutions that will run on any standard web browser, and on PCs, smartphones, tablets, game consoles, or other devices. WebGL Programming Guide will help you get started quickly with interactive WebGL 3D programming, even if you have no prior knowledge of HTML5, JavaScript, 3D graphics, mathematics, or OpenGL.</p><p>You’ll learn step-by-step, through realistic examples, building your skills as you move from simple to complex solutions for building visually appealing web pages and 3D applications with WebGL. Media, 3D graphics, and WebGL pioneers Dr. Kouichi Matsuda and Dr. Rodger Lea offer easy-to-understand tutorials on key aspects of WebGL, plus 100 downloadable sample programs, each demonstrating a specific WebGL topic.</p><p>You’ll move from basic techniques such as rendering, animating, and texturing triangles, all the way to advanced techniques such as fogging, shadowing, shader switching, and displaying 3D models generated by Blender or other authoring tools. This book won’t just teach you WebGL best practices, it will give you a library of code to jumpstart your own projects.</p><p>Coverage includes:</p><ul><li>WebGL’s origin, core concepts, features, advantages, and integration with other web standards</li><li>How <canvas> and basic WebGL functions work together to deliver 3D graphics</li><li>Shader development with OpenGL ES Shading Language (GLSL ES)</li><li>3D scene drawing: representing user views, controlling space volume, clipping, object creation, and perspective</li><li>Achieving greater realism through lighting and hierarchical objects</li><li>Advanced techniques: object manipulation, heads-up displays, alpha blending, shader switching, and more</li><li>Valuable reference appendixes covering key issues ranging from coordinate systems to matrices and shader loading to web browser settings</li></ul>",
      tag: ["1", "2", "22", "25", "19", "29"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1011543755.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51bly7TR9rL._SX382_BO1,204,203,200_.jpg"
    },
    {
      id: "20",
      titleRU: "Professional Git",
      titleEN: "Professional Git",
      authorsRU: "Брент Ластер",
      authorsEN: "Brent Laster",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Professional-Git-Brent-Laster/dp/111928497X/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Professional-Git-Brent-Laster/dp/111928497X/"
      },
      lengthRU: "480",
      lengthEN: "480",
      lang: ["English"],
      date: "2016",
      free: false,
      descRU:
        "<p>Professional Git takes a professional approach to learning this massively popular software development tool, and provides an up-to-date guide for new users. More than just a development manual, this book helps you get into the Git mindset—extensive discussion of corollaries to traditional systems as well as considerations unique to Git help you draw upon existing skills while looking out—and planning for—the differences. Connected labs and exercises are interspersed at key points to reinforce important concepts and deepen your understanding, and a focus on the practical goes beyond technical tutorials to help you integrate the Git model into your real-world workflow.</p><p>Git greatly simplifies the software development cycle, enabling users to create, use, and switch between versions as easily as you switch between files. This book shows you how to harness that power and flexibility to streamline your development cycle.</p><ul><li>Understand the basic Git model and overall workflow</li><li>Learn the Git versions of common source management concepts and commands</li><li>Track changes, work with branches, and take advantage of Git's full functionality</li><li>Avoid trip-ups and missteps common to new users</li></ul><p>Git works with the most popular software development tools and is used by almost all of the major technology companies. More than 40 percent of software developers use it as their primary source control tool, and that number continues to grow; the ability to work effectively with Git is rapidly approaching must-have status, and Professional Git is the comprehensive guide you need to get up to speed quickly.</p>",
      descEN:
        "<p>Professional Git takes a professional approach to learning this massively popular software development tool, and provides an up-to-date guide for new users. More than just a development manual, this book helps you get into the Git mindset—extensive discussion of corollaries to traditional systems as well as considerations unique to Git help you draw upon existing skills while looking out—and planning for—the differences. Connected labs and exercises are interspersed at key points to reinforce important concepts and deepen your understanding, and a focus on the practical goes beyond technical tutorials to help you integrate the Git model into your real-world workflow.</p><p>Git greatly simplifies the software development cycle, enabling users to create, use, and switch between versions as easily as you switch between files. This book shows you how to harness that power and flexibility to streamline your development cycle.</p><ul><li>Understand the basic Git model and overall workflow</li><li>Learn the Git versions of common source management concepts and commands</li><li>Track changes, work with branches, and take advantage of Git's full functionality</li><li>Avoid trip-ups and missteps common to new users</li></ul><p>Git works with the most popular software development tools and is used by almost all of the major technology companies. More than 40 percent of software developers use it as their primary source control tool, and that number continues to grow; the ability to work effectively with Git is rapidly approaching must-have status, and Professional Git is the comprehensive guide you need to get up to speed quickly.</p>",
      tag: ["2", "6"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/51FArnMyTXL._SX396_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51FArnMyTXL._SX396_BO1,204,203,200_.jpg"
    },
    {
      id: "21",
      titleRU: "Git для профессионального программиста",
      titleEN: "",
      authorsRU: "Скотт Чакон, Бен Штрауб",
      authorsEN: "Scott Chacon, Ben Straub",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/33575056/",
        Питер:
          "https://www.piter.com/collection/all/product/git-dlya-professionalnogo-programmista"
      },
      linkEN: {
        Amazon: "https://www.amazon.com/Pro-Git-Scott-Chacon/dp/1484200772/"
      },
      lengthRU: "496",
      lengthEN: "456",
      lang: ["English", "Русский"],
      date: "2014",
      free: false,
      descRU:
        "<p>Эта книга представляет собой обновленное руководство по использованию Git в современных условиях. С тех пор как проект Git - распределенная система управления версиями - был создан Линусом Торвальдсом, прошло много лет, и система Git превратилась в доминирующую систему контроля версий, как для коммерческих целей, так и для проектов с открытым исходным кодом. Эффективный и хорошо реализованный контроль версий необходим для любого успешного веб-проекта. Постепенно эту систему приняли на вооружение практически все сообщества разработчиков ПО с открытым исходным кодом. Появление огромного числа графических интерфейсов для всех платформ и поддержка IDE позволили внедрить Git в операционные системы семейства Windows. Второе издание книги было обновлено для Git-версии 2.0 и уделяет большое внимание GitHub.</p>",
      descEN:
        "<p>Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.</p><p>Effective and well-implemented version control is a necessity for successful web projects, whether large or small. With this book you’ll learn how to master the world of distributed version workflow, use the distributed features of Git to the full, and extend Git to meet your every need.</p><p>Written by Git pros Scott Chacon and Ben Straub, Pro Git (Second Edition) builds on the hugely successful first edition, and is now fully updated for Git version 2.0, as well as including an indispensable chapter on GitHub. It’s the best book for all your Git needs.</p>",
      tag: ["1", "2", "6"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1013148712.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/512fSpHGOmL._SX403_BO1,204,203,200_.jpg"
    },
    {
      id: "22",
      titleRU: "Изучаем Node. Переходим на сторону сервера",
      titleEN: "Learning Node: Moving to the Server-Side",
      authorsRU: "Шелли Пауэрс",
      authorsEN: "Shelley Powers",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/28335862/",
        Питер:
          "https://www.piter.com/collection/all/product/izuchaem-node-perehodim-na-storonu-servera-2-e-izd-dopolnennoe-i-pererabotannoe"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Learning-Node-Server-Side-Shelley-Powers/dp/1491943122/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920046936.do"
      },
      lengthRU: "304",
      lengthEN: "288",
      lang: ["English", "Русский"],
      date: "2016",
      free: false,
      descRU:
        "<p>Технология Node.js всё еще молода и в то же время существует достаточно долго, чтобы крупные корпорации (LinkedIn, Yahoo! и Netflix) взяли ее на вооружение. </p><p>Эта книга посвящена Node и тем модулям, которые образуют базовую функциональность Node. Вы начнете знакомство с основ создания веб-сервера и базовых функциональностей, а затем перейдете к системе модулей, REPL, разработке приложений, проблемам безопасности, дочерним процессам, познакомитесь с новыми функциональностями, появившимися в ES6, комплексной разработкой (Express, MongoDB, Redis, AngularJS и Backbone.js), приемами разработки приложений и, наконец, с использованием Node в других областях, таких как микроконтроллеры и «интернет вещей».</p>",
      descEN:
        "<p>Take your web development skills from browser to server with Node—and learn how to write fast, highly scalable network applications on this JavaScript-based platform. Updated for the latest Node Long Term Support (LTS) and Node Current (6.0) releases, this hands-on edition helps you master Node’s core fundamentals and gain experience with several built-in and contributed modules.</p><p>Get up to speed on Node’s event-driven, asynchronous I/O model for developing data-intensive applications that are frequently accessed but computationally simple. If you’re comfortable working with JavaScript, this book provides many programming and deployment examples to help you take advantage of server-side development with Node.</p><ul><li>Explore the frameworks and functionality for full-stack Node development</li><li>Dive into Node’s module system and package management support</li><li>Test your application or module code on the fly with Node’s REPL console</li><li>Use core Node modules to build web applications and an HTTP server</li><li>Learn Node’s support for networks, security, and sockets</li><li>Access operating system functionality with child processes</li><li>Learn tools and techniques for Node development and production</li><li>Use Node in microcontrollers, microcomputers, and the Internet of Things</li></ul>",
      tag: ["1", "2", "9", "19"],
      pictureRU:
        "https://static-eu.insales.ru/images/products/1/6331/100751547/49602941.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51kMsrX%2BxJL._SX382_BO1,204,203,200_.jpg"
    },
    {
      id: "23",
      titleRU: "Шаблоны проектирования Node.JS",
      titleEN: "Node.js Design Patterns",
      authorsRU: "Марио Каскиаро, Лучано Маммино",
      authorsEN: "Mario Casciaro, Luciano Mammino",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/141553158/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Node-js-Design-Patterns-server-side-applications/dp/1785885588/"
      },
      lengthRU: "396",
      lengthEN: "526",
      lang: ["English", "Русский"],
      date: "2016",
      free: false,
      descRU:
        "<p>Воспользуйтесь самыми мощными компонентами и шаблонами платформы Node.js для создания масштабируемых модульных приложений!</p><p>Node.js – популярная программная платформа, позволяющая легко и просто создавать масштабируемые серверные приложения на языке JavaScript. Она дает возможность писать эффективный и надежный код на единственном языке, с непревзойденным уровнем пригодности к повторному использованию, используя при этом полный стек технологий.</p><p>В книге описаны асинхронная, однопоточная архитектура платформы, а также шаблоны асинхронного управления потоком выполнения и потоками данных. Рассмотрен подробный список реализаций распространенных, а также некоторых уникальных шаблонов проектирования в Node.js. В конце книги предложено детальное обсуждение более продвинутых идей, таких как «универсальный JavaScript» и масштабируемость. А в заключение перечислены основные идеи Node.js, которые пригодятся для создания приложений уровня предприятия.</p>",
      descEN:
        "<p><b>About This Book</b></p><ul><li>Create reusable patterns and modules by leveraging the new features of Node.js</li><li>Understand the asynchronous single thread design of node and grasp all its features and patterns to take advantage of various functions.</li><li>This unique guide will help you get the most out of Node.js and its ecosystem.</li></ul><p><b>Who This Book Is For</b></p><p>The book is meant for developers and software architects with a basic working knowledge of JavaScript who are interested in acquiring a deeper understanding of how to design and develop enterprise-level Node.js applications.</p><p>Basic knowledge of Node.js is also helpful to get the most out of this book.</p><p><b>What You Will Learn</b></p><ul><li>Design and implement a series of server-side JavaScript patterns so you understand why and when to apply them in different use case scenarios</li><li>Become comfortable with writing asynchronous code by leveraging constructs such as callbacks, promises, generators and the async-await syntax</li><li>Identify the most important concerns and apply unique tricks to achieve higher scalability and modularity in your Node.js application</li><li>Untangle your modules by organizing and connecting them coherently</li><li>Reuse well-known techniques to solve common design and coding issues</li><li>Explore the latest trends in Universal JavaScript, learn how to write code that runs on both Node.js and the browser and leverage React and its ecosystem to implement universal applications</li></ul><p><b>In Detail</b></p><p>Node.js is a massively popular software platform that lets you use JavaScript to easily create scalable server-side applications. It allows you to create efficient code, enabling a more sustainable way of writing software made of only one language across the full stack, along with extreme levels of reusability, pragmatism, simplicity, and collaboration. Node.js is revolutionizing the web and the way people and companies create their software.</p><p>In this book, we will take you on a journey across various ideas and components, and the challenges you would commonly encounter while designing and developing software using the Node.js platform. You will also discover the 'Node.js way' of dealing with design and coding decisions.</p><p>The book kicks off by exploring the basics of Node.js describing its asynchronous single-threaded architecture and the main design patterns. It then shows you how to master the asynchronous control flow patterns, and the stream component and it culminates into a detailed list of Node.js implementations of the most common design patterns, as well as some specific design patterns that are exclusive to the Node.js world. Lastly, it dives into more advanced concepts such as Universal Javascript, and scalability, concluding the journey by giving you all the necessary concepts to be able to build an enterprise grade application using Node.js.</p>",
      tag: ["1", "2", "8", "9", "21", "23", "20"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1019691091.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/41OYZ2gUtXL._SX404_BO1,204,203,200_.jpg"
    },
    {
      id: "24",
      titleRU: "Node.js в действии",
      titleEN: "Node.js in Action",
      authorsRU: "Майк Кантелон, Алекс Янг, Брэдли Мек",
      authorsEN:
        "Alex R. Young, Bradley Meck, Mike Cantelon, Tim Oxley, Marc Harter, TJ Holowaychuk, Nathan Rajlich",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/145883004/",
        Питер:
          "https://www.piter.com/collection/all/product/nodejs-v-deystvii-2-e-izdanie"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Node-js-Action-Alex-R-Young/dp/1617292575/"
      },
      lengthRU: "428",
      lengthEN: "392",
      lang: ["English", "Русский"],
      date: "2017",
      free: false,
      descRU:
        "<p>Второе издание «Node.js в действии» было полностью переработано, чтобы отражать реалии, с которыми теперь сталкивается каждый Node-разработчик. Вы узнаете о системах построения интерфейса и популярных веб-фреймворках Node, а также научитесь строить веб-приложения на базе Express с нуля. Теперь вы сможете узнать не только о Node и JavaScript, но и получить всю информацию, включая системы построения фронтэнда, выбор веб-фреймворка, работу с базами данных в Node, тестирование и развертывание веб-приложений. </p><p>Технология Node все чаще используется в сочетании с инструментами командной строки и настольными приложениями на базе Electron, поэтому в книгу были включены главы, посвященные обеим областям.</p>",
      descEN:
        "<p><b>Summary</b></p><p>Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.</p><p><b>About the Technology</b></p><p>You already know JavaScript. The trick to mastering Node.js is learning how to build applications that fully exploit its powerful asynchronous event handling and non-blocking I/O features. The Node server radically simplifies event-driven real-time apps like chat, games, and live data analytics, and with its incredibly rich ecosystem of modules, tools, and libraries, it's hard to beat!</p><p><b>About the Book</b></p><p>Based on the bestselling first edition, Node.js in Action, Second Edition is a completely new book. Packed with practical examples, it teaches you how to create high-performance web servers using JavaScript and Node. You'll master key design concepts such as asynchronous programming, state management, and event-driven programming. And you'll learn to put together MVC servers using Express and Connect, design web APIs, and set up the perfect production environment to build, lint, and test.</p><p><b>What's Inside</b></p><ul><li>Mastering non-blocking I/O</li><li>The Node event loop</li><li>Testing and deploying</li><li>Web application templating</li></ul><p><b>About the Reader</b></p><p>Written for web developers with intermediate JavaScript skills.</p>",
      tag: ["1", "2", "9", "19", "21"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1023401396.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51miw4GCK5L._SX397_BO1,204,203,200_.jpg"
    },
    {
      id: "25",
      titleRU: "Learning Node.js Development",
      titleEN: "Learning Node.js Development",
      authorsRU: "Эндрю Мид",
      authorsEN: "Andrew Mead",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Learning-Node-js-Development-fundamentals-applications/dp/1788395549/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Learning-Node-js-Development-fundamentals-applications/dp/1788395549/"
      },
      lengthRU: "658",
      lengthEN: "658",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU: "",
      descEN:
        '<p><b>Key Features</b></p><ul><li>Entirely project-based and practical</li><li>Explains the "Why" of Node.js features, not just the "how", providing you with a deep understanding and enabling you to easily apply concepts in your own applications</li><li>Covers the full range of technologies around Node.js - NPM, version control with Git, and much more</li></ul><p><b>Book Description</b></p><p>Learning Node.js Development is a practical, project-based book that provides you with all you need to get started as a Node.js developer. Node is a ubiquitous technology on the modern web, and an essential part of any web developers\' toolkit. If you are looking to create real-world Node applications, or you want to switch careers or launch a side project to generate some extra income, then you\'re in the right place. This book has been written around a single goal-turning you into a professional Node developer capable of developing, testing, and deploying real-world production applications.</p><p>Learning Node.js Development is built from the ground up around the latest version of Node.js (version 9.x.x). You\'ll be learning all the cutting-edge features available only in the latest software versions.</p><p>This book cuts through the mass of information available around Node and delivers the essential skills that you need to become a Node developer. It takes you through creating complete apps and understanding how to build, deploy, and test your own Node apps. It maps out everything in a comprehensive, easy-to-follow package designed to get you up and running quickly.</p><p><b>What you will learn</b></p><ul><li>Learn the fundamentals of Node</li><li>Build apps that respond to user input</li><li>Master working with servers</li><li>Learn how to test and debug applications</li><li>Deploy and update your apps in the real world</li><li>Create responsive asynchronous web applications</li></ul><p><b>Who This Book Is For</b></p><p>This book targets anyone looking to launch their own Node applications, switch careers, or freelance as a Node developer. You should have a basic understanding of JavaScript in order to follow this course.</p>',
      tag: ["2", "9", "6", "17", "21", "27", "19"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/41a1IjKICeL._SX404_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/41a1IjKICeL._SX404_BO1,204,203,200_.jpg"
    },
    {
      id: "26",
      titleRU: "TypeScript High Performance",
      titleEN: "TypeScript High Performance",
      authorsRU: "Ajinkya Kher",
      authorsEN: "Ajinkya Kher",
      linkRU: {
        Amazon:
          "https://www.amazon.com/TypeScript-High-Performance-Ajinkya-Kher/dp/1785288644/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/TypeScript-High-Performance-Ajinkya-Kher/dp/1785288644/"
      },
      lengthRU: "230",
      lengthEN: "230",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU: "",
      descEN:
        "<p><b>Key Features</b></p><ul><li>Efficiently use Data Structures, Language Constructs, & Handle Asynchrony</li><li>Monitor the performance, Code Quality, & Resource Optimizations</li><li>Build & Deploy Strategies for Large Scale TypeScript Projects</li></ul><p><b>Book Description</b></p><p>In a world where a tiny decrease in frames per second impacts customer engagement greatly, writing highly scalable code is more of a necessity than a luxury. Using TypeScript you get type checking during development. This gives you the power to write optimized code quickly. This book is also a solid tool to those who're curious to understand the impact of performance in production, and it is of the greatest aid to the proactive developers who like to be cognizant of and avoid the classic pitfalls while coding.</p><p>The book will starts with explaining the efficient implementation of basic data Structures, data types, and flow control. You will then learn efficient use of advanced language constructs and asynchronous programming. Further, you'll learn different configurations available with TSLint to improve code quality and performance. Next, we'll introduce you to the concepts of profiling and then we deep dive into profiling JS with several tools such as firebug, chrome, fiddler. Finally, you'll learn techniques to build and deploy real world large scale TypeScript applications.</p><p><b>What you will learn</b></p><ul><li>Learn about the critical rendering path, and the performance metrics involved along the same</li><li>Explore the detailed inner intricacies of a web browser</li><li>Build a large scale front end applications and learn the thought process behind architecting such an effort</li><li>Understand the challenges of scalability and how TypeScript renders itself</li></ul>",
      tag: ["2", "12"],
      pictureRU:
        "https://d188rgcu4zozwl.cloudfront.net/content/B071VVFD4D/resources/749616172",
      pictureEN:
        "https://d188rgcu4zozwl.cloudfront.net/content/B071VVFD4D/resources/749616172"
    },
    {
      id: "27",
      titleRU: "jQuery в действии",
      titleEN: "jQuery in Action",
      authorsRU: "Беэр Бибо, Иегуда Кац, Аурелио де Роза",
      authorsEN: "Bear Bibeault, Yehuda Katz, Aurelio De Rosa",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/141523573/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/jQuery-Action-Bear-Bibeault/dp/1617292079/"
      },
      lengthRU: "528",
      lengthEN: "504",
      lang: ["English", "Русский"],
      date: "2015",
      free: false,
      descRU:
        '<p>Третье издание книги "jQuery в действии" - это динамичное и исчерпывающее руководство по библиотеке jQuery. В книге рассматриваются задачи, с которыми приходится сталкиваться при реализации практически любого веб-проекта. Книга ориентирована на читателей, обладающих минимальным опытом JavaScript, содержит новые примеры и упражнения, а также глубоко и практично раскрывает темы, связанные с этой библиотекой. Вы узнаете, как делать обход HTML-документов, обрабатывать события, создавать анимацию, писать плагины, и даже освоите модульное тестирование кода. Уникальные лабораторные работы помогают закрепить каждую концепцию на реальных примерах кода. В книгу добавлено несколько новых глав, из которых вы узнаете, как работать с новейшими фреймворками и одностраничными приложениями.</p>',
      descEN:
        "<p>jQuery in Action, Third Edition, is a fast-paced and complete guide to jQuery, focused on the tasks you'll face in nearly any web dev project. Written for readers with minimal JavaScript experience, this revised edition adds new examples and exercises, along with the deep and practical coverage you expect from an In Action book. You'll learn how to traverse HTML documents, handle events, perform animations, write plugins, and even unit test your code. The unique lab pages anchor each concept with real-world code. Several new chapters teach you how to interact with other tools and frameworks to build modern single-page web applications.</p><p>Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.</p><p><b>About the Technology</b></p><p>Thanks to jQuery, no one remembers the bad old days when programmers manually managed browser inconsistencies, CSS selectors support, and DOM navigation, and when every animation was a frustrating exercise in raw JavaScript. The elegant, intuitive jQuery library beautifully manages these concerns, and jQuery 3 adds even more features to make your life as a web developer smooth and productive.</p><p><b>About the Book</b></p><p>jQuery in Action, Third Edition, is a fast-paced guide to jQuery, focused on the tasks you'll face in nearly any web dev project. In it, you'll learn how to traverse the DOM, handle events, perform animations, write jQuery plugins, perform Ajax requests, and even unit test your code. Its unique Lab Pages anchor each concept in real-world code. This expanded Third Edition adds new chapters that teach you how to interact with other tools and frameworks and build modern single-page web applications.</p><ul><li>Updated for jQuery 3</li><li>DOM manipulation and event handling</li><li>Animations and effects</li><li>Advanced topics including Unit Testing and Promises</li><li>Practical examples and labs</li></ul>",
      tag: ["1", "2", "16", "18"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1019609580.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51yeevyIBuL._SX396_BO1,204,203,200_.jpg"
    },
    {
      id: "28",
      titleRU: "JavaScript и jQuery. Исчерпывающее руководство",
      titleEN: "JavaScript & jQuery: The Missing Manual",
      authorsRU: "Дэвид Сойер Макфарланд",
      authorsEN: "David Sawyer McFarland",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/33835343/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/JavaScript-jQuery-David-Sawyer-McFarland/dp/1491947071/"
      },
      lengthRU: "880",
      lengthEN: "686",
      lang: ["English", "Русский"],
      date: "2014",
      free: false,
      descRU:
        "<p>Язык программирования JavaScript позволяет усовершенствовать ваши веб-страницы с помощью анимации, интерактивных элементов и визуальных эффектов, но его не так просто изучить и освоить. Новое, обновленное и расширенное издание уже ставшей классикой книги доступно объясняет основы языка JavaScript и показывает, как можно экономить время и силы с помощью библиотеки jQuery, содержащей готовые фрагменты кода JavaScript, и новейшего плагина jQuery UI. Прочитав эту книгу вы сможете:</p><ul><li>Сделать свои страницы интерактивными. Используйте библиотеку jQuery для создания интерактивных элементов, реагирующих на действия посетителя.</li><li>Освоить новейший плагин jQuery UI. Улучшайте интерфейс, используя панели с вкладками, диалоговые окна, панели для выбора дат и другие виджеты.</li><li>Создавать удобные формы. Собирайте данные посетителей, помогайте покупателям осуществлять покупки и позволяйте участникам оставлять комментарии.</li><li>Применять технологию Ajax. Организуйте обмен данными между веб-страницами и веб-сервером без необходимости перезагрузки страниц. </li><li>Углубить свои знания. Используйте редактор ThemeRoller для настройки виджетов. Избегайте типичных ошибок, свойственных начинающим программистам. </li></ul><p>Дэвид МакФарланд — президент компании McFarland Media, около 20 лет занимается созданием сайтов и их управлением. Он преподавал в Калифорнийском университете в Беркли и в Портлендском государственном университете. Дэвид написал более 15 книг компьютерной тематике, в том числе по CSS и JavaScript.</p>",
      descEN:
        "<p>JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code. You’ll build web pages that feel and act like desktop programs—with little or no programming.</p><p>The important stuff you need to know:</p><ul><li>Pull back the curtain on JavaScript. Learn how to build a basic program with this language.</li><li>Get up to speed on jQuery. Quickly assemble JavaScript programs that work well on multiple web browsers.</li><li>Transform your user interface. Learn jQuery UI, the JavaScript library for interface features like design themes and controls.</li><li>Make your pages interactive. Create JavaScript events that react to visitor actions.</li><li>Use animations and effects. Build drop-down navigation menus, pop-ups, automated slideshows, and more.</li><li>Collect data with web forms. Create easy-to-use forms that ensure more accurate visitor responses.</li><li>Practice with living examples. Get step-by-step tutorials for web projects you can build yourself.</li></ul>",
      tag: ["1", "2", "16", "20"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1016412966.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920032663/lrg.jpg"
    },
    {
      id: "29",
      titleRU: "Angular in Action",
      titleEN: "Angular in Action",
      authorsRU: "Джереми Вилкен",
      authorsEN: "Jeremy Wilken",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Angular-Action-Jeremy-Wilken/dp/1617293318/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Angular-Action-Jeremy-Wilken/dp/1617293318/"
      },
      lengthRU: "320",
      lengthEN: "320",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU:
        "<p>practical and packed with tricks and tips, this hands-on tutorial is perfect for web devs ready to build web applications that can handle whatever you throw at them.</p><p><b>About the Technology</b></p><p>Angular makes it easy to deliver amazing web apps. This powerful JavaScript platform provides the tooling to man- age your project, libraries to help handle most common tasks, and a rich ecosystem full of third-party capabilities to add as needed. Built with developer productivity in mind, Angular boosts your efficiency with a modern component architecture, well-constructed APIs, and a rich community.</p><p><b>About the Book</b></p><p>Angular in Action teaches you everything you need to build production-ready Angular applications. You'll start coding immediately, as you move from the basics to advanced techniques like testing, dependency injection, and performance tuning. Along the way, you'll take advantage of TypeScript and ES2015 features to write clear, well-architected code. Thoroughly practical and packed with tricks and tips, this hands-on tutorial is perfect for web devs ready to build web applications that can handle whatever you throw at them.</p><p><b>What's Inside</b></p><ul><li>Spinning up your first Angular application</li><li>A complete tour of Angular's features</li><li>Comprehensive example projects</li><li>Testing and debugging</li><li>Managing large applications</li></ul><p><b>About the Reader</b></p><p>Written for web developers comfortable with JavaScript, HTML, and CSS.</p>",
      descEN:
        "<p>practical and packed with tricks and tips, this hands-on tutorial is perfect for web devs ready to build web applications that can handle whatever you throw at them.</p><p><b>About the Technology</b></p><p>Angular makes it easy to deliver amazing web apps. This powerful JavaScript platform provides the tooling to man- age your project, libraries to help handle most common tasks, and a rich ecosystem full of third-party capabilities to add as needed. Built with developer productivity in mind, Angular boosts your efficiency with a modern component architecture, well-constructed APIs, and a rich community.</p><p><b>About the Book</b></p><p>Angular in Action teaches you everything you need to build production-ready Angular applications. You'll start coding immediately, as you move from the basics to advanced techniques like testing, dependency injection, and performance tuning. Along the way, you'll take advantage of TypeScript and ES2015 features to write clear, well-architected code. Thoroughly practical and packed with tricks and tips, this hands-on tutorial is perfect for web devs ready to build web applications that can handle whatever you throw at them.</p><p><b>What's Inside</b></p><ul><li>Spinning up your first Angular application</li><li>A complete tour of Angular's features</li><li>Comprehensive example projects</li><li>Testing and debugging</li><li>Managing large applications</li></ul><p><b>About the Reader</b></p><p>Written for web developers comfortable with JavaScript, HTML, and CSS.</p>",
      tag: ["2", "8", "3", "27", "21", "19"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/51Rb%2BtbNffL._SX397_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51Rb%2BtbNffL._SX397_BO1,204,203,200_.jpg"
    },
    {
      id: "30",
      titleRU: "Angular: Up and Running",
      titleEN: "Angular: Up and Running",
      authorsRU: "Shyam Seshadri",
      authorsEN: "Shyam Seshadri",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Angular-Up-Running-Learning-Step/dp/1491999837/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Angular-Up-Running-Learning-Step/dp/1491999837/"
      },
      lengthRU: "312",
      lengthEN: "312",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU:
        "<p>If you’re familiar with JavaScript, this hands-on guide will quickly get you up to speed on the Angular framework for building high-performance web-based desktop, mobile, and single-page applications. Initially dubbed Angular 2, this version is a complete rewrite from the same team that built the initial version of AngularJS. Developers familiar with that earlier version will also find this book to be a valuable resource.</p><p>Author Shyam Seshadri takes you step-by-step through Angular’s core building blocks in detail. You’ll start by creating a simple Angular application before diving into Angular components, services, server calls, routing, and production requirements. By the end of the book, you’ll be ready to use Angular for your own applications.</p><ul><li>Set up your development environment to build Angular applications rapidly</li><li>Use Angular directives to construct common functionality for your application</li><li>Create and test Angular components for building effective user interfaces</li><li>Manage user input by building template-driven and reactive forms</li><li>Understand when to use built-in Angular services and when and how to create your own</li><li>Make HTTP calls and handle use cases that surface when working with servers</li><li>Use Angular’s routing module to encapsulate various pages and pieces using a different route</li><li>Build an Angular application for production and learn how to deploy a performant Angular application</li></ul>",
      descEN:
        "<p>If you’re familiar with JavaScript, this hands-on guide will quickly get you up to speed on the Angular framework for building high-performance web-based desktop, mobile, and single-page applications. Initially dubbed Angular 2, this version is a complete rewrite from the same team that built the initial version of AngularJS. Developers familiar with that earlier version will also find this book to be a valuable resource.</p><p>Author Shyam Seshadri takes you step-by-step through Angular’s core building blocks in detail. You’ll start by creating a simple Angular application before diving into Angular components, services, server calls, routing, and production requirements. By the end of the book, you’ll be ready to use Angular for your own applications.</p><ul><li>Set up your development environment to build Angular applications rapidly</li><li>Use Angular directives to construct common functionality for your application</li><li>Create and test Angular components for building effective user interfaces</li><li>Manage user input by building template-driven and reactive forms</li><li>Understand when to use built-in Angular services and when and how to create your own</li><li>Make HTTP calls and handle use cases that surface when working with servers</li><li>Use Angular’s routing module to encapsulate various pages and pieces using a different route</li><li>Build an Angular application for production and learn how to deploy a performant Angular application</li></ul>",
      tag: ["2", "3", "8", "21", "19"],
      pictureRU:
        "https://d1b14unh5d6w7g.cloudfront.net/1491999837.01.S001.LXXXXXXX.jpg?Expires=1534707743&Signature=CXNzMLqVXdowlTk8ImQ8QoeShG+x5W8MlI2KCPO/Vs50T+1QRkGmBl3hGKSM21tSFMZyjNWwNLon1QEWvDiwwgHkZGj/c/1qwyvyQ218hIs3SYCeUPVbyRNSiQCtVUdpyRINywxqilpLr1VLJHH9ZUgAURyeY7iELJMHyC5YTfc=&Key-Pair-Id=APKAIUO27P366FGALUMQ",
      pictureEN:
        "https://d1b14unh5d6w7g.cloudfront.net/1491999837.01.S001.LXXXXXXX.jpg?Expires=1534707743&Signature=CXNzMLqVXdowlTk8ImQ8QoeShG+x5W8MlI2KCPO/Vs50T+1QRkGmBl3hGKSM21tSFMZyjNWwNLon1QEWvDiwwgHkZGj/c/1qwyvyQ218hIs3SYCeUPVbyRNSiQCtVUdpyRINywxqilpLr1VLJHH9ZUgAURyeY7iELJMHyC5YTfc=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
    },
    {
      id: "31",
      titleRU: "Beginning Angular with Typescript",
      titleEN: "Beginning Angular with Typescript",
      authorsRU: "Greg Lim",
      authorsEN: "Greg Lim",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Beginning-Angular-Typescript-updated/dp/1721798323/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Beginning-Angular-Typescript-updated/dp/1721798323/"
      },
      lengthRU: "198",
      lengthEN: "198",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU:
        "<p>Angular is one of the leading frameworks to develop apps across all platforms. Reuse your code and build fast and high performing apps for any platform be it web, mobile web, native mobile and native desktop. You use small manageable components to build a large powerful app. No more wasting time hunting for DOM nodes!</p><p>In this book, we take you on a fun, hands-on and pragmatic journey to master Angular from a web development point of view. You'll start building Angular apps within minutes. Every section is written in a bite-sized manner and straight to the point as I don’t want to waste your time (and most certainly mine) on the content you don't need. In the end, you will have what it takes to develop a real-life app.</p><p><b>About the Reader</b></p><p>This book is for developers with basic familiarity with HTML, CSS, Javascript and object-oriented programming. No TypeScript or AngularJS experience needed.</p><p><b>About the Author</b></p><p>Greg Lim is a technologist and author of several programming books. Greg has many years in teaching programming in tertiary institutions and he places special emphasis on learning by doing.</p>",
      descEN:
        "<p>Angular is one of the leading frameworks to develop apps across all platforms. Reuse your code and build fast and high performing apps for any platform be it web, mobile web, native mobile and native desktop. You use small manageable components to build a large powerful app. No more wasting time hunting for DOM nodes!</p><p>In this book, we take you on a fun, hands-on and pragmatic journey to master Angular from a web development point of view. You'll start building Angular apps within minutes. Every section is written in a bite-sized manner and straight to the point as I don’t want to waste your time (and most certainly mine) on the content you don't need. In the end, you will have what it takes to develop a real-life app.</p><p><b>About the Reader</b></p><p>This book is for developers with basic familiarity with HTML, CSS, Javascript and object-oriented programming. No TypeScript or AngularJS experience needed.</p><p><b>About the Author</b></p><p>Greg Lim is a technologist and author of several programming books. Greg has many years in teaching programming in tertiary institutions and he places special emphasis on learning by doing.</p>",
      tag: ["2", "3", "8", "21", "19"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/51diVUdF7nL._SX404_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51diVUdF7nL._SX404_BO1,204,203,200_.jpg"
    },
    {
      id: "32",
      titleRU: "React Native Cookbook: Bringing the Web to Native Platforms",
      titleEN: "React Native Cookbook: Bringing the Web to Native Platforms",
      authorsRU: "Джонатан Лебенсолд",
      authorsEN: "Jonathan Lebensold",
      linkRU: {
        Amazon:
          "https://www.amazon.com/React-Native-Cookbook-Bringing-Platforms/dp/1491993847/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920090144.do"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/React-Native-Cookbook-Bringing-Platforms/dp/1491993847/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920090144.do"
      },
      lengthRU: "176",
      lengthEN: "176",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU:
        "<p>Tackling an app development project on multiple platforms is usually an arduous task, but with React Native, you can build cross-platform mobile apps that look and behave just like native apps built with Swift or Java. If you’re familiar with JavaScript, the recipes in this cookbook will help you understand the React Native ecosystem, deal with design and hardware issues, take on the deployment process, and write maintainable code.</p><p>How do you organize a project? Or design an app that can access a device’s camera? Based on author Jonathan Lebensold’s personal journey through the app development process, the recipes in this cookbook will not only provide you with quick answers, they can also inspire you to come up with your own solutions.</p><ul><li>Examine the software tools you’ll use to build a React Native app</li><li>Leverage components and JavaScript libraries in the React ecosystem</li><li>Design cross-platform apps that balance UX, platform conventions, and technical complexity</li><li>Get common use cases and advice for taking advantage of device hardware</li><li>Automate app publishing, share your iOS App with beta testers, and configure app settings</li><li>Learn strategies for ensuring your code is well factored, easily maintained, and correct</li></ul>",
      descEN:
        "<p>Tackling an app development project on multiple platforms is usually an arduous task, but with React Native, you can build cross-platform mobile apps that look and behave just like native apps built with Swift or Java. If you’re familiar with JavaScript, the recipes in this cookbook will help you understand the React Native ecosystem, deal with design and hardware issues, take on the deployment process, and write maintainable code.</p><p>How do you organize a project? Or design an app that can access a device’s camera? Based on author Jonathan Lebensold’s personal journey through the app development process, the recipes in this cookbook will not only provide you with quick answers, they can also inspire you to come up with your own solutions.</p><ul><li>Examine the software tools you’ll use to build a React Native app</li><li>Leverage components and JavaScript libraries in the React ecosystem</li><li>Design cross-platform apps that balance UX, platform conventions, and technical complexity</li><li>Get common use cases and advice for taking advantage of device hardware</li><li>Automate app publishing, share your iOS App with beta testers, and configure app settings</li><li>Learn strategies for ensuring your code is well factored, easily maintained, and correct</li></ul>",
      tag: ["2", "8", "10", "21", "23", "19"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1023245292.jpg",
      pictureEN: "https://ozon-st.cdn.ngenix.net/multimedia/1023245292.jpg"
    },
    {
      id: "33",
      titleRU: "React и Redux. Функциональная веб-разработка",
      titleEN:
        "Learning React: Functional Web Development with React and Redux",
      authorsRU: "Алекс Бэнкс, Ева Порселло",
      authorsEN: "Alex Banks, Eve Porcello",
      linkRU: {
        OZON: "https://www.ozon.ru/context/detail/id/143282355/",
        Питер:
          "https://www.piter.com/collection/all/product/react-i-redux-funktsionalnaya-veb-razrabotka"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Learning-React-Functional-Development-Redux/dp/1491954620/",
        "O'Reilly": "http://shop.oreilly.com/product/0636920049579.do"
      },
      lengthRU: "350",
      lengthEN: "350",
      lang: ["English", "Русский"],
      date: "2017",
      free: false,
      descRU:
        "<p>Хотите научиться писать эффективные пользовательские интерфейсы при помощи React? Тогда вы нашли нужную книгу. Авторы расскажут, как создавать пользовательские интерфейсы при помощи этой компактной библиотеки и писать сайты, на которых можно обрабатывать огромные объемы данных без перезагрузки страниц. Также вы изучите новейшие возможности стандарта ECMAScript и функционального программирования.</p>",
      descEN:
        "<p>If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features.</p><p>Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, you’ll fully understand how useful React can be in your organization.</p><ul><li>Learn key functional programming concepts with JavaScript</li><li>Peek under the hood to understand how React runs in the browser</li><li>Create application presentation layers by mounting and composing React components</li><li>Use component trees to manage data and reduce the time you spend debugging applications</li><li>Explore React’s component lifecycle and use it to load data and improve UI performance</li><li>Use a routing solution for browser history, bookmarks, and other features of single-page applications</li><li>Learn how to structure React applications with servers in mind</li></ul>",
      tag: ["1", "2", "8", "10", "11", "27", "21", "19", "4", "15", "17"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1021367273.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920049579/lrg.jpg"
    },
    {
      id: "34",
      titleRU: "The Road to learn React",
      titleEN: "The Road to learn React",
      authorsRU: "Робин Виерух",
      authorsEN: "Robin Wieruch",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/1986338827/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/1986338827/"
      },
      lengthRU: "206",
      lengthEN: "206",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU:
        "<p>The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. Everything from project setup to deployment on a server will be explained. The book comes with additional referenced reading material and exercises with each chapter. After reading the book, you will be able to build your own applications in React. The material is kept up to date by me and the community. In the Road to learn React, I want to offer a foundation before you start to dive into the broader React ecosystem. It has less tooling and less external state management, but a lot of information around React. It explains general concepts, patterns and best practices in a real world React application. You will learn to build your own React application. It covers real world features like pagination, client-side caching and interactions like searching and sorting. Additionally you will transition from JavaScript ES5 to JavaScript ES6 along the way. I hope this book captures my enthusiasm for React and JavaScript and helps you to get started.</p>",
      descEN:
        "<p>The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. Everything from project setup to deployment on a server will be explained. The book comes with additional referenced reading material and exercises with each chapter. After reading the book, you will be able to build your own applications in React. The material is kept up to date by me and the community. In the Road to learn React, I want to offer a foundation before you start to dive into the broader React ecosystem. It has less tooling and less external state management, but a lot of information around React. It explains general concepts, patterns and best practices in a real world React application. You will learn to build your own React application. It covers real world features like pagination, client-side caching and interactions like searching and sorting. Additionally you will transition from JavaScript ES5 to JavaScript ES6 along the way. I hope this book captures my enthusiasm for React and JavaScript and helps you to get started.</p>",
      tag: ["2", "8", "10", "11", "21", "19", "27"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/41hnPBXBfKL._SX384_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/41hnPBXBfKL._SX384_BO1,204,203,200_.jpg"
    },
    {
      id: "35",
      titleRU: "Redux in Action",
      titleEN: "Redux in Action",
      authorsRU: "Марк Гарро, Уилл Фаурот",
      authorsEN: "Marc Garreau, Will Faurot",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Redux-Action-Marc-Garreau/dp/1617294977/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Redux-Action-Marc-Garreau/dp/1617294977/"
      },
      lengthRU: "312",
      lengthEN: "312",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU:
        "<p>With Redux in Action, you'll discover how to integrate Redux into your React application and development environment. With the insights you glean from the experience of authors Marc Garreau and Will Faurot, you'll be more than confident in your ability to solve your state management woes with Redux and focus on developing the apps you need!</p><p><b>About the Technology</b></p><p>With Redux, you manage the state of a web application in a single, simple object, practically eliminating most state-related bugs. Centralizing state with Redux makes it possible to quickly start saved user sessions, maintain a reliable state history, and smoothly transfer state between UIs. Plus, the Redux state container is fully programmable and integrates cleanly with React and other popular frameworks.</p><p><b>About the Book</b></p><p>Redux in Action is an accessible guide to effectively managing state in web applications. Built around common use cases, this practical book starts with a simple task-management application built in React. You'll use the app to learn the Redux workflow, handle asynchronous actions, and get your hands on the Redux developer tools. With each step, you'll discover more about Redux and the benefits of centralized state management. The book progresses to more-complex examples, including writing middleware for analytics, time travel debugging, and an overview of how Redux works with other frameworks such as Angular and Electron.</p><b>What's Inside</b></p><ul><li>Using Redux in an existing React application</li><li>Handling side effects with the redux-saga library</li><li>Consuming APIs with asynchronous actions</li><li>Unit testing a React and Redux application</li></ul>",
      descEN:
        "<p>With Redux in Action, you'll discover how to integrate Redux into your React application and development environment. With the insights you glean from the experience of authors Marc Garreau and Will Faurot, you'll be more than confident in your ability to solve your state management woes with Redux and focus on developing the apps you need!</p><p><b>About the Technology</b></p><p>With Redux, you manage the state of a web application in a single, simple object, practically eliminating most state-related bugs. Centralizing state with Redux makes it possible to quickly start saved user sessions, maintain a reliable state history, and smoothly transfer state between UIs. Plus, the Redux state container is fully programmable and integrates cleanly with React and other popular frameworks.</p><p><b>About the Book</b></p><p>Redux in Action is an accessible guide to effectively managing state in web applications. Built around common use cases, this practical book starts with a simple task-management application built in React. You'll use the app to learn the Redux workflow, handle asynchronous actions, and get your hands on the Redux developer tools. With each step, you'll discover more about Redux and the benefits of centralized state management. The book progresses to more-complex examples, including writing middleware for analytics, time travel debugging, and an overview of how Redux works with other frameworks such as Angular and Electron.</p><b>What's Inside</b></p><ul><li>Using Redux in an existing React application</li><li>Handling side effects with the redux-saga library</li><li>Consuming APIs with asynchronous actions</li><li>Unit testing a React and Redux application</li></ul>",
      tag: ["2", "8", "10", "11", "27", "21", "19"],
      pictureRU:
        "https://d1b14unh5d6w7g.cloudfront.net/1617294977.01.S001.LXXXXXXX.jpg?Expires=1534711089&Signature=ftlxdnLlrXbqW81f6DYCmwyYwlBYJgAhQXLLLnKDPEq6QXfeGjvzYRgkb/GBkD4kWsu3KfijWVGJZZbXdB9dmeYjW9zsfw4HgOVaiV8bEbo2XWcw0cVliwsQW89wonGCMzhgiSFTQ9uWXFpqinRyAhc5hQsXQEvmJ124NywNnZY=&Key-Pair-Id=APKAIUO27P366FGALUMQ",
      pictureEN:
        "https://d1b14unh5d6w7g.cloudfront.net/1617294977.01.S001.LXXXXXXX.jpg?Expires=1534711089&Signature=ftlxdnLlrXbqW81f6DYCmwyYwlBYJgAhQXLLLnKDPEq6QXfeGjvzYRgkb/GBkD4kWsu3KfijWVGJZZbXdB9dmeYjW9zsfw4HgOVaiV8bEbo2XWcw0cVliwsQW89wonGCMzhgiSFTQ9uWXFpqinRyAhc5hQsXQEvmJ124NywNnZY=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
    },
    {
      id: "36",
      titleRU: "React Design Patterns and Best Practices",
      titleEN: "React Design Patterns and Best Practices",
      authorsRU: "Мишель Бертоли",
      authorsEN: "Michele Bertoli",
      linkRU: {
        Amazon:
          "https://www.amazon.com/React-Design-Patterns-Best-Practices/dp/1786464535/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/React-Design-Patterns-Best-Practices/dp/1786464535/"
      },
      lengthRU: "318",
      lengthEN: "318",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>Taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that's for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain - giving your workflow a huge boost when it comes to speed without reducing quality.</p><p>We'll begin by understanding the internals of React before gradually moving on to writing clean and maintainable code. We'll build components that are reusable across the application, structure applications, and create forms that actually work.</p><p>Then we'll style React components and optimize them to make applications faster and more responsive. Finally, we'll write tests effectively and you'll learn how to contribute to React and its ecosystem.</p><p>By the end of the book, you'll be saved from a lot of trial and error and developmental headaches, and you will be on the road to becoming a React expert.</p><p><b>What You Will Learn</b></p><ul><li>Write clean and maintainable code</li><li>Create reusable components applying consolidated techniques</li><li>Use React effectively in the browser and node</li><li>Choose the right styling approach according to the needs of the applications</li><li>Use server-side rendering to make applications load faster</li><li>Build high-performing applications by optimizing components</li></ul>",
      descEN:
        "<p>Taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that's for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain - giving your workflow a huge boost when it comes to speed without reducing quality.</p><p>We'll begin by understanding the internals of React before gradually moving on to writing clean and maintainable code. We'll build components that are reusable across the application, structure applications, and create forms that actually work.</p><p>Then we'll style React components and optimize them to make applications faster and more responsive. Finally, we'll write tests effectively and you'll learn how to contribute to React and its ecosystem.</p><p>By the end of the book, you'll be saved from a lot of trial and error and developmental headaches, and you will be on the road to becoming a React expert.</p><p><b>What You Will Learn</b></p><ul><li>Write clean and maintainable code</li><li>Create reusable components applying consolidated techniques</li><li>Use React effectively in the browser and node</li><li>Choose the right styling approach according to the needs of the applications</li><li>Use server-side rendering to make applications load faster</li><li>Build high-performing applications by optimizing components</li></ul>",
      tag: ["2", "8", "10", "11", "21", "23", "19"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/51VF6WMLNmL._SX404_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51VF6WMLNmL._SX404_BO1,204,203,200_.jpg"
    },
    {
      id: "37",
      titleRU: "Responsive Web Design with HTML5 and CSS3",
      titleEN: "Responsive Web Design with HTML5 and CSS3",
      authorsRU: "Бен Фрэйн",
      authorsEN: "Ben Frain",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Responsive-Web-Design-HTML5-CSS3/dp/1784398934/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Responsive-Web-Design-HTML5-CSS3/dp/1784398934/"
      },
      lengthRU: "350",
      lengthEN: "350",
      lang: ["English"],
      date: "2017",
      free: false,
      descRU:
        "<p>Desktop-only websites just aren't good enough anymore. With mobile internet usage still rising, and tablets changing internet consumption habits, you need to know how to build websites that will just 'work', regardless of the devices used to access them. This second edition of Responsive Web Design with HTML5 and CSS3 explains all the key approaches necessary to create and maintain a modern responsive design.</p><p>The changing way in which we access the web means that there has never been a greater range of screen sizes and associated user experiences to consider. With these recent trends driving changes in design, typical desktop-only websites fail to meet even minimum expectations when it comes to style and usability, which can be vital when your website is central to yours or your client's brand. Responsive Web Design with HTML5 and CSS3, Second Edition is an updated and improved guide that responds to the latest challenges and trends in web design, giving you access to the most effective approaches to modern responsive design.</p><p>Learn how to build websites with a “responsive and mobile first” methodology, allowing a website to display effortlessly on every device that accesses it. Packed with examples, and a thorough explanation of modern techniques and syntax, Responsive Web Design with HTML5 and CSS3, Second Edition provides a comprehensive resource for all things 'responsive'.</p><p>This updated new edition covers all the most up-to-date techniques and tools needed to build great responsive designs, ensuring that your projects won't just be built 'right' for today, but in the future too.</p><p>Chapter example code is all hosted on rwd.education, a dedicated site for the book, built by the author, using the approaches and techniques championed throughout.</p>",
      descEN:
        "<p>Desktop-only websites just aren't good enough anymore. With mobile internet usage still rising, and tablets changing internet consumption habits, you need to know how to build websites that will just 'work', regardless of the devices used to access them. This second edition of Responsive Web Design with HTML5 and CSS3 explains all the key approaches necessary to create and maintain a modern responsive design.</p><p>The changing way in which we access the web means that there has never been a greater range of screen sizes and associated user experiences to consider. With these recent trends driving changes in design, typical desktop-only websites fail to meet even minimum expectations when it comes to style and usability, which can be vital when your website is central to yours or your client's brand. Responsive Web Design with HTML5 and CSS3, Second Edition is an updated and improved guide that responds to the latest challenges and trends in web design, giving you access to the most effective approaches to modern responsive design.</p><p>Learn how to build websites with a “responsive and mobile first” methodology, allowing a website to display effortlessly on every device that accesses it. Packed with examples, and a thorough explanation of modern techniques and syntax, Responsive Web Design with HTML5 and CSS3, Second Edition provides a comprehensive resource for all things 'responsive'.</p><p>This updated new edition covers all the most up-to-date techniques and tools needed to build great responsive designs, ensuring that your projects won't just be built 'right' for today, but in the future too.</p><p>Chapter example code is all hosted on rwd.education, a dedicated site for the book, built by the author, using the approaches and techniques championed throughout.</p>",
      tag: ["2", "7", "5", "24", "26", "18"],
      pictureRU:
        "https://images-na.ssl-images-amazon.com/images/I/519G02FrC0L._SX404_BO1,204,203,200_.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/519G02FrC0L._SX404_BO1,204,203,200_.jpg"
    },
    {
      id: "38",
      titleRU: "Learning Web Design",
      titleEN: "Learning Web Design",
      authorsRU: "Дженнифер Роббинс",
      authorsEN: "Jennifer Robbins",
      linkRU: {
        Amazon:
          "https://www.amazon.com/Learning-Web-Design-Beginners-JavaScript/dp/1491960205/"
      },
      linkEN: {
        Amazon:
          "https://www.amazon.com/Learning-Web-Design-Beginners-JavaScript/dp/1491960205/"
      },
      lengthRU: "808",
      lengthEN: "808",
      lang: ["English"],
      date: "2018",
      free: false,
      descRU: "",
      descEN:
        "<p>Do you want to build web pages but have no prior experience? This friendly guide is the perfect place to start. You’ll begin at square one, learning how the web and web pages work, and then steadily build from there. By the end of the book, you’ll have the skills to create a simple site with multicolumn pages that adapt for mobile devices.</p><p>Each chapter provides exercises to help you learn various techniques and short quizzes to make sure you understand key concepts.</p><p>This thoroughly revised edition is ideal for students and professionals of all backgrounds and skill levels. It is simple and clear enough for beginners, yet thorough enough to be a useful reference for experienced developers keeping their skills up to date.</p><ul><li>Build HTML pages with text, links, images, tables, and forms</li><li>Use style sheets (CSS) for colors, backgrounds, formatting text, page layout, and even simple animation effects</li><li>Learn how JavaScript works and why the language is so important in web design</li><li>Create and optimize web images so they’ll download as quickly as possible</li><li>Use CSS Flexbox and Grid for sophisticated and flexible page layout</li><li>Learn the ins and outs of Responsive Web Design to make web pages look great on all devices</li><li>Become familiar with the command line, Git, and other tools in the modern web developer’s toolkit</li><li>Get to know the super-powers of SVG graphics</li></ul>",
      tag: ["2", "7", "8", "5", "6", "26", "24", "29", "18"],
      pictureRU:
        "https://covers.oreillystatic.com/images/0636920051626/lrg.jpg",
      pictureEN: "https://covers.oreillystatic.com/images/0636920051626/lrg.jpg"
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
