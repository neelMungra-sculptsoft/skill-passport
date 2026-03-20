import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { mockData } from '../../data/mockData'

interface CourseSelectorProps {
  selectedCourseId: string
  onSelect: (courseId: string) => void
}

export default function CourseSelector({ selectedCourseId, onSelect }: CourseSelectorProps) {
  const [open, setOpen] = useState(false)
  const course = mockData.courses.find((c) => c.id === selectedCourseId)!

  return (
    <div className="flex justify-start pt-5">
      <div className="relative">
        <button
          className="flex items-center gap-2 text-text text-[14px] font-medium px-4 py-2 rounded-lg border border-border bg-surface shadow-card hover:shadow-card-md transition-all"
          onClick={() => setOpen((v) => !v)}
        >
          {course.name}
          <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 bg-surface border border-border rounded-lg shadow-card-md min-w-[280px] z-10 overflow-hidden">
            {mockData.courses.map((c) => (
              <button
                key={c.id}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${c.id === selectedCourseId ? 'text-primary bg-primary-dim' : 'text-text-muted'}`}
                onClick={() => {
                  onSelect(c.id)
                  setOpen(false)
                }}
              >
                {c.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
