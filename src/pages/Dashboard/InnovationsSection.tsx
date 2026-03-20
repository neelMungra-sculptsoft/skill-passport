import { useNavigate } from 'react-router-dom'
import type { Innovation } from '../../types'

interface InnovationsSectionProps {
  innovations: Innovation[]
  selectedCourseId: string
}

export default function InnovationsSection({
  innovations,
  selectedCourseId,
}: InnovationsSectionProps) {
  const navigate = useNavigate()
  if (innovations.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="text-[18px] font-medium text-text mb-4">Innovations</h2>
      <div className="flex gap-4 flex-wrap">
        {innovations.map((inno) => (
          <div
            key={inno.id}
            className="bg-surface border border-border rounded-xl shadow-card p-5 flex gap-5 items-start w-full sm:max-w-[420px] cursor-pointer hover:shadow-card-md transition-shadow"
            onClick={() => navigate(`/innovation/${inno.id}?course=${selectedCourseId}`)}
          >
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-text mb-1.5">{inno.title}</p>
              <p className="text-[13px] text-text-soft mb-1">Completed On {inno.completedOn}</p>
              <p className="text-[13px] text-text-muted mb-3">{inno.subtitle}</p>
              <span className="text-[12px] text-primary font-medium">{inno.tag}</span>
            </div>
            <img
              src={inno.imageUrl}
              alt={inno.title}
              className="w-[120px] h-[96px] object-cover rounded-md shrink-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
