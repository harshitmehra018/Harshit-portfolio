// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's

import oasisLogo from "./assets/company_logo/oasis.png";

// Education Section Logo's
import birlaLogo from "./assets/education_logo/birla-logo.png";
import bigLogo from "./assets/education_logo/big_logo.webp";

// Project Section Logo's
import portfolioLogo from "./assets/work_logo/portfolio.png";
import zerodhaLogo from "./assets/work_logo/zerodha.png";
import weatherLogo from "./assets/work_logo/weather.png";
import upcomingLogo from "./assets/work_logo/upcoming.jpeg";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: oasisLogo,
    role: "Java Development Intern",
    company: "Oasis Infobyte",
    date: "February 2024 - March 2024(Virtual Internship)",
    desc: "During this one-month virtual internship, I worked on the front-end development of two key projects: a Random Guess Game and an Online Exam System. Developed a Number Guessing Game in Java with 3 rounds, 10 attempts per round, and score calculation based on attempts.Developed an Online Exam System in Java with user authentication, timed exam, question handling, and automatic score calculation.",
    skills: ["Java"],
  },
];

export const education = [
  {
    id: 0,
    img: birlaLogo,
    school: "Birla Institute Of Applied Sciences, Bhimtal",
    date: "Aug 2022 - June 2026",
    grade: "_____ CGPA",
    desc: "A dedicated and enthusiastic B.Tech Computer Science and Engineering (CSE) student from the 2022-2026 batch, passionate about exploring emerging technologies, problem-solving, and software development. Skilled in programming languages, data structures, algorithms, and web development, with a strong foundation in computer science fundamentals.",
    degree: "Batchelor of Technology - BTech (Computer Science)",
  },
  {
    id: 1,
    img: bigLogo,
    school: "Woodbridge School, Nainital",
    date: "Apr 2020 - March 2022",
    grade: "60%",
    desc: "I completed my class 12 education from Woodbridge School, Nainital, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: bigLogo,
    school: "Woodbridge School, Nainital",
    date: "Apr 2018 - March 2020",
    grade: "80%",
    desc: "I completed my class 10 education from Woodbridge School, Nainital, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Online Brokerage Web Application ",
    description:
      "Developed a full-stack web application (Trading Platform Simulation) simulating an online trading platform that allows users to register, manage accounts, view stock data, and perform virtual buy/sell transactions. Implemented secure authentication, real-time stock price updates, and an intuitive dashboard for portfolio tracking. Designed with responsive UI and integrated REST APIs to provide a seamless trading experience.",
    image:zerodhaLogo ,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Node.js", "MongoDB", "Express"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Weather Forecast Web App",
    description:
      "Developed a responsive web application that fetches and displays real-time weather data using the Open Weather API.Implemented city-based search functionality with dynamic temperature, humidity, wind speed, and weather condition icons.",
    image:weatherLogo ,
    tags: [
      "React JS",
      "HTML",
      "CSS",
      "Open Weather API",
      "JavaScript",
    ],
    github: "https://github.com/harshitmehra018/Weather-API",
    webapp: "https://weather-api-6fuy.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Developed a responsive personal portfolio website to showcase skills, projects, and achievements. Built using modern web technologies with a clean UI/UX design, smooth navigation, and optimized performance. Integrated interactive sections such as About, Skills, Projects, and Experience to provide a professional online presence.",
    image:portfolioLogo ,
    tags: ["React","Tailwind","Bootstrap","Javascript","HTML","CSS"],
    github: "https://github.com/harshitmehra018/Harshit-portfolio",
    webapp: "https://harshit-portfolio-sooty.vercel.app/",
  },
  {
     id: 2,
    title: "Upcoming",
    description:
      "Currently working on an innovative project aimed at combining modern web technologies with real-world problem solving.",
    image:upcomingLogo ,
    tags: [],
    github: "",
    webapp: "",
  },
];
