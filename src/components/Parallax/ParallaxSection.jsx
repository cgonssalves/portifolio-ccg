import { useEffect, useRef } from 'react';
import { FaFlask } from 'react-icons/fa';
import styles from './Parallax.module.css';

export default function ParallaxSection() {
  const sectionRef = useRef(null);
  const bgRef      = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg      = bgRef.current;
    if (!section || !bg) return;

    let rafId = null;

    const update = () => {
      const { top, height } = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Só aplica quando a seção está visível
      if (top > viewH || top + height < 0) return;

      // Progresso 0→1 enquanto a seção cruza a viewport
      const progress = 1 - (top + height) / (viewH + height);
      // Deslocamento ±80px (160px total de movimento = parallax bem visível)
      const offset = (progress - 0.5) * 160;

      bg.style.transform = `translateY(${offset}px)`;
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // Posição inicial correta mesmo sem scroll
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update,   { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.parallaxSection}>
      <div ref={bgRef} className={styles.parallaxBg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <a href="#" className={styles.lattesBtn} target="_blank" rel="noopener noreferrer">
          <FaFlask />
          Acessar Currículo Lattes
        </a>
      </div>
    </section>
  );
}
