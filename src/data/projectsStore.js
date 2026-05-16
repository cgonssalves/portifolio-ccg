// src/data/projectsStore.js
// Fonte central de dados dos projetos.
// Editado via EditPanel — o estado fica em App.jsx.

export const initialProjects = {
  agrosense: {
    id: 'agrosense',
    name: 'AgroGestão',
    tagline: 'SaaS de controle financeiro para o campo',
    tech: 'TypeScript · JavaScript · React',
    description:
      'Eu e minha equipe de desenvolvimento criamos um Saas de controle financeiro para um agricultor da minha cidade. Ele havia se cansado de usar planilhas convencionais e queria algo que fosse mais simples para que ele pudesse fazer um controle de gastos.\n\nNosso trabalho foi criar um aplicativo desktop onde ele inseria os dados dos seus clientes, das suas plantações, vendas e gastos. Com isso ele consegue visualizar através de tabelas e gráficos o seu lucro e despesas, consegue acessar o histórico de vendas de gastos passados e fazer comparações, atualizar preços e até ter um controle de seus funcionários\n\nOBS: O alerta em vermelho sobre "Tempo de teste" só está ali pois demos um tempo de teste grátis para o cliente, ao final do tempo ele conseguia ver todas as informações que já foram inseridas, porem não conseguia inserir mais nenhuma',
    github: 'https://github.com/cgonssalves',
    imgLeft: null,
    imgRight: null,
    video: 'https://www.youtube.com/embed/HIdAQlAn7Dc',
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
