import TaskManager from 'src/assets/projects/taskmanager.png';
import Chatroom from 'src/assets/projects/chatroom.png';
import oRecipes from 'src/assets/projects/orecipes.png';

import HTML from 'src/assets/html.png';
import CSS from 'src/assets/css.png';
import JavaScript from 'src/assets/javascript.png';
import ReactImg from 'src/assets/react.png';
import GitHub from 'src/assets/github.png';
import Git from 'src/assets/git.png';
import Laravel from 'src/assets/laravel.png';
import MySQL from 'src/assets/mysql.png';
import PHP from 'src/assets/php.png';
import SCSS from 'src/assets/scss.png';
import Tailwind from 'src/assets/tailwind.png';

const data = {
  projects: [
    {
      id: 1,
      image: TaskManager,
      video: 'http://localhost/Spe-React/portolio-react/public/taskmanager-video.mp4',
      title: 'Task Manager',
      description:
        'Task-Manager est une application web permettant de gérer les tâches en utilisant JavaScript pour la partie frontend et Laravel pour gérer la partie backend.',
      stack: 'JavaScript / Laravel',
      link: 'https://github.com/ErwannRousseau/Task-Manager',
    },
    {
      id: 2,
      image: Chatroom,
      video: 'http://localhost/GitHub/portfolio-react/public/chatroom-video.mp4',
      title: 'Chatroom',
      description:
        "Chatroom est une application web de messagerie instantannée, alimentée par Express pour l'API, React pour le front-end et WebSocket pour une expérience de messagerie instantanée.",
      stack: 'React.js / TailWind / Express',
      link: 'https://github.com/ErwannRousseau/Chatroom',
    },
    {
      id: 3,
      image: oRecipes,
      video: 'http://localhost/Spe-React/portolio-react/public/orecipes-video.mp4',
      title: 'oRecipes',
      description:
        "oRecipes est un projet de site web dédié aux recettes culinaires. Alimentée par Express pour l'API, React et SCSS pour le front-end pour offrir une expérience utilisateur conviviale et une gestion de connexion avec token JWT.",
      stack: 'React.js / SCSS / Express',
      link: 'https://github.com/ErwannRousseau/oRecipes',
    },
  ],

  skills: [
    {
      id: 1,
      image: HTML,
      name: 'HTML',
    },
    {
      id: 2,
      image: CSS,
      name: 'CSS',
    },
    {
      id: 3,
      image: SCSS,
      name: 'SCSS',
    },
    {
      id: 4,
      image: Tailwind,
      name: 'Tailwind',
    },
    {
      id: 5,
      image: JavaScript,
      name: 'JAVASCRIPT',
    },
    {
      id: 6,
      image: ReactImg,
      name: 'REACT',
    },
    {
      id: 7,
      image: PHP,
      name: 'PHP',
    },
    {
      id: 8,
      image: Laravel,
      name: 'Laravel',
    },
    {
      id: 9,
      image: MySQL,
      name: 'MySQL',
    },

    {
      id: 10,
      image: GitHub,
      name: 'GITHUB',
    },
    {
      id: 11,
      image: Git,
      name: 'Git',
    },
  ],
};

export default data;
