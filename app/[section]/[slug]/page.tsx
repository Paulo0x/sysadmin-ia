import { getGuide, getGuidesBySection } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { serialize } from 'next-mdx-remote/serialize'
import MDXContent from '@/components/MDXContent'

const sectionTitles: Record<string, string> = {
  'start-here': 'Start Here',
  'helpdesk': 'Helpdesk',
  'windows': 'Windows',
  'linux': 'Linux',
  'reseau': 'Réseau',
  'cloud-devops': 'Cloud & DevOps',
  'cas-reels': 'Cas Réels',
}

export async function generateStaticParams() {
  const sections = [
    'start-here',
    'helpdesk',
    'windows',
    'linux',
    'reseau',
    'cloud-devops',
    'cas-reels',
  ]

  const allParams: { section: string; slug: string }[] = []

  for (const section of sections) {
    const guides = getGuidesBySection(section)
    for (const guide of guides) {
      allParams.push({
        section,
        slug: guide.slug,
      })
    }
  }

  return allParams
}

export async function generateMetadata({
  params,
}: {
  params: { section: string; slug: string }
}) {
  const guide = getGuide(params.section, params.slug)

  if (!guide) {
    return {
      title: 'Guide non trouvé',
    }
  }

  return {
    title: `${guide.title} | SysAdmin + IA`,
    description: guide.excerpt || guide.title,
  }
}

export default async function GuidePage({
  params,
}: {
  params: { section: string; slug: string }
}) {
  const guide = getGuide(params.section, params.slug)

  if (!guide) {
    notFound()
  }

  const mdxSource = await serialize(guide.content)
  const sectionTitle = sectionTitles[params.section] || params.section

  return (
    <div className="container-custom py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-dark-text/60 mb-6">
        <Link href="/" className="hover:text-neon-cyan transition-colors">
          Accueil
        </Link>
        <span>/</span>
        <Link href={`/${params.section}`} className="hover:text-neon-cyan transition-colors">
          {sectionTitle}
        </Link>
        <span>/</span>
        <span className="text-neon-purple">{guide.title}</span>
      </div>

      {/* Back button */}
      <Link
        href={`/${params.section}`}
        className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-magenta mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Retour à {sectionTitle}
      </Link>

      {/* Content */}
      <article className="card prose-custom">
        <MDXContent source={mdxSource} />
      </article>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <Link
          href={`/${params.section}`}
          className="btn-secondary"
        >
          ← Voir tous les guides {sectionTitle}
        </Link>
        <Link
          href="/"
          className="btn-primary"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
