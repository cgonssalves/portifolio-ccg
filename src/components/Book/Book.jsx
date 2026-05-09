import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BookCover from './BookCover';
import {
  EducationLeft, EducationRight,
  AgrosenseLeft, AgrosenseRight,
  JornadaLeft, JornadaRight,
  EventsLeft, EventsRight,
  PixelLeft, PixelRight,
  VelhaLeft, VelhaRight,
  PooLeft, PooRight,
  ContactLeft, ContactRight,
} from './SpreadContent';
import styles from './Book.module.css';

/* ── Spreads definition ── */
const SPREADS = [
  { id: 'education', left: <EducationLeft />, right: <EducationRight />, lNum: '2', rNum: '3' },
  { id: 'agrosense',  left: <AgrosenseLeft />,  right: <AgrosenseRight />,  lNum: '4', rNum: '5'  },
  { id: 'jornada',   left: <JornadaLeft />,   right: <JornadaRight />,   lNum: '6', rNum: '7'  },
  { id: 'events',    left: <EventsLeft />,    right: <EventsRight />,    lNum: '8', rNum: '9'  },
  { id: 'pixel',     left: <PixelLeft />,     right: <PixelRight />,     lNum: '10', rNum: '11' },
  { id: 'velha',     left: <VelhaLeft />,     right: <VelhaRight />,     lNum: '12', rNum: '13' },
  { id: 'poo',       left: <PooLeft />,       right: <PooRight />,       lNum: '14', rNum: '15' },
  { id: 'contact',   left: <ContactLeft />,   right: <ContactRight />,   lNum: '16', rNum: '17' },
];

const TOTAL = SPREADS.length;

/* Framer variants for the page flip */
const pageVariants = {
  enterFromRight: { rotateY: -80, opacity: 0, transformOrigin: 'left center' },
  center:         { rotateY: 0,   opacity: 1, transformOrigin: 'left center' },
  exitToRight:    { rotateY: -80, opacity: 0, transformOrigin: 'left center' },
  enterFromLeft:  { rotateY: 80,  opacity: 0, transformOrigin: 'right center' },
  exitToLeft:     { rotateY: 80,  opacity: 0, transformOrigin: 'right center' },
};

export default function Book({ contactRef }) {
  const [spread, setSpread] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
  const [flipping, setFlipping] = useState(false);

  const navigate = useCallback((delta) => {
    if (flipping) return;
    const next = spread + delta;
    if (next < 0 || next >= TOTAL) return;
    setFlipping(true);
    setDir(delta);
    setTimeout(() => {
      setSpread(next);
      setFlipping(false);
    }, 50);
  }, [spread, flipping]);

  const goToContact = () => {
    if (flipping) return;
    const contactIdx = SPREADS.findIndex(s => s.id === 'contact');
    setDir(1);
    setSpread(contactIdx);
    // Also scroll to book section
  };

  const current = SPREADS[spread];

  return (
    <section className={styles.bookSection}>
      <h1 className={styles.siteTitle}>
        Portfolio <span>Cauã Cavalcante</span>
      </h1>
      <p className={styles.siteSubtitle}>Engenharia de Computação · Full Stack Developer</p>

      <div className={styles.bookWrapper}>
        <div className={styles.book}>

          {/* ── Spine ── */}
          <div className={styles.spine} />
          <div className={styles.pagesEdge} />

          {/* ── LEFT PAGE ── */}
          <div className={styles.pageLeft}>
            <BookCover onContactClick={goToContact} />

            {/* Left dynamic content */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`left-${spread}`}
                className={styles.leftContentArea}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 18 : -18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -18 : 18 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                {current.left}
              </motion.div>
            </AnimatePresence>

            <span className={styles.pageNum} style={{ left: '73%', transform: 'translateX(-50%)' }}>
              {current.lNum}
            </span>
          </div>

          {/* ── RIGHT PAGE ── */}
          <div className={styles.rightWrapper}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`right-${spread}`}
                className={styles.pageRight}
                custom={dir}
                initial={dir > 0
                  ? { rotateY: -55, opacity: 0, x: 30 }
                  : { rotateY: 55,  opacity: 0, x: -30 }
                }
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={dir > 0
                  ? { rotateY: 55,  opacity: 0, x: -30 }
                  : { rotateY: -55, opacity: 0, x: 30 }
                }
                transition={{
                  duration: 0.55,
                  ease: [0.77, 0, 0.175, 1],
                }}
                style={{ transformOrigin: 'left center', perspective: 1200 }}
              >
                <div className={styles.rightContentArea}>
                  {current.right}
                </div>

                {/* corner fold */}
                {spread < TOTAL - 1 && (
                  <div className={styles.cornerFold} onClick={() => navigate(1)} title="Próxima página" />
                )}

                <span className={styles.pageNum} style={{ right: 12 }}>
                  {current.rNum}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── Controls ── */}
        <div className={styles.controls}>
          <button className={styles.navBtn} onClick={() => navigate(-1)} disabled={spread === 0 || flipping}>
            <FaChevronLeft />
          </button>
          <span className={styles.indicator}>
            {spread + 1} / {TOTAL}
          </span>
          <button className={styles.navBtn} onClick={() => navigate(1)} disabled={spread === TOTAL - 1 || flipping}>
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}
