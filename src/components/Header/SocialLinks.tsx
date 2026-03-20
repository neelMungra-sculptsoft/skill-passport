import { socialLinks } from '@/data/socialLinks'

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map(({ icon: Icon, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-muted hover:text-white transition-colors flex items-center"
        >
          <Icon size={18} />
        </a>
      ))}
    </>
  )
}
