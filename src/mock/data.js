import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Reis e Bertini', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Desenvolvimento de Web e Mobile', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shalom.png',
    title: 'Shalom Turismo',
    info: 'E-commerce de Reserva de Passeios em Porto Seguro - BA.',
    info2: '',
    url: 'http://shalomturismoportoseguro.com.br/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mukusuy.png',
    title: 'Mukusuy Aventura',
    info: 'E-commerce de Reserva de Experiências Turísticas na Costa do Descobrimento - BA.',
    info2: '',
    url: 'https://mukusuyaventura.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'app.png',
    title: 'Desenvolvimento de Aplicativos Mobile e Web Sites.',
    info: 'Sua empresa precisa de uma solução moderna? Nós criamos para você.',
    info2: '',
    url: 'https://forms.gle/LuvkEqZZDTH2knnT9',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aton-bertini-d%C3%B6rnfeld-143986104/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aton-py/Aton_Guia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
