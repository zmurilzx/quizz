import { Share2, MessageCircle, Facebook } from 'lucide-react'

function SocialShare() {
  const shareUrl = window.location.href
  const shareText = "🎬 Descobri o CineStream! Plano VITALÍCIO de streaming por um preço único. Nunca mais pague mensalidade! 🔥"

  const shareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
    window.open(url, '_blank')
  }

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank', 'width=600,height=400')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    alert('Link copiado! Compartilhe com seus amigos 🎉')
  }

  return (
    <div className="social-share">
      <h4 className="share-title">
        <Share2 size={20} />
        Compartilhe com amigos e ganhe desconto!
      </h4>
      <p className="share-subtitle">Indique 3 amigos e ganhe 10% OFF</p>

      <div className="share-buttons">
        <button className="share-btn whatsapp" onClick={shareWhatsApp}>
          <MessageCircle size={20} />
          WhatsApp
        </button>
        
        <button className="share-btn facebook" onClick={shareFacebook}>
          <Facebook size={20} />
          Facebook
        </button>
        
        <button className="share-btn copy" onClick={copyLink}>
          <Share2 size={20} />
          Copiar Link
        </button>
      </div>
    </div>
  )
}

export default SocialShare
