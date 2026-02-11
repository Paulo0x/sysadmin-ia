import { getSinglePageContent } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata = {
  title: 'À propos | SysAdmin + IA',
  description: 'À propos du site SysAdmin + IA : objectifs, méthodologie et philosophie.',
}

export default async function AProposPage() {
  const page = getSinglePageContent('a-propos')

  if (!page) {
    notFound()
  }

  const components = {
    h1: (props: any) => <h1 className="text-4xl font-bold text-neon-cyan mb-6 mt-8 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold text-neon-cyan mb-4 mt-8 border-b-2 border-neon-cyan/30 pb-2 drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold text-neon-purple mb-3 mt-6 drop-shadow-[0_0_10px_rgba(176,0,255,0.5)]" {...props} />,
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
    strong: (props: any) => <strong className="font-semibold text-neon-magenta" {...props} />,
  }

  return (
    <div className="container-custom py-12">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-magenta mb-8 transition-colors">
        <ArrowLeft size={20} />
        Retour à l'accueil
      </Link>

      {/* Content */}
      <article className="card prose-custom">
        <MDXRemote source={page.content} components={components} />
      </article>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link href="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
