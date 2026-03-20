import type { Certificate } from '../../types'

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
      <h2 className="text-[18px] font-medium text-text mb-4">Certifications &amp; Awards</h2>
      <div className="flex gap-4 flex-wrap justify-start">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="w-[240px] h-[168px] rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-card-md transition-shadow"
            onClick={() => onCertClick(cert)}
          >
            <div className="w-full h-full bg-linear-to-br from-white to-green-50 p-4 overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold text-text leading-tight uppercase tracking-wide">
                  Singapore
                  <br />
                  Biodesign
                </span>
                <span className="text-[16px] font-bold text-accent">Lumi</span>
              </div>
              <p className="text-[11px] font-bold text-text mb-1.5">Certificate of Distinction</p>
              <p className="text-[10px] text-text-muted underline">{cert.recipient}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
