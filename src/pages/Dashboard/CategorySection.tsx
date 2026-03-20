import { useNavigate } from 'react-router-dom'
import ArcChart from '../../components/Charts/ArcChart'
import type { Category } from '../../types'

interface CategorySectionProps {
  categories: Category[]
  selectedCourseId: string
}

export default function CategorySection({ categories, selectedCourseId }: CategorySectionProps) {
  const navigate = useNavigate()

  return (
    <div className="flex gap-4 sm:gap-6 justify-start mt-6 sm:mt-8 flex-wrap">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="bg-surface border border-border rounded-xl shadow-card px-10 sm:px-14 py-7 sm:py-10 flex flex-col items-center gap-3 w-full sm:min-w-[320px] sm:w-auto cursor-pointer hover:shadow-card-md hover:-translate-y-0.5 transition-all relative"
          onClick={() => navigate(`/category/${cat.id}?course=${selectedCourseId}`)}
        >
          <p className="text-[16px] text-text-muted self-start">{cat.name}</p>
          <ArcChart score={cat.score} size={180} strokeWidth={13} />
          <span className="absolute bottom-6 right-8 text-[14px] text-text-soft">/5</span>
        </div>
      ))}
    </div>
  )
}
