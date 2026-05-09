// src/components/Book/SpreadContent.jsx
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCode, FaPlay, FaMobileAlt, FaLeaf, FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import styles from './SpreadContent.module.css';

/* ─────────────────────────────────────────
   SPREAD 0 — EDUCATION
───────────────────────────────────────── */
export function EducationLeft() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><MdSchool className={styles.secIcon} /> Formação Acadêmica</h3>

      <div className={styles.tlItem}>
        <div className={styles.tlDot} />
        <div className={styles.tlLine} />
        <div className={styles.tlBody}>
          <div className={styles.tlPeriod}>Mar 2023 — Dez 2027 (previsão)</div>
          <div className={styles.tlTitle}>Bacharelado em Engenharia de Computação</div>
          <div className={styles.tlSub}>Universidade do Estado de Minas Gerais — UEMG</div>
          <div className={styles.tlDesc}>
            Formação em engenharia de software, algoritmos, sistemas embarcados e inteligência artificial.
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <h3 className={styles.secTitle}><FaCode className={styles.secIcon} /> Certificações</h3>
      <ul className={styles.certList}>
        <li>Java Completo — POO + Projetos</li>
        <li>Trabalhando em Equipes Ágeis</li>
        <li>Informática e Pacote Office</li>
      </ul>

      <div className={styles.divider} />

      <h3 className={styles.secTitle}><FaCode className={styles.secIcon} /> Competências</h3>
      <div className={styles.chipGrid}>
        {['Git & GitHub','Lógica de Programação','Java','JavaScript','React','Node.js','Hardware Básico'].map(s => (
          <span key={s} className={styles.chip}>{s}</span>
        ))}
      </div>
    </div>
  );
}

export function EducationRight() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><FaGraduationCap className={styles.secIcon} /> Objetivo Profissional</h3>
      <p className={styles.objective}>
        Estudante de Engenharia de Computação em busca de oportunidades para aplicar 
        conhecimentos em programação e desenvolvimento de software. Apaixonado por tecnologia, 
        com foco em crescimento contínuo e trabalho em equipe.
      </p>

      <div className={styles.divider} />

      <h3 className={styles.secTitle}><FaCode className={styles.secIcon} /> Projetos Pessoais</h3>
      <div className={styles.repoCard}>
        <FaGithub className={styles.repoIcon} />
        <div>
          <div className={styles.repoName}>github.com/cgonssalves</div>
          <div className={styles.repoDesc}>Repositório com projetos desenvolvidos em Java e outras linguagens.</div>
        </div>
        <a href="https://github.com/cgonssalves" target="_blank" rel="noopener noreferrer" className={styles.repoBtn}>
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className={styles.divider} />

      <div className={styles.contactQuickInfo}>
        <div className={styles.infoRow}><FaMapMarkerAlt className={styles.infoIcon} /> Ituiutaba – MG</div>
        <div className={styles.infoRow}><FaEnvelope className={styles.infoIcon} /> gonssalvescaua@gmail.com</div>
        <div className={styles.infoRow}><FaPhone className={styles.infoIcon} /> (34) 9 9284-5450</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PROJECT TEMPLATE
───────────────────────────────────────── */
function ProjectPage({ project, side }) {
  return (
    <div className={styles.page}>
      <div className={styles.projHeader}>
        <span className={styles.projTag}>{project.tech.split('·')[0].trim()}</span>
        <span className={styles.projSpread}>Projeto</span>
      </div>

      {side === 'left' ? (
        <>
          <div className={styles.projTitleBig}>{project.name}</div>
          <div className={styles.projSubtitle}>{project.tagline}</div>
          <div className={styles.projImgBox}>
            <div className={styles.imgPlaceholder}>
              <FaCode />
              <span>Screenshot — Code</span>
            </div>
          </div>
          <div className={styles.techBadges}>
            {project.tech.split('·').map(t => (
              <span key={t} className={styles.techBadge}>{t.trim()}</span>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.projImgBox} style={{ height: 130 }}>
            <div className={styles.imgPlaceholder}>
              <FaPlay />
              <span>Screenshot — Running</span>
            </div>
          </div>
          <p className={styles.projDesc}>{project.description}</p>
          <div className={styles.projActions}>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${styles.pbtn} ${styles.pbtnAmber}`}>
              <FaPlay /> Test Live
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.pbtn} ${styles.pbtnOutline}`}>
              <FaGithub /> GitHub
            </a>
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   PROJECT COMPONENTS (each spread)
───────────────────────────────────────── */
const agrosense = {
  name: 'Agrosense', tagline: 'Monitoramento agrícola inteligente',
  tech: 'React · Node.js · IoT · MQTT',
  description: 'Plataforma de monitoramento agrícola em tempo real com sensores IoT. Coleta dados de temperatura, umidade e solo, exibindo dashboards interativos para tomada de decisão no campo.',
  github: 'https://github.com/cgonssalves', live: '#',
};
const jornadaTech = {
  name: 'Jornada Tech', tagline: 'Trilhas de aprendizado em tecnologia',
  tech: 'React · Firebase · Tailwind CSS',
  description: 'Aplicação web para guiar estudantes em trilhas de aprendizado de tecnologia. Sistema de progresso, quizzes e certificados digitais ao concluir cada etapa.',
  github: 'https://github.com/cgonssalves', live: '#',
};
const uemgPixel = {
  name: 'UEMG Pixel', tagline: 'Canvas colaborativo em tempo real',
  tech: 'React · WebSocket · Canvas API',
  description: 'Projeto colaborativo onde alunos da UEMG pintam pixels em um canvas compartilhado em tempo real. Inspirado no Reddit Place, promove integração e identidade universitária.',
  github: 'https://github.com/cgonssalves', live: '#',
};
const jogoVelha = {
  name: 'Jogo da Velha Mobile', tagline: 'Multiplayer local em React Native',
  tech: 'React Native · Expo · AsyncStorage',
  description: 'Jogo da velha para Android com modo multiplayer local e contra IA. Animações fluidas com React Native Reanimated e histórico de partidas salvo localmente.',
  github: 'https://github.com/cgonssalves', live: '#',
};
const pooVisual = {
  name: 'POO Visual', tagline: 'Visualizador educacional de POO em Java',
  tech: 'Java · JavaFX · OOP',
  description: 'Ferramenta educacional que visualiza graficamente os conceitos de POO em Java — herança, polimorfismo, encapsulamento e interfaces — de forma interativa e didática.',
  github: 'https://github.com/cgonssalves', live: '#',
};

export const AgrosenseLeft  = () => <ProjectPage project={agrosense}  side="left" />;
export const AgrosenseRight = () => <ProjectPage project={agrosense}  side="right" />;
export const JornadaLeft    = () => <ProjectPage project={jornadaTech} side="left" />;
export const JornadaRight   = () => <ProjectPage project={jornadaTech} side="right" />;
export const PixelLeft      = () => <ProjectPage project={uemgPixel}  side="left" />;
export const PixelRight     = () => <ProjectPage project={uemgPixel}  side="right" />;
export const VelhaLeft      = () => <ProjectPage project={jogoVelha}  side="left" />;
export const VelhaRight     = () => <ProjectPage project={jogoVelha}  side="right" />;
export const PooLeft        = () => <ProjectPage project={pooVisual}  side="left" />;
export const PooRight       = () => <ProjectPage project={pooVisual}  side="right" />;

/* ─────────────────────────────────────────
   SPREAD 3 — EVENTS (carousel)
───────────────────────────────────────── */
function EventCarousel({ photos, placeholderIcon, placeholderLabel }) {
  const [idx, setIdx] = useState(0);
  const count = photos.length || 1;
  const prev = () => setIdx(i => (i - 1 + count) % count);
  const next = () => setIdx(i => (i + 1) % count);

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselTrack} style={{ transform: `translateX(-${idx * 100}%)` }}>
        {photos.length > 0 ? photos.map((src, i) => (
          <div key={i} className={styles.carouselSlide}>
            <img src={src} alt={`Foto ${i + 1}`} />
          </div>
        )) : (
          <div className={styles.carouselSlide}>
            <div className={styles.carouselPlaceholder}>
              <span className={styles.carouselEmoji}>{placeholderIcon}</span>
              <span>Fotos em breve</span>
            </div>
          </div>
        )}
      </div>
      {count > 1 && (
        <>
          <button className={`${styles.carouselCtrl} ${styles.cPrev}`} onClick={prev}><FaChevronLeft /></button>
          <button className={`${styles.carouselCtrl} ${styles.cNext}`} onClick={next}><FaChevronRight /></button>
        </>
      )}
      {count > 1 && (
        <div className={styles.carouselDots}>
          {Array.from({ length: count }).map((_, i) => (
            <button key={i} className={`${styles.cdot} ${i === idx ? styles.cdotActive : ''}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      )}
    </div>
  );
}

export function EventsLeft() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><span style={{fontSize:'1rem'}}>🚀</span> NASA Space Apps</h3>
      <p className={styles.eventDesc}>
        Hackathon global da NASA realizado em Ituiutaba — MG. Desenvolvimento de soluções 
        para desafios espaciais e ambientais em 48 horas de imersão.
      </p>
      <EventCarousel photos={[]} placeholderIcon="🚀" placeholderLabel="NASA Space Apps" />
    </div>
  );
}

export function EventsRight() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><span style={{fontSize:'1rem'}}>💻</span> Maratona SBC</h3>
      <p className={styles.eventDesc}>
        Maratona de Programação da Sociedade Brasileira de Computação. Resolução de problemas 
        algorítmicos em equipe sob pressão de tempo e raciocínio lógico.
      </p>
      <EventCarousel photos={[]} placeholderIcon="💻" placeholderLabel="Maratona SBC" />
    </div>
  );
}

/* ─────────────────────────────────────────
   CONTACT (last spread)
───────────────────────────────────────── */
export function ContactLeft() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><FaEnvelope className={styles.secIcon} /> Contato</h3>
      <div className={styles.contactForm}>
        <input className={styles.cfInput} type="text"  placeholder="Seu nome" />
        <input className={styles.cfInput} type="email" placeholder="Seu e-mail" />
        <textarea className={styles.cfInput} rows={4} placeholder="Sua mensagem..." />
        <button className={styles.cfSubmit}><FaEnvelope /> Enviar Mensagem</button>
      </div>
    </div>
  );
}

export function ContactRight() {
  return (
    <div className={styles.page} style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', gap:14 }}>
      <div className={styles.contactEndIcon}>🎓</div>
      <h3 className={styles.contactEndTitle}>Vamos construir algo incrível!</h3>
      <p className={styles.contactEndText}>
        Aberto a projetos, estágios e colaborações. Entre em contato e vamos conversar.
      </p>
      <div className={styles.contactLinks}>
        <a href="https://www.instagram.com/cgonssalves" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><span>Instagram</span></a>
        <a href="https://www.linkedin.com/in/cau%C3%A3-gon%C3%A7alves" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><span>LinkedIn</span></a>
        <a href="https://github.com/cgonssalves" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><span>GitHub</span></a>
      </div>
    </div>
  );
}
