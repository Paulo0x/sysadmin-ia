'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Guides',
    dropdown: [
      { name: 'Start Here', href: '/start-here' },
      { name: 'Helpdesk', href: '/helpdesk' },
      { name: 'Windows', href: '/windows' },
      { name: 'Linux', href: '/linux' },
      { name: 'Réseau', href: '/reseau' },
      { name: 'Cloud & DevOps', href: '/cloud-devops' },
    ],
  },
  { name: 'Cas Réels', href: '/cas-reels' },
  { name: 'Outils IA', href: '/outils-ia' },
  { name: 'À propos', href: '/a-propos' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-dark-card border-b border-neon-cyan/20 shadow-lg shadow-neon-cyan/10 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-neon-cyan hover:text-neon-magenta transition-colors">
            SysAdmin + IA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-1 text-dark-text hover:text-neon-cyan font-medium transition-colors py-2"
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setDropdownOpen(false)}
                        />
                        <div className="absolute top-full left-0 mt-1 w-56 bg-dark-card rounded-lg shadow-neon-cyan py-2 border border-neon-cyan/50 backdrop-blur-sm z-50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-4 py-3 text-dark-text hover:bg-dark-border hover:text-neon-cyan transition-all hover:pl-6 border-l-2 border-transparent hover:border-neon-cyan"
                            >
                              <span className="font-medium">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-dark-text hover:text-neon-cyan font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neon-cyan"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-cyan/20 pt-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="mb-2">
                    <div className="text-neon-cyan font-medium px-2 py-2">
                      {item.name}
                    </div>
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block text-dark-text hover:text-neon-cyan px-2 py-2 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-dark-text hover:text-neon-cyan px-2 py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
