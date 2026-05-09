import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';
import styles from './BookCover.module.css';

// cvHref: data URI do PDF em base64 — garante download sem depender de servidor
export default function BookCover({ onContactClick, cvHref }) {
  return (
    <div className={styles.cover}>
      <div className={styles.circle1} />
      <div className={styles.circle2} />
      <div className={styles.circle3} />

      <motion.div className={styles.profileRing}
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.65, type: 'spring', stiffness: 120 }}>
        <img src={profileImg} alt="Cauã Cavalcante" />
      </motion.div>

      <motion.div className={styles.info}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}>
        <h2 className={styles.name}>Cauã Cavalcante</h2>
        <p className={styles.role}>Full Stack Developer</p>
        <p className={styles.bio}>
          Sou um estudante de Engenharia da computação sempre em busca de mais
          resiliência e aprendizado.
        </p>
      </motion.div>

      <motion.div className={styles.socialRow}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}>
        <a href="https://www.instagram.com/cgonssalves" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/cau%C3%A3-gon%C3%A7alves" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/cgonssalves" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
      </motion.div>

      <motion.div className={styles.btns}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}>
        {/* Download CV via base64 — funciona mesmo no GitHub Pages sem servidor */}
        <a
          href={cvHref}
          download="Curriculo_Caua_Cavalcante.pdf"
          className={`${styles.btn} ${styles.btnSolid}`}
        >
          <FaDownload /> Download CV
        </a>
        <button className={`${styles.btn} ${styles.btnOutline}`} onClick={onContactClick}>
          <FaEnvelope /> Contato
        </button>
      </motion.div>
    </div>
  );
}
