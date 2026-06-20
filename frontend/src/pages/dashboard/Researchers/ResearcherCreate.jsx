import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResearcherCreate() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    bio: '',
    link: ''
  });
  
  const [errors, setErrors] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email') setErrors({ email: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrors({ email: 'O email deve ser um endereço válido.' });
      return;
    }
    console.log('Salvando pesquisador:', formData);
    navigate('/dashboard/pesquisadores');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>Cadastro de Pesquisador</h1>
        <p style={styles.subtitle}>Preencha os campos abaixo para integrar nossa equipe de pesquisa.</p>
        
        <hr style={styles.divider} />

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome completo</label>
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              style={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Seu email"
              style={{
                ...styles.input,
                borderColor: errors.email ? 'rgb(229,115,115)' : '#E5E7EB'
              }}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div style={styles.errorAlert}>
                {errors.email}
              </div>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Área de pesquisa</label>
            <input
              type="text"
              name="area"
              placeholder="Ex: Inteligência Artificial"
              style={styles.input}
              value={formData.area}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Biografia</label>
            <textarea
              name="bio"
              placeholder="Sua breve biografia acadêmica e profissional"
              style={styles.textarea}
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Foto</label>
            <div style={styles.fileContainer}>
              <input type="file" id="file-upload" style={styles.fileInput} />
              <label htmlFor="file-upload" style={styles.fileBtn}>Selecionar arquivo</label>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Currículo/link</label>
            <input
              type="url"
              name="link"
              placeholder="URL do Lattes ou link do currículo"
              style={styles.input}
              value={formData.link}
              onChange={handleChange}
            />
          </div>

          <div style={styles.actions}>
            <button 
              type="button" 
              style={styles.cancelBtn} 
              onClick={() => navigate('/dashboard/pesquisadores')}
            >
              Cancelar
            </button>
            <button type="submit" style={styles.saveBtn}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px 0', fontFamily: 'Open Sans, sans-serif' },
  formCard: { backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB', width: '100%', maxWidth: '720px' },
  title: { fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', marginBottom: '8px' },
  subtitle: { fontSize: '16px', color: '#555555', textAlign: 'center', marginBottom: '24px' },
  divider: { border: '0', borderTop: '1px solid #E5E7EB', marginBottom: '32px' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { fontSize: '16px', fontWeight: '600', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' },
  input: { height: '46px', padding: '0 14px', borderRadius: '5px', border: '1px solid #E5E7EB', fontSize: '15px', fontFamily: 'Open Sans, sans-serif', outline: 'none', transition: '0.2s ease' },
  textarea: { padding: '12px 14px', borderRadius: '5px', border: '1px solid #E5E7EB', fontSize: '15px', fontFamily: 'Open Sans, sans-serif', outline: 'none', resize: 'vertical' },
  fileContainer: { display: 'flex' },
  fileInput: { display: 'none' },
  fileBtn: { padding: '10px 16px', border: '1px solid #9CA3AF', backgroundColor: '#F3F4F6', color: '#1F1F1F', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', transition: '0.2s ease' },
  errorAlert: { backgroundColor: 'rgb(229,115,115)', color: '#FFFFFF', padding: '10px', borderRadius: '5px', fontSize: '14px', marginTop: '4px' },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' },
  cancelBtn: { backgroundColor: '#FFFFFF', color: '#1F1F1F', border: '1px solid #E5E7EB', borderRadius: '5px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: '0.2s ease' },
  saveBtn: { backgroundColor: 'rgb(43, 93, 250)', color: '#FFFFFF', border: 'none', borderRadius: '5px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: '0.2s ease' },
};