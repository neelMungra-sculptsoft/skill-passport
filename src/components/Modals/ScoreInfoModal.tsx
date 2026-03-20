const scores = [
  { score: 1, meaning: 'No evidence / struggles to demonstrate the skill' },
  { score: 2, meaning: 'Emerging skill with limited application' },
  { score: 3, meaning: 'Baseline competency — expected for graduates or early professionals' },
  { score: 4, meaning: 'Strong, consistent skill use across tasks or settings' },
  {
    score: 5,
    meaning:
      'Demonstrates consistent understanding, competency, and autonomy in applying the skill',
  },
]

interface ScoreInfoModalProps {
  onClose: () => void
}

export default function ScoreInfoModal({ onClose }: ScoreInfoModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-xl shadow-card-md w-full max-w-[480px] mx-4 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tab bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-0 border-b border-border">
          <div className="flex gap-6">
            <span className="text-[13px] font-semibold text-accent border-b-2 border-accent pb-3">
              Overview
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-text-soft hover:text-text transition-colors mb-3"
            aria-label="Close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <p className="text-[15px] font-semibold text-text mb-4">📊 What the Scores Mean</p>

          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left">
                <th className="font-semibold text-text pb-2 w-16">Score</th>
                <th className="font-semibold text-text pb-2">
                  General Meaning (Applies Across All Skills)
                </th>
              </tr>
            </thead>
            <tbody>
              {scores.map(({ score, meaning }) => (
                <tr key={score} className="border-t border-border">
                  <td className="py-2.5 text-text font-medium">{score}</td>
                  <td className="py-2.5 text-text-muted">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
