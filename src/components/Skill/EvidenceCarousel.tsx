import { useRef } from 'react'
import type { Assignment } from '@/types'

interface EvidenceCarouselProps {
  title: string
  assignments: Assignment[]
}

export default function EvidenceCarousel({ title, assignments }: EvidenceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' })
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 mb-3">{title}</h3>
      <div
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-1"
        ref={scrollRef}
        style={{ scrollbarWidth: 'none' }}
      >
        {assignments.map((a, i) => (
          <div
            key={i}
            className="shrink-0 w-45 h-evidence-thumb rounded-lg overflow-hidden border border-gray-200 shadow-sm"
          >
            <img src={a.url} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="text-xl text-gray-400 hover:text-gray-700 w-6 h-6 flex items-center justify-center shrink-0"
        >
          ‹
        </button>
        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-2/5 h-full bg-gray-400 rounded-full" />
        </div>
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="text-xl text-gray-400 hover:text-gray-700 w-6 h-6 flex items-center justify-center shrink-0"
        >
          ›
        </button>
      </div>
    </div>
  )
}
