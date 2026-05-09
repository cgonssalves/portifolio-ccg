import { useEffect, useRef } from 'react';
import { FaFlask } from 'react-icons/fa';
import styles from './Parallax.module.css';

export default function ParallaxSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.closest('section');
      const rect = section.getBoundingClientRect();
      const offset = rect.top * 0.35;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.parallaxSection}>
      <div ref={bgRef} className={styles.parallaxBg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.heading}>Produção Acadêmica</h2>
        <p className={styles.sub}>
          Pesquisa, inovação e desenvolvimento científico na UEMG
        </p>
        <a href="#" className={styles.lattesBtn} id="lattesBtn" target="_blank" rel="noopener noreferrer">
          <FaFlask />
          Currículo Lattes
        </a>
      </div>
    </section>
  );
}
