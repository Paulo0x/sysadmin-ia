import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-card border-t border-neon-cyan/20 text-dark-text">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-neon-cyan font-bold text-lg mb-4 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">SysAdmin + IA</h3>
            <p className="text-sm text-dark-text/80">
              Guide professionnel pour exploiter l'IA dans l'administration système et le DevOps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neon-purple font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/start-here" className="hover:text-neon-cyan transition-colors">
                  Start Here
                </Link>
              </li>
              <li>
                <Link href="/cas-reels" className="hover:text-neon-cyan transition-colors">
                  Cas Réels
                </Link>
              </li>
              <li>
                <Link href="/outils-ia" className="hover:text-neon-cyan transition-colors">
                  Outils IA
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-neon-cyan transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-neon-purple font-semibold mb-4">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/helpdesk" className="hover:text-neon-cyan transition-colors">
                  Helpdesk
                </Link>
              </li>
              <li>
                <Link href="/windows" className="hover:text-neon-cyan transition-colors">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="/linux" className="hover:text-neon-cyan transition-colors">
                  Linux
                </Link>
              </li>
              <li>
                <Link href="/reseau" className="hover:text-neon-cyan transition-colors">
                  Réseau
                </Link>
              </li>
              <li>
                <Link href="/cloud-devops" className="hover:text-neon-cyan transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neon-purple font-semibold mb-4">Contact</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-neon-cyan transition-colors hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neon-cyan/20 pt-8 text-center text-sm text-dark-text/60">
          <p>© {currentYear} SysAdmin + IA. Tous droits réservés.</p>
          <p className="mt-2">
            Contenu fourni à titre éducatif et professionnel. Aucune garantie n'est fournie.
          </p>
        </div>
      </div>
    </footer>
  )
}
