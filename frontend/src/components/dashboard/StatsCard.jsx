import Card from '../ui/Card'

export default function StatsCard({ title, value, variant = 'primary', icon }) {
  return (
    <Card className="stats-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {icon && (
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              backgroundColor:
                variant === 'primary'
                  ? 'rgba(43, 93, 250, 0.1)'
                  : variant === 'success'
                  ? 'rgba(76, 175, 80, 0.1)'
                  : variant === 'warning'
                  ? 'rgba(255, 193, 7, 0.1)'
                  : 'rgba(229, 115, 115, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              color:
                variant === 'primary'
                  ? 'rgb(43, 93, 250)'
                  : variant === 'success'
                  ? 'rgb(76, 175, 80)'
                  : variant === 'warning'
                  ? 'rgb(255, 193, 7)'
                  : 'rgb(229, 115, 115)',
            }}
          >
            {icon}
          </div>
        )}
        <div>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555', margin: '0 0 4px 0' }}>
            {title}
          </p>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', fontWeight: '700', color: '#1F1F1F', margin: 0 }}>
            {value}
          </h3>
        </div>
      </div>
    </Card>
  )
}
