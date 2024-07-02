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
  about:
    "Accounting Associate focused on building products with attention to detail",
  summary:
    "As an Accounting Associate with an interest in tinkering, I am interested in developing solutions across various industries.",
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
  education: [
    {
      school: "Robert H. Smith School of Business, College-Park",
      degree: "Bachelor's Degree in Accounting",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Brady Organization",
      link: "https://www.bradyunited.org/",
      badges: ["Hybrid"],
      title: "Accounting Associate",
      logo: ParabolLogo,
      start: "06/2023",
      end: "12/2023",
      description:
        "Automated accounts payable processes with Python based Tkinter programs. Created self-hosted website instance for self-administered training material. Processed and entered invoices into ERP system.	Assisted with monthly account reconciliations. Technologies: Tkinter , Sage Intacct",
    },
    {
      company: "Office of Public Records – Office of the Secretary",
      link: "https://os.dc.gov/page/office-public-records-and-archives",
      badges: ["Washington DC"],
      title: "Archives Associate",
      logo: ClevertechLogo,
      start: "06/2022",
      end: "06/2023",
      description:
        "Described and cataloged archival items into Quartex Collections. Digitized images and records at archival standards and retouched digital images using Adobe Photoshop Elements. Managed the archives’ social media presence. Become familiar with organization of the archives to aid in research and records requests. Technologies: Quartex, LibWizard",
    },
  ],
  skills: [
    "Pandas",
    "Numpy",
    "Plotly",
    "Seaborns",
    "Tkinter",
  ],
  projects: [
    {
      title: "Xanes",
      techStack: ["Electronic Music"],
      description:
        "Electronic Music label with a focus on showcasing different electronic sounds from Kenyan artists",
      logo: JarockiMeLogo,
      link: {
        label: "Framer.com",
        href: "https://xanes.framer.website/",
      },
    },
    {
      title: "Pesalite",
      techStack: ["Side Project", "Python"],
      description:
        "Bank statement scraper. Builds financial statements from data",
      logo: JarockiMeLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Kura Spaces",
      techStack: ["Side Project",],
      description: "Voter management solution with a focus on international demographics",
      logo: YearProgressLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
