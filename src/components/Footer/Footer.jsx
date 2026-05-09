import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://www.instagram.com/cgonssalves" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/cau%C3%A3-gon%C3%A7alves" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/cgonssalves" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      <p className={styles.copy}>
        © 2025 Cauã Cavalcante Gonçalves · Engenharia de Computação · UEMG
      </p>
    </footer>
  );
}
