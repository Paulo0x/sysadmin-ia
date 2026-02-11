import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface GuideCardProps {
  title: string
  excerpt: string
  href: string
}

export default function GuideCard({ title, excerpt, href }: GuideCardProps) {
  return (
    <Link href={href} className="card group">
      <h3 className="text-xl font-semibold text-neon-cyan mb-3 group-hover:text-neon-magenta transition-colors drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
        {title}
      </h3>
      <p className="text-dark-text/80 text-sm mb-4 line-clamp-3">
        {excerpt}
      </p>
      <div className="flex items-center text-neon-purple font-medium text-sm group-hover:gap-2 transition-all group-hover:text-neon-magenta">
        Lire le guide
        <ArrowRight size={16} className="ml-1" />
      </div>
    </Link>
  )
}
