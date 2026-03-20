import { useState } from 'react'
import type { Session } from '@/types'

interface SessionFeedbackProps {
  sessions: Session[]
}

export default function SessionFeedback({ sessions }: SessionFeedbackProps) {
  const [current, setCurrent] = useState(0)
  const session = sessions[current]

  return (
    <div className="bg-surface border border-border rounded-lg shadow-card p-4">
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-sm font-semibold text-text">Session: {session.sessionId}</span>
        <span className="text-sm text-text-muted">
          Score: <span className="text-accent font-semibold">{session.score}</span>
        </span>
      </div>

      <div className="flex flex-col gap-1.5 mb-4">
        <p className="text-sm font-semibold text-text">What went well:</p>
        <p className="text-sm text-text-muted leading-relaxed italic">{session.feedback.good}</p>
        <p className="text-sm font-semibold text-primary mt-2">Areas for Improvement:</p>
        <p className="text-sm text-primary leading-relaxed italic">{session.feedback.improve}</p>
      </div>

      <div className="flex justify-between items-center">
        {current > 0 ? (
          <button
            onClick={() => setCurrent(current - 1)}
            className="text-sm text-primary font-medium hover:opacity-70 transition-opacity"
          >
            ← Prev
          </button>
        ) : (
          <span />
        )}
        {current < sessions.length - 1 && (
          <button
            onClick={() => setCurrent(current + 1)}
            className="text-sm text-primary font-medium hover:opacity-70 transition-opacity"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}
