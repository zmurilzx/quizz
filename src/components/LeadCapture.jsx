import { useState } from 'react'
import { Mail, Phone, User, Send } from 'lucide-react'

function LeadCapture({ onSubmit, onSkip }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onSubmit(formData)
    } catch (error) {
      console.error('Erro ao enviar lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="lead-capture">
      <div className="lead-header">
        <h2>🎉 Você está a um passo do seu acesso vitalício!</h2>
        <p>Preencha seus dados para receber a oferta exclusiva</p>
      </div>

      <form onSubmit={handleSubmit} className="lead-form">
        <div className="form-group">
          <div className="input-icon">
            <User size={20} />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <div className="input-icon">
            <Mail size={20} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <div className="input-icon">
            <Phone size={20} />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp (com DDD)"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          <Send size={20} />
          {isSubmitting ? 'Enviando...' : 'Quero Minha Oferta Vitalícia!'}
        </button>

        <button type="button" className="btn-skip" onClick={onSkip}>
          Pular esta etapa
        </button>
      </form>

      <p className="privacy-text">
        🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
      </p>
    </div>
  )
}

export default LeadCapture
