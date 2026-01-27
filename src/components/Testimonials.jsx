import { Star } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: "Carlos",
      location: "São Paulo, SP",
      rating: 5,
      text: "Melhor decisão que tomei! Cancelei Netflix, Prime e Disney+ e economizei mais de R$ 100 por mês. O CineStream tem tudo!",
      date: "Há 2 dias"
    },
    {
      name: "Maria",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Funciona perfeitamente na minha Smart TV. Qualidade excelente e nunca mais vou pagar mensalidade!",
      date: "Há 1 semana"
    },
    {
      name: "João Pedro",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Estava cético no início, mas o plano vitalício realmente vale a pena. Já indiquei para toda família!",
      date: "Há 3 dias"
    }
  ]

  return (
    <div className="testimonials-minimal">
      <h3 className="section-title">⭐ O que nossos clientes estão dizendo</h3>
      <p className="section-subtitle">Mais de 10.000 usuários satisfeitos</p>

      <div className="testimonials-grid-minimal">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card-minimal">
            <div className="testimonial-avatar">
              {testimonial.name.charAt(0)}
            </div>
            <div className="testimonial-content">
              <div className="testimonial-top">
                <div>
                  <strong>{testimonial.name}</strong>
                  <div className="rating-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                </div>
                <span className="location">{testimonial.location}</span>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-meta">
                <span>{testimonial.date}</span>
                <span className="verified">✓ Compra verificada</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-minimal">
        <div className="stat-item">
          <strong>10.000+</strong>
          <span>Clientes Ativos</span>
        </div>
        <div className="stat-item">
          <strong>4.9/5</strong>
          <span>Avaliação Média</span>
        </div>
        <div className="stat-item">
          <strong>98%</strong>
          <span>Recomendam</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
