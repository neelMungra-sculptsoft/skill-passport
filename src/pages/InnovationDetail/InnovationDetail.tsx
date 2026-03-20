import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { CornerUpLeft } from 'lucide-react'
import { mockData } from '../../data/mockData'

export default function InnovationDetail() {
  const { innovationId } = useParams<{ innovationId: string }>()
  const [searchParams] = useSearchParams()
  const courseId = searchParams.get('course') ?? mockData.courses[0].id
  const navigate = useNavigate()

  let innovation = null
  for (const course of mockData.courses) {
    const found = course.innovations.find((i) => i.id === innovationId)
    if (found) {
      innovation = found
      break
    }
  }

  if (!innovation) {
    return (
      <div className="flex flex-col items-center gap-3 pt-16 text-text-muted">
        <p>Innovation not found.</p>
        <button className="text-primary underline" onClick={() => navigate('/')}>
          Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="pb-16">
      {/* Hero image with overlay */}
      <div className="relative w-full h-[260px] sm:h-[340px] overflow-hidden">
        <img
          src={innovation.imageUrl}
          alt={innovation.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Title overlay — bottom left */}
        <div className="absolute bottom-6 left-6 sm:left-10">
          <h1 className="text-[22px] sm:text-[28px] font-bold text-white leading-tight">
            {innovation.title}
          </h1>
          <p className="text-[13px] sm:text-[15px] text-white/80 mt-1">{innovation.subtitle}</p>
        </div>

        {/* Back button — top right */}
        <button
          onClick={() => navigate(`/?course=${courseId}`)}
          className="absolute top-5 right-5 sm:right-8 flex items-center gap-1.5 text-white text-[13px] font-medium hover:opacity-80 transition-opacity"
        >
          <CornerUpLeft size={15} />
          Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-10 mt-8">
        {/* Problem + Solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-surface border border-border rounded-xl shadow-card p-6">
            <p className="text-[15px] font-semibold text-text mb-3">The Problem</p>
            <p className="text-[13px] text-text-muted leading-relaxed">{innovation.problem}</p>
          </div>
          <div className="bg-surface border border-border rounded-xl shadow-card p-6">
            <p className="text-[15px] font-semibold text-text mb-3">The Solution</p>
            <p className="text-[13px] text-text-muted leading-relaxed">{innovation.solution}</p>
          </div>
        </div>

        {/* Video embed */}
        {innovation.videoUrl && (
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-card-md">
            <iframe
              src={innovation.videoUrl}
              title={innovation.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  )
}
