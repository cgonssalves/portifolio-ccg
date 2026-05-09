// ╔═══════════════════════════════════════════════════════════════════╗
// ║                    PAINEL DE EDIÇÃO                              ║
// ║  PARA DESATIVAR EM PRODUÇÃO:                                     ║
// ║   1. SpreadContent.jsx — comente [EDIT-IMPORT]                   ║
// ║   2. SpreadContent.jsx — comente os blocos [EDIT-RENDER]         ║
// ║   3. Book.jsx          — comente os blocos [EDIT-BOOK]           ║
// ╚═══════════════════════════════════════════════════════════════════╝

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  FaPencilAlt, FaTimes, FaSave,
  FaGithub, FaImage, FaVideo, FaTrash, FaPlus,
} from 'react-icons/fa';
import styles from './EditPanel.module.css';

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function EditPanel({ projectId, projectData, onSave, isEvent = false }) {
  const [open,    setOpen]   = useState(false);
  const [draft,   setDraft]  = useState({ ...projectData });
  const [saving,  setSaving] = useState(false);
  const [msg,     setMsg]    = useState('');
  // Portal root — garantido existir antes de renderizar
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const imgLeftRef     = useRef();
  const imgRightRef    = useRef();
  const imgCarouselRef = useRef();

  const handleOpen = () => {
    setDraft({ ...projectData });
    setMsg('');
    setOpen(true);
  };

  const set = (key, value) => setDraft(d => ({ ...d, [key]: value }));

  const handleImageUpload = async (e, key) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setMsg('⚠ Selecione uma imagem.'); return; }
    if (file.size > 5 * 1024 * 1024)    { setMsg('⚠ Imagem muito grande (máx 5 MB).'); return; }
    set(key, await fileToBase64(file));
    setMsg('');
    e.target.value = '';
  };

  const handleCarouselUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const tooBig = files.find(f => f.size > 5 * 1024 * 1024);
    if (tooBig) { setMsg(`⚠ "${tooBig.name}" excede 5 MB.`); return; }
    const b64s = await Promise.all(files.map(fileToBase64));
    setDraft(d => ({ ...d, photos: [...(d.photos || []), ...b64s] }));
    setMsg('');
    e.target.value = '';
  };

  const removePhoto = (idx) =>
    setDraft(d => ({ ...d, photos: d.photos.filter((_, i) => i !== idx) }));

  const handleSave = () => {
    setSaving(true);
    onSave(projectId, draft);
    setMsg('✓ Salvo!');
    setSaving(false);
    setTimeout(() => { setOpen(false); setMsg(''); }, 700);
  };

  const handleCancel = () => {
    setDraft({ ...projectData });
    setOpen(false);
    setMsg('');
  };

  // Painel renderizado via Portal no body — escapa de qualquer overflow:hidden
  const portal = mounted && open ? createPortal(
    <div className={styles.portalRoot}>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={handleCancel} />

      {/* Painel */}
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>
            <FaPencilAlt /> Editar — {draft.name || draft.title || projectId}
          </span>
          <button className={styles.closeBtn} onClick={handleCancel}><FaTimes /></button>
        </div>

        <div className={styles.panelBody}>

          {/* ══ PROJETO ══ */}
          {!isEvent && (<>
            <label className={styles.label}>Nome do projeto</label>
            <input className={styles.input} value={draft.name || ''}
              onChange={e => set('name', e.target.value)} placeholder="Ex: Agrosense" />

            <label className={styles.label}>Tagline <span className={styles.labelHint}>(subtítulo curto)</span></label>
            <input className={styles.input} value={draft.tagline || ''}
              onChange={e => set('tagline', e.target.value)} placeholder="Ex: Monitoramento agrícola" />

            <label className={styles.label}>Tecnologias <span className={styles.labelHint}>(separe com · )</span></label>
            <input className={styles.input} value={draft.tech || ''}
              onChange={e => set('tech', e.target.value)} placeholder="Ex: React · Node.js · MongoDB" />

            <label className={styles.label}>Descrição</label>
            <textarea className={`${styles.input} ${styles.textarea}`}
              value={draft.description || ''}
              onChange={e => set('description', e.target.value)}
              rows={4} placeholder="Descreva o projeto..." />

            <label className={styles.label}><FaGithub style={{marginRight:5}} />Link do GitHub</label>
            <input className={styles.input} value={draft.github || ''}
              onChange={e => set('github', e.target.value)}
              placeholder="https://github.com/usuario/repo" />

            <div className={styles.sectionDivider} />

            <label className={styles.label}><FaImage style={{marginRight:5}} />
              Imagem esquerda <span className={styles.labelHint}>(código)</span>
            </label>
            {draft.imgLeft && (
              <div className={styles.imgPreview}>
                <img src={draft.imgLeft} alt="preview" />
                <button className={styles.removeImg} onClick={() => set('imgLeft', null)}><FaTrash /></button>
              </div>
            )}
            <button className={styles.uploadBtn} onClick={() => imgLeftRef.current.click()}>
              <FaImage /> {draft.imgLeft ? 'Substituir' : 'Selecionar imagem'}
            </button>
            <input ref={imgLeftRef} type="file" accept="image/*" style={{display:'none'}}
              onChange={e => handleImageUpload(e, 'imgLeft')} />

            <div className={styles.sectionDivider} />

            <label className={styles.label}><FaImage style={{marginRight:5}} />
              Imagem direita <span className={styles.labelHint}>(rodando)</span>
            </label>
            {draft.imgRight && (
              <div className={styles.imgPreview}>
                <img src={draft.imgRight} alt="preview" />
                <button className={styles.removeImg} onClick={() => set('imgRight', null)}><FaTrash /></button>
              </div>
            )}
            <button className={styles.uploadBtn} onClick={() => imgRightRef.current.click()}>
              <FaImage /> {draft.imgRight ? 'Substituir' : 'Selecionar imagem'}
            </button>
            <input ref={imgRightRef} type="file" accept="image/*" style={{display:'none'}}
              onChange={e => handleImageUpload(e, 'imgRight')} />

            <div className={styles.sectionDivider} />

            <label className={styles.label}><FaVideo style={{marginRight:5}} />
              Vídeo embed <span className={styles.labelHint}>(substitui imagem direita)</span>
            </label>
            <input className={styles.input} value={draft.video || ''}
              onChange={e => set('video', e.target.value || null)}
              placeholder="https://www.youtube.com/embed/ID" />
            <p className={styles.hint}>YouTube → Compartilhar → Incorporar → copie o src do iframe.</p>
          </>)}

          {/* ══ EVENTO ══ */}
          {isEvent && (<>
            <label className={styles.label}>Título do evento</label>
            <input className={styles.input} value={draft.title || ''}
              onChange={e => set('title', e.target.value)} placeholder="Ex: NASA Space Apps" />

            <label className={styles.label}>Descrição</label>
            <textarea className={`${styles.input} ${styles.textarea}`}
              value={draft.description || ''}
              onChange={e => set('description', e.target.value)}
              rows={4} placeholder="Descreva o evento..." />

            <label className={styles.label}>Tecnologias / Tags <span className={styles.labelHint}>(separe com · )</span></label>
            <input className={styles.input} value={draft.tech || ''}
              onChange={e => set('tech', e.target.value)}
              placeholder="Ex: Python · C · Arduino" />

            <div className={styles.sectionDivider} />

            <label className={styles.label}><FaImage style={{marginRight:5}} />
              Fotos <span className={styles.labelHint}>(carrossel · pode adicionar várias)</span>
            </label>
            {(draft.photos || []).length > 0 && (
              <div className={styles.carouselList}>
                {draft.photos.map((src, i) => (
                  <div key={i} className={styles.carouselThumb}>
                    <img src={src} alt={`Foto ${i+1}`} />
                    <button className={styles.removeImg} onClick={() => removePhoto(i)}><FaTrash /></button>
                  </div>
                ))}
              </div>
            )}
            <button className={styles.uploadBtn} onClick={() => imgCarouselRef.current.click()}>
              <FaPlus /> Adicionar fotos
            </button>
            <input ref={imgCarouselRef} type="file" accept="image/*" multiple style={{display:'none'}}
              onChange={handleCarouselUpload} />
            <p className={styles.hint}>Selecione uma ou várias fotos. Máx 5 MB cada.</p>
          </>)}

          {msg && <p className={styles.feedbackMsg}>{msg}</p>}
        </div>

        <div className={styles.panelFooter}>
          <button className={styles.cancelBtn} onClick={handleCancel}>Cancelar</button>
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            <FaSave /> {saving ? 'Salvando…' : 'Salvar'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <button className={styles.editTrigger} onClick={handleOpen} title="Editar">
        <FaPencilAlt /><span>Editar</span>
      </button>
      {portal}
    </>
  );
}
