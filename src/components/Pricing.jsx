import { Check, Clock, Star, Gift } from 'lucide-react'

function Pricing({ onSelectPlan }) {
  const plans = [
    {
      id: 'mensal',
      name: 'Plano Mensal',
      price: 'R$ 29,90',
      period: '/mês',
      checkoutUrl: 'https://pay.cakto.com.br/32sawv8',
      features: [
        'HD, FHD, 4K',
        '+3.000 canais',
        '+100.000 filmes e séries',
        'Streamings inclusos',
        'Conteúdo adulto',
        'Suporte 24/7'
      ],
      buttonText: 'ASSINAR AGORA! 🚀',
      buttonClass: 'btn-plan-purple',
      popular: false,
      delay: '0ms'
    },
    {
      id: 'semestral',
      name: 'Plano Semestral',
      price: 'R$ 89,90',
      period: '/6 meses',
      checkoutUrl: 'https://pay.cakto.com.br/r8ao9dd',
      features: [
        'HD, FHD, 4K',
        '+3.000 canais',
        '+100.000 filmes e séries',
        'Streamings inclusos',
        'Conteúdo adulto',
        'Suporte 24/7'
      ],
      buttonText: 'ASSINAR AGORA! 🚀',
      buttonClass: 'btn-plan-yellow',
      popular: true,
      delay: '100ms'
    },
    {
      id: 'anual',
      name: 'Plano Anual',
      price: 'R$ 189,90',
      period: '/12 meses',
      checkoutUrl: 'https://pay.cakto.com.br/3dhz8j2_745136',
      features: [
        '2 Telas simultâneas',
        '+3.000 canais',
        '+100.000 filmes e séries',
        'Streamings inclusos',
        'Conteúdo adulto',
        'Atualizações toda semana',
        'Suporte 24/7'
      ],
      buttonText: 'ASSINAR AGORA! 🚀',
      buttonClass: 'btn-plan-purple',
      popular: false,
      delay: '200ms'
    },
    {
      id: 'vitalicio',
      name: 'Plano Vitalício',
      price: 'R$ 149,90',
      period: '/vitalício',
      checkoutUrl: 'https://pay.cakto.com.br/3dhz8j2_745136',
      features: [
        '2 ou + Telas simultâneas',
        '+3.000 canais',
        '+100.000 filmes e séries',
        'Streamings inclusos',
        'Conteúdo adulto',
        'Atualizações toda semana',
        'Bônus exclusivo',
        'Sem mensalidade',
        'Suporte Prioritário'
      ],
      buttonText: 'ASSINAR AGORA! 🚀',
      buttonClass: 'btn-plan-purple',
      popular: false,
      delay: '300ms'
    }
  ]

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Alert Box */}
        <div className="alert-box-new">
          <h3 className="alert-title">
            <span className="alert-emoji">🚨</span>
            ATENÇÃO
            <span className="alert-emoji">🚨</span>
          </h3>
          <div className="alert-promo-new">🎁 PROMOÇÃO ESPECIAL 🎁</div>
          <p className="alert-text-new">
            Assine <span className="alert-highlight-accent">1 TELA HOJE</span> e leve{' '}
            <span className="alert-highlight-primary">2 TELAS sem pagar nada a mais!</span>
          </p>
          <div className="alert-timer-new">
            <Clock size={20} />
            <span>Bônus disponível hoje até: <strong className="alert-time">21:09:20</strong></span>
          </div>
        </div>

        {/* Title */}
        <div className="pricing-header">
          <h2 className="pricing-main-title">
            Escolha o <span className="pricing-title-highlight">melhor plano</span> para você
          </h2>
        </div>

        {/* Access Info */}
        <div className="access-box-new">
          <p className="access-box-title">TODOS OS PLANOS LIBERAM ACESSO A:</p>
          <div className="access-box-content">
            <span className="access-box-item">
              <Check size={20} className="access-check" />
              2 OU + TELAS SIMULTÂNEAS
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="plans-grid-new">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card-new ${plan.popular ? 'plan-card-popular-new' : ''}`}
              style={{ animationDelay: plan.delay }}
            >
              {plan.popular && (
                <div className="popular-badge-new">
                  <Star size={16} />
                  MAIS POPULAR
                </div>
              )}
              
              <h3 className="plan-name-new">{plan.name}</h3>
              <div className="plan-price-new">
                <span className="plan-price-value">{plan.price}</span>
                <span className="plan-price-period">{plan.period}</span>
              </div>

              <ul className="plan-features-new">
                {plan.features.map((feature, index) => (
                  <li key={index} className="plan-feature-item">
                    <Check size={20} className="plan-feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={plan.buttonClass}
                onClick={() => window.open(plan.checkoutUrl, '_blank')}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Security Box */}
        <div className="security-box-new">
          <div className="security-header">
            <svg className="security-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" className="security-icon-path"></path>
            </svg>
            <h3 className="security-title-new">Pagamento 100% Seguro</h3>
          </div>
          <p className="security-text-new">
            💳 Utilizamos o sistema de pagamento da <span className="security-highlight">Cakto</span> totalmente confiável e seguro
          </p>
          <p className="security-text-new">
            📱 Após finalizar a compra, o <span className="security-highlight-accent">WhatsApp de suporte e instalação fará contato</span>
          </p>
        </div>

        {/* Bonus Box */}
        <div className="bonus-box-new">
          <Gift size={48} className="bonus-icon-new" />
          <p className="bonus-text-new">
            🎁 Não esqueça: Assine <span className="bonus-highlight-accent">1 tela</span> e leve{' '}
            <span className="bonus-highlight-primary">2 telas</span> hoje!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
