import { useState } from 'react'
import { Sparkles, Gift, Target, Zap } from 'lucide-react'

const questions = [
  {
    id: 1,
    icon: Sparkles,
    emoji: '⭐',
    question: 'Você quer parar de mensalidades e pagar uma única vez?',
    answers: [
      { text: 'Sim, claro!', emoji: '✅' },
      { text: 'Ainda não!', emoji: '🚀' }
    ]
  },
  {
    id: 2,
    icon: Gift,
    emoji: '🎁',
    question: '🍿 Você gostaria de assistir não perder nenhum jogo, novela, filme ou série pagando uma única vez?',
    answers: [
      { text: 'Sim, claro!', emoji: '🤩' },
      { text: 'Não...', emoji: '😔' }
    ]
  },
  {
    id: 3,
    icon: Target,
    emoji: '✅',
    question: '💎 Você quer aproveitar a promoção de LIMITADA com a nova tecnologia CINESTREAM?',
    answers: [
      { text: 'Sim, claro!', emoji: '✅' },
      { text: 'Não...', emoji: '😔' }
    ]
  },
  {
    id: 4,
    icon: Zap,
    emoji: '⚡',
    question: 'Quer conhecer o app com pagamento único com ACESSO VITALÍCIO?',
    answers: [
      { text: 'SIM! Quero conhecer agora', emoji: '✅' },
      { text: 'No momento não!', emoji: '🚀' }
    ]
  }
]

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const handleAnswer = (answer) => {
    const newAnswers = [...selectedAnswers, {
      question: questions[currentQuestion].question,
      answer: answer.text
    }]
    setSelectedAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      setTimeout(() => {
        onComplete(newAnswers)
      }, 500)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="quiz-content-dark">
      <div className="progress-segments">
        {questions.map((_, index) => (
          <div 
            key={index} 
            className={`progress-segment ${index <= currentQuestion ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <p className="question-counter-dark">
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>

      <div className="question-card-dark">
        <div className="question-icon-dark">
          {currentQ.emoji}
        </div>
        <h2 className="question-title-dark">{currentQ.question}</h2>
        <p className="question-subtitle-dark">Selecione alguma das opções 👇</p>
        
        <div className="answers-container-dark">
          {currentQ.answers.map((answer, index) => (
            <button
              key={index}
              className="answer-btn-dark"
              onClick={() => handleAnswer(answer)}
            >
              {answer.emoji && <span className="answer-icon">{answer.emoji}</span>}
              {answer.text}
            </button>
          ))}
        </div>
      </div>

      <button className="btn-restart" onClick={handleRestart}>
        ← Reiniciar
      </button>
    </div>
  )
}

export default Quiz
