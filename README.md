# SysAdmin + IA

Guide professionnel pour exploiter l'intelligence artificielle dans l'administration système et le DevOps.

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
.
├── app/                    # Pages Next.js 14 (App Router)
│   ├── [section]/         # Pages dynamiques pour chaque section
│   │   ├── [slug]/        # Pages de guides individuels
│   │   └── page.tsx       # Liste des guides d'une section
│   ├── outils-ia/         # Page Outils IA
│   ├── a-propos/          # Page À propos
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── not-found.tsx      # Page 404
├── components/            # Composants React réutilisables
│   ├── Header.tsx         # En-tête avec navigation
│   ├── Footer.tsx         # Pied de page
│   ├── GuideCard.tsx      # Carte de guide
│   └── MDXContent.tsx     # Rendu du contenu MDX
├── content/               # Contenu MDX (30 fichiers)
│   ├── start-here/        # Introduction
│   ├── helpdesk/          # 5 guides Helpdesk
│   ├── windows/           # 5 guides Windows
│   ├── linux/             # 5 guides Linux
│   ├── reseau/            # 3 guides Réseau
│   ├── cloud-devops/      # 4 guides Cloud/DevOps
│   ├── cas-reels/         # 5 cas réels entreprise
│   ├── outils-ia.mdx      # Comparaison outils IA
│   └── a-propos.mdx       # À propos du site
├── lib/                   # Utilitaires
│   └── mdx.ts             # Fonctions de lecture MDX
├── next.config.js         # Configuration Next.js
├── tailwind.config.ts     # Configuration Tailwind CSS
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances
```

## 🛠️ Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Type safety
- **Tailwind CSS** : Styling utility-first
- **MDX** : Markdown enrichi pour le contenu
- **next-mdx-remote** : Rendu des fichiers MDX
- **gray-matter** : Parsing des frontmatters
- **lucide-react** : Icônes

## 📝 Contenu

### Sections disponibles

1. **Start Here** (1 guide)
   - Introduction à l'IA en administration système

2. **Helpdesk avec IA** (5 guides)
   - Scripts PowerShell
   - Diagnostic erreurs Windows
   - Automatisation tickets
   - Documentation interne
   - FAQ structurée

3. **Administration Windows + IA** (5 guides)
   - Audit Active Directory
   - Analyse Event Viewer
   - Gestion utilisateurs
   - Documentation GPO
   - Sécurité Windows Server

4. **Administration Linux + IA** (5 guides)
   - Sécurisation SSH
   - Analyse logs syslog
   - Dépannage Docker
   - Automatisation Bash
   - Optimisation Nginx

5. **Réseau + IA** (3 guides)
   - Diagnostic VLAN
   - Analyse config Cisco
   - Configuration pfSense

6. **Cloud & DevOps + IA** (4 guides)
   - Génération Dockerfile
   - Checklist sécurité cloud
   - Validation Terraform
   - Création pipeline CI/CD

7. **Cas Réels** (5 études de cas)
   - Migration Azure AD (180 users)
   - Incident ransomware
   - Déploiement 50 postes
   - Stratégie backup 3-2-1
   - Audit sécurité PME

8. **Pages informatives**
   - Outils IA (comparaison)
   - À propos

### Caractéristiques du contenu

- **30 fichiers MDX** complets
- **Structure stricte** en 10 sections par guide
- **Scripts complets** (PowerShell, Bash, Python, HCL, YAML)
- **Exemples réels** testés en environnement professionnel
- **Métriques concrètes** (gain de temps 70-85%)
- **Prompts IA** réutilisables

## 🎨 Personnalisation

### Couleurs

Modifier les couleurs dans `tailwind.config.ts` :

```ts
colors: {
  primary: {
    50: '#f0f9ff',
    // ...
    900: '#0c4a6e',
  },
}
```

### Navigation

Modifier le menu dans `components/Header.tsx`.

### Contenu

Ajouter/modifier des guides dans le dossier `content/`.

## 🚀 Déploiement

### Vercel (recommandé)

1. Push le code sur GitHub
2. Importer le projet sur [Vercel](https://vercel.com)
3. Déployer automatiquement

### Build local

```bash
# Build production
npm run build

# Démarrer le serveur
npm start
```

### Autres plateformes

- **Netlify** : Compatible Next.js
- **Cloudflare Pages** : Compatible avec adaptateur
- **AWS Amplify** : Compatible Next.js

## 📄 Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer production
npm start

# Linting
npm run lint
```

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` si nécessaire :

```env
# Exemple
NEXT_PUBLIC_SITE_URL=https://votre-site.com
```

### Métadonnées SEO

Modifier les métadonnées dans `app/layout.tsx` :

```ts
export const metadata: Metadata = {
  title: 'Votre titre',
  description: 'Votre description',
  // ...
}
```

## 📱 Responsive

Le site est entièrement responsive :
- Mobile-first design
- Navigation adaptative
- Grilles flexibles
- Images optimisées

## ♿ Accessibilité

- Sémantique HTML5
- Attributs ARIA
- Navigation au clavier
- Contraste colors conforme WCAG

## 🔒 Sécurité

- Pas de credentials hardcodés
- Validation des entrées
- Sanitization du contenu MDX
- Headers de sécurité Next.js

## 📊 Performance

- Static Site Generation (SSG)
- Optimisation images automatique
- Code splitting
- Lazy loading composants

## 🐛 Dépannage

### Erreur de build

```bash
# Nettoyer le cache
rm -rf .next
npm run build
```

### Erreur MDX

Vérifier que tous les fichiers MDX sont bien formatés (pas de caractères spéciaux non échappés).

### Port déjà utilisé

```bash
# Changer le port
npm run dev -- -p 3001
```

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

## 📄 Licence

Contenu fourni à titre éducatif et professionnel. Voir le fichier LICENSE pour plus de détails.

## 🤝 Contributions

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Note** : Ce projet est un guide éducatif. Toujours tester les scripts en environnement de développement avant production.
