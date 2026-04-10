// import { url } from "inspector";

// export const projects = [
//   {
//     title: "Housemates — Shared House Management App",
//     type: "Full‑stack Web App",
//     slug: "housemates",
//     description:
//       "A full‑stack web application to manage and organize shared house information — centralizing tasks, expenses, alerts, and credentials securely and collaboratively.",
//     longDescription:
//       "Housemates is a full‑stack application designed to help people organize and manage everything related to shared house life. The app centralizes information that is often scattered across messages and chats, providing features such as shared expense management, household task tracking, priority alerts, room management, and credential control. Users can also invite new members via invitation code and monitor recent activity within the house. The frontend is built with Next.js using TypeScript and Tailwind CSS, combining Server Components and Client Components, while the backend uses Next.js Server Actions with Prisma and PostgreSQL for secure data logic and authentication.",
//     technologies: [
//       "Next.js (App Router)",
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "Prisma",
//       "PostgreSQL",
//       "BetterAuth",
//     ],
//     imageUrl: "/images/1.png",
//     imageUrls: ["/images/1.png", "/images/2.png", "/images/3.png"],
//     url: "https://housemates.hugolomba.com",
//     github: "https://github.com/hugolomba/housemates",
//     decisionLog: [
//       {
//         title: "Centralizing scattered information",
//         description:
//           "Information about shared houses is usually scattered across chats. Housemates solves this by centralizing everything in one app.",
//       },
//       {
//         title: "Managing expenses and bills",
//         description:
//           "Allows creating, editing, and splitting bills among house members, with payment status tracked for each user.",
//       },
//       {
//         title: "Tasks and alerts",
//         description:
//           "Users can track household tasks and create alerts with different priority levels.",
//       },
//       {
//         title: "Security and access control",
//         description:
//           "Secure authentication (email, Google) with BetterAuth and permissions ensure that only house members can view or modify data.",
//       },
//     ],
//   },
//   {
//     title: "E-commerce Platform",
//     type: "Saas Application",
//     slug: "e-commerce-platform",
//     description:
//       "Brief description of the project highlighting key features and technologies used.",
//     longDescription:
//       "Detailed information about the project, including features, technologies used, challenges faced, and solutions implemented.",
//     technologies: ["Next.js", "React", "TypeScript", "Node.js"],
//     imageUrl: "/images/1.png",
//     url: "https://ecommerce.hugolomba.com",
//     github: "",
//     decisionLog: [
//       {
//         title: "The Challenge",
//         description:
//           "Next.js provides server-side rendering and static site generation, which improves performance and SEO.",
//       },
//       {
//         title: "The trade-off",
//         description:
//           "React allows for building reusable UI components and has a large ecosystem of libraries.",
//       },
//       {
//         title: "The decision",
//         description:
//           "TypeScript helps catch errors during development and improves code maintainability.",
//       },
//       {
//         title: "Why",
//         description:
//           "Node.js allows for building scalable and efficient server-side applications using JavaScript.",
//       },
//     ],
//   },
//   {
//     title: "Social Media Dashboard",
//     type: "Saas Application",
//     slug: "social-media-dashboard",
//     description:
//       "Brief description of the project highlighting key features and technologies used.",
//     longDescription:
//       "Detailed information about the project, including features, technologies used, challenges faced, and solutions implemented.",
//     technologies: ["Next.js", "React", "TypeScript", "Node.js"],
//     imageUrl: "/images/1.png",
//     url: "https://socialmedia.hugolomba.com",
//     github: "",
//     decisionLog: [
//       {
//         title: "The Challenge",
//         description:
//           "Next.js provides server-side rendering and static site generation, which improves performance and SEO.",
//       },
//       {
//         title: "The trade-off",
//         description:
//           "React allows for building reusable UI components and has a large ecosystem of libraries.",
//       },
//       {
//         title: "The decision",
//         description:
//           "TypeScript helps catch errors during development and improves code maintainability.",
//       },
//       {
//         title: "Why",
//         description:
//           "Node.js allows for building scalable and efficient server-side applications using JavaScript.",
//       },
//     ],
//   },
// ];

export const projects = [
  {
    title: "Full-Stack House Organizer Application",
    type: "fullstack",
    slug: "full-stack-house-organizer-application",
    description:
      "Housemates is a full-stack web application designed to help people organise, manage and access everything in a shared house.",
    longDescription: `
Housemates is a full-stack web application designed to help people organise, manage and access everything in a shared house. People living in shared houses often struggle to manage shared information. This is usually scattered across messaging apps, making it hard to find, easy to forget and frustrating to manage. Housemates solves this by centralising all shared-house information in one secure place.

It provides a protected space where house members can manage bills and shared expenses, track tasks and responsibilities, create alerts with different priority levels, store shared credentials, and invite new members using an invite code.

The application also includes house-based authorisation, protected routes, and secure authentication to ensure that only authorised members can access and manage house data.
`,
    features: [
      "Create or join a house using an invite code",
      "Manage members with secure house-based access control",
      "Track shared bills, split costs, and monitor payment status",
      "Create, assign, and complete household tasks",
      "Manage alerts by priority and mark them as resolved",
      "Organise rooms, responsibilities, and common areas",
      "Store shared credentials securely with encryption",
      "View upcoming bills, pending tasks, and recent activity from a central dashboard",
      "Authenticate with email/password or Google using Better Auth",
      "Protect routes and actions with server-side authorisation checks",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
    ],
    imageUrl:
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733036/Screenshot_2026-01-26_at_19.29.45_q2eetb.png",
    imageUrls: [
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733036/Screenshot_2026-01-26_at_19.29.45_q2eetb.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733037/Screenshot_2026-01-27_at_17.10.05_mhdvrs.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733036/Screenshot_2026-01-27_at_17.31.42_fnnjla.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733036/Screenshot_2026-01-27_at_17.09.58_slxh32.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733036/Screenshot_2026-01-27_at_16.58.52_kpfad0.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733037/Screenshot_2026-01-27_at_17.29.49_bardt5.png",
    ],
    url: "https://housemates.hugolomba.com",
    github: "https://github.com/hugolomba/housemates",
    decisionLog: [
      {
        title: "Centralising shared-house information",
        description:
          "The app was designed to replace scattered information across messaging apps with one secure and structured place.",
      },
      {
        title: "Improving day-to-day house organisation",
        description:
          "The project includes bills, tasks, alerts, rooms and credentials so house members can manage responsibilities more clearly.",
      },
      {
        title: "Security and access control",
        description:
          "House-based authorisation, protected routes and secure authentication ensure only authorised members can access the data.",
      },
      {
        title: "Scalable full-stack architecture",
        description:
          "The application uses Next.js, Prisma, PostgreSQL and BetterAuth to support a modern and maintainable full-stack structure.",
      },
    ],
  },
  {
    title: "Next.js Full-Stack Blog",
    type: "fullstack",
    slug: "nextjs-full-stack-blog",
    description:
      "A full-stack blog built with Next.js. Users can read, like, save, and comment on posts, and signed-up users can create, edit, or delete their own posts.",
    longDescription: `
This project is a social media-style blog where users can create and share posts, edit and delete their content, and interact with other users' posts. Users can sign up and log in with multiple authentication methods, including email, Google, and GitHub.

I created this project as a portfolio piece to practise full-stack development concepts and build a real-world social platform experience.

The project is developed with Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Better Auth, and full CRUD functionality.
`,
    features: [
      "Create, edit, and delete blog posts with full CRUD functionality",
      "Like, save, and comment on posts",
      "Restrict content management to the post author",
      "Authenticate with email, Google, or GitHub",
      "Use dynamic routes with SEO-friendly rendering",
      "Build the application with reusable components and strong typing",
      "Persist data with PostgreSQL and Prisma",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
    ],
    imageUrl:
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831503/Screenshot_2026-04-10_at_15.27.42_p7zkq1.png",
    imageUrls: [
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831503/Screenshot_2026-04-10_at_15.28.30_wrehck.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831503/Screenshot_2026-04-10_at_15.28.30_wrehck.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831503/Screenshot_2026-04-10_at_15.28.48_eacygj.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831503/Screenshot_2026-04-10_at_15.30.09_n2uu0w.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831503/Screenshot_2026-04-10_at_15.29.45_aziee9.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1775831502/Screenshot_2026-04-10_at_15.29.31_klmhhm.png",
    ],
    url: "https://blogapp.hugolomba.com/",
    github: "https://github.com/hugolomba/blog-next",
    decisionLog: [
      {
        title: "Building a realistic social blog",
        description:
          "The project was structured to simulate a real content platform where users can publish, edit and interact with posts.",
      },
      {
        title: "Using full CRUD as a core requirement",
        description:
          "CRUD operations were essential to demonstrate practical full-stack development and ownership of data flow.",
      },
      {
        title: "Authentication flexibility",
        description:
          "Multiple sign-in methods with BetterAuth were included to improve accessibility and reflect real-world applications.",
      },
      {
        title: "Modern full-stack tooling",
        description:
          "Next.js, Prisma and PostgreSQL were chosen to create a robust, typed and maintainable architecture.",
      },
    ],
  },
  {
    title: "The Solar System 2",
    type: "front",
    slug: "the-solar-system-2",
    description:
      "An interactive project displaying information about celestial bodies in the solar system. Fully developed from scratch with a custom API and interactive animations.",
    longDescription: `
The Solar System 2 is an interactive full-stack project I rebuilt to strengthen my skills in React, TypeScript, and full-stack development. The project displays information about celestial bodies including planets, dwarf planets, asteroids, and galaxies.

I focused on creating a custom API, improving the design, and adding interactive animations to make the project more complete and engaging.
`,
    features: [
      "Browse planets, dwarf planets, asteroids, and galaxies",
      "Consume data from a custom API built for the project",
      "Explore an interactive interface built with React and TypeScript",
      "Use responsive layouts for desktop and mobile viewing",
      "Enhance discovery with animations and interactive transitions",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl:
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758065239/Screenshot_2025-09-17_at_00.24.58_lu1elj.png",
    imageUrls: [
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758065239/Screenshot_2025-09-17_at_00.24.58_lu1elj.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.06_makbgr.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.20_tujg1y.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.13_jfckcx.png",
    ],
    url: "https://solarsystem.hugolomba.com",
    github: "https://github.com/hugolomba/the-solar-system-2",
    decisionLog: [
      {
        title: "Rebuilding to deepen React and TypeScript skills",
        description:
          "This version was created as an improved rebuild focused on stronger architecture, better typing and a cleaner frontend.",
      },
      {
        title: "Custom API integration",
        description:
          "A dedicated backend was used to serve celestial body data and make the project feel more complete and realistic.",
      },
      {
        title: "Interactive learning experience",
        description:
          "Animations and interactive elements were added to make the project more engaging and visually dynamic.",
      },
      {
        title: "Better presentation of scientific content",
        description:
          "The interface was designed to organise information about planets, asteroids and galaxies in a more accessible way.",
      },
    ],
  },
  {
    title: "Weather App",
    type: "front",
    slug: "weather-app",
    description:
      "A responsive weather web app that displays current weather based on geolocation or city search, with search history and dynamic interactions.",
    longDescription: `
Weather App is a responsive web application powered by the Visual Crossing Weather API. Users can view the current weather for their location or search for any city worldwide.

The project focuses on dynamic content updates, responsive design, and interactive elements that improve usability and user experience.
`,
    features: [
      "Display live weather using geolocation or manual city search",
      "Show local time based on the selected city's timezone",
      "Store recent searches for quick access",
      "Highlight the latest searched location automatically",
      "Support responsive layouts and dynamic UI updates",
      "Validate user input and update the DOM in real time",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Visual Crossing Weather API",
    ],
    imageUrl:
      "https://github.com/hugolomba/weather-app/raw/main/assets/screenshot.jpeg",
    imageUrls: [
      "https://github.com/hugolomba/weather-app/raw/main/assets/screenshot.jpeg",
    ],
    url: "https://forecast.hugolomba.com",
    github: "https://github.com/hugolomba/weather-app",
    decisionLog: [
      {
        title: "Real-time weather as the main value",
        description:
          "The app focuses on providing immediate weather information through geolocation or direct city search.",
      },
      {
        title: "Improving usability with search history",
        description:
          "Previous searches are stored so users can quickly revisit locations without repeating manual input.",
      },
      {
        title: "Responsive experience",
        description:
          "The layout was designed to work smoothly across mobile and desktop devices.",
      },
      {
        title: "API-driven dynamic interface",
        description:
          "The project emphasises DOM updates and interactive feedback based on live API data.",
      },
    ],
  },
  {
    title: "Blog API",
    type: "back",
    slug: "blog-api",
    description:
      "A full-featured blog API built with Node.js, Express, and Prisma, supporting JWT authentication, image uploads, data validation, and endpoints for users, posts, and comments.",
    longDescription: `
Blog API is a backend application built with Node.js, Express, and Prisma. It provides the necessary endpoints for managing users, posts, and comments in a blog application.

The API supports JWT authentication, image upload with Multer and Cloudinary, data validation with Joi, and password hashing for secure user management.
`,
    features: [
      "Handle authentication with JWT, password hashing, and protected routes",
      "Support avatar and cover image uploads with Multer and Cloudinary",
      "Provide CRUD operations for users, posts, and comments",
      "Allow post likes, saves, and search functionality",
      "Restrict sensitive actions through admin-only access",
      "Validate input with Joi and manage errors centrally",
    ],
    technologies: [
      "Node.js 18+",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Multer",
      "Cloudinary",
      "Joi",
      "bcrypt/bcryptjs",
    ],
    imageUrl:
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1763034287/api-integration_z6qsca.webp",
    imageUrls: [
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1763034287/api-integration_z6qsca.webp",
    ],
    url: "https://blog-y5wb.onrender.com",
    github: "https://github.com/hugolomba/blog-api",
    decisionLog: [
      {
        title: "Separating backend responsibilities",
        description:
          "The API was created to handle authentication, posts, comments and uploads independently from the frontend.",
      },
      {
        title: "Strong validation and security",
        description:
          "JWT, Joi and password hashing were used to keep the API secure and inputs reliable.",
      },
      {
        title: "Supporting real blog workflows",
        description:
          "Endpoints were structured around common blog features such as post creation, comments, likes and saved content.",
      },
      {
        title: "Media upload integration",
        description:
          "Multer and Cloudinary were added to support image handling in a practical production-style workflow.",
      },
    ],
  },
  {
    title: "Solar System API",
    type: "back",
    slug: "solar-system-api",
    description:
      "A simple RESTful API providing information about celestial objects such as planets, dwarf planets, asteroids, and galaxies.",
    longDescription: `
Solar System API is a RESTful backend application built with Node.js and Express. It provides endpoints to retrieve detailed information about celestial objects including planets, dwarf planets, asteroids, stars, and galaxies.

The API was built to serve structured astronomy data in a clean and reusable way.
`,
    features: [
      "Expose RESTful routes for planets, stars, dwarf planets, asteroids, and galaxies",
      "Return the full dataset or filter data by object type",
      "Retrieve individual celestial objects by name",
      "Support partial searches through a dedicated find endpoint",
      "Present a clear entry route with API guidance",
    ],
    technologies: ["Node.js", "Express"],
    imageUrl:
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1763034287/api-integration_z6qsca.webp",
    imageUrls: [
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1763034287/api-integration_z6qsca.webp",
    ],
    url: "https://solar-system-api-hepy.onrender.com",
    github: "https://github.com/hugolomba/solar-system-api",
    decisionLog: [
      {
        title: "Creating a custom astronomy dataset API",
        description:
          "The API was built to serve structured information about celestial objects in a clean and reusable way.",
      },
      {
        title: "RESTful route organisation",
        description:
          "Routes were separated by object type to make the API predictable and easy to consume.",
      },
      {
        title: "Supporting related frontend projects",
        description:
          "This backend also works as a data source for interactive solar system applications.",
      },
      {
        title: "Simple and extensible architecture",
        description:
          "Node.js and Express were chosen for a lightweight setup that is easy to expand with more routes and objects.",
      },
    ],
  },
  {
    title: "Dublin Pub Inventory",
    type: "fullstack",
    slug: "dublin-pub-inventory",
    description:
      "A personal project to manage a complete inventory of Dublin pubs, including drinks and events, with secure admin authentication for destructive actions.",
    longDescription: `
Dublin Pub Inventory is a full-stack project designed to practise backend and frontend development. Users can browse, search, create, and delete records of pubs, drinks, and events, with admin authentication required for destructive actions.

The project combines database relationships, server-rendered views, and practical CRUD operations around realistic inventory data.
`,
    features: [
      "Manage pubs, drinks, events, and categories with relational PostgreSQL data",
      "Use RESTful CRUD routes for creating, updating, viewing, and deleting records",
      "Search inventory records quickly",
      "Protect destructive actions with admin authentication",
      "Render dynamic pages with EJS",
      "Populate the app with realistic Dublin pub seed data",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "CSS"],
    imageUrl:
      "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png",
    imageUrls: [
      "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png",
      "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png",
      "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png",
    ],
    url: "https://dublin-pub-inventory-example.netlify.app/",
    github: "https://github.com/hugolomba/dublin-pub-inventory",
    decisionLog: [
      {
        title: "Practising full-stack CRUD with real entities",
        description:
          "The project uses pubs, drinks and events as realistic data models to practise relational full-stack development.",
      },
      {
        title: "Server-rendered views with EJS",
        description:
          "EJS was used to generate dynamic pages while keeping the stack simpler and focused on backend fundamentals.",
      },
      {
        title: "Admin protection for sensitive actions",
        description:
          "Authentication was added to secure destructive operations like deleting records.",
      },
      {
        title: "Database-driven organisation",
        description:
          "PostgreSQL relationships and seed data make the application more structured and closer to a real inventory system.",
      },
    ],
  },
  {
    title: "Bankist App",
    type: "front",
    slug: "bankist-app",
    description:
      "A fictional digital banking app built with JavaScript, simulating real-world operations like login, transfers, loans, and account management.",
    longDescription: `
Bankist App is a fictional online banking application developed to practise modern JavaScript concepts. It simulates real-world banking operations while showcasing array methods, DOM manipulation, and event handling.

The project was built to make business logic visible through an interactive user interface.
`,
    features: [
      "Log in with a username and PIN",
      "View balances, transactions, and financial summaries dynamically",
      "Transfer money between accounts with validation",
      "Request loans based on eligibility rules",
      "Sort transactions and close accounts securely",
      "Use an automatic logout timer for extra security",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    imageUrl:
      "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png",
    imageUrls: [
      "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png",
    ],
    url: "https://bankist-app.hugo-miranda.dev",
    github: "https://github.com/hugolomba/bankist-app",
    decisionLog: [
      {
        title: "Simulating real banking flows",
        description:
          "The app was designed to imitate realistic banking actions such as transfers, loans and account closure.",
      },
      {
        title: "Strengthening JavaScript fundamentals",
        description:
          "The project focuses heavily on array methods, event handling and DOM updates.",
      },
      {
        title: "Making logic visible through the UI",
        description:
          "Every action updates the interface dynamically so users can clearly see cause and effect.",
      },
      {
        title: "Using a fictional product for practical learning",
        description:
          "A banking theme allowed implementation of realistic business rules in a controlled frontend project.",
      },
    ],
  },
  {
    title: "Bankist Website",
    type: "front",
    slug: "bankist-website",
    description:
      "A modern and responsive banking landing page built with HTML, CSS, and JavaScript, featuring smooth animations, lazy loading, and interactive components.",
    longDescription: `
Bankist Website is a modern, responsive, and interactive landing page simulating a real-world financial product. Built as part of an advanced JavaScript course, it demonstrates DOM manipulation, event handling, and performance-focused techniques to enhance user experience.

This project highlights practical application of modern JavaScript patterns with a strong focus on clean UI, UX, and performance.
`,
    features: [
      "Navigate smoothly with a sticky header",
      "Switch content through a tabbed interface",
      "Reveal sections on scroll for a more polished experience",
      "Improve performance with lazy-loaded images",
      "Interact with modal and slider components",
      "Use the Intersection Observer API for modern UI behaviour",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Intersection Observer API",
    ],
    imageUrl:
      "https://github.com/hugolomba/bankist-website/raw/main/img/screenshot1.png",
    images: [
      "https://github.com/hugolomba/bankist-website/raw/main/img/screenshot1.png",
      "https://github.com/hugolomba/bankist-website/raw/main/img/screenshot2.png",
    ],
    url: "https://bankist-website.hugo-miranda.dev",
    github: "https://github.com/hugolomba/bankist-website",
    decisionLog: [
      {
        title: "Focusing on interaction and UX",
        description:
          "The landing page was built to emphasise smooth navigation, animation and polished interface behaviour.",
      },
      {
        title: "Applying advanced DOM techniques",
        description:
          "The project uses event delegation, observers and reusable logic to create a more professional frontend experience.",
      },
      {
        title: "Performance-conscious design",
        description:
          "Lazy loading and section reveal effects were included to improve perceived performance and engagement.",
      },
      {
        title: "Modern landing page structure",
        description:
          "The layout was designed to resemble a realistic product website rather than a basic static page.",
      },
    ],
  },
  {
    title: "The Abduction Game",
    type: "front",
    slug: "the-abduction-game",
    description:
      "A fast-paced browser game where you pilot a UFO and abduct creatures while dodging obstacles. Includes audio feedback, difficulty progression, and multilingual support.",
    longDescription: `
The Abduction Game is a browser-based arcade game where the player controls a UFO and abducts creatures while dodging obstacles.

The project was designed as a fast-paced interactive experience with progression, sound feedback, and multilingual support.
`,
    features: [
      "Play a fast-paced arcade game with increasing difficulty",
      "Control gameplay through an HTML5 Canvas interface",
      "Use audio feedback to reinforce actions and events",
      "Progress through more challenging stages",
      "Access the game in multiple languages",
    ],
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    imageUrl:
      "https://github.com/hugolomba/abduction-game/raw/master/img/README-images/demo-img.png",
    images: [
      "https://github.com/hugolomba/abduction-game/raw/master/img/README-images/demo-img.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/keys.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/demo.gif",
    ],
    url: "https://hugolomba.github.io/abduction-game/",
    github: "https://github.com/hugolomba/abduction-game",
    decisionLog: [
      {
        title: "Creating a fast-paced arcade experience",
        description:
          "The gameplay was designed around quick reactions, obstacle avoidance and progression in difficulty.",
      },
      {
        title: "Using Canvas for interactive gameplay",
        description:
          "HTML5 Canvas was chosen to support animation, movement and game logic in the browser.",
      },
      {
        title: "Improving immersion with sound",
        description:
          "Audio feedback was added to make the experience feel more responsive and engaging.",
      },
      {
        title: "Making the game more accessible",
        description:
          "Multilingual support broadens reach and improves usability for different players.",
      },
    ],
  },
];
