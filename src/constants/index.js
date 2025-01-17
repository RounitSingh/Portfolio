import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  
  tripguide,
  threejs,
} from "../assets";
import Zustand from "../assets/tech/Zustand.png";
import cplus from "../assets/tech/cplus.png";
import jobhunt from "../assets/jobhunt.png";
import fit from "../assets/fit.png";
import Tictac from "../assets/Tictac.png";
import skt from "../assets/skt.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
 
  {
    title: "MERN Stack Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Zustand",
    icon: Zustand,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C++",
    icon: cplus,
  },
  
  
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Sukusala Technologies",
    icon: skt,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams  and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed and implemented interactive React components for a No-Code platform, improving usability and increasing platform usage by 8%.",
    ],
  },
  
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "FitGrocery",
    description:
      "E-commerce grocery landing page has been enhanced with features and improvements to create a more dynamic and appealing entrance for users. This update focuses on highlighting key products",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: fit,
    source_code_link: "https://github.com/RounitSingh/FitGrocery",
  },
  {
    name: "JobHunt",
    description:
      "Developed a web platform to connect job seekers with employers, providing features like job listings, resume uploads, and profile creation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "indigo-text-gradient",
      },
    ],
    image: jobhunt,
    source_code_link: "https://github.com/RounitSingh/JobHunt",
  },
  {
    name: "Tic Tac Toe  Game",
    description:
      "A multiplayer Tic-Tac-Toe game developed with React, enabling two players to compete in real-time. It features a dynamic game board, player turn logic, and win condition checks.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Tictac,
    source_code_link: "https://github.com/RounitSingh/Tic-Tac-Toe-game",
  },
];

export { services, technologies, experiences, testimonials, projects };
