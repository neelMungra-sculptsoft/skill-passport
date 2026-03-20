import type { Certificate } from '@/types'

interface CertificationsSectionProps {
  certificates: Certificate[]
  onCertClick: (cert: Certificate) => void
}

export default function CertificationsSection({
  certificates,
  onCertClick,
}: CertificationsSectionProps) {
  if (certificates.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="text-lg font-medium text-text mb-4">Certifications &amp; Awards</h2>
      <div className="flex gap-4 flex-wrap justify-start">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="w-60 h-42 rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-card-md transition-shadow"
            onClick={() => onCertClick(cert)}
          >
            <div className="w-full h-full bg-linear-to-br from-white to-green-50 p-4 overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xs font-bold text-text leading-tight uppercase tracking-wide">
                  Singapore
                  <br />
                  Biodesign
                </span>
                <span className="text-base font-bold text-accent">Lumi</span>
              </div>
              <p className="text-xs font-bold text-text mb-1.5">Certificate of Distinction</p>
              <p className="text-2xs text-text-muted underline">{cert.recipient}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
