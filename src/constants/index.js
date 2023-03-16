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
  threejs,
  imageGen,
  workout,
  tts,
  udemy,
  calc,
  react,
  fullStack,
  mernStack,
  sermoime,
  mui,
  firebase,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#E6DEDD",
    icon: udemy,
    image: react,
  },
  {
    title: "Web Developer",
    iconBg: "#E6DEDD",
    icon: udemy,
    image: fullStack,
  },
  {
    title: "MERN Stack Developer",
    iconBg: "#E6DEDD",
    icon: udemy,
    image: mernStack,
  },
];

const projects = [
  {
    name: "Work Out Companion",
    description:
      "It is a web app that displays set of workouts to do for every muscle group. It has a chatbot functionality which uses OpenAi's Chat-gpt API, which can solve any of your queries",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "blue-text-gradient",
      },
    ],
    image: workout,
    source_code_link: "https://github.com/depada/workoutsApp",
  },
  {
    name: "Text to Speech Converter",
    description:
      "It is a simple text to speech converter which is used to convert text to speech . It does not uses any API so it is offline, it has many accents to use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tts,
    source_code_link: "https://github.com/depada/tts",
  },
  {
    name: "Image Gen",
    description:
      "It is a web app that generates an image based on your input text. It uses OpenAI's Dall-E API. It can even store the images on cloud and share it through the community.",
    image: imageGen,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/depada/ImageGen",
  },
  {
    name: "Sermoime",
    description:
      "It is a web app that recommends latest movies , top movies and movies according to category. It uses Firebase for authentication.",
    image: sermoime,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/depada/sermoime",
  },
  {
    name: "Calculator",
    description:
      "It is a regular calculator web app, but it is made without the use of generic eval function in javascript.",
    image: calc,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/depada/calculator",
  },
];

export { services, technologies, experiences, projects };
