// src/data/spreads.jsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const TOTAL_SPREADS = 7; // spreads 0-6

/* ── SPREAD 0: Education (left) / blank right ── */
export const spread0 = {
  leftTitle: 'Formação Acadêmica',
  rightTitle: null,
};

/* ── Projects data ── */
export const projects = [
  {
    id: 'agrosense',
    name: 'Agrosense',
    tagline: 'Monitoramento agrícola inteligente',
    tech: 'React · Node.js · IoT · MQTT',
    description:
      'Plataforma de monitoramento agrícola em tempo real com sensores IoT. Coleta dados de temperatura, umidade e solo, exibindo dashboards interativos para tomada de decisão no campo.',
    leftImg: null, // placeholder
    rightImg: null,
    github: 'https://github.com/cgonssalves',
    live: '#',
    spreadIndex: 1,
  },
  {
    id: 'jornada-tech',
    name: 'Jornada Tech',
    tagline: 'Plataforma de trilhas de aprendizado',
    tech: 'React · Firebase · Tailwind CSS',
    description:
      'Aplicação web para guiar estudantes em trilhas de aprendizado de tecnologia. Conta com sistema de progresso, quizzes e certificados digitais ao concluir cada etapa.',
    leftImg: null,
    rightImg: null,
    github: 'https://github.com/cgonssalves',
    live: '#',
    spreadIndex: 2,
  },
  {
    id: 'uemg-pixel',
    name: 'UEMG Pixel',
    tagline: 'Pixel art colaborativo da UEMG',
    tech: 'React · WebSocket · Canvas API',
    description:
      'Projeto colaborativo onde alunos da UEMG pintam pixels em um canvas compartilhado em tempo real. Inspirado no Reddit Place, promove integração e identidade universitária.',
    leftImg: null,
    rightImg: null,
    github: 'https://github.com/cgonssalves',
    live: '#',
    spreadIndex: 4,
  },
  {
    id: 'jogo-da-velha',
    name: 'Jogo da Velha Mobile',
    tagline: 'Multiplayer local em React Native',
    tech: 'React Native · Expo · AsyncStorage',
    description:
      'Jogo da velha para Android com modo multiplayer local e contra IA. Animações fluidas com React Native Reanimated e histórico de partidas salvo localmente.',
    leftImg: null,
    rightImg: null,
    github: 'https://github.com/cgonssalves',
    live: '#',
    spreadIndex: 5,
  },
  {
    id: 'poo-visual',
    name: 'POO Visual',
    tagline: 'Visualizador de POO em Java',
    tech: 'Java · JavaFX · OOP',
    description:
      'Ferramenta educacional que visualiza graficamente os conceitos de Programação Orientada a Objetos em Java — herança, polimorfismo, encapsulamento e interfaces — de forma interativa.',
    leftImg: null,
    rightImg: null,
    github: 'https://github.com/cgonssalves',
    live: '#',
    spreadIndex: 6,
  },
];

/* ── Events (spread 3) ── */
export const events = [
  {
    id: 'nasa',
    name: 'NASA Space Apps',
    desc: 'Hackathon global da NASA realizado em Ituiutaba — MG. Desenvolvimento de soluções para desafios espaciais e ambientais em 48 horas.',
    photos: [], // add photo URLs here later
    icon: '🚀',
  },
  {
    id: 'maratona',
    name: 'Maratona SBC',
    desc: 'Maratona de Programação da Sociedade Brasileira de Computação. Resolução de problemas algorítmicos em equipe sob pressão de tempo.',
    photos: [],
    icon: '💻',
  },
];
