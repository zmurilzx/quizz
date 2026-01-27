import { useEffect } from 'react'
import { Smartphone, Tv, Film, Zap } from 'lucide-react'

function AppDemo({ onCTA }) {
  useEffect(() => {
    const ensureScript = ({ id, src, type }) => {
      if (document.getElementById(id)) return

      const script = document.createElement('script')
      script.id = id
      script.src = src
      script.async = true
      if (type) script.type = type
      document.head.appendChild(script)
    }

    ensureScript({
      id: 'wistia-player-js',
      src: 'https://fast.wistia.com/player.js'
    })

    ensureScript({
      id: 'wistia-embed-5gt55026re',
      src: 'https://fast.wistia.com/embed/5gt55026re.js',
      type: 'module'
    })
  }, [])

  return (
    <div className="app-demo-dark">
      <div className="demo-icon-badge">
        <Smartphone size={32} />
      </div>

      <h1 className="demo-title">
        ESSE É O APLICATIVO <span className="text-yellow">CINESTREAM</span> NA PRÁTICA
      </h1>
      <p className="demo-subtitle">Interface moderna, intuitiva e rápida</p>

      <div className="video-container-dark">
        <div className="video-placeholder">
          {/* Substitua o src abaixo pelo link do seu vídeo (YouTube, Vimeo, etc) */}
          {/* Exemplo YouTube: https://www.youtube.com/embed/SEU_VIDEO_ID */}
          {/* Exemplo Vimeo: https://player.vimeo.com/video/SEU_VIDEO_ID */}
          <wistia-player media-id="5gt55026re" aspect="0.5625"></wistia-player>
        </div>
      </div>

      <div className="features-grid-small">
        <div className="feature-card-small">
          <Zap size={24} className="feature-icon-purple" />
          <div>
            <h3>Área de esportes</h3>
            <p>Futebol, SporTV, ESPN, Combate, Premiere etc</p>
          </div>
        </div>
        <div className="feature-card-small">
          <Tv size={24} className="feature-icon-purple" />
          <div>
            <h3>Área de streamings</h3>
            <p>Netflix, Prime, Disney+, Max, HBO, Star+</p>
          </div>
        </div>
        <div className="feature-card-small">
          <Film size={24} className="feature-icon-purple" />
          <div>
            <h3>Filmes por gênero</h3>
            <p>Ação, Comédia, Terror, Drama, Romance, Suspense etc</p>
          </div>
        </div>
        <div className="feature-card-small">
          <Zap size={24} className="feature-icon-purple" />
          <div>
            <h3>Conteúdo para todas as idades</h3>
            <p>Conteúdo seguro para crianças</p>
          </div>
        </div>
      </div>

      <div className="guarantee-box-dark">
        <p className="guarantee-text">
          👍 Tudo em um só app, <span className="text-orange">sem travar</span> e com <span className="text-purple-light">qualidade garantida</span>.
        </p>
      </div>

      <button className="btn-primary-large" onClick={onCTA}>
        👁️ VER PLANOS
      </button>
    </div>
  )
}

export default AppDemo
