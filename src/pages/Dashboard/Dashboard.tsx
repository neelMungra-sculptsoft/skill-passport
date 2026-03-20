import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { mockData } from '../../data/mockData'
import CertificateModal from '../../components/Modals/CertificateModal'
import CourseSelector from './CourseSelector'
import CategorySection from './CategorySection'
import CertificationsSection from './CertificationsSection'
import InnovationsSection from './InnovationsSection'
import type { Certificate } from '../../types'

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCourseId, setSelectedCourseId] = useState(
    searchParams.get('course') ?? mockData.courses[0].id
  )
  const [openCert, setOpenCert] = useState<Certificate | null>(null)

  const course = mockData.courses.find((c) => c.id === selectedCourseId)!

  function handleSelectCourse(courseId: string) {
    setSelectedCourseId(courseId)
    setSearchParams({ course: courseId })
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-10 pb-16">
      <CourseSelector selectedCourseId={selectedCourseId} onSelect={handleSelectCourse} />
      <CategorySection categories={course.categories} selectedCourseId={selectedCourseId} />
      <CertificationsSection certificates={course.certificates} onCertClick={setOpenCert} />
      <InnovationsSection innovations={course.innovations} selectedCourseId={selectedCourseId} />
      {openCert && <CertificateModal certificate={openCert} onClose={() => setOpenCert(null)} />}
    </div>
  )
}
