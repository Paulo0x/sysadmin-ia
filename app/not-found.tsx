import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-custom py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={20} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
