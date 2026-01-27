import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

function CountdownTimer({ minutes = 15 }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60)

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const percentage = (timeLeft / (minutes * 60)) * 100

  return (
    <div className="countdown-timer">
      <div className="timer-header">
        <Clock size={20} />
        <span>Oferta expira em:</span>
      </div>
      
      <div className="timer-display">
        <span className="time">{formatTime(timeLeft)}</span>
      </div>

      <div className="timer-bar">
        <div 
          className="timer-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="timer-warning">
        ⚠️ Não perca esta oportunidade única!
      </p>
    </div>
  )
}

export default CountdownTimer
