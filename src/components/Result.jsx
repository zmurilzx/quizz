import { Globe, Tv, Film, Play, RefreshCw, Shield, Zap, X, Check } from 'lucide-react'

function Result({ onCTA, onViewDemo, answers, leadData }) {
  const handleRestart = () => {
    window.location.reload()
  }

  return (
    <div className="result-dark">
      <div className="result-icon-globe">
        <Globe size={48} />
      </div>

      <h1 className="result-title-dark">
        📡 Tenha acesso <span className="text-yellow">PARA SEMPRE</span>, pagando uma única vez. Já disponível no Brasil!
      </h1>

      <div className="comparison-cards-dark">
        <div className="comparison-card-left">
          <div className="card-header-red">
            <X size={24} />
            <span>IPTV COMUM</span>
          </div>
          <ul className="comparison-list">
            <li>• Trava constantemente</li>
            <li>• Suporte demorado</li>
            <li>• Preço inflacionado</li>
            <li>• Qualidade instável</li>
          </ul>
        </div>

        <div className="comparison-card-right">
          <div className="card-header-green">
            <Check size={24} />
            <span>CINESTREAM</span>
          </div>
          <ul className="comparison-list-green">
            <li>⚡ Buffer Anti-Travas</li>
            <li>⭕ Suporte vitalício</li>
            <li>🎯 Direto com o dono</li>
            <li>📋 Qualidade garantida</li>
            <li>💎 Pagamento ÚNICO Vitalício</li>
            <li>✅ Acesso para o resto da vida</li>
            <li>⚡ Acesso imediato</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box-dark">
        <p className="highlight-text">
          🚀 O CineStream tem <span className="text-yellow">BUFFER ANTI-TRAVAS</span>, garantindo que seu jogo ou filme nunca trave!
        </p>
        <p className="highlight-subtext">❌ Chega de pagar caro em HBO, Netflix, Amazon Prime, Disney+ e outros serviços de streaming.</p>
        <p className="highlight-subtext-green">✅ Aqui você assina direto com o dono, com preço de custo!</p>
        <p className="highlight-subtext-green">💎 Pagamento ÚNICO VITALÍCIO - Pague uma vez e use para sempre!</p>
      </div>

      <div className="benefits-grid-dark">
        <div className="benefit-card-dark">
          <Tv size={32} className="benefit-icon-purple" />
          <p>+3.000 canais ao vivo</p>
        </div>
        <div className="benefit-card-dark">
          <Film size={32} className="benefit-icon-yellow" />
          <p>+100.000 filmes e séries</p>
        </div>
        <div className="benefit-card-dark">
          <Play size={32} className="benefit-icon-purple" />
          <p>Netflix, Prime, Disney+, Hulu, HBO, Star+ e muito mais</p>
        </div>
        <div className="benefit-card-dark">
          <RefreshCw size={32} className="benefit-icon-yellow" />
          <p>Conteúdo adulto opcional</p>
        </div>
        <div className="benefit-card-dark">
          <Zap size={32} className="benefit-icon-purple" />
          <p>Pagamento único e vitalício</p>
        </div>
        <div className="benefit-card-dark">
          <Shield size={32} className="benefit-icon-yellow" />
          <p>Suporte rápido e confiável</p>
        </div>
      </div>

      <button className="btn-primary-large" onClick={onViewDemo}>
        VER O APLICATIVO NA PRÁTICA 📱
      </button>

      <button className="btn-restart" onClick={handleRestart}>
        ← Reiniciar
      </button>
    </div>
  )
}

export default Result
