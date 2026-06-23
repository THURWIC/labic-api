import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function ProjectTable({ data = [], loading = false, limit }) {
  const projects = limit ? data.slice(0, limit) : data

  return (
    <Card title="Projetos Recentes">
      {loading && (
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555' }}>Carregando projetos...</p>
        </div>
      )}
      {!loading && projects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555', margin: 0 }}>Nenhum projeto cadastrado.</p>
        </div>
      )}
      {!loading && projects.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '400px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
                <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Título</th>
                <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '600', color: '#1F1F1F' }}>{project.title}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <Badge variant={project.status === 'Ativo' ? 'success' : project.status === 'Em Execução' ? 'warning' : 'primary'}>
                      {project.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  )
}
