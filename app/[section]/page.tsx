import { getGuidesBySection } from '@/lib/mdx'
import GuideCard from '@/components/GuideCard'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const sectionTitles: Record<string, string> = {
  'start-here': 'Start Here',
  'helpdesk': 'Helpdesk avec IA',
  'windows': 'Administration Windows + IA',
  'linux': 'Administration Linux + IA',
  'reseau': 'Réseau + IA',
  'cloud-devops': 'Cloud & DevOps + IA',
  'cas-reels': 'Cas Réels Entreprise',
}

const sectionDescriptions: Record<string, string> = {
  'start-here': 'Introduction et conseils pour démarrer avec l\'IA en administration système',
  'helpdesk': 'Scripts PowerShell, automatisation tickets, documentation et FAQ',
  'windows': 'Active Directory, GPO, Event Viewer, sécurité Windows Server',
  'linux': 'SSH, logs, Docker, Bash automation, Nginx optimization',
  'reseau': 'VLAN, configurations Cisco, pfSense firewall',
  'cloud-devops': 'Terraform, Dockerfile, CI/CD, sécurité cloud',
  'cas-reels': 'Projets complets en entreprise avec résultats mesurés',
}

export function generateStaticParams() {
  return [
    { section: 'start-here' },
    { section: 'helpdesk' },
    { section: 'windows' },
    { section: 'linux' },
    { section: 'reseau' },
    { section: 'cloud-devops' },
    { section: 'cas-reels' },
  ]
}

export async function generateMetadata({ params }: { params: { section: string } }) {
  const title = sectionTitles[params.section]
  const description = sectionDescriptions[params.section]

  return {
    title: `${title} | SysAdmin + IA`,
    description,
  }
}

export default async function SectionPage({ params }: { params: { section: string } }) {
  const guides = getGuidesBySection(params.section)

  if (guides.length === 0) {
    notFound()
  }

  const sectionTitle = sectionTitles[params.section] || params.section
  const sectionDescription = sectionDescriptions[params.section] || ''

  return (
    <div className="container-custom py-12">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-magenta mb-6 transition-colors">
        <ArrowLeft size={20} />
        Retour à l'accueil
      </Link>

      {/* Section Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-neon-cyan mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
          {sectionTitle}
        </h1>
        <p className="text-xl text-dark-text">
          {sectionDescription}
        </p>
        <div className="mt-4 text-sm text-dark-text/60">
          {guides.length} guide{guides.length > 1 ? 's' : ''} disponible{guides.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <GuideCard
            key={guide.slug}
            title={guide.title}
            excerpt={guide.excerpt || ''}
            href={`/${params.section}/${guide.slug}`}
          />
        ))}
      </div>
    </div>
  )
}
