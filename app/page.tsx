import Link from 'next/link'
import { BookOpen, Code, Server, Network, Cloud, Briefcase, Wrench, Info } from 'lucide-react'

const sections = [
  {
    title: 'Start Here',
    description: 'Introduction et conseils pour démarrer avec l\'IA en administration système',
    icon: BookOpen,
    href: '/start-here',
    color: 'bg-blue-500',
  },
  {
    title: 'Helpdesk avec IA',
    description: 'Scripts PowerShell, automatisation tickets, documentation et FAQ',
    icon: Wrench,
    href: '/helpdesk',
    color: 'bg-green-500',
  },
  {
    title: 'Windows + IA',
    description: 'Active Directory, GPO, Event Viewer, sécurité Windows Server',
    icon: Server,
    href: '/windows',
    color: 'bg-indigo-500',
  },
  {
    title: 'Linux + IA',
    description: 'SSH, logs, Docker, Bash automation, Nginx optimization',
    icon: Code,
    href: '/linux',
    color: 'bg-orange-500',
  },
  {
    title: 'Réseau + IA',
    description: 'VLAN, configurations Cisco, pfSense firewall',
    icon: Network,
    href: '/reseau',
    color: 'bg-purple-500',
  },
  {
    title: 'Cloud & DevOps + IA',
    description: 'Terraform, Dockerfile, CI/CD, sécurité cloud',
    icon: Cloud,
    href: '/cloud-devops',
    color: 'bg-cyan-500',
  },
  {
    title: 'Cas Réels',
    description: 'Projets complets en entreprise avec résultats mesurés',
    icon: Briefcase,
    href: '/cas-reels',
    color: 'bg-pink-500',
  },
  {
    title: 'Outils IA',
    description: 'Comparaison ChatGPT, Claude, Copilot et autres outils',
    icon: Info,
    href: '/outils-ia',
    color: 'bg-yellow-500',
  },
]

export default function Home() {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <h1 className="text-7xl font-black tracking-tight mb-4">
            <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] font-mono">
              ADMINISTRATION
            </span>
            <span className="block text-6xl mt-2">
              <span className="text-neon-cyan drop-shadow-[0_0_30px_rgba(0,240,255,1)]">SYSTÈME</span>
              {' '}
              <span className="text-neon-magenta drop-shadow-[0_0_30px_rgba(255,0,255,1)]">+</span>
              {' '}
              <span className="text-neon-purple drop-shadow-[0_0_30px_rgba(176,0,255,1)]">IA</span>
            </span>
          </h1>
          <div className="absolute -inset-4 bg-gradient-cyberpunk opacity-20 blur-3xl -z-10"></div>
        </div>
        <p className="text-xl text-dark-text/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          Guide professionnel pour exploiter l'intelligence artificielle dans l'administration système et le DevOps.
          <br />
          <span className="text-neon-cyan font-semibold">Exemples réels</span>, <span className="text-neon-cyan font-semibold">scripts complets</span>, <span className="text-neon-cyan font-semibold">gains mesurés</span>.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/start-here" className="btn-primary">
            Commencer
          </Link>
          <Link href="/a-propos" className="btn-secondary">
            À propos
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-dark-card border border-neon-cyan/30 rounded-lg shadow-neon-cyan p-6 text-center hover:border-neon-cyan transition-all">
          <div className="text-5xl font-black text-neon-cyan mb-2 drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">30+</div>
          <div className="text-dark-text font-medium">Guides techniques complets</div>
        </div>
        <div className="bg-dark-card border border-neon-magenta/30 rounded-lg shadow-neon-magenta p-6 text-center hover:border-neon-magenta transition-all">
          <div className="text-5xl font-black text-neon-magenta mb-2 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">70-85%</div>
          <div className="text-dark-text font-medium">Gain de productivité moyen</div>
        </div>
        <div className="bg-dark-card border border-neon-purple/30 rounded-lg shadow-lg p-6 text-center hover:border-neon-purple transition-all">
          <div className="text-5xl font-black text-neon-purple mb-2 drop-shadow-[0_0_15px_rgba(176,0,255,0.8)]">100%</div>
          <div className="text-dark-text font-medium">Exemples testés et réels</div>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explorer les sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                href={section.href}
                className="card group hover:border-primary-500 border-2 border-transparent"
              >
                <div className="flex items-start gap-4">
                  <div className={`${section.color} p-3 rounded-lg text-white`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ce que vous trouverez ici
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="text-primary-600 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Scripts complets et testés</h4>
              <p className="text-gray-600 text-sm">PowerShell, Bash, Python, HCL, YAML - Prêts à l'emploi avec gestion d'erreurs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary-600 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Prompts IA réutilisables</h4>
              <p className="text-gray-600 text-sm">Copy-paste ready pour ChatGPT, Claude et autres outils</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary-600 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Gains mesurés</h4>
              <p className="text-gray-600 text-sm">Temps gagné, ROI, métriques réelles en environnement professionnel</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary-600 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Approche pragmatique</h4>
              <p className="text-gray-600 text-sm">Pas de marketing, pas de promesses irréalistes - Que du concret</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary-600 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Sécurité prioritaire</h4>
              <p className="text-gray-600 text-sm">Validation, logging, gestion d'erreurs dans tous les exemples</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-primary-600 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Cas réels d'entreprise</h4>
              <p className="text-gray-600 text-sm">Migrations, incidents, déploiements avec timeline et résultats</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à accélérer votre travail quotidien ?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Commencez par la section "Start Here" pour découvrir comment utiliser l'IA efficacement.
        </p>
        <Link href="/start-here" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">
          Commencer maintenant
        </Link>
      </div>
    </div>
  )
}
