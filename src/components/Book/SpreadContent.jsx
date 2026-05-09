// src/components/Book/SpreadContent.jsx
import { useState } from 'react';
import {
  FaGithub, FaChevronLeft, FaChevronRight,
  FaCode, FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaPhone, FaImage,
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import styles from './SpreadContent.module.css';

// ════════════════════════════════════════════════════════════
// [EDIT-IMPORT] — Comente esta linha para desativar o painel
import EditPanel from '../EditPanel/EditPanel';
// ════════════════════════════════════════════════════════════

/* ─────────────────────────────────────────
   PÁGINA 2 — Formação + Info (direita da capa)
───────────────────────────────────────── */
export function InfoPage() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><MdSchool className={styles.secIcon} /> Formação Acadêmica</h3>
      <div className={styles.tlItem}>
        <div className={styles.tlDot} />
        <div className={styles.tlBody}>
          <div className={styles.tlPeriod}>Mar 2023 — Dez 2027 (previsão)</div>
          <div className={styles.tlTitle}>Bacharelado em Engenharia de Computação</div>
          <div className={styles.tlSub}>Universidade do Estado de Minas Gerais — UEMG</div>
          <div className={styles.tlDesc}>
            Formação em Engenharia de Computação, algoritmos, sistemas embarcados e inteligência artificial.
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <h3 className={styles.secTitle}><FaGraduationCap className={styles.secIcon} /> Objetivo Profissional</h3>
      <p className={styles.objective}>
        Estudante de Engenharia de Computação em busca de oportunidades para aplicar
        conhecimentos em programação e desenvolvimento de software, com facilidade de
        aprendizado e foco em crescimento contínuo.
      </p>

      <div className={styles.divider} />

      <h3 className={styles.secTitle}><FaCode className={styles.secIcon} /> Competências</h3>
      <div className={styles.chipGrid}>
        {['Git & GitHub','Lógica de Programação','Java','JavaScript','React','Node.js','Python'].map(s => (
          <span key={s} className={styles.chip}>{s}</span>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.contactQuickInfo}>
        <div className={styles.infoRow}>
          <FaMapMarkerAlt className={styles.infoIcon} /> Ituiutaba – MG
          <span className={styles.infoSep}>·</span>
          <FaPhone className={styles.infoIcon} /> (34) 9 9284-5450
        </div>
        <div className={styles.infoRow}>
          <FaEnvelope className={styles.infoIcon} /> gonssalvescaua@gmail.com
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   IMAGEM PADRONIZADA — componente único para garantir
   que todas as imagens tenham exatamente a mesma altura.
   Usado em projetos E eventos.
───────────────────────────────────────────────────────────── */
function PageImage({ src, alt, placeholder, fill }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${styles.pageImg} ${fill ? styles.pageImgFill : ''}`}
        onClick={src ? () => setOpen(true) : undefined}
        style={src ? { cursor: 'zoom-in' } : undefined}
      >
        {src
          ? <img src={src} alt={alt} />
          : (
            <div className={styles.imgPlaceholder}>
              <FaImage />
              <span>{placeholder || 'Adicione via painel de edição'}</span>
            </div>
          )
        }
      </div>
      {open && (
        <div className={styles.lightboxOverlay} onClick={() => setOpen(false)}>
          <div className={styles.lightboxBox} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setOpen(false)}>✕</button>
            <img src={src} alt={alt} className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROJECT PAGE
   Botão Editar SOMENTE no lado "right" — evita duplicação.
───────────────────────────────────────────────────────────── */
function ProjectPage({ project, side, onSave }) {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <div className={styles.page}>

      <div className={styles.projHeader}>
        <span className={styles.projTag}>{(project.tech || '').split('·')[0].trim()}</span>
        <span className={styles.projLabel}>Projeto</span>
      </div>

      {side === 'left' ? (
        <>
          <div className={styles.projTitleBig}>{project.name}</div>
          <div className={styles.projSubtitle}>{project.tagline}</div>

          {/* Imagem cresce para preencher ~75% da página */}
          <PageImage src={project.imgLeft} alt={`${project.name} — código`} fill />

          <div className={styles.techBadges}>
            {(project.tech || '').split('·').map(t => (
              <span key={t} className={styles.techBadge}>{t.trim()}</span>
            ))}
          </div>
        </>
      ) : (
        <>
          {project.video ? (
            <>
              <div className={styles.pageImg}
                   style={{ position: 'relative', cursor: 'zoom-in' }}
                   onClick={() => setVideoOpen(true)}>
                <iframe src={project.video} title={project.name} frameBorder="0" allowFullScreen />
                <div className={styles.iframeOverlay} />
              </div>
              {videoOpen && (
                <div className={styles.lightboxOverlay} onClick={() => setVideoOpen(false)}>
                  <div className={styles.lightboxBox} onClick={e => e.stopPropagation()}>
                    <button className={styles.lightboxClose} onClick={() => setVideoOpen(false)}>✕</button>
                    <div className={styles.lightboxVideo}>
                      <iframe src={project.video} title={project.name} frameBorder="0" allowFullScreen />
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <PageImage src={project.imgRight} alt={`${project.name} — rodando`} />
          )}

          <p className={styles.projDesc}>{project.description}</p>

          <div className={styles.projActions}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className={`${styles.pbtn} ${styles.pbtnAmber}`}>
              <FaGithub /> Ver no GitHub
            </a>
          </div>

          {/*
          ════════════════════════════════════════════════════════════
          [EDIT-RENDER] Botão de edição — SOMENTE no lado direito
          Para desativar: comente do <EditPanel até [EDIT-RENDER-END]
          ════════════════════════════════════════════════════════════
          */}
          <EditPanel projectId={project.id} projectData={project} onSave={onSave} />
          {/* ════ [EDIT-RENDER-END] ════ */}
        </>
      )}
    </div>
  );
}

export const AgrosenseLeft  = ({ p, onSave }) => <ProjectPage project={p} side="left"  onSave={onSave} />;
export const AgrosenseRight = ({ p, onSave }) => <ProjectPage project={p} side="right" onSave={onSave} />;
export const JornadaLeft    = ({ p, onSave }) => <ProjectPage project={p} side="left"  onSave={onSave} />;
export const JornadaRight   = ({ p, onSave }) => <ProjectPage project={p} side="right" onSave={onSave} />;
export const PixelLeft      = ({ p, onSave }) => <ProjectPage project={p} side="left"  onSave={onSave} />;
export const PixelRight     = ({ p, onSave }) => <ProjectPage project={p} side="right" onSave={onSave} />;
export const VelhaLeft      = ({ p, onSave }) => <ProjectPage project={p} side="left"  onSave={onSave} />;
export const VelhaRight     = ({ p, onSave }) => <ProjectPage project={p} side="right" onSave={onSave} />;
export const PooLeft        = ({ p, onSave }) => <ProjectPage project={p} side="left"  onSave={onSave} />;
export const PooRight       = ({ p, onSave }) => <ProjectPage project={p} side="right" onSave={onSave} />;

/* ─────────────────────────────────────────────────────────────
   CARROSSEL DE EVENTOS
───────────────────────────────────────────────────────────── */
function EventCarousel({ photos }) {
  const [idx, setIdx] = useState(0);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  return (
    <>
      <div className={styles.pageImg} style={{ position: 'relative' }}>
        {photos.length === 0 ? (
          <div className={styles.imgPlaceholder}>
            <FaImage />
            <span>Adicione fotos via painel de edição</span>
          </div>
        ) : (
          <>
            {/* Track */}
            <div style={{ position:'absolute', inset:0, overflow:'hidden', borderRadius:'inherit' }}>
              <div style={{
                display: 'flex',
                height: '100%',
                transition: 'transform 0.4s ease',
                transform: `translateX(-${idx * 100}%)`,
              }}>
                {photos.map((src, i) => (
                  <div key={i} style={{ flexShrink:0, width:'100%', height:'100%' }}>
                    <img src={src} alt={`Foto ${i+1}`}
                      style={{ width:'100%', height:'100%', objectFit:'cover', cursor:'zoom-in' }}
                      onClick={() => { setLbIdx(i); setLbOpen(true); }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Controles */}
            {photos.length > 1 && (
              <>
                <button className={`${styles.carouselCtrl} ${styles.cPrev}`}
                  onClick={() => setIdx(i => (i - 1 + photos.length) % photos.length)}>
                  <FaChevronLeft />
                </button>
                <button className={`${styles.carouselCtrl} ${styles.cNext}`}
                  onClick={() => setIdx(i => (i + 1) % photos.length)}>
                  <FaChevronRight />
                </button>
                <div className={styles.carouselDots}>
                  {photos.map((_, i) => (
                    <button key={i}
                      className={`${styles.cdot} ${i === idx ? styles.cdotActive : ''}`}
                      onClick={() => setIdx(i)} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {lbOpen && (
        <div className={styles.lightboxOverlay} onClick={() => setLbOpen(false)}>
          <div className={styles.lightboxBox} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLbOpen(false)}>✕</button>
            <img src={photos[lbIdx]} alt={`Foto ${lbIdx + 1}`} className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   EVENT PAGE
   ──────────────────────────────────────────────────────────
   REGRA ANTI-DUPLICAÇÃO:
   • EventsLeft  → mostra o evento da ESQUERDA  + botão Editar
   • EventsRight → mostra o evento da DIREITA   + botão Editar
   • Cada um recebe seu próprio `event` e `onSave` do Book.jsx
   • São componentes distintos, não o mesmo componente dos dois lados
───────────────────────────────────────────────────────────── */
function EventPage({ event, onSave }) {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}>
        <span style={{ fontSize:'1rem', marginRight:4 }}>{event.icon}</span>
        {event.title}
      </h3>

      {/* Carrossel — imagem primeiro, igual às páginas de projeto */}
      <EventCarousel photos={event.photos || []} />

      <p className={styles.eventDesc}>{event.description}</p>

      {/* Tags — mesmo estilo dos projetos */}
      {(event.tech || '').trim() && (
        <div className={styles.techBadges} style={{ marginBottom:8 }}>
          {event.tech.split('·').map(t => t.trim()).filter(Boolean).map(t => (
            <span key={t} className={styles.techBadge}>{t}</span>
          ))}
        </div>
      )}

      {/*
      ════════════════════════════════════════════════════════════
      [EDIT-RENDER] Botão de edição do evento
      Para desativar: comente do <EditPanel até [EDIT-RENDER-END]
      ════════════════════════════════════════════════════════════
      */}
      <EditPanel projectId={event.id} projectData={event} onSave={onSave} isEvent={true} />
      {/* ════ [EDIT-RENDER-END] ════ */}
    </div>
  );
}

// EventsLeft recebe o evento NASA, EventsRight recebe a Maratona
// Cada um tem seu próprio botão Editar → sem duplicação
export const EventsLeft  = ({ p, onSave }) => <EventPage event={p} onSave={onSave} />;
export const EventsRight = ({ p, onSave }) => <EventPage event={p} onSave={onSave} />;

/* ─────────────────────────────────────────
   CONTATO
───────────────────────────────────────── */
export function ContactLeft() {
  return (
    <div className={styles.page}>
      <h3 className={styles.secTitle}><FaEnvelope className={styles.secIcon} /> Contato</h3>
      <div className={styles.contactForm}>
        <input className={styles.cfInput} type="text"  placeholder="Seu nome" />
        <input className={styles.cfInput} type="email" placeholder="Seu e-mail" />
        <textarea className={styles.cfInput} rows={4}  placeholder="Sua mensagem..." />
        <button className={styles.cfSubmit}><FaEnvelope /> Enviar Mensagem</button>
      </div>
    </div>
  );
}

export function ContactRight() {
  return (
    <div className={styles.page} style={{ display:'flex', flexDirection:'column',
      justifyContent:'center', alignItems:'center', textAlign:'center', gap:14 }}>
      <div className={styles.contactEndIcon}>🎓</div>
      <h3 className={styles.contactEndTitle}>Vamos construir algo incrível!</h3>
      <p className={styles.contactEndText}>Aberto a projetos, estágios e colaborações.</p>
      <div className={styles.contactLinks}>
        <a href="https://www.instagram.com/cgonssalves" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Instagram</a>
        <a href="https://www.linkedin.com/in/cau%C3%A3-gon%C3%A7alves" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
        <a href="https://github.com/cgonssalves" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>GitHub</a>
      </div>
    </div>
  );
}
