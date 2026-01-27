import { Tv } from 'lucide-react'

function Headline({ onStart }) {
  return (
    <div className="headline">
      <div className="icon-badge-tv">
        <Tv size={40} />
      </div>
      
      <h1 className="headline-title">
        Descubra agora qual é o <span className="text-purple">melhor plano de TV</span> pra você 📺
      </h1>
      
      <p className="subtitle">
        Responda algumas perguntas rápidas e veja a novidade que está <span className="text-orange">revolucionando o mundo do streaming!</span>
      </p>

      <button className="btn-primary" onClick={onStart}>
        Quero descobrir agora 🚀
      </button>
    </div>
  )
}

export default Headline
