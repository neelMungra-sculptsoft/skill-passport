import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ArcChart from '../../components/Charts/ArcChart'
import { mockData } from '../../data/mockData'

export default function CategoryDetail() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const [searchParams] = useSearchParams()
  const courseId = searchParams.get('course') ?? mockData.courses[0].id
  const navigate = useNavigate()

  const course = mockData.courses.find((c) => c.id === courseId)
  const category = course?.categories.find((cat) => cat.id === categoryId)

  if (!course || !category) {
    return (
      <div className="flex flex-col items-center gap-3 pt-16 text-gray-500">
        <p>Category not found.</p>
        <button className="text-blue-500 underline" onClick={() => navigate('/')}>
          Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-10 pb-16">
      {/* Course name */}
      <div className="flex justify-center pt-5">
        <span className="text-[15px] text-gray-500">{course.name}</span>
      </div>

      {/* Back */}
      <div className="flex justify-end mt-4 mb-5">
        <button
          className="flex items-center gap-1.5 text-sm text-gray-700 font-medium px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          onClick={() => navigate(`/?course=${courseId}`)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
          Back
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
        {/* Category arc card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 sm:px-8 py-5 sm:py-6 flex flex-row sm:flex-col items-center gap-4 sm:gap-2 w-full sm:w-auto sm:min-w-[200px] shrink-0 relative">
          <p className="text-[15px] text-gray-700 self-start">{category.name}</p>
          <ArcChart score={category.score} size={150} strokeWidth={11} />
          <span className="absolute bottom-5 right-7 text-[13px] text-gray-400">/5</span>
        </div>

        {/* Skills list */}
        <div className="flex-1 flex flex-col gap-3">
          {category.skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm px-5 py-4 flex justify-between items-center cursor-pointer hover:shadow-md hover:translate-x-0.5 transition-all"
              onClick={() => navigate(`/skill/${skill.id}?course=${courseId}`)}
            >
              <span className="text-[15px] text-gray-900">{skill.name}</span>
              <span className="text-[15px] font-semibold text-gray-900">{skill.overallScore}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
