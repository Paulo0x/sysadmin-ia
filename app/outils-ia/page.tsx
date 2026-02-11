import { getSinglePageContent } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { serialize } from 'next-mdx-remote/serialize'
import MDXContent from '@/components/MDXContent'

export const metadata = {
  title: 'Outils IA utilisés | SysAdmin + IA',
  description: 'Comparaison des outils IA pour l\'administration système : ChatGPT, Claude, Copilot et autres.',
}

export default async function OutilsIAPage() {
  const page = getSinglePageContent('outils-ia')

  if (!page) {
    notFound()
  }

  const mdxSource = await serialize(page.content)

  return (
    <div className="container-custom py-12">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-magenta mb-8 transition-colors">
        <ArrowLeft size={20} />
        Retour à l'accueil
      </Link>

      {/* Content */}
      <article className="card prose-custom">
        <MDXContent source={mdxSource} />
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
