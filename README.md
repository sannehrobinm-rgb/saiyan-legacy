# ⚡ Saiyan Legacy

> Explore l'univers Dragon Ball à travers une interface immersive — personnages, relations, transformations, et moteur de requêtes IA.

![Status](https://img.shields.io/badge/status-en%20développement-orange)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20Prisma-blue)

---

## 🎯 Concept

Saiyan Legacy est une application fullstack qui permet d'explorer les données relationnelles de l'univers Dragon Ball : personnages, liens familiaux, transformations, niveaux de puissance. Un moteur IA permet des requêtes en langage naturel ("Quels Saiyans sont liés à Goku ?").

---

## ✨ Fonctionnalités

- 🧬 Visualisation des personnages et de leurs relations
- ⚡ Suivi des transformations par personnage
- 🤖 Requêtes IA en langage naturel
- 🗺️ Graphe de relations interactif
- 📱 Interface responsive et animée

---

## 🛠️ Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 14 (App Router) |
| Langage | TypeScript |
| UI | React + Tailwind CSS |
| Animations | Framer Motion |
| ORM | Prisma |
| Base de données | PostgreSQL (Neon) |
| Déploiement | Vercel |

---

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/TON_USERNAME/saiyan-legacy.git
cd saiyan-legacy

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# → renseigner DATABASE_URL

# Pousser le schéma Prisma
npx prisma db push

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
src/
├── app/              # Routes Next.js (App Router)
│   ├── api/          # API Routes
│   │   ├── characters/
│   │   ├── relations/
│   │   └── transformations/
│   └── page.tsx
├── components/
│   ├── ui/           # Composants réutilisables
│   └── layout/       # Layout global
├── lib/
│   └── db.ts         # Client Prisma singleton
├── types/            # Types TypeScript
└── hooks/            # Hooks custom
prisma/
└── schema.prisma     # Modèles de données
```

---

## 🗄️ Modèles de données

```prisma
model Character {
  id              String   @id @default(cuid())
  name            String
  race            String
  powerLevel      Int?
  transformations Transformation[]
  relations       Relation[] @relation("CharacterA")
}

model Transformation {
  id          String    @id @default(cuid())
  name        String
  powerMultiplier Float?
  character   Character @relation(fields: [characterId], references: [id])
  characterId String
}

model Relation {
  id         String    @id @default(cuid())
  type       String    # rival, allié, famille
  characterA Character @relation("CharacterA", fields: [characterAId], references: [id])
  characterAId String
  characterBId String
}
```

---

## 📡 API Routes

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/characters` | Liste tous les personnages |
| GET | `/api/characters/:id` | Détail d'un personnage |
| GET | `/api/relations` | Relations entre personnages |
| POST | `/api/ai/query` | Requête IA en langage naturel |

---

## 🌐 Déploiement

Déployé sur **Vercel** — CI/CD automatique à chaque push sur `main`.

---

## 👤 Auteur

Développé par **[TON NOM]** — projet de formation développeur web fullstack.
