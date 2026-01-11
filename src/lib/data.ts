import {
  TypescriptOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  COriginal,
  CplusplusOriginal,
  JavaOriginal,
  MarkdownOriginal,
  ReactOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TailwindcssOriginal,
  FlutterOriginal,
  LatexOriginal,
  DockerOriginal,
  GitOriginal,
  FigmaOriginal,
  IntellijOriginal,
  AzuresqldatabaseOriginal,
  FirebaseOriginal,
  DartOriginal,
  UnrealengineOriginal,
} from "devicons-react";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  GraduationCap,
} from "lucide-react";

export const technologies = {
  languages: {
    c: {
      name: "C",
      icon: COriginal,
      shortname: "C",
      yearStarted: 2020,
    },
    cplusplus: {
      name: "C++",
      icon: CplusplusOriginal,
      shortname: "C++",
      yearStarted: 2020,
    },
    java: {
      name: "Java",
      icon: JavaOriginal,
      shortname: "Java",
      yearStarted: 2022,
    },
    markdown: {
      name: "Markdown",
      icon: MarkdownOriginal,
      shortname: "MD",
      yearStarted: 2020,
    },
    typescript: {
      name: "TypeScript",
      icon: TypescriptOriginal,
      shortname: "TS",
      yearStarted: 2021,
    },
    javascript: {
      name: "JavaScript",
      icon: JavascriptOriginal,
      shortname: "JS",
      yearStarted: 2020,
    },
    html: {
      name: "HTML",
      icon: Html5Original,
      shortname: "HTML",
      yearStarted: 2020,
    },
    css: {
      name: "CSS",
      icon: Css3Original,
      shortname: "CSS",
      yearStarted: 2020,
    },
    sql: {
      name: "SQL",
      icon: AzuresqldatabaseOriginal,
      shortname: "SQL",
      yearStarted: 2022,
    },
    dart: {
      name: "Dart",
      icon: DartOriginal,
      shortname: "Dart",
      yearStarted: 2023,
    },
  },
  frameworks: {
    react: {
      name: "React",
      icon: ReactOriginal,
      shortname: "React",
      yearStarted: 2021,
    },
    nextjs: {
      name: "Next.js",
      icon: NextjsOriginal,
      shortname: "Next",
      yearStarted: 2022,
    },
    nodejs: {
      name: "Node.js",
      icon: NodejsOriginal,
      shortname: "Node",
      yearStarted: 2021,
    },
    tailwindcss: {
      name: "Tailwind CSS",
      icon: TailwindcssOriginal,
      shortname: "Tailwind",
      yearStarted: 2022,
    },
    flutter: {
      name: "Flutter",
      icon: FlutterOriginal,
      shortname: "Flutter",
      yearStarted: 2023,
    },
    firebase: {
      name: "Firebase",
      icon: FirebaseOriginal,
      shortname: "Firebase",
      yearStarted: 2023,
    },
  },
  tools: {
    latex: {
      name: "LaTeX",
      icon: LatexOriginal,
      shortname: "LaTeX",
      yearStarted: 2022,
    },
    docker: {
      name: "Docker",
      icon: DockerOriginal,
      shortname: "Docker",
      yearStarted: 2023,
    },
    git: {
      name: "Git",
      icon: GitOriginal,
      shortname: "Git",
      yearStarted: 2020,
    },
    figma: {
      name: "Figma",
      icon: FigmaOriginal,
      shortname: "Figma",
      yearStarted: 2021,
    },
    unreal: {
      name: "Unreal Engine 5",
      icon: UnrealengineOriginal,
      shortname: "UE5",
      yearStarted: 2024,
    },
  },
};

export const currentlyLearningModules = [
  technologies.frameworks.react,
  technologies.frameworks.nextjs,
  technologies.frameworks.nodejs,
  technologies.languages.javascript,
  technologies.languages.typescript,
  technologies.frameworks.tailwindcss,
];

export const projects = [
  {
    name: "Avventura nella Piramide",
    row: 0,
    type: "game",
    img: "/projects/minima-adventure.webp",
    subheading: "Java Text Adventure Game",
    description:
      "A text-based adventure game developed in Java for the Advanced Programming Methods (MAP) course at UniBa. Built using Maven for dependency management and GitHub Actions for CI/CD. Features an interactive story with puzzles and choices that affect the outcome.",
    technologies: [
      technologies.languages.java,
    ],
    github: "https://github.com/it-uniba-minima/progetto_map_",
    yearStarted: 2023,
  },
  {
    name: "Ataxx",
    row: 1,
    type: "game",
    img: "/projects/ataxx.webp",
    subheading: "Java CLI Board Game",
    description:
      "A command-line implementation of the classic Ataxx board game, developed for the Software Engineering course at UniBa. Built with Gradle, featuring automated testing, code quality checks with Checkstyle and SpotBugs, and continuous integration via GitHub Actions.",
    technologies: [
      technologies.languages.java,
    ],
    github: "https://github.com/softeng2324-inf-uniba/progetto-thompson",
    yearStarted: 2024,
  },
  {
    name: "FlowChart",
    row: 0,
    type: "web",
    img: "/projects/flowchart.webp",
    subheading: "Flutter PWA for Flowchart Creation",
    description:
      "A Progressive Web App built with Flutter and Firebase for creating and managing flowcharts. Features real-time collaboration, cloud storage, and a responsive design that works on both desktop and mobile browsers.",
    technologies: [
      technologies.frameworks.flutter,
      technologies.languages.dart,
      technologies.frameworks.firebase,
    ],
    github: "https://github.com/Pascoooo/FlowChart",
    yearStarted: 2024,
  },
  {
    name: "YountVille",
    row: 1,
    type: "web",
    img: "/projects/yountville-demo.webp",
    subheading: "Unreal Engine 5 Demo",
    description:
      "«Yountville» is a first-person story-based horror game, in PSX Style, developed in Unreal Engine 5. The release is a Demo developed in collaboration with my colleagues Alessandro Pellegrino and Kevin Saracino.",
    technologies: [
      technologies.tools.unreal,
    ],
    github: "https://github.com/Arcadia-Soft/YountVille_Demo",
    yearStarted: 2024,
  },
  {
    name: "IUM 2024",
    row: 2,
    type: "web",
    img: "/projects/ium-2024.webp",
    subheading: "UX/UI Design Project",
    description:
      "University project for Human-Computer Interaction course. Focused on User-Centered Design, prototyping with Figma, and user testing.",
    technologies: [
      technologies.tools.figma,
      technologies.languages.markdown,
    ],
    github: "https://github.com/icekern/IUM_2024",
    yearStarted: 2024,
  },
];



export const about = () => {
  const currentYear = new Date().getFullYear();
  const calculateExperience = (yearStarted: number) =>
    currentYear - yearStarted;

  return {
    name: "Pasco",
    realName: "Nicolò Pacucci",
    nickname: "Pasco",
    hobbies: [],
    descriptions: [
      `Started coding in 2022 when I began my CS degree. **Graduated with honors** from University of Bari in December 2025, now pursuing my Master's in **CyberPhysical Systems** at PoliBa.`,
      `I love building personal projects and I'm aiming to share my journey on social media, exploring how **AI** can help turn ideas into reality.`,
      `When I'm not coding: **music, travel, and tech**.`,
    ],
    titles: ["Software Engineer.", "Web Developer.", "App Developer."],
    work: ["Cyberphysical Systems Master's student at PoliBa"],
    location: "Bari, Italy",
    email: "pacucciniko@gmail.com",
    copyrightYear: currentYear,
    yearsOfExperience: calculateExperience(2017),
    preferredLanguage: technologies.languages.typescript,
    preferredIDE: { name: "IntelliJ IDEA", icon: IntellijOriginal, shortname: "IntelliJ" },
    interests: ["Software Engineering", "Web Development", "App Development", "AI", "Music"],
    education: {
      degree: "Computer Science",
      graduationYear: 2025,
    },
  };
};

export const timeline = [
  { year: 2003, event: "Born in Bari, Italy" },
  {
    year: 2017,
    event: "Started high school at Liceo Scientifico M. Spinelli",
  },
  { year: 2020, event: "Began exploring programming and software development" },
  {
    year: 2022,
    event: "Graduated high school with 100/100, started Computer Science at UniBa",
  },
  {
    year: 2023,
    event: "Developed Java text adventure game for Advanced Programming Methods",
  },
  {
    year: 2024,
    event: "Built Ataxx CLI in Java and Flowchart PWA with Flutter+Firebase",
  },
  {
    year: 2025,
    event: "Graduated Computer Science with 110/110 cum laude, started Master's at PoliBa",
  },
];

export const getExperience = (technology) => {
  const currentYear = new Date().getFullYear();
  return currentYear - technology.yearStarted;
};

const achievements = [
  {
    title: "CyberChallenge.IT",
    subtitle: "Participation Certificate",
    location: "Italy",
    icon: GraduationCap,
    stack: ["Cybersecurity", "CTF"],
    descriptions: [
      "Participated in the national cybersecurity training program",
    ],
    month: 6,
    year: 2024,
  },
];

const experiences = [];

const education = [
  {
    title: "Laurea Magistrale in CyberPhysical Systems",
    subtitle: "Politecnico di Bari",
    location: "Bari, Italy",
    img: "/resume/poliba.webp",
    stack: [
      "Embedded Systems",
      "IoT",
      "Cyber-Physical Systems",
      "Software Engineering",
      "Distributed Systems",
    ],
    descriptions: [
      "Currently pursuing Master's degree in CyberPhysical Systems",
      "Focusing on the intersection of software and physical systems",
      "Studying advanced topics in embedded systems and IoT",
    ],
    month: 9,
    year: 2025,
    isPresent: true,
  },
  {
    title: "Laurea in Informatica",
    subtitle: "Università di Bari Aldo Moro",
    location: "Bari, Italy",
    img: "/resume/uniba.webp",
    stack: [
      "Java",
      "Algorithms",
      "Data Structures",
      "Software Engineering",
      "Database SQL & NoSQL",
      "UI/UX",
      "Problem Solving",
    ],
    descriptions: [
      "Graduated with honors",
      "Built strong foundations in algorithms and problem-solving",
      "Learned to think like a programmer and approach complex problems systematically",
    ],
    month: 9,
    year: 2022,
    endedMonth: 12,
    endedYear: 2025,
  },
  {
    title: "Liceo Scientifico",
    subtitle: "Matteo Spinelli",
    location: "Giovinazzo, BA",
    img: "/resume/liceo.webp",
    stack: [
      "Mathematics",
      "Physics",
    ],
    descriptions: [
      "Graduated with 100/100",
      "Strong foundation in mathematics and scientific reasoning",
    ],
    month: 9,
    year: 2017,
    endedMonth: 6,
    endedYear: 2022,
  },
];

const intro = `I'm a **Computer Science graduate** from the University of Bari, now pursuing a Master's in **CyberPhysical Systems** at Politecnico di Bari. I'm passionate about **software engineering**, **web development**, and exploring how **AI** can turn ideas into reality. I love building personal projects and sharing my journey. Currently exploring technologies like **Next.js** while combining my technical skills with creativity in music and travel.`;

const capabilities = {
  language: ["Italian・Native", "English・Advanced", "French・Basic"],
  programmingLanguages: [
    "Java",
    "TypeScript",
    "JavaScript",
    "Dart",
    "C",
    "C++",
    "HTML",
    "CSS",
    "SQL",
  ],
  frameworks: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Flutter",
    "Firebase",
    "Node.js",
  ],
  services: ["GitHub", "Firebase", "Vercel"],
  tools: ["Git", "Figma", "IntelliJ IDEA", "Docker", "LaTeX"],
};

const interests = [
  "**Music**: I have a deep passion for music, which serves as both a creative outlet and a source of inspiration. Whether I'm coding or relaxing, music is an integral part of my daily life.",
  "**Content Creation & Social Media**: I'm passionate about sharing my journey and projects on social media. I believe in building in public and connecting with like-minded creators and developers.",
  "**Entrepreneurship**: I'm driven by the idea of turning ideas into reality. My goal is to build my own business, leveraging technology to create products that make a difference.",
  "**Artificial Intelligence**: I'm fascinated by AI and its potential to transform how we work and create. I actively explore AI tools to enhance productivity and bring innovative ideas to life.",
];

export const resumeData = {
  achievements,
  experiences,
  education,
  intro,
  capabilities,
  interests,
};

export const socialMedia = [
  {
    platform: "GitHub",
    icon: Github,
    username: "Pascoooo",
    url: "https://github.com/Pascoooo",
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    username: "nicolo-pacucci",
    url: "https://www.linkedin.com/in/nicolo-pacucci-4426062b3/",
  },
  {
    platform: "Twitter",
    icon: Twitter,
    username: "NicoloPacucci",
    url: "https://x.com/NicoloPacucci",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    username: "nico.pacucci",
    url: "https://www.instagram.com/nico.pacucci/",
  },
  {
    platform: "YouTube",
    icon: Youtube,
    username: "Pascooooo",
    url: "https://www.youtube.com/@Pascooooo",
  },
];

export const stats = {
  github: {
    repositories: 50,
    stars: 200,
    followers: 100,
    contributions: 1500,
  },
  youtube: {
    subscribers: 1000,
    views: 50000,
  },
  instagram: {
    followers: 500,
    posts: 100,
  },
};

export const testimonials = [
  {
    name: "Tony TwoHands (Braden Marshall)",
    title: "Manager at AoTTG 2",
    quote:
      "An **incredibly agreeable** lad whose **work ethic knows no bounds**. Made a **huge impact** on the team and we wouldn't be half of what we are without him. If I was legally able to pay this man, he would have **drained my bank account**.",
  },
  {
    name: "Justine Paul Alvaro",
    title: "Software Engineer",
    quote:
      "Glenn was **great to work with** at Lexagle. As a Junior Software Engineer, he **picked up new ideas and technologies very quickly**. Glenn is **excellent at solving problems and writing code**. I **highly recommend** him for any future jobs.",
  },
  {
    name: "Christian Razul",
    title: "Software Engineer",
    quote:
      "Glenn is an **unforgettable coworker** for all the good reasons. He's easy to work with and an excellent developer, consistently delivering clean, well-documented code. His **attention to detail is like no other**, and he has a remarkable ability to explain complex concepts to stakeholders at all levels.",
  },
];

export const getRandomFunFact = (funFact) => {
  let funFacts = [];

  funFacts = funFacts.filter((fact) => fact !== funFact);

  return funFacts[Math.floor(Math.random() * funFacts.length)];
};

export const repositories = [
  {
    name: "Avventura nella Piramide",
    description: "A text-based adventure game developed in Java for the Advanced Programming Methods (MAP) course at UniBa.",
    language: "Java",
    url: "https://github.com/it-uniba-minima/progetto_map_",
    owner: "it-uniba-minima",
    repo: "progetto_map_",
  },
  {
    name: "Ataxx",
    description: "A command-line implementation of the classic Ataxx board game for the Software Engineering course.",
    language: "Java",
    url: "https://github.com/softeng2324-inf-uniba/progetto-thompson",
    owner: "softeng2324-inf-uniba",
    repo: "progetto-thompson",
  },
  {
    name: "FlowChart",
    description: "A Progressive Web App built with Flutter and Firebase for creating and managing flowcharts.",
    language: "Dart",
    url: "https://github.com/Pascoooo/FlowChart",
    owner: "Pascoooo",
    repo: "FlowChart",
  },
  {
    name: "YountVille",
    description: "YountVille - Unreal Engine 5",
    language: "C++",
    url: "https://github.com/Arcadia-Soft/YountVille_Demo",
    owner: "Arcadia-Soft",
    repo: "YountVille_Demo",
  },
  {
    name: "IUM_2024",
    description: "Human-Computer Interaction Project",
    language: "Figma",
    url: "https://github.com/icekern/IUM_2024",
    owner: "icekern",
    repo: "IUM_2024",
  },
];
