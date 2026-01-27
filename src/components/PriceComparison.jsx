import { Check, X, TrendingDown } from 'lucide-react'

function PriceComparison({ monthlySpending }) {
  const competitors = [
    { name: 'Netflix', price: 55.90 },
    { name: 'Prime Video', price: 14.90 },
    { name: 'Disney+', price: 43.90 },
    { name: 'HBO Max', price: 34.90 }
  ]

  const totalCompetitors = competitors.reduce((sum, c) => sum + c.price, 0)
  const yearlyCompetitors = totalCompetitors * 12
  const cineStreamPrice = 297
  const savings = yearlyCompetitors - cineStreamPrice

  return (
    <div className="comparison-minimal">
      <div className="comparison-header">
        <TrendingDown size={20} />
        <h3>Compare e Veja Quanto Você Vai Economizar</h3>
      </div>

      <div className="comparison-cards">
        <div className="comparison-left">
          <div className="card-title">
            <span>Streamings Tradicionais</span>
            <span className="badge red">Mensalidade</span>
          </div>
          
          <div className="services">
            {competitors.map((service, index) => (
              <div key={index} className="service-row">
                <span>{service.name}</span>
                <span className="price-red">R$ {service.price.toFixed(2)}/mês</span>
              </div>
            ))}
          </div>

          <div className="totals">
            <div className="total-row">
              <span>Total Mensal:</span>
              <strong>R$ {totalCompetitors.toFixed(2)}</strong>
            </div>
            <div className="total-row highlight">
              <span>Total Anual:</span>
              <strong>R$ {yearlyCompetitors.toFixed(2)}</strong>
            </div>
          </div>

          <div className="features-list negative">
            <p><X size={14} /> Conteúdo limitado</p>
            <p><X size={14} /> Pague para sempre</p>
            <p><X size={14} /> Múltiplas assinaturas</p>
          </div>
        </div>

        <div className="comparison-right">
          <div className="best-choice-badge">⭐ MELHOR ESCOLHA</div>
          <div className="card-title">
            <span>CineStream</span>
            <span className="badge green">Vitalício</span>
          </div>

          <div className="price-hero">
            <span className="currency">R$</span>
            <span className="amount">297</span>
            <span className="period">pagamento único</span>
          </div>

          <div className="features-list positive">
            <p><Check size={14} /> Conteúdo ilimitado</p>
            <p><Check size={14} /> Acesso vitalício</p>
            <p><Check size={14} /> Todos os dispositivos</p>
            <p><Check size={14} /> Sem mensalidade</p>
          </div>

          <div className="savings-box">
            <p>💰 Você economiza</p>
            <strong>R$ {savings.toFixed(2)}</strong>
            <span>no primeiro ano!</span>
          </div>
        </div>
      </div>

      <p className="comparison-note">
        ⚡ Em apenas 2 meses você já recupera o investimento!
      </p>
    </div>
  )
}

export default PriceComparison
