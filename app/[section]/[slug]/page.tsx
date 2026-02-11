import { getGuide, getGuidesBySection } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'

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

  const sectionTitle = sectionTitles[params.section] || params.section

  const components = {
    h1: (props: any) => <h1 className="text-4xl font-bold text-neon-cyan mb-6 mt-8 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold text-neon-cyan mb-4 mt-8 border-b-2 border-neon-cyan/30 pb-2 drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold text-neon-purple mb-3 mt-6 drop-shadow-[0_0_10px_rgba(176,0,255,0.5)]" {...props} />,
    h4: (props: any) => <h4 className="text-xl font-semibold text-neon-purple mb-2 mt-4" {...props} />,
    p: (props: any) => <p className="text-dark-text leading-relaxed mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-dark-text" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-dark-text" {...props} />,
    li: (props: any) => <li className="ml-4" {...props} />,
    code: (props: any) => {
      if (props.className?.includes('language-')) {
        return <code className="block bg-dark-bg text-dark-text p-4 rounded-lg overflow-x-auto text-sm font-mono border border-neon-cyan/20" {...props} />
      }
      return <code className="bg-dark-card text-neon-cyan px-1.5 py-0.5 rounded text-sm font-mono border border-neon-cyan/30" {...props} />
    },
    pre: (props: any) => <pre className="bg-dark-bg text-dark-text p-4 rounded-lg overflow-x-auto mb-4 border border-neon-cyan/20" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-neon-magenta pl-4 italic text-dark-text/80 my-4" {...props} />,
    a: (props: any) => <a className="text-neon-cyan hover:text-neon-magenta underline transition-colors" {...props} />,
    table: (props: any) => <div className="overflow-x-auto mb-4"><table className="min-w-full divide-y divide-dark-border border border-dark-border" {...props} /></div>,
    th: (props: any) => <th className="px-4 py-2 bg-dark-card text-left text-xs font-medium text-neon-cyan uppercase tracking-wider border border-dark-border" {...props} />,
    td: (props: any) => <td className="px-4 py-2 text-sm text-dark-text border border-dark-border" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-neon-magenta" {...props} />,
  }

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
        <MDXRemote source={guide.content} components={components} />
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
