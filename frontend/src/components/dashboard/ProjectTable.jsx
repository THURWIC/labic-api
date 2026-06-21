import { useState } from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const mockProjects = [
  { id: 1, titulo: 'Deep Learning Model', responsavel: 'Dr. Carlos Silva', status: 'Ativo' },
  { id: 2, titulo: 'Smart 3D Printer Controller', responsavel: 'MSc. Julia Torres', status: 'Em Execução' },
  { id: 3, titulo: 'Community Drone Mapping', responsavel: 'Eng. Rafael Costa', status: 'Concluído' },
  { id: 4, titulo: 'Educational VR Platform', responsavel: 'Prof. Lucas Almeida', status: 'Em Execução' },
]

export default function ProjectTable({ limit }) {
  const [projects] = useState(limit ? mockProjects.slice(0, limit) : mockProjects)

  return (
    <Card title="Projetos Recentes">
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Título</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Responsável</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '600', color: '#1F1F1F' }}>{project.titulo}</td>
              <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555555' }}>{project.responsavel}</td>
              <td style={{ padding: '12px 16px' }}>
                <Badge
                  variant={
                    project.status === 'Ativo'
                      ? 'success'
                      : project.status === 'Em Execução'
                      ? 'warning'
                      : 'primary'
                  }
                >
                  {project.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
