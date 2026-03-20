import type { Certificate } from '../types'

interface CertificateModalProps {
  certificate: Certificate
  onClose: () => void
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-5"
      onClick={onClose}
    >
      <div className="max-w-[540px] w-full" onClick={(e) => e.stopPropagation()}>
        {/* Certificate document */}
        <div className="bg-white rounded-lg px-9 py-8 relative overflow-hidden min-h-[340px]">
          {/* Decorative background shapes */}
          <div className="absolute w-48 h-48 rounded-full bg-green-400 opacity-15 -bottom-14 -left-10 pointer-events-none" />
          <div className="absolute w-40 h-40 rounded-full bg-[#0d1b2a] opacity-8 -top-10 right-10 pointer-events-none" />
          <div className="absolute w-32 h-32 rounded-full bg-indigo-500 opacity-12 -top-5 -right-5 pointer-events-none" />

          {/* Header logos */}
          <div className="flex items-center gap-3.5 mb-5">
            <span className="text-[10px] font-bold text-gray-700 leading-snug tracking-wide uppercase">
              Singapore
              <br />
              Biodesign
            </span>
            <div className="w-px h-9 bg-gray-300" />
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-green-500 leading-none tracking-tight">
                Lumi
              </span>
              <span className="text-[9px] text-gray-400 tracking-widest">Igniting Futures</span>
            </div>
          </div>

          {/* Body */}
          <div className="text-center relative z-10">
            <h2 className="text-[22px] font-bold text-gray-900 mb-2.5">
              Certificate of Distinction
            </h2>
            <p className="text-[13px] text-gray-500 mb-2">This certificate is presented to</p>
            <p className="text-[18px] font-bold text-gray-900 underline mb-2.5">
              {certificate.recipient}
            </p>
            <p className="text-[13px] text-gray-700 mb-6">
              for completing all requirements for {certificate.program}
            </p>

            <div className="flex justify-center gap-12 mb-4">
              {[
                { name: 'Dr Mary Kan', role: ['Programme Director', 'Singapore Biodesign'] },
                {
                  name: 'Dr Christopher Shen',
                  role: ['Professor Of Stanford University', 'Co-Founder Lumi.Network'],
                },
              ].map((sig) => (
                <div key={sig.name} className="text-center">
                  <div className="w-24 h-px bg-gray-700 mx-auto mb-1.5" />
                  <p className="text-[12px] font-semibold text-gray-900">{sig.name}</p>
                  {sig.role.map((r) => (
                    <p key={r} className="text-[10px] text-gray-500">
                      {r}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-[10px] text-gray-400 text-right">Certification ID: JWRDKB</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-3.5">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1.5 text-white text-sm bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 20h16v-2H4v2z" />
            </svg>
            Download
          </a>
          <button
            onClick={onClose}
            className="text-white text-sm px-4 py-2 rounded-md border border-white/40 hover:bg-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
