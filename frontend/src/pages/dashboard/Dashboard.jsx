import { FiUsers, FiBookOpen, FiClipboard, FiFileText } from 'react-icons/fi'
import StatsCard from '../../components/dashboard/StatsCard'
import ProjectTable from '../../components/dashboard/ProjectTable'
import ResearchTable from '../../components/dashboard/ResearchTable'
import ArticleTable from '../../components/dashboard/ArticleTable'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div>
      {/* HEADER */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 8px 0' }}>
          Dashboard
        </h1>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', color: '#555555', margin: 0 }}>
          Visão geral do LABIC — pesquisas, projetos e artigos
        </p>
      </div>

      {/* STATS CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        <StatsCard
          title="Pesquisadores"
          value="12"
          variant="primary"
          icon={<FiUsers />}
        />
        <StatsCard
          title="Projetos Ativos"
          value="8"
          variant="success"
          icon={<FiClipboard />}
        />
        <StatsCard
          title="Linhas de Pesquisa"
          value="4"
          variant="warning"
          icon={<FiBookOpen />}
        />
        <StatsCard
          title="Artigos Publicados"
          value="15"
          variant="error"
          icon={<FiFileText />}
        />
      </div>

      {/* TABELAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        <ProjectTable limit={3} />
        <ResearchTable limit={3} />
      </div>

      <ArticleTable limit={3} />

      {/* AÇÕES RÁPIDAS */}
      <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => navigate('/dashboard/projetos/novo')}>
          + Novo Projeto
        </Button>
        <Button variant="primary" onClick={() => navigate('/dashboard/pesquisadores/novo')}>
          + Novo Pesquisador
        </Button>
        <Button variant="primary" onClick={() => navigate('/dashboard/artigos/novo')}>
          + Novo Artigo
        </Button>
      </div>
    </div>
  )
}
