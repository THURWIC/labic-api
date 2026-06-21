import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import { FiSearch, FiPlus, FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi'

const mockProjects = [
  { id: 1, titulo: 'Deep Learning Model', descricao: 'Pesquisas em machine learning, processamento de dados.', responsavel: 'Dr. Carlos Silva', status: 'Ativo' },
  { id: 2, titulo: 'Smart 3D Printer Controller', descricao: 'Desenvolvimento de solução com impressora 3D.', responsavel: 'MSc. Julia Torres', status: 'Em Execução' },
  { id: 3, titulo: 'Community Drone Mapping', descricao: 'Mapeamento com drones e softwares sob medida.', responsavel: 'Eng. Rafael Costa', status: 'Concluído' },
  { id: 4, titulo: 'Educational VR Platform', descricao: 'Plataforma educacional em Realidade Virtual.', responsavel: 'Prof. Lucas Almeida', status: 'Em Execução' },
  { id: 5, titulo: 'Chatbot Inteligente', descricao: 'Assistente virtual baseado em IA.', responsavel: 'Dra. Fernanda Lima', status: 'Ativo' },
]

export default function ProjectsList() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = mockProjects.filter(p =>
    p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.responsavel.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* HEADER */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 8px 0' }}>
          Listagem de Projetos
        </h1>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', color: '#555555', margin: 0 }}>
          Gerencie e visualize todos os projetos cadastrados e em desenvolvimento do LABIC.
        </p>
      </div>

      {/* TOP BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <Input
            placeholder="Buscar projeto por título ou responsável..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="primary" onClick={() => navigate('/dashboard/projetos/novo')}>
          <FiPlus size={16} style={{ marginRight: '8px' }} />
          Novo Projeto
        </Button>
      </div>

      {/* TABLE */}
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Título</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Descrição</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Responsável</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Status</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '600', color: '#1F1F1F' }}>{project.titulo}</td>
                <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555555' }}>{project.descricao}</td>
                <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555555' }}>{project.responsavel}</td>
                <td style={{ padding: '16px 24px' }}>
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
                <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '4px' }} title="Visualizar">
                      <FiEye size={16} color="#4B5563" />
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '4px' }} title="Editar">
                      <FiEdit2 size={16} color="#2B5DFA" />
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '4px' }} title="Excluir">
                      <FiTrash2 size={16} color="#E57373" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
