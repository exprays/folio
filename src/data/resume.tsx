import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Exprays",
  initials: "SS",
  url: "https://exprays.thestarsociety.tech",
  location: "Cuttack , IN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "e-Racer turned Developer. I love building things and helping people.",
  summary:
    "I'm Surya, currently developing open-source software and SaaS businesses. I'm passionate about e-Racing, astronomy, computers, anime, volleyball, geography, and music, which all inspire my work. I also had the pleasure of being a part of the s5 cohort of buildspace called [buildspace s5](https://buildspace.so/s5).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Rust",
    "Solidity",
    "Deno",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/exprays",
        icon: Icons.github,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@noodlefx",
        icon: Icons.medium,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/suryakantsubudhi",
        icon: Icons.instagram,

        navbar: true,
      },
      Pinterest: {
        name: "Pinterest",
        url: "https://pinterest.com/frazfx",
        icon: Icons.pinterest,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "The Star Society",
      href: "https://thestarsociety.tech",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/tss-profile.png",
      start: "Oct 2022",
      end: "Present",
      description:
        "The Star Society is a community of developers, designers, and creators who are passionate about building open-source software and SaaS businesses. We are currently working on a few projects including [Orion](https://orion.thestarsociety.tech), [Saturn](https://saturn.thestarsociety.tech), and [Alpha](https://alpha.thestarsociety.tech).",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Indira Gandhi Institute of Technology, Sarang",
      href: "https://igitsarang.ac.in",
      degree: "B.tech in Electronics & Communication Engineering",
      logoUrl: "/igit.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Jawahar Navodaya Vidyalaya, Jajpur",
      href: "https://navodaya.gov.in/nvs/nvs-school/Jajpur/en/home/",
      degree: "Senior Secondary",
      logoUrl: "/nvs_logo.png",
      start: "2015",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackAI Dell & Nvidia Challenge",
      dates: "August 3rd - Present, 2024",
      location: "Remote",
      description:
        "Developing a multi-modal AI assistant tailored for scientific research, capable of processing and analyzing text, images, and numerical data. This assistant will leverage the latest advancements in large language models, computer vision, and scientific computing to assist researchers in various fields.",
      image:
        "/nvidia.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://thestarsociety.tech",
        },
      ],
    },
    {
      title: "Smart India Hackathon 2023",
      dates: "September - November, 2023",
      location: "Remote",
      description:
        "Developed a RAG based platform based on GPT-3.5 for the Ministry of Law and Justice, Govt. of India, which can simplify and summarise legal documents for common people.",
      image:
        "/sih.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/exprays/loop",
        },
      ],
    },
    {
      title: "Clarifai Llama-2 Hackathon",
      dates: "July 15th - September 14th, 2023",
      location: "Remote",
      description:
        "Developed an AI chatbot platform for customizing and deploying AI chatbots for any purpose by using llama-2-13b",
      image:
        "/clarifai.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/exprays/aura",
        },
      ],
    },
  ],
} as const;
