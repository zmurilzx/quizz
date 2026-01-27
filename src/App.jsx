import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import Headline from './components/Headline'
import Quiz from './components/Quiz'
import LeadCapture from './components/LeadCapture'
import Result from './components/Result'
import AppDemo from './components/AppDemo'
import Pricing from './components/Pricing'
import { initFacebookPixel, initGoogleAnalytics, trackEvent } from './utils/analytics'
import './App.css'

function App() {
  const [stage, setStage] = useState('headline')
  const [quizAnswers, setQuizAnswers] = useState([])
  const [leadData, setLeadData] = useState(null)

  useEffect(() => {
    initFacebookPixel('YOUR_PIXEL_ID')
    initGoogleAnalytics('YOUR_GA_ID')
    trackEvent('PageView')
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [stage])

  const handleStart = () => {
    setStage('quiz')
    trackEvent('QuizStarted')
  }

  const handleQuizComplete = (answers) => {
    setQuizAnswers(answers)
    setStage('result')
    trackEvent('QuizCompleted')
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const handleViewDemo = () => {
    setStage('appDemo')
    trackEvent('ViewDemoClicked')
  }

  const handleViewPlans = () => {
    setStage('pricing')
    trackEvent('ViewPlansClicked')
  }

  const handleSelectPlan = (plan) => {
    trackEvent('PlanSelected', {
      planId: plan.id,
      planName: plan.name,
      price: plan.price
    })
    window.open('https://cinestream.com/checkout?plan=' + plan.id, '_blank')
  }

  const handleCTA = () => {
    trackEvent('CheckoutClicked', {
      leadCaptured: !!leadData
    })
    window.open('https://cinestream.com/checkout', '_blank')
  }

  return (
    <div className="container">
      <div className="quiz-box">
        {stage === 'headline' && <Headline onStart={handleStart} />}
        {stage === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
        {stage === 'result' && (
          <Result 
            onCTA={handleCTA}
            onViewDemo={handleViewDemo}
            answers={quizAnswers}
            leadData={leadData}
          />
        )}
        {stage === 'appDemo' && (
          <AppDemo 
            onCTA={handleViewPlans}
          />
        )}
        {stage === 'pricing' && (
          <Pricing 
            onSelectPlan={handleSelectPlan}
          />
        )}
      </div>
    </div>
  )
}

export default App
