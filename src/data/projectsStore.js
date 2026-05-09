// src/data/projectsStore.js
// Fonte central de dados dos projetos.
// Editado via EditPanel — o estado fica em App.jsx.

export const initialProjects = {
  agrosense: {
    id: 'agrosense',
    name: 'Agrosense',
    tagline: 'Monitoramento agrícola inteligente',
    tech: 'React · Node.js · IoT · MQTT',
    description:
      'Plataforma de monitoramento agrícola em tempo real com sensores IoT. Coleta dados de temperatura, umidade e solo, exibindo dashboards interativos para tomada de decisão no campo.',
    github: 'https://github.com/cgonssalves',
    imgLeft: null,
    imgRight: null,
    video: null,
  },
  jornada: {
    id: 'jornada',
    name: 'Jornada Tech',
    tagline: 'Trilhas de aprendizado em tecnologia',
    tech: 'React · Firebase · Tailwind CSS',
    description:
      'Aplicação web para guiar estudantes em trilhas de aprendizado de tecnologia. Sistema de progresso, quizzes e certificados digitais ao concluir cada etapa.',
    github: 'https://github.com/cgonssalves',
    imgLeft: null,
    imgRight: null,
    video: null,
  },
  pixel: {
    id: 'pixel',
    name: 'UEMG Pixel',
    tagline: 'Canvas colaborativo em tempo real',
    tech: 'React · WebSocket · Canvas API',
    description:
      'Projeto colaborativo onde alunos da UEMG pintam pixels em um canvas compartilhado. Inspirado no Reddit Place, promove integração e identidade universitária.',
    github: 'https://github.com/cgonssalves',
    imgLeft: null,
    imgRight: null,
    video: null,
  },
  velha: {
    id: 'velha',
    name: 'Jogo da Velha Mobile',
    tagline: 'Multiplayer local em React Native',
    tech: 'React Native · Expo · AsyncStorage',
    description:
      'Jogo da velha para Android com modo multiplayer local e contra IA. Animações fluidas com React Native Reanimated e histórico de partidas salvo localmente.',
    github: 'https://github.com/cgonssalves',
    imgLeft: null,
    imgRight: null,
    video: null,
  },
  poo: {
    id: 'poo',
    name: 'POO Visual',
    tagline: 'Visualizador educacional de POO em Java',
    tech: 'Java · JavaFX · OOP',
    description:
      'Ferramenta educacional que visualiza graficamente os conceitos de POO em Java — herança, polimorfismo, encapsulamento e interfaces — de forma interativa e didática.',
    github: 'https://github.com/cgonssalves',
    imgLeft: null,
    imgRight: null,
    video: null,
  },
};
