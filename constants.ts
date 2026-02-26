import { Experience, Profile, Project, SkillCategory } from "./types";
import hostVaultImg from "./assets/thumbnails/hostvault.svg";
import profileImg from "./assets/cropped_1.jpg";
import hostVaultApp1 from "./assets/thumbnails/2_hostvault.png";
import hostVaultApp2 from "./assets/thumbnails/1_hostvault.png";
import team2challengeApp1 from "./assets/thumbnails/1_www.team2challenge.ch.png";
import team2challengeApp2 from "./assets/thumbnails/2_www.team2challenge.ch.png";
import sightflowApp1 from "./assets/thumbnails/screenshot_app.getsightflow.com.png";
import sightflowApp2 from "./assets/thumbnails/2_app.getsightflow.com.png";
import fundreefThumb from "./assets/thumbnails/landing_www.fundreef.com.png";
import fundreefApp1 from "./assets/thumbnails/1_app.fundreef.com.png";
import fundreefApp2 from "./assets/thumbnails/2_app.fundreef.com.png";
import convertYTThumb from "./assets/thumbnails/logo_convertyt.png";
import convertYTApp1 from "./assets/thumbnails/2_convertyt.png";
import rentigoThumb from "./assets/thumbnails/1_rentigo.co.uk.png";
import rentigoApp1 from "./assets/thumbnails/2_rentigo.co.uk.png";

// NOTE: Replace this URL with your actual image URL after hosting the image, or import a local asset.
// For now, using a placeholder that represents a professional avatar.
export const PROFILE_IMAGE_URL = profileImg;

export const PROFILE: Profile = {
  name: "Muhammad Wahaj",
  role: "Software Developer | PHP | NodeJs | Go | React",
  location: "Lahore, Pakistan",
  summary: "Software Developer with 4+ years building high-performance PHP applications using Laravel/MVC frameworks, NodeJS & Go.",
  socials: [
    {
      platform: "Email",
      url: "mailto:wahaj.dkz@gmail.com",
      icon: "mail",
      display: "wahaj.dkz@gmail.com"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/wahaj-5598/",
      icon: "linkedin",
      display: "in/wahaj-5598"
    },
    {
      platform: "GitHub",
      url: "https://github.com/wahajnintyeight",
      icon: "github",
      display: "github.com/wahajnintyeight"
    },
    {
      platform: "Phone",
      url: "tel:+923244137276",
      icon: "phone",
      display: "+92 324 413 7276"
    }
  ]
};

export const EXPERIENCE: Experience[] = [
  {
    id: "cynosure",
    company: "Cynosure Designs Ltd.",
    role: "Software Developer",
    location: "Lahore, Pakistan",
    period: "02/2023 – Present",
    achievements: [
      "Designed, developed, and deployed 30+ client-facing applications using PHP (Laravel) and React with a focus on scalability.",
      "Integrated Elasticsearch, reducing P95 load times by 40% for 900K+ investor records and improving search responsiveness.",
      "Delivered production-ready features including RabbitMQ notifications, WebSocket streaming, AWS Lambda transcription, and Stripe payments, cutting delivery cycles by 40%."
    ]
  },
  {
    id: "azure",
    company: "Azure Innovations",
    role: "Software Developer",
    location: "Lahore, Pakistan",
    period: "09/2021 – 12/2022",
    achievements: [
      "Built REST APIs in Node.js with Redis caching, reducing API latency by 50% for e-commerce transaction flows.",
      "Built geofencing microservice using Redis Geospatial queries detecting zone entry/exit events and triggering real-time FCM push notification.",
      "Developed a high-throughput GPS tracking service in Go, handling 1,000+ concurrent streams and reducing query latency by 65% across PostgreSQL, MongoDB, and Redis."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rentigo",
    title: "Rentigo - Property Management Platform",
    techStack: ["Laravel", "Livewire", "MySQL", "Stripe", "DocuSign", "GoCardless"],
    location: "Global",
    period: "2023 - Present",
    description: [
      "Built a comprehensive property management platform handling rental, sales, and international properties with multi-role access (Admin, Landlord, Tenant, Buyer).",
      "Integrated third-party property portals (Rightmove, Zoopla, OnTheMarket) for automated property syndication and lead management.",
      "Implemented payment processing with Stripe and GoCardless, DocuSign e-signatures, SMS notifications via TextLocal, and real-time WebSocket notifications."
    ],
    images: [
        rentigoThumb,
        rentigoApp1
    ]
  },
  {
    id: "hostvault",
    title: "Host Vault - Secure SSH Manager",
    techStack: ["Go", "React", "TypeScript", "Wails", "Zustand"],
    location: "Global",
    period: "2024 - Present",
    description: [
      "Developed a secure, modern SSH connection manager desktop application with a frameless window design and custom controls.",
      "Features include full SSH connection management, terminal integration with split panes, command snippet management, and secure credential storage.",
      "Built with Wails (Go + React), supporting local/guest modes, 15+ themes, and encrypted master password protection."
    ],
    images: [
        hostVaultApp1,
        hostVaultApp2
    ]
  },
  {
    id: "convertyt",
    title: "ConvertYT - Modern Video Downloader",
    techStack: ["React Native", "TypeScript", "Reanimated", "YouTube API"],
    location: "Global",
    period: "2025 - Present",
    description: [
      "Built a feature-rich video downloader with React Native and TypeScript, featuring a modern UI with dark/light mode and smooth 60fps animations.",
      "Implemented real-time YouTube search via Data API v3 with pagination, search history, and offline mock data fallbacks.",
      "Developed a comprehensive download system supporting multiple formats (MP4, MP3, WEBM) and qualities (144p to 4K) with background progress tracking."
    ],
    images: [
        convertYTThumb,
        convertYTApp1
    ]
  },
  {
    id: "team2challenge",
    title: "Team2Challenge - Multi-Tenant Sports Management",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "AWS"],
    location: "Lahore, Pakistan",
    period: "06/2025 - Current",
    description: [
      "Built event-driven notification service using RabbitMQ with retry logic, cutting email latency by 60%.",
      "Developed shared entity modules and domain-separated services, reducing feature development time by 40%.",
      "Wrote optimized PostgreSQL queries with Redis caching, improving API response times by 50% under high load."
    ],
    images: [
        team2challengeApp1,
        team2challengeApp2
    ]
  },
  {
    id: "sightflow",
    title: "Sightflow - AI Support Assistant Platform",
    techStack: ["Laravel", "React", "Python", "Gemini 2.0", "Pinecone", "AWS"],
    location: "Lahore, Pakistan",
    period: "12/2024 - 06/2025",
    description: [
      "Built a full-stack RAG platform with a Laravel REST API and React/Vite frontend, enabling companies to create customizable AI assistants.",
      "Developed a Python AI engine using Google Gemini 2.0 Flash Live API and WebSockets for real-time voice, video, and screen sharing interactions.",
      "Integrated Pinecone vector database for context-aware responses and AWS S3 for document storage, delivering intelligent customer support."
    ],
    images: [
        sightflowApp1,
        sightflowApp2
    ]
  },
  {
    id: "fundreef",
    title: "Fundreef - Startup-Investor Marketplace",
    techStack: ["Laravel", "Livewire", "MySQL", "Meilisearch", "Stripe", "Gemini AI"],
    location: "Global",
    period: "2024 - Present",
    description: [
      "Built a full-stack two-sided marketplace connecting startups with investors, featuring comprehensive investor/fund database with 50+ data fields and Meilisearch-powered fast search.",
      "Developed AI-powered fundraising tools including pitch deck analyzer, business plan generator, term sheet analyzer, and company valuation calculator using Google Gemini API.",
      "Implemented subscription-based monetization with Stripe, role-based access control (founders, angel investors, fund investors), and CRM/pipeline management with activity tracking."
    ],
    images: [
        fundreefThumb,
        fundreefApp1,
        fundreefApp2
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["PHP", "JavaScript & TypeScript", "Go", "Python"]
  },
  {
    category: "Backend & Frameworks",
    skills: ["Laravel", "Node.js", "Express.js", "React.js", "jQuery", "FastAPI"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (Lambda, S3)", "Docker", "RabbitMQ", "Linux", "Git"]
  }
];

export const EDUCATION = {
  institution: "University of Central Punjab",
  degree: "Bachelor of Science - Computer Science",
  location: "Lahore, Pakistan",
  period: "10/2017 – 09/2021"
};