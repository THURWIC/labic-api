
import { Outlet } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';
import Topbar from '../../layouts/Topbar';
import Footer from '../../layouts/Footer'; // Importando o footer existente

export default function DashboardLayout() {
  return (
    <div style={styles.layoutContainer}>
      <Sidebar />

      <div style={styles.mainContent}>
        <Topbar />
        
        {/* Bloco central que agrupa a página + footer na rolagem */}
        <div style={styles.scrollContainer}>
          <main style={styles.pageArea}>
            <div style={styles.containerFluid}>
              <Outlet />
            </div>
          </main>
          
          {/* Footer renderizado exatamente na base interna do sistema */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

const styles = {
  layoutContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    overflowX: 'hidden',
  },
  mainContent: {
    flex: 1,
    marginLeft: '260px',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  scrollContainer: {
    flex: 1,
    overflowY: 'auto', // Permite rolar a página até ver o footer
    display: 'flex',
    flexDirection: 'column',
  },
  pageArea: {
    padding: '40px 32px',
    backgroundColor: '#F9FAFB',
    flex: 1,
  },
  containerFluid: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
};