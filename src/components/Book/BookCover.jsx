import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';
import styles from './BookCover.module.css';

export default function BookCover({ onContactClick }) {
  return (
    <div className={styles.cover}>
      {/* decorative circles */}
      <div className={styles.circle1} />
      <div className={styles.circle2} />

      <motion.div
        className={styles.profileRing}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
      >
        <img src={profileImg} alt="Cauã Cavalcante" />
      </motion.div>

      <motion.div
        className={styles.info}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className={styles.name}>Cauã Cavalcante</h2>
        <p className={styles.role}>Full Stack Developer</p>
        <p className={styles.bio}>
          Sou um estudante de Engenharia da computação sempre em busca de mais
          resiliência e aprendizado.
        </p>
      </motion.div>

      <motion.div
        className={styles.socialRow}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
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

      <motion.div
        className={styles.btns}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
      >
        <a href="/cv.pdf" download="Curriculo_Caua_Cavalcante.pdf" className={`${styles.btn} ${styles.btnSolid}`}>
          <FaDownload /> Download CV
        </a>
        <button className={`${styles.btn} ${styles.btnOutline}`} onClick={onContactClick}>
          <FaEnvelope /> Contato
        </button>
      </motion.div>
    </div>
  );
}
