import { ChevronDown, Info, Menu } from 'lucide-react'
import { useState } from 'react'
import { LumiLogo } from '../../assets'
import ScoreInfoModal from '../Modals/ScoreInfoModal'
import HeaderDescription from './HeaderDescription'
import MobileMenu from './MobileMenu'
import SocialLinks from './SocialLinks'

interface HeaderProps {
  learner: string
}

export default function Header({ learner }: HeaderProps) {
  const [expanded, setExpanded] = useState(false)
  const [scoreInfoOpen, setScoreInfoOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-navy text-white">
        {/* Mobile header */}
        <div className="flex sm:hidden items-center justify-between px-4 py-3">
          <img src={LumiLogo} alt="Lumi" className="h-8 w-auto" />
          <h1 className="text-[15px] font-semibold text-white tracking-tight">
            {learner}'s Skill Passport
          </h1>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Desktop header */}
        <div className="hidden sm:flex items-stretch px-8 pt-5 gap-8">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img src={LumiLogo} alt="Lumi" className="h-10 w-auto" />
          </div>

          {/* Right section */}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 pb-5">
              {/* Title + description */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-[22px] font-semibold text-white tracking-tight">
                    {learner}'s Skill Passport
                  </h1>
                  <button
                    onClick={() => setScoreInfoOpen(true)}
                    className="text-navy-muted hover:text-white transition-colors shrink-0"
                    aria-label="Score info"
                  >
                    <Info size={16} />
                  </button>
                </div>
                <p className="text-[13px] text-navy-muted leading-relaxed max-w-[520px]">
                  Welcome to the skill overview. Here you can see how the participant has performed
                  in developing their AI, Durable and Domain Skills compared to participants across
                  the global Lumi Network:
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3.5 shrink-0 mt-0.5">
                <SocialLinks />
              </div>
            </div>

            {/* Divider + chevron */}
            <div className="flex flex-col gap-2 pb-1">
              <div className="flex-1 border-t-2 border-white" />
              <button
                onClick={() => setExpanded((v) => !v)}
                className="text-white transition-colors shrink-0 self-end"
                aria-label={expanded ? 'Collapse' : 'Expand'}
              >
                <ChevronDown
                  size={20}
                  className={`transition-transform ${expanded ? 'rotate-180' : ''} cursor-pointer font-bold`}
                />
              </button>
            </div>
          </div>
        </div>

        {expanded && <HeaderDescription />}
      </header>

      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
      {scoreInfoOpen && <ScoreInfoModal onClose={() => setScoreInfoOpen(false)} />}
    </>
  )
}
