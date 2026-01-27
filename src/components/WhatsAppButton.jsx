import { MessageCircle } from 'lucide-react'

function WhatsAppButton({ leadData, answers, savings }) {
  const WHATSAPP_NUMBER = '5511999999999' // CONFIGURE SEU NÚMERO AQUI (com código do país e DDD)

  const generateMessage = () => {
    const name = leadData?.name || 'Visitante'
    const email = leadData?.email || 'Não informado'
    const phone = leadData?.phone || 'Não informado'
    
    let message = `🎬 *Olá! Vim do Quiz CineStream*\n\n`
    message += `👤 *Meus dados:*\n`
    message += `Nome: ${name}\n`
    if (leadData) {
      message += `Email: ${email}\n`
      message += `WhatsApp: ${phone}\n`
    }
    message += `\n💰 *Economia estimada:* R$ ${savings}/ano\n\n`
    
    message += `📋 *Minhas respostas do quiz:*\n`
    if (answers && answers.length > 0) {
      answers.slice(0, 3).forEach((item, index) => {
        message += `${index + 1}. ${item.answer}\n`
      })
    }
    
    message += `\n✨ *Quero saber mais sobre o PLANO VITALÍCIO do CineStream!*`
    
    return encodeURIComponent(message)
  }

  const handleWhatsAppClick = () => {
    const message = generateMessage()
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
      <MessageCircle size={24} />
      <div className="whatsapp-text">
        <strong>Falar com Especialista no WhatsApp</strong>
        <span>Tire suas dúvidas e garanta sua oferta!</span>
      </div>
    </button>
  )
}

export default WhatsAppButton
