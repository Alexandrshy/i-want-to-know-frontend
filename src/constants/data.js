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
      tag: ["1","2", "5", "7", "8","16"],
      pictureRU: "https://ozon-st.cdn.ngenix.net/multimedia/1019775280.jpg",
      pictureEN:
        "https://images-na.ssl-images-amazon.com/images/I/51aUTzDIxxL._SX379_BO1,204,203,200_.jpg"
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
      id: "3",
      tagGroup: "tech",
      titleRU: "Angular",
      titleEN: "Angular",
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
      id: "5",
      tagGroup: "tech",
      titleRU: "CSS",
      titleEN: "CSS",
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
      id: "7",
      tagGroup: "tech",
      titleRU: "HTML",
      titleEN: "HTML",
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
      id: "9",
      tagGroup: "tech",
      titleRU: "Node.js",
      titleEN: "Node.js",
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
      id: "14",
      tagGroup: "tech",
      titleRU: "Vue",
      titleEN: "Vue",
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
      id: "16",
      tagGroup: "tech",
      titleRU: "jQuery",
      titleEN: "jQuery",
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
    },
    {
      id: "21",
      tagGroup: "tech",
      titleRU: "Разработка веб-приложений",
      titleEN: "Building web-applications",
      language: "all"
    },
    {
      id: "22",
      tagGroup: "tech",
      titleRU: "Регулярные выражения",
      titleEN: "Regular expressions",
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
      id: "24",
      tagGroup: "tech",
      titleRU: "SVG",
      titleEN: "SVG",
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
      id: "26",
      tagGroup: "tech",
      titleRU: "Дизайн",
      titleEN: "Design",
      language: "all"
    },
    {
      id: "27",
      tagGroup: "tech",
      titleRU: "Тестирование",
      titleEN: "Testing",
      language: "all"
    }
  ]
};

export default data;
