import { useState } from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const mockArticles = [
  { id: 1, titulo: 'ApplyFlow AI: Otimização de Candidaturas', autores: 'A. M. Silva', data: '15 Mai 2026', status: 'Ativo' },
  { id: 2, titulo: 'Prototipagem AI: Otimização Rápida', autores: 'J. S. Gouveia', data: '15 Mai 2026', status: 'Em Execução' },
  { id: 3, titulo: 'Educational VR Platform', autores: 'A. M. Silva', data: '10 Abr 2026', status: 'Concluído' },
]

export default function ArticleTable({ limit }) {
  const [articles] = useState(limit ? mockArticles.slice(0, limit) : mockArticles)

  return (
    <Card title="Artigos Recentes">
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Título</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Autor(es)</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Data</th>
            <th style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art) => (
            <tr key={art.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '600', color: '#1F1F1F' }}>{art.titulo}</td>
              <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555555' }}>{art.autores}</td>
              <td style={{ padding: '12px 16px', fontSize: '14px', color: '#555555' }}>{art.data}</td>
              <td style={{ padding: '12px 16px' }}>
                <Badge
                  variant={
                    art.status === 'Ativo'
                      ? 'success'
                      : art.status === 'Em Execução'
                      ? 'warning'
                      : 'primary'
                  }
                >
                  {art.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
