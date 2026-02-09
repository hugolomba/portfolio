import { url } from "inspector";

export const projects = [
  {
    title: "Housemates — Shared House Management App",
    type: "Full‑stack Web App",
    slug: "housemates",
    description:
      "A full‑stack web application to manage and organize shared house information — centralizing tasks, expenses, alerts, and credentials securely and collaboratively.",
    longDescription:
      "Housemates is a full‑stack application designed to help people organize and manage everything related to shared house life. The app centralizes information that is often scattered across messages and chats, providing features such as shared expense management, household task tracking, priority alerts, room management, and credential control. Users can also invite new members via invitation code and monitor recent activity within the house. The frontend is built with Next.js using TypeScript and Tailwind CSS, combining Server Components and Client Components, while the backend uses Next.js Server Actions with Prisma and PostgreSQL for secure data logic and authentication.",
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "BetterAuth",
    ],
    imageUrl: "/images/1.png",
    images: ["/images/1.png", "/images/2.png", "/images/3.png"],
    url: "https://housemates.hugolomba.com",
    github: "https://github.com/hugolomba/housemates",
    decisionLog: [
      {
        title: "Centralizing scattered information",
        description:
          "Information about shared houses is usually scattered across chats. Housemates solves this by centralizing everything in one app.",
      },
      {
        title: "Managing expenses and bills",
        description:
          "Allows creating, editing, and splitting bills among house members, with payment status tracked for each user.",
      },
      {
        title: "Tasks and alerts",
        description:
          "Users can track household tasks and create alerts with different priority levels.",
      },
      {
        title: "Security and access control",
        description:
          "Secure authentication (email, Google) with BetterAuth and permissions ensure that only house members can view or modify data.",
      },
    ],
  },
  {
    title: "E-commerce Platform",
    type: "Saas Application",
    slug: "e-commerce-platform",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    longDescription:
      "Detailed information about the project, including features, technologies used, challenges faced, and solutions implemented.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
    imageUrl: "/images/1.png",
    url: "https://ecommerce.hugolomba.com",
    github: "",
    decisionLog: [
      {
        title: "The Challenge",
        description:
          "Next.js provides server-side rendering and static site generation, which improves performance and SEO.",
      },
      {
        title: "The trade-off",
        description:
          "React allows for building reusable UI components and has a large ecosystem of libraries.",
      },
      {
        title: "The decision",
        description:
          "TypeScript helps catch errors during development and improves code maintainability.",
      },
      {
        title: "Why",
        description:
          "Node.js allows for building scalable and efficient server-side applications using JavaScript.",
      },
    ],
  },
  {
    title: "Social Media Dashboard",
    type: "Saas Application",
    slug: "social-media-dashboard",
    description:
      "Brief description of the project highlighting key features and technologies used.",
    longDescription:
      "Detailed information about the project, including features, technologies used, challenges faced, and solutions implemented.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
    imageUrl: "/images/1.png",
    url: "https://socialmedia.hugolomba.com",
    github: "",
    decisionLog: [
      {
        title: "The Challenge",
        description:
          "Next.js provides server-side rendering and static site generation, which improves performance and SEO.",
      },
      {
        title: "The trade-off",
        description:
          "React allows for building reusable UI components and has a large ecosystem of libraries.",
      },
      {
        title: "The decision",
        description:
          "TypeScript helps catch errors during development and improves code maintainability.",
      },
      {
        title: "Why",
        description:
          "Node.js allows for building scalable and efficient server-side applications using JavaScript.",
      },
    ],
  },
];
