import { Experience, Profile, Project, SkillCategory } from "./types";
import profileImg from "./assets/profile-cutout.png";
import hostVaultApp1 from "./assets/thumbnails/2_hostvault.png";
import hostVaultApp2 from "./assets/thumbnails/1_hostvault.png";
import team2challengeApp1 from "./assets/thumbnails/1_www.team2challenge.ch.png";
import team2challengeApp2 from "./assets/thumbnails/2_www.team2challenge.ch.png";
import fundreefThumb from "./assets/thumbnails/landing_www.fundreef.com.png";
import fundreefApp1 from "./assets/thumbnails/1_app.fundreef.com.png";
import fundreefApp2 from "./assets/thumbnails/2_app.fundreef.com.png";
import convertYTThumb from "./assets/thumbnails/logo_convertyt.png";
import convertYTApp1 from "./assets/thumbnails/2_convertyt.png";
import rentigoThumb from "./assets/thumbnails/1_rentigo.co.uk.png";
import rentigoApp1 from "./assets/thumbnails/2_rentigo.co.uk.png";
import projembleThumb from "./assets/thumbnails/projemble-home.png";
import projembleSite from "./assets/thumbnails/projemble-site.png";
import nokduSite from "./assets/thumbnails/nokdu-site.png";
import fairytailSite from "./assets/thumbnails/fairytail-site.png";

export const PROFILE_IMAGE_URL = profileImg;
export const CHATBOT_URL = "https://qualzo.app/chat/cms4h6qda0247jqymkzdnh6lk";

export const PROFILE: Profile = {
  name: "Muhammad Wahaj",
  role: "Software Developer | PHP | NodeJs | Go | React",
  location: "Lahore, Pakistan",
  summary: "Software Engineer with 7+ years building backend systems and high-performance APIs with PHP, Node.js, and Go.",
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
    role: "Senior Software Engineer",
    location: "Lahore, Pakistan",
    period: "02/2022 – 11/2026",
    achievements: [
      "Built 30+ client-facing web apps using Laravel, Livewire, and React, increasing engagement by 35% across 500+ users through responsive UIs and optimized queries.",
      "Improved search and filtering performance through indexed queries and Elasticsearch-backed retrieval.",
      "Delivered production-ready features including RabbitMQ notifications, WebSocket streaming, AWS Lambda transcription, and Stripe payments, cutting delivery cycles by 40%."
    ]
  },
  {
    id: "azure",
    company: "Azure Innovations",
    role: "Software Developer",
    location: "Lahore, Pakistan",
    period: "09/2019 – 12/2021",
    achievements: [
      "Built REST APIs in Node.js with Redis caching, reducing API latency by 50% for e-commerce transaction flows.",
      "Automated CI/CD with AWS CodePipeline and CodeDeploy, reducing deployments from 45 minutes to 12 and adding automated rollback on failure.",
      "Developed a high-throughput GPS tracking service in Go, handling 1,000+ concurrent streams and reducing query latency by 65% across PostgreSQL, MongoDB, and Redis."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "projemble",
    title: "Projemble - Go Project Scaffolder",
    summary: "Go project scaffolder",
    techStack: ["Go", "gotui", "Goldmark", "YAML", "LLM APIs"],
    location: "Open source",
    period: "2026 - Present",
    url: "https://projemble.by-wahaj.workers.dev/",
    overview: "A Go CLI/TUI that lets developers shape a project before they start coding: choose its workload, patterns, architecture, and verified templates. Agent-assisted implementation stays optional, so local scaffolding needs no AI provider.",
    description: [
      "Built a Go CLI/TUI that scaffolds projects from explicit workloads, application patterns, architectures, and verified templates.",
      "Supports HTTP APIs, CLI tools, jobs, background workers, and Go libraries, with architectures selected to fit each workload.",
      "Keeps local scaffolding usable without an AI provider, with optional agent-assisted implementation and saved project sessions."
    ],
    images: [projembleSite, projembleThumb]
  },
  {
    id: "nokdu-comics",
    title: "Nokdu Comics - Webtoon Platform",
    summary: "Korean webtoons for Italian readers",
    techStack: ["Next.js", "TypeScript", "PHP", "Stripe"],
    location: "Italy",
    period: "Ongoing",
    url: "https://nokdu.eu/en",
    overview: "A bilingual storefront for officially licensed Korean webtoons translated into Italian, with curated discovery, genre browsing, and an immersive vertical reader.",
    description: [
      "Built a bilingual storefront for officially licensed Korean webtoons translated into Italian, with genre browsing, curated picks, and new releases.",
      "Created an immersive vertical-scroll reading experience that adapts across mobile and desktop.",
      "Added flexible access through an unlimited subscription or individual chapter purchases."
    ],
    images: [nokduSite]
  },
  {
    id: "fairytail-ai",
    title: "Fairytail AI - Memory Film Studio",
    summary: "Family photos into cinematic memory films",
    techStack: ["React", "TypeScript", "PHP", "Stripe"],
    location: "Digital product",
    period: "Ongoing",
    url: "https://fairytail.ai/",
    overview: "A guided photo-to-film experience that turns family memories into narrated cinematic stories, with flexible one-time credits for creating a film.",
    description: [
      "Turned cherished family photos into short memory films with story, cinematic motion, narration, and music.",
      "Built a guided creation flow from photo upload and story direction through generated scenes and a finished film.",
      "Added flexible, one-time credit bundles so people can create films without a recurring subscription."
    ],
    images: [fairytailSite]
  },
  {
    id: "rentigo",
    title: "Rentigo - Property Management Platform",
    summary: "Property management",
    techStack: ["Laravel", "Livewire", "MySQL", "Stripe", "DocuSign", "GoCardless"],
    location: "Global",
    period: "2023 - Present",
    overview: "A property management platform for rental and sales operations, bringing admins, landlords, tenants, and buyers into one connected workflow.",
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
    summary: "Secure SSH workspace",
    techStack: ["Go", "React", "TypeScript", "Wails", "Zustand"],
    location: "Global",
    period: "2024 - Present",
    overview: "A Go-powered desktop workspace for managing SSH hosts, opening local or remote terminals, and keeping reusable command snippets close at hand.",
    description: [
      "Organized SSH hosts with groups, tags, favorites, key import, and host fingerprint verification.",
      "Combined remote and local terminal sessions with tabs, split panes, workspace restore, and reusable command snippets.",
      "Built with Wails, Go, React, and TypeScript, including guest mode and master-password encryption."
    ],
    images: [
        hostVaultApp1,
        hostVaultApp2
    ]
  },
  {
    id: "convertyt",
    title: "ConvertYT - Modern Video Downloader",
    summary: "Mobile video downloader",
    techStack: ["React Native", "TypeScript", "Reanimated", "YouTube API"],
    location: "Global",
    period: "2025 - Present",
    overview: "ConvertYT Go is a React Native video discovery and download app, with YouTube search, format and quality options, and a persistent download queue.",
    description: [
      "Built a cross-platform mobile app with React Native and TypeScript, including dark and light themes and animated interactions.",
      "Added paginated YouTube search, search history, and a mock-data fallback when the search service is unavailable.",
      "Implemented queued downloads with format and quality selection, progress tracking, and API or direct-stream download paths."
    ],
    images: [
        convertYTApp1,
        convertYTThumb
    ]
  },
  {
    id: "team2challenge",
    title: "Team2Challenge - Multi-Tenant Sports Management",
    summary: "Sports & event management",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "AWS"],
    location: "Lahore, Pakistan",
    period: "06/2025 - 09/2025",
    overview: "A multi-tenant sports platform for coordinating clubs, challenges, and events, with event-driven notifications and responsive data workflows.",
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
    id: "fundreef",
    title: "Fundreef - Startup-Investor Marketplace",
    summary: "Startup & investor marketplace",
    techStack: ["Laravel", "Livewire", "MySQL", "Meilisearch", "Stripe", "Gemini AI"],
    location: "Global",
    period: "2024 - Present",
    overview: "A two-sided marketplace connecting startups with investors, pairing searchable investor profiles with fundraising tools and a deal pipeline.",
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
