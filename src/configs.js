const colors = {
  primary: '#90CAF9',
  secondary: '#E0E0E0',
  background: '#FFFFFF',
};

const about = {
  firstName: 'Cy',
  lastName: 'Bae',
  shortDesc: `I'm a web developer located in Irvine, CA.`,
  longDesc: [
    'One of my biggest entertainments as I was growing up was video games, and in a sense, video games teach you a lot about problem solving and logical thinking. Eventually, it led me to studying statistics and computer science in college: two disciplines that requires analytical and logical mindset. While I was in school, I worked as a student tech support where I learned to communicate difficult technology effectively, but also exposed me to many different everyday technology.',
    `After my graduation, I began working on a personal backend project that really reminded me of how much I love development. My college curriculum didn't cover many web development technologies and as a result I decided that I would further my education before starting my career. I did my research and decided to immerse myself in LearningFuze coding bootcamp, because it provided me structured guidance and professional connections. During the course of the bootcamp, I spent over 12 hours a day solidifying my foundation in html, css, and javascript. Moreover, I’ve worked on my solo projects such as my state machine calculator, but also participated in hackathons.`,
    'Now that I have graduated, I am looking for opportunities where I can use what I’ve learned in both college and the bootcamp to solve interesting yet practical problems. I’m eager to continue learning through the work that I do and the new challenges I’ll face every day.'
  ],
  email: 'hello@cybae.me',
};

const projects = [
  {
    name: 'Calculator',
    desc: 'jQuery calculator that utilizes state machine logic to efficently perform advanced tasks',
    demo: '',
    source: '',
  },
  {
    name: 'Student Grade Table',
    desc: 'React + Firebase website with CRUD functionalities',
    demo: '',
    source: '',
  },
  {
    name: 'When In Rome',
    desc: 'React and Node social media website for finding events around the world',
    demo: '',
    source: '',
  },
];

const skills = [{
    skill: 'HTML5',
    link: 'https://cdn.svgporn.com/logos/html-5.svg',
  },
  {
    skill: 'CSS3',
    link: 'https://cdn.svgporn.com/logos/css-3.svg',
  },
  {
    skill: 'Javascript',
    link: 'https://cdn.svgporn.com/logos/javascript.svg',
  },
  {
    skill: 'jQuery',
    link: 'https://cdn.svgporn.com/logos/jquery.svg',
  },
  {
    skill: 'MySQL',
    link: 'https://cdn.svgporn.com/logos/mysql.svg',
  },
  {
    skill: 'Express',
    link: 'https://cdn.svgporn.com/logos/express.svg',
  },
  {
    skill: 'React',
    link: 'https://cdn.svgporn.com/logos/react.svg',
  },
  {
    skill: 'Node',
    link: 'https://cdn.svgporn.com/logos/nodejs.svg',
  },
  {
    skill: 'AWS',
    link: 'https://cdn.svgporn.com/logos/aws.svg',
  },
  {
    skill: 'PHP',
    link: 'https://cdn.svgporn.com/logos/php.svg',
  },
  {
    skill: 'Bootstrap',
    link: 'https://cdn.svgporn.com/logos/bootstrap.svg',
  },
  {
    skill: 'Git',
    link: 'https://cdn.svgporn.com/logos/git-icon.svg',
  }];

export default {
  colors, about, projects, skills
}

export { colors, about, projects, skills };
