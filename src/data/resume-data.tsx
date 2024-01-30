import { NSNLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, XIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const RESUME_DATA = {
  name: "Евгений Бахмат",
  initials: "Е.Ю.",
  location: "Москва, Россия, GMT+2",
  locationLink: "https://www.google.com/maps/place/Moscow",
  about:
    "Full Stack Engineer специализирующийся на создании продуктов с особым вниманием к деталям.",
  summary: `
  Всегда интересуюсь последними тенденциями в веб-разработке. Предпочитаю понятный код и простые решения сложных проблем.
  Могу эффективно управлять собой в рамках независимых проектов, а также сотрудничать в составе команды.
  Помимо разработки, занимаюсь поддержанием и переводом документации Open-Source проектов.
  `,
  avatarUrl: "https://avatars.githubusercontent.com/u/34962307?v=4",
  personalWebsiteUrl: "https://johnbakhmat.tech",
  contact: {
    email: "johnbakhmat@gmail.com",
    tel: "+79915888792",
    social: [
      {
        name: "Telegram",
        url: "https://t.me/evheniy_bakhmat",
        icon: TelegramIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/johnbakhmat",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/johnbakhmat",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Харьковский национальный университет радиоэлектроники",
      degree: "Степень бакалавра в области разработки программного обеспечения",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "CareerHub",
      link: "http://rabota.nure.ua",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Планирование, разработка и тестирование новых функция для системы поиска работы. Работал над миграцией проекта из формата React SPA в Next SSR/SSG. Организовал DevOps workflow для упрощения разработки и развертования кода. Технологии: React, TypeScript, Next.js.",
    },
    {
      company: "Sigma Software",
      link: "https://sigma.software",
      badges: ["Remote"],
      title: "Junior Frontend Developer",
      logo: NSNLogo,
      start: "2022",
      end: "2022",
      description: "Разработка и тестирование для innersource.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue/Nuxt",
    "Astro",
    "Node.js",
    "GraphQL",
    "Relay",
  ],
  projects: [
    {
      title: "johnbakhmat.tech",
      description: "Мой персональный сайт.",
      techStack: ["TypeScript", "Astro", "Tailwind", "React", "UnoCSS"],
      link: {
        label: "johnbakhmat.tech",
        href: "https://www.johnbakhmat.tech/",
      },
    },
    {
      title: "CareerHub",
      techStack: ["TypeScript", "Next.js", "SCSS", "Redux"],
      description: "Платформа для помощи студентам ХНУРЭ в поиске работы.",
    },
    {
      title: "ChemSolution",
      techStack: ["TypeScript", "Vue", "Tailwind", "Vuex", "Vue Router"],
      description:
        "Платформа изучения химии, использующая принципы геймификации обучения.",
      link: {
        label: "ChemSolution Repo",
        href: "https://github.com/johnbakhmat/chemsolution",
      },
    },
    {
      title: "Create T3 App",
      techStack: ["Astro", "TypeScript", "Markdown"],
      description: "Перевод документацию проекта на русский язык.",
      link: {
        label: "Create T3 App",
        href: "https://create.t3.gg",
      },
    },
    {
      title: "Happier Ever After",
      techStack: ["C#", "Unity", "Ldtk", "Aseprite"],
      description: "Игра в жанре Stealth Roguelike Platformer.",
      link: {
        label: "HappierEverAfter Repo",
        href: "https://github.com/johnbakhmat/HappierEverAfter",
      },
    },
    {
      title: "Pinned",
      techStack: ["Go", "Fiber", "GraphQL"],
      description: "Сервис для получения закрепленных репзиториев Github.",
      link: {
        label: "Pinned Repo",
        href: "https://github.com/johnbakhmat/pinned",
      },
    },
    {
      title: "Asciifier",
      techStack: ["Go"],
      description: "Утилита создания ASCII изображений.",
      link: {
        label: "Asciifier Repo",
        href: "https://github.com/johnbakhmat/asciifier",
      },
    },
    {
      title: "Rust Pong",
      techStack: ["Rust", "Bevy"],
      description: "Имплементация игры Pong с помощью Rust и Bevy.",
      link: {
        label: "rust-pong Repo",
        href: "https://github.com/johnbakhmat/rust-pong",
      },
    },
    {
      title: "Ultimate Rock Paper Scissors",
      techStack: ["TypeScript", "Next.js", "tRPC", "Socket.io", "Tailwind"],
      description: 'Улучшеная версия "Камень, Ножницы, Бумага" с мультиплеером',
      link: {
        label: "ultimate-rps Repo",
        href: "https://github.com/johnbakhmat/ultimate-rps-turbo",
      },
    },
    {
      title: "FloristiX Flowers",
      techStack: ["JavaScript", "Vue", "Vuex", "Vue Router", "Tailwind"],
      description: "Сервис продажи цветов.",
      link: {
        label: "floristix flowers Repo",
        href: "https://github.com/johnbakhmat/floristix-flowers",
      },
    },
  ],
} as const;
