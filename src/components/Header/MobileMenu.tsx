import { X, Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { socialLinks } from '@/data/socialLinks'

const navItems = [
  { label: 'Skill scores', href: '/' },
  { label: 'Innovations', href: '/' },
  { label: 'Certifications', href: '/' },
]

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const navigate = useNavigate()

  function handleNav(href: string) {
    navigate(href)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-navy flex flex-col px-8 py-6">
      {/* Close button */}
      <div className="flex justify-end mb-8">
        <button onClick={onClose} className="text-white" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-10 flex-1">
        {navItems.map(({ label, href }) => (
          <button
            key={label}
            onClick={() => handleNav(href)}
            className="text-2xl font-bold text-white text-center hover:text-navy-muted transition-colors"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Description */}
      <div className="flex flex-col gap-3 mb-8">
        <p className="text-sm text-navy-subtle leading-relaxed font-semibold">
          This Skill Passport is a personalised snapshot of one participant's journey through a
          real-world innovation challenge. It highlights how they performed, what they excelled at,
          and where they can grow—based on feedback, reflection, and facilitator insight.
        </p>
        <p className="text-sm text-navy-subtle leading-relaxed">
          It's more than a certificate—it's a window into how someone thinks, learns, and solves
          problems.
        </p>
        <a
          href="https://www.lumi.network"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-white font-medium"
        >
          <Link size={13} />
          Learn more at www.lumi.network
        </a>
      </div>

      {/* Social icons — exclude globe (already in link above) */}
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.slice(1).map(({ icon: Icon, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-navy-muted transition-colors"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-navy-muted">© 2025 Lumi.Network</p>
    </div>
  )
}
