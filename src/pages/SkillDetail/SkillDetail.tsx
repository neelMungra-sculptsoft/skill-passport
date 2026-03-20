import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { mockData } from '@/data/mockData'
import EvidenceCarousel from '@/components/Skill/EvidenceCarousel'
import SessionFeedback from '@/components/Skill/SessionFeedback'
import SkillProgressChart from '@/components/Charts/SkillProgressChart'

export default function SkillDetail() {
  const { skillId } = useParams<{ skillId: string }>()
  const [searchParams] = useSearchParams()
  const courseId = searchParams.get('course') ?? mockData.courses[0].id
  const navigate = useNavigate()

  const course = mockData.courses.find((c) => c.id === courseId)
  let skill = null
  let categoryId = ''
  for (const cat of course?.categories ?? []) {
    const found = cat.skills.find((s) => s.id === skillId)
    if (found) {
      skill = found
      categoryId = cat.id
      break
    }
  }

  if (!course || !skill) {
    return (
      <div className="flex flex-col items-center gap-3 pt-16 text-gray-500">
        <p>Skill not found.</p>
        <button className="text-blue-500 underline" onClick={() => navigate('/')}>
          Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-content mx-auto px-4 sm:px-10 pb-16">
      {/* Course name */}
      <div className="flex justify-center pt-5">
        <span className="text-md text-gray-500">{course.name}</span>
      </div>

      {/* Back */}
      <div className="flex justify-end mt-4 mb-5">
        <button
          className="flex items-center gap-1.5 text-sm text-gray-700 font-medium px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          onClick={() => navigate(`/category/${categoryId}?course=${courseId}`)}
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

      <div className="grid grid-cols-1 lg:grid-skill-detail gap-6 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Skill name + score */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-5 py-4 flex justify-between items-center">
            <span className="text-base font-medium text-gray-900">{skill.name}</span>
            <span className="text-2xl font-semibold text-gray-900">{skill.overallScore}</span>
          </div>

          {/* Description */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-5 py-4">
            <p className="text-sm font-semibold text-gray-900 mb-2">Skill Description</p>
            <p className="text-sm text-gray-500 leading-relaxed">{skill.description}</p>
          </div>

          {/* Evidence carousels */}
          <EvidenceCarousel title="Supporting Evidence:" assignments={skill.assignments} />
          <EvidenceCarousel title="(Testing)Supporting Evidence:" assignments={skill.assignments} />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <SkillProgressChart sessions={skill.sessions} skillName={skill.name} />
          <SessionFeedback sessions={skill.sessions} />
        </div>
      </div>
    </div>
  )
}
