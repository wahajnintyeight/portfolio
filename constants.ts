import { Experience, Profile, Project, SkillCategory } from "./types";

// NOTE: Replace this URL with your actual image URL after hosting the image, or import a local asset.
// For now, using a placeholder that represents a professional avatar.
export const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

export const PROFILE: Profile = {
  name: "Muhammad Wahaj",
  role: "Software Developer | PHP | Scalable Systems",
  location: "Lahore, Pakistan",
  summary: "Software Developer with 4+ years building high-performance PHP applications using Laravel and MVC frameworks. Experienced in integrating payment systems like Stripe, optimizing APIs serving 900k+ records, and working across relational and non-relational databases. I thrive in agile teams where scalability, security, and clean API design are priorities.",
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
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "sightflow",
    title: "SightFlow",
    techStack: ["ReactJs", "Python", "Laravel", "AWS"],
    location: "Lahore, Pakistan",
    period: "12/2024 - 06/2025",
    description: [
      "Built WebSocket streaming system integrating Gemini AI for real-time audio/image analysis with automatic reconnection.",
      "Developed media processing pipeline handling 50+ concurrent screen shares with server-side buffering and S3 integration."
    ],
    images: [
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "notix",
    title: "Notix-AI",
    techStack: ["ReactJs", "Python", "Laravel", "MySQL", "AWS"],
    location: "Lahore, Pakistan",
    period: "10/2024 – 02/2025",
    description: [
      "Built audio-to-text pipeline using Deepgram API and Google MedLM, processing 1,000+ medical notes monthly with 95% accuracy.",
      "Implemented serverless transcription jobs using AWS Lambda and SQS queuing with automatic retry logic."
    ],
    images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["PHP", "JavaScript", "Go", "TypeScript", "Python", "SQL"]
  },
  {
    category: "Backend & Frameworks",
    skills: ["Laravel", "Doctrine", "Node.js", "Express.js", "React.js", "jQuery", "REST API"]
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