# Guide de Démarrage Rapide

## Installation en 3 étapes

### 1. Installer les dépendances

```bash
npm install
```

Cette commande va installer toutes les dépendances nécessaires (Next.js, React, Tailwind, MDX, etc.)

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

### 3. C'est tout ! 🎉

Le site est maintenant opérationnel avec :
- 30 guides techniques complets
- Navigation fonctionnelle
- Design responsive
- Contenu MDX rendu correctement

## Vérification rapide

### Page d'accueil
Ouvrir : http://localhost:3000

Vous devriez voir :
- Hero section avec titre "Administration Système + IA"
- 8 cartes de sections cliquables
- Stats (30+ guides, 70-85% gain, 100% exemples réels)

### Tester une section
1. Cliquer sur "Helpdesk avec IA"
2. Vous devriez voir 5 guides
3. Cliquer sur un guide
4. Le contenu MDX complet devrait s'afficher

### Tester la navigation
- Cliquer sur "Guides" dans le header
- Le menu déroulant devrait apparaître
- Tester les liens

## Structure rapide du contenu

```
content/
├── start-here/          → 1 guide (introduction)
├── helpdesk/            → 5 guides
├── windows/             → 5 guides
├── linux/               → 5 guides
├── reseau/              → 3 guides
├── cloud-devops/        → 4 guides
├── cas-reels/           → 5 cas réels
├── outils-ia.mdx        → Page comparaison outils
└── a-propos.mdx         → Page à propos
```

## Commandes utiles

```bash
# Développement (avec hot reload)
npm run dev

# Build pour production
npm run build

# Démarrer en production (après build)
npm start

# Linter le code
npm run lint
```

## Personnalisation rapide

### Changer les couleurs

Éditer `tailwind.config.ts` → section `colors.primary`

### Modifier la navigation

Éditer `components/Header.tsx` → tableau `navigation`

### Ajouter un guide

1. Créer un fichier `.mdx` dans `content/[section]/`
2. Écrire le contenu en Markdown
3. Recharger la page → Le guide apparaît automatiquement

### Modifier le footer

Éditer `components/Footer.tsx`

## Déploiement rapide sur Vercel

1. Push le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Cliquer "Import Project"
4. Sélectionner le repository
5. Cliquer "Deploy"
6. C'est déployé ! 🚀

## Problèmes courants

### Port 3000 déjà utilisé ?

```bash
npm run dev -- -p 3001
```

### Erreur de build ?

```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run dev
```

### MDX ne s'affiche pas ?

Vérifier que le fichier MDX :
- Est dans le bon dossier (`content/[section]/`)
- A l'extension `.mdx`
- N'a pas d'erreurs de syntaxe Markdown

## Prochaines étapes

1. **Tester toutes les sections** pour vérifier que tout fonctionne
2. **Personnaliser les couleurs** selon vos préférences
3. **Modifier les liens sociaux** dans le footer
4. **Ajouter Google Analytics** (optionnel)
5. **Déployer sur Vercel**

## Support

Pour toute question :
- Consulter le `README.md` complet
- Vérifier la documentation Next.js
- Ouvrir une issue sur GitHub

---

**Temps estimé de setup complet : 5 minutes** ⚡
