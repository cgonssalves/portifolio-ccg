import { motion } from 'framer-motion';
import { FaFileAlt, FaMicroscope, FaClock } from 'react-icons/fa';
import styles from './Academic.module.css';

const folders = [
  {
    id: 'artigos',
    icon: <FaFileAlt />,
    label: 'Artigos',
    desc: 'Publicações e artigos científicos desenvolvidos durante a graduação em Engenharia de Computação na UEMG.',
    color: 'amber',
    items: [],
  },
  {
    id: 'ic',
    icon: <FaMicroscope />,
    label: 'Iniciações Científicas',
    desc: 'Projetos de iniciação científica e pesquisa aplicada realizados em parceria com docentes da universidade.',
    color: 'brown',
    items: [],
  },
];

export default function AcademicSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>
          Arquivos <span>Acadêmicos</span>
        </h2>
        <p className={styles.headingSub}>
          Produção científica e projetos de pesquisa
        </p>
      </motion.div>

      <div className={styles.foldersRow}>
        {folders.map((f, i) => (
          <motion.div
            key={f.id}
            className={`${styles.folderCard} ${styles[f.color]}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.15 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.folderTab} />
            <div className={styles.folderBody}>
              <div className={styles.folderIcon}>{f.icon}</div>
              <div className={styles.folderName}>{f.label}</div>
              <p className={styles.folderDesc}>{f.desc}</p>

              {f.items.length === 0 ? (
                <div className={styles.emptyBadge}>
                  <FaClock /> Em breve — em produção
                </div>
              ) : (
                <ul className={styles.itemList}>
                  {f.items.map((item, j) => (
                    <li key={j} className={styles.item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
