# ⚛️ Physica — Cours de Physique Complet

Site web éducatif **React + Vite + Tailwind + Framer Motion** pour un cours de Physique complet de la Terminale au Master.

---

## 🚀 Installation en 3 commandes

```bash
# 1. Cloner / copier le projet, puis :
cd physica
npm install
npm run dev
```

Ouvrir http://localhost:5173

---

## 📁 Structure du projet

```
physica/
├── index.html                    # Point d'entrée HTML + Google Fonts + KaTeX CSS
├── package.json
├── vite.config.js
├── tailwind.config.js            # Thème custom : couleurs, fonts, animations
├── postcss.config.js
└── src/
    ├── main.jsx                  # Bootstrap React
    ├── App.jsx                   # Router + AppContext global
    ├── index.css                 # Styles globaux, utilities, KaTeX overrides
    │
    ├── components/
    │   ├── Layout.jsx            # Shell principal (header + sidebar + main)
    │   ├── Header.jsx            # Barre de navigation fixe avec recherche
    │   ├── Sidebar.jsx           # Navigation latérale avec niveaux et chapitres
    │   ├── SearchModal.jsx       # Modal de recherche (Cmd+K) avec navigation clavier
    │   ├── FormulaBlock.jsx      # Rendu KaTeX animé + bouton copie LaTeX
    │   └── ExerciseCard.jsx      # Exercice avec indice / solution cachée animée
    │
    ├── pages/
    │   ├── Home.jsx              # Dashboard d'accueil
    │   ├── LevelPage.jsx         # Liste des chapitres d'un niveau
    │   └── Lesson.jsx            # Page de leçon complète
    │
    ├── data/
    │   └── curriculum.js         # Structure complète du programme + contenu leçon exemple
    │
    └── hooks/
        └── useKeyboardSearch.js  # Raccourci Cmd/Ctrl+K
```

---

## ✨ Fonctionnalités

| Fonctionnalité | Détail |
|---|---|
| 🎨 Design glassmorphism | Fond sombre cosmos, cartes glass, glow cyan/indigo |
| 🔤 Typographie | Cormorant Garamond (display) + Outfit (body) + JetBrains Mono |
| 🧮 Formules KaTeX | Rendu display/inline, macros Dirac, copie LaTeX, animation entrée |
| ⚡ Framer Motion | Page transitions, stagger children, progress bar défilement |
| 🔍 Recherche | Modal Cmd+K, navigation clavier ↑↓, filtrage temps réel |
| 📚 Navigation | Sidebar collapsible avec niveaux / chapitres / leçons |
| 🎯 Exercices | Indice masqué, solution animée, marquage "résolu" |
| 📊 Table des matières | Sticky TOC desktop, sections collapsibles |
| 📈 Progression | Barre de lecture scroll, compteur leçons complétées |

---

## 📖 Ajouter une leçon

Dans `src/data/curriculum.js`, ajoutez une entrée dans `LESSON_CONTENT` :

```js
'mon-lesson-id': {
  title: "Titre de la leçon",
  level: 'l2',           // terminale | l1 | l2 | l3 | master
  difficulty: 3,         // 1 à 5
  duration: '60 min',
  tags: ['Tag1', 'Tag2'],
  intro: "Introduction de la leçon...",
  sections: [
    {
      id: 's1',
      title: '1. Premier thème',
      content: `Texte avec **gras** et *italique* supportés.`,
      formulas: [
        {
          id: 'f1',
          label: 'Nom de la formule',
          latex: 'E = mc^2',
          comment: 'Relation masse-énergie d\'Einstein',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'ex1',
      title: 'Titre de l\'exercice',
      difficulty: 2,
      statement: 'Énoncé de l\'exercice.',
      hint: 'Indice optionnel.',
      solution: 'Solution détaillée.',
    },
  ],
}
```

---

## 🛠️ Technologies

- **React 18** + **React Router 6**
- **Vite 5** (bundler ultra-rapide)
- **Tailwind CSS 3** (thème custom)
- **Framer Motion 11** (animations)
- **KaTeX 0.16** (rendu LaTeX)
- **Lucide React** (icônes)

---

## 🎨 Palette de couleurs

| Variable | Hex | Usage |
|---|---|---|
| `cosmos` | `#0a0f1e` | Fond principal |
| `cyan` | `#06b6d4` | Accent principal |
| `indigo` | `#6366f1` | Accent secondaire |
| `nova` | `#f0abfc` | Accent tertiaire |
| `pulsar` | `#34d399` | Succès / facile |

---

*Généré avec ❤️ pour l'éducation scientifique.*
