import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ian Njenga",
  initials: "IN",
  location: "Maryland, United States, EDT",
  locationLink: "https://www.google.com/maps/place/Maryland",
  about: "Tinkerer and builder focused on small products and prototypes across web, mobile and ML.",
  summary:
    "I build side projects and prototypes spanning community platforms, ML for education, fintech and tooling for small businesses. This site showcases selected tinkering projects.",
  avatarUrl: "https://avatars.githubusercontent.com/u/48165559?s=400&u=64eab127867a18ac16b9d8fd9df1e8caf4de1266&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "injenga@terpmail.umd.edu",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Jenks18",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ian-njenga-9b075722a/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/iannjenga00",
        icon: XIcon,
      },
    ],
  },
  // Focused projects resume — work, education and skill lists removed
  projects: [
    {
      title: "ToxWiki GPT",
      techStack: ["AI", "Healthcare", "GPT"],
      description:
        "AI-powered toxicology reference chatbot providing information from patient, doctor, and researcher perspectives. Built with GPT technology for medical toxicology queries.",
      link: { label: "ToxWiki GPT", href: "https://chatbot-y1ar.vercel.app" },
    },
    {
      title: "Wakenya Who Code",
      techStack: ["Community", "Web"],
      description:
        "A community platform for Kenyan developers to share knowledge, jobs, events and collaborate on projects.",
      link: { label: "wakenyawhocode.com", href: "https://www.wakenyawhocode.com/" },
    },
    {
      title: "Jirani",
      techStack: ["Civic Tech", "Crowdsourcing"],
      description:
        "Crowd-sourced platform for reporting crime and event data in local neighborhoods. Aims to help communities surface trends and improve safety.",
      link: { label: "majiraniwetu.org", href: "https://majiraniwetu.org/" },
    },
    {
      title: "CardScan — MetalView & CRM",
      techStack: ["Mobile", "Computer Vision", "CRM"],
      description:
        "Scan business cards, render them into a metal-like ‘credit card’ view and store contacts in a lightweight CRM. Supports automated follow-up emails after scanning.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "ShopCMS",
      techStack: ["SaaS", "Retail"],
      description:
        "Odoo-like CMS/backoffice service for shops to manage inventory, sales and basic POS features.",
      link: { label: "Maduka (shops)", href: "https://maduka-gold.vercel.app/" },
    },
    {
      title: "MafutaPass",
      techStack: ["Fintech", "Fleet"],
      description:
        "AToB-like service for fleet providers in Kenya to manage fuel, passes and reconciliation.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "Kenya Stablecoin",
      techStack: ["Crypto", "Fintech"],
      description:
        "Exploratory work on a Kenya-focused stablecoin and payments primitives for local businesses and remittances.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "DefenX",
      techStack: ["ML", "K-12", "Safety"],
      description:
        "K-12 focused ML corp for gun detection and safety monitoring — tools and models to help schools detect threats and improve response times.",
      link: { label: "defenx.us", href: "https://defenx.us" },
    },
    {
      title: "Kenya Golf Visualizer",
      techStack: ["Visualization", "GIS"],
      description:
        "Course visualizer that renders Kenyan golf courses, routing and simple terrain overlays for players and course managers.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "Ghorofa",
      techStack: ["Property", "SaaS"],
      description:
        "Property rental management service inspired by Innago — listings, tenant management and payments for landlords.",
      link: { label: "Raty / Ghorofa", href: "https://raty-rsjf.vercel.app/" },
    },
    {
      title: "FIFA Scorekeeper",
      techStack: ["Mobile", "Gaming"],
      description:
        "A simple app for friends to record and track FIFA match scores and leaderboards.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "NonProfit CRM",
      techStack: ["CRM", "SaaS"],
      description:
        "A nonprofit-focused CRM platform with fundraising, contact management and reporting inspired by enterprise CRMs but tailored to small NGOs.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "NurseCare",
      techStack: ["Healthcare", "SaaS"],
      description:
        "An Epic-like platform for nurses to track patients, notes and simple care flows in small clinics and wards.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "LightSkill (employment data)",
      techStack: ["Data", "Employment"],
      description:
        "Employment and skills data platform for matching and analytics — inspired by LightSkill-like services.",
      link: { label: "Coming soon", href: "" },
    },
    // Preserve a few existing side projects
    {
      title: "Xanes",
      techStack: ["Electronic Music"],
      description:
        "Electronic Music label with a focus on showcasing different electronic sounds from Kenyan artists",
      link: { label: "Framer", href: "https://xanes.framer.website/" },
    },
    {
      title: "Pesalite",
      techStack: ["Python", "Finance"],
      description: "Bank statement scraper that builds financial statements from raw data.",
      link: { label: "Coming soon", href: "" },
    },
    {
      title: "Kura Spaces",
      techStack: ["Side Project"],
      description: "Voter management solution with a focus on international demographics",
      link: { label: "Coming soon", href: "" },
    },
  ],
  
} as const;
