import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Administration Système + IA | Guide Professionnel',
  description: 'Guide pratique pour exploiter l\'IA dans l\'administration système et le DevOps. Scripts, exemples réels et gains de productivité mesurés.',
  keywords: 'administration système, IA, ChatGPT, Claude, DevOps, PowerShell, Bash, Docker, Terraform, Active Directory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
