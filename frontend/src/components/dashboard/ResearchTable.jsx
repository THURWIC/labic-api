import { useState } from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const mockResearch = [
  { id: 1, titulo: 'Inteligência Artificial & Dados', coordenador: 'Dr. Ana Silva', status: 'Ativo' },
  { id: 2, titulo: 'Prototipagem Rápida & Impressão 3D', coordenador: 'MSc. João Gomes', status: 'Em Execução' },
  { id: 3, titulo: 'Sistemas & Tecnologias Emergentes', coordenador: 'Engª Carla Dias', status: 'Ativo' },
]

export default function ResearchTable({ limit }) {
  const [research] = useState(limit ? mockResearch.slice(0, limit) : mockResearch)

  return (
    <Card title="Linhas de Pesquisa">
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Linha de Pesquisa</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Coordenador</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {research.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '600', color: '#1F1F1F' }}>{item.titulo}</td>
              <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555555' }}>{item.coordenador}</td>
              <td style={{ padding: '12px 16px' }}>
                <Badge variant={item.status === 'Ativo' ? 'success' : 'warning'}>{item.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
