# Portfolio — Emilio Cagnot

Site portfolio personnel, bilingue FR/EN, déployé sur GitHub Pages.

## Structure

```
portfolio-emilio/
├── index.html        # Homepage
├── projects.html     # Page projets (7 projets)
├── about.html        # Page à propos
├── contact.html      # Page contact
├── style.css         # Styles globaux
├── script.js         # Logique FR/EN + dark mode
└── assets/
    ├── emilio.png              # Photo de profil
    └── CV_Emilio_Cagnot.pdf    # ← À AJOUTER
```

## Déploiement sur GitHub Pages

### 1. Crée un dépôt GitHub
- Va sur [github.com](https://github.com) → **New repository**
- Nom suggéré : `portfolio` ou `emilio-cagnot`
- Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
- Clique sur **Create repository**

### 2. Uploade les fichiers
Option A — via l'interface GitHub (le plus simple) :
1. Clique sur **uploading an existing file**
2. Glisse-dépose tout le contenu du dossier `portfolio-emilio/`
3. Commit : "Initial portfolio"

Option B — via Git en ligne de commande :
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git push -u origin main
```

### 3. Active GitHub Pages
1. Dans ton dépôt → **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : `main` / `/ (root)`
4. Clique **Save**

Ton site sera en ligne dans 1-2 minutes à l'adresse :
`https://TON_USERNAME.github.io/portfolio/`

### 4. Domaine personnalisé (optionnel)
Si tu veux `emiliocagnot.com` ou similaire :
1. Achète un domaine (OVH, Namecheap, Cloudflare...)
2. Dans GitHub Pages → **Custom domain** → entre ton domaine
3. Chez ton registrar, ajoute ces enregistrements DNS :
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www TON_USERNAME.github.io
   ```

## Personnalisations restantes

- [ ] Ajoute ton CV en PDF dans `assets/CV_Emilio_Cagnot.pdf`
- [ ] Ajoute tes screenshots de projets dans `assets/` et intègre-les dans `projects.html`
- [ ] Ajoute ton profil LinkedIn dans le footer si souhaité
- [ ] Traductions EN à compléter dans `script.js` pour les pages projets/about/contact

## Dark mode & langue
- Le toggle ☽/☀ passe en dark mode (persisté via localStorage)
- Le toggle FR/EN bascule les textes (persisté via localStorage)
