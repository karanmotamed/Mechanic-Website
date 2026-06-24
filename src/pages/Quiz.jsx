import { useState } from 'react';
import { quizQuestions } from '../data/quiz';

function QuizResults({ answers, onRetry }) {
  const score = answers.filter(a => a.correct).length;
  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);

  const getFeedback = () => {
    if (pct >= 90) return { emoji: '🏆', title: 'Expert Level!', msg: 'You really know your stuff! You\'re well-equipped to avoid getting ripped off at the mechanic.' };
    if (pct >= 70) return { emoji: '🎓', title: 'Well Done!', msg: 'Good knowledge! Review the sections you missed and you\'ll be even better protected.' };
    if (pct >= 50) return { emoji: '📚', title: 'Getting There!', msg: 'You\'ve got some basics down. Go through the Car Basics and Scams sections to fill in the gaps.' };
    return { emoji: '🔍', title: 'Keep Learning!', msg: 'Don\'t worry — that\'s why you\'re here. Read through all the sections and retake the quiz!' };
  };

  const fb = getFeedback();

  return (
    <div className="quiz-container">
      <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: 24 }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>{fb.emoji}</div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>{fb.title}</h2>
        <div style={{ fontSize: '3rem', fontWeight: 900, color: pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)', marginBottom: 8 }}>
          {score}/{total}
        </div>
        <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: 16 }}>{pct}% correct</div>
        <p style={{ color: 'var(--text-muted)', maxWidth: 400, margin: '0 auto 24px' }}>{fb.msg}</p>

        {/* Score bar */}
        <div style={{ background: 'var(--border)', borderRadius: 8, height: 12, margin: '0 auto 24px', maxWidth: 300 }}>
          <div style={{ width: `${pct}%`, height: '100%', borderRadius: 8, background: pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)', transition: 'width 1s ease' }} />
        </div>

        <button className="btn-primary" onClick={onRetry} style={{ background: 'var(--primary)', color: 'white' }}>
          🔄 Try Again
        </button>
      </div>

      {/* Answer review */}
      <h3 style={{ marginBottom: 16 }}>Review Your Answers</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {quizQuestions.map((q, i) => {
          const answer = answers[i];
          const isCorrect = answer?.correct;
          return (
            <div key={q.id} style={{ background: 'var(--bg-card)', border: `2px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`, borderRadius: 'var(--radius-sm)', padding: 20 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{isCorrect ? '✅' : '❌'}</span>
                <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Q{i+1}: {q.question}</p>
              </div>
              {!isCorrect && (
                <div style={{ marginBottom: 8, padding: '8px 12px', background: '#fef2f2', borderRadius: 6, fontSize: '0.85rem', color: '#991b1b' }}>
                  You chose: {q.options[answer?.selected]}
                </div>
              )}
              <div style={{ padding: '8px 12px', background: '#f0fdf4', borderRadius: 6, fontSize: '0.85rem', color: '#166534', marginBottom: 8 }}>
                Correct: {q.options[q.correct]}
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--bg-secondary)', borderRadius: 6, fontSize: '0.85rem', color: 'var(--text-muted)', borderLeft: '3px solid var(--primary)' }}>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQ];

  const handleSelect = (optionIndex) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    setShowExplanation(true);
    const isCorrect = optionIndex === question.correct;
    setAnswers(prev => [...prev, { selected: optionIndex, correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentQ + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const handleRetry = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setShowExplanation(false);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="page">
        <div className="page-header">
          <h1 className="page-title">🎯 Quiz Complete!</h1>
        </div>
        <QuizResults answers={answers} onRetry={handleRetry} />
      </div>
    );
  }

  const progress = ((currentQ) / quizQuestions.length) * 100;
  const categoryColors = { Scams: '#ef4444', Maintenance: '#8b5cf6', Basics: '#3b82f6' };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">🎯 Test Your Knowledge</h1>
        <p className="page-subtitle">
          10 questions covering car basics, maintenance, and common scams. See how prepared you are to handle the mechanic.
        </p>
      </div>

      <div className="quiz-container">
        {/* Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <span>Question {currentQ + 1} of {quizQuestions.length}</span>
          <span style={{ color: categoryColors[question.category] || 'var(--primary)', fontWeight: 600 }}>
            {question.category}
          </span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Score tracker */}
        {answers.length > 0 && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
            {answers.map((a, i) => (
              <div key={i} style={{
                width: 28, height: 28, borderRadius: '50%',
                background: a.correct ? 'var(--success)' : 'var(--danger)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', color: 'white', fontWeight: 700
              }}>
                {a.correct ? '✓' : '✗'}
              </div>
            ))}
          </div>
        )}

        {/* Question card */}
        <div className="card" style={{ marginBottom: 20 }}>
          <p className="quiz-question">{question.question}</p>

          <div className="quiz-options">
            {question.options.map((option, i) => {
              let className = 'quiz-option';
              if (selected !== null) {
                if (i === question.correct) className += ' correct';
                else if (i === selected && selected !== question.correct) className += ' wrong';
              }
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleSelect(i)}
                  disabled={selected !== null}
                >
                  <span style={{ fontWeight: 700, marginRight: 8, color: 'var(--text-muted)' }}>
                    {['A', 'B', 'C', 'D'][i]}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="quiz-explanation">
              <strong>{selected === question.correct ? '✅ Correct!' : '❌ Not quite.'}</strong>
              {' '}{question.explanation}
            </div>
          )}
        </div>

        {showExplanation && (
          <button
            className="btn-primary"
            onClick={handleNext}
            style={{ background: 'var(--primary)', color: 'white', width: '100%', padding: '14px', fontSize: '1rem' }}
          >
            {currentQ + 1 >= quizQuestions.length ? '🏁 See Results' : 'Next Question →'}
          </button>
        )}

        {selected === null && (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 8 }}>
            Select an answer above to continue
          </p>
        )}
      </div>
    </div>
  );
}
