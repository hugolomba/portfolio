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

It provides a protected space where house members can:

manage bills and shared expenses
track tasks and responsibilities
create alerts with different priority levels
store shared credentials
invite new members using an invite code

## Key Features

### House Management

- Create a new house or join an existing one using an invite code
- Secure, house-based access control
- Invite and manage house members
- the app keeps an activity feed of all actions taken in the house

### Dashboard Overview

- Active alerts sorted by priority (urgent, high, medium, low)
- Upcoming bills due in the next days
- Pending tasks
- Recent activity feed
- In the desktop version, it also has a dashboard style layout for better visual organisation

### Bills & Shared Expenses

- Create, edit and delete bills
- Split bills between house members
- Track how much each user owes
- Manual payment tracking
- Paid / unpaid status per user share

### Tasks

- Create and assign tasks
- Track task completion status
- Track tasks by room or category

### Alerts

- See alerts overview on dashboard
- Create alerts related to the house
- Priority levels: urgent, high, medium, low
- Mark alerts as resolved

### Rooms

- Create and manage house rooms
- Organise responsibilities per room
- Define room-specific tasks
- Define users in rooms (e.g. Alice is user of Alice's room)
- Define common rooms (e.g. kitchen, living room)

### Credentials

- Store shared credentials (e.g. Wi-Fi, services)
- **Securely encrypted** storage of credentials
- Accessible only to authorised house members

### Activity Feed

- Track recent house activity
- See who created, updated or deleted bills, tasks, alerts and credentials

### Authentication & Authorisation

- Email and password authentication
- Google authentication
- Session handling with **BetterAuth**
- Protected routes and server actions
- Authorisation checks to ensure users can only access and modify houses they belong to

### Tech Stack

- **Frontend:** Next.js (App Router) with Typescript and Tailwind CSS
- **Backend:** Next.js Server Actions with Typescript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** BetterAuth
- **Architecture:** Server Components + Client Components with Typescript
- **Security:** Authentication and authorisation at route and action level

### Future Improvements

- Push and email notifications for alerts and bills
- Real payment integrations
- Activity analytics and insights
- Role-based permissions (e.g. admin, member)
- Mobile app version
- More integrations (e.g. calendar sync, task management tools)
`,
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
This project is a social media–style blog where users can create and share posts, edit and delete their content, and interact with other users' posts. The users can sign up and log in with multiple authentication methods, including email, Google, and GitHub. The project is developed with Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Better Auth, and it has full CRUD functionality.

I created this project as a portfolio piece to practice full-stack development concepts and build a real-world social platform experience.

## Features

- **Full CRUD (Create, Read, Update, Delete)**: Users can create new blog posts, edit existing ones, view all posts, and delete content safely.
- **User Authentication**: Integration with BetterAuth, supporting login via email, Google, and GitHub.
- **Dynamic Routes & SEO Optimization**
- **Responsive Design**
- **Database Integration**: Uses Prisma to manage the PostgreSQL database efficiently, demonstrating knowledge of data modelling, migrations, and query handling.
- **TypeScript for type safety**
- **Modular and reusable React components**
`,
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
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733204/Screenshot_2026-01-29_at_18.14.51_hjitfh.png",
    imageUrls: [
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1769733204/Screenshot_2026-01-29_at_18.14.51_hjitfh.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1766247861/Screenshot_2025-12-20_at_16.21.50_oienzd.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1766247861/Screenshot_2025-12-20_at_16.22.35_wjazct.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1766247860/Screenshot_2025-12-20_at_16.22.19_yw1r89.png",
      "https://res.cloudinary.com/dck0d5qwp/image/upload/v1766247860/Screenshot_2025-12-20_at_16.22.55_wdi4ce.png",
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
**The Solar System 2** is an interactive full-stack project I rebuilt to enhance my skills in React, TypeScript, and full-stack development. The project displays information about celestial bodies including planets, dwarf planets, asteroids, and galaxies. I focused on creating a custom API, improving the design, and adding interactive animations to make the project more complete.

## Features
- **List of Celestial Bodies**: Browse a comprehensive list of planets, dwarf planets, asteroids, and galaxies.
- **Custom API**: Backend built with Node.js, Express, and TypeScript providing data about celestial bodies.
- **Interactive Frontend**: Developed with React, TypeScript, and Tailwind CSS for a responsive and engaging user experience.
`,
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
**Weather App** is a responsive web application powered by the Visual Crossing Weather API. Users can view the current weather for their location or search for any city worldwide. The app features dynamic content updates, responsive design, and interactive elements to improve user experience.

## Features
- **Automatic Geolocation**: Displays weather automatically based on user's location.
- **City Search**: Fetch live weather data for any city.
- **Local Time Display**: Shows time based on the selected city's timezone.
- **Search History**: Saves and displays previous searches, with clickable items to reload weather data.
- **Highlight Last Search**: The most recent search is automatically highlighted.
- **Responsive Design**: Built with Flexbox and media queries for mobile and desktop.
- **Dynamic Interactions**: Handles user events, conditional styling, form validation, and DOM updates.
`,
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
**Blog API** is a backend application built with Node.js, Express, and Prisma. It provides all necessary endpoints for managing users, posts, and comments in a blog application. The API supports JWT authentication, image upload using Multer + Cloudinary, data validation with Joi, and password hashing with bcrypt/bcryptjs.

## Features
- **Authentication**: JWT-based login and registration with optional avatar upload.
- **User Management**: CRUD operations for users, password changes, profile editing, and admin-only routes.
- **Post Management**: Create, edit, delete, like, save, and search posts with optional cover images.
- **Comment Management**: CRUD operations for comments and ability to like comments.
- **Validation & Security**: Input validation with Joi, password hashing, and protected routes with JWT.
- **Error Handling**: Centralized error handling with JSON responses for unknown routes and errors.
`,
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
**Solar System API** is a RESTful backend application built with Node.js and Express. It provides endpoints to retrieve detailed information about celestial objects including planets, dwarf planets, asteroids, stars, and galaxies.

## Available Routes
- **GET /**: Welcome message and available routes
- **GET /all**: Retrieve the complete dataset
- **GET /planets**: List all planets
- **GET /planets/:name**: Get detailed information about a specific planet
- **GET /stars/**: Get all stars
- **GET /stars/:name**: Get detailed information about a specific star
- **GET /dwarf-planets**: List all dwarf planets
- **GET /dwarf-planets/:name**: Get detailed information about a specific dwarf planet
- **GET /planets-and-dwarfs**: List all planets and dwarf planets together
- **GET /asteroids**: List all asteroids
- **GET /galaxies**: List all galaxies
- **GET /find/:tag**: Search for objects by tag (supports partial search)
`,
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
**Dublin Pub Inventory** is a full-stack project designed to practice backend and frontend development. Users can browse, search, create, and delete records of pubs, drinks, and events, with admin authentication required for destructive actions.

## Key Features
- **Backend**: PostgreSQL database with multiple related tables (pubs, drinks, events, categories) and foreign key constraints.
- **API and Routing**: RESTful routes for CRUD operations, search functionality, and secure deletion with admin authentication.
- **Templating and Views**: Dynamic views built with EJS for listing, creating, updating, and viewing pub details.
- **Frontend and UX**: Styled with CSS, responsive layouts, a navbar, and interactive elements for a user-friendly experience.
- **Data Management**: Seed scripts populate the database with realistic Dublin pub data for testing and demonstration.
`,
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
**Bankist App** is a fictional online banking application developed to practise modern JavaScript concepts. It simulates real-world banking operations while showcasing array methods, DOM manipulation, and event handling.

## Features
- **Login**: Authenticate using username and PIN.
- **Dynamic UI**: Balance, transactions, and summaries update based on user actions.
- **Transfers**: Money transfers between accounts with validation.
- **Loans**: Eligibility-checked loan requests.
- **Account Closure**: Secure account deletion with username and PIN.
- **Financial Summary**: Overview of incomes, expenses, and interest.
- **Sorting**: Transactions sorted in ascending or descending order.
- **Logout Timer**: Automatic logout for security (in progress).

## Technologies and Skills Demonstrated
- **HTML & CSS**: Semantic structure, responsive layout, and styled UI with navigation and operation sections.
- **JavaScript (ES6+)**: DOM manipulation, event handling, array methods (*map, filter, reduce, find, some, every, sort*), modular helper functions, form validation, and dynamic username generation.
- **Business Logic**: Realistic constraints for transfers, loans, and account closures tied to user input and balance.
`,
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
**Bankist Website** is a modern, responsive, and interactive landing page simulating a real-world financial product. Built as part of an advanced JavaScript course, it demonstrates DOM manipulation, event handling, and performance-focused techniques to enhance user experience.

## Features
- **Smooth Navigation**: Scroll-based navigation with sticky header.
- **Tabbed Component**: Switch between sections seamlessly.
- **Section Reveal**: Animated reveal on scroll for dynamic interaction.
- **Lazy Loading**: Optimised image loading for performance.
- **Modal Form**: Interactive modal to simulate account opening.
- **Content Slider**: Fully functional slider with arrows, dots, and keyboard support.

## What I Learned & Applied
- **JavaScript (ES6+)**: DOM manipulation, event handling, delegation, bubbling, capturing, and modular reusable code.
- **Intersection Observer API**: Implemented for sticky navigation, lazy loading, and reveal animations.
- **HTML & CSS**: Semantic structure, responsive design with Flexbox and Grid, CSS custom properties, transitions, and animations.

This project highlights practical application of modern JavaScript patterns with a strong focus on clean UI, UX, and performance.
`,
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
Take control of a UFO and embark on a fast-paced mission to abduct creatures while dodging obstacles in this browser-based arcade game.

## Features
- **Audio Feedback**: Immersive sound effects enhance the gameplay experience.
- **Difficulty Progression**: Levels become more challenging as you advance.
- **Multilingual Support**: Play the game in multiple languages for a broader reach.
`,
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
