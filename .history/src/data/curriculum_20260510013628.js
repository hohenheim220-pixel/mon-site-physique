// ─── Curriculum Data ──────────────────────────────────────────────────────────
// Complete physics curriculum from Terminale to L3/Master

export const LEVELS = [
  { id: 'terminale', label: 'Terminale', color: '#06b6d4', icon: '⚛️', description: 'Spécialité Physique-Chimie' },
  { id: 'l1',        label: 'Licence 1', color: '#6366f1', icon: '🌊', description: 'Physique générale — bases' },
  { id: 'l2',        label: 'Licence 2', color: '#f0abfc', icon: '⚡', description: 'Électromagnétisme & Optique' },
  { id: 'l3',        label: 'Licence 3', color: '#34d399', icon: '🔭', description: 'Mécanique quantique & Thermodynamique' },
  { id: 'master',    label: 'Master',    color: '#fb923c', icon: '🌌', description: 'Physique avancée & Spécialisations' },
]

export const CURRICULUM = [
  // ════════════════════════════════════════════════════
  {
    level: 'terminale',
    chapters: [
      {
        id: 'term-meca',
        title: 'Mécanique newtonienne',
        icon: '🎯',
        lessons: [
          { id: 'term-meca-1', title: 'Les lois de Newton', duration: '45 min', difficulty: 1 },
          { id: 'term-meca-2', title: 'Travail et énergie cinétique', duration: '40 min', difficulty: 1 },
          { id: 'term-meca-3', title: 'Mouvement des satellites', duration: '50 min', difficulty: 2 },
          { id: 'term-meca-4', title: 'Oscillateur harmonique', duration: '55 min', difficulty: 2 },
        ],
      },
      {
        id: 'term-elec',
        title: 'Électricité & Circuits',
        icon: '🔌',
        lessons: [
          { id: 'term-elec-1', title: 'Circuits RC et RL', duration: '50 min', difficulty: 2 },
          { id: 'term-elec-2', title: 'Résonance RLC', duration: '55 min', difficulty: 2 },
          { id: 'term-elec-3', title: 'Signaux périodiques', duration: '40 min', difficulty: 1 },
        ],
      },
      {
        id: 'term-onde',
        title: 'Ondes & Signaux',
        icon: '〰️',
        lessons: [
          { id: 'term-onde-1', title: 'Ondes mécaniques progressives', duration: '45 min', difficulty: 1 },
          { id: 'term-onde-2', title: 'Diffraction et interférences', duration: '60 min', difficulty: 3 },
          { id: 'term-onde-3', title: 'Effet Doppler', duration: '35 min', difficulty: 2 },
        ],
      },
      {
        id: 'term-thermo',
        title: 'Thermodynamique',
        icon: '🌡️',
        lessons: [
          { id: 'term-thermo-1', title: 'Premier principe de la thermodynamique', duration: '50 min', difficulty: 2 },
          { id: 'term-thermo-2', title: 'Transferts thermiques', duration: '45 min', difficulty: 2 },
        ],
      },
    ],
  },
  // ════════════════════════════════════════════════════
  {
    level: 'l1',
    chapters: [
      {
        id: 'l1-meca',
        title: 'Mécanique du point',
        icon: '📐',
        lessons: [
          { id: 'l1-meca-1', title: 'Cinématique vectorielle', duration: '60 min', difficulty: 2 },
          { id: 'l1-meca-2', title: 'Dynamique newtonienne — formalisme vectoriel', duration: '70 min', difficulty: 2 },
          { id: 'l1-meca-3', title: 'Énergie et travail — théorèmes', duration: '65 min', difficulty: 2 },
          { id: 'l1-meca-4', title: 'Forces centrales & gravitation', duration: '75 min', difficulty: 3 },
          { id: 'l1-meca-5', title: 'Systèmes de référence non inertiels', duration: '80 min', difficulty: 3 },
        ],
      },
      {
        id: 'l1-elec',
        title: 'Électrocinétique',
        icon: '⚡',
        lessons: [
          { id: 'l1-elec-1', title: 'Lois des mailles et des nœuds', duration: '50 min', difficulty: 1 },
          { id: 'l1-elec-2', title: 'Régimes transitoires RC, RL, RLC', duration: '65 min', difficulty: 2 },
          { id: 'l1-elec-3', title: 'Régime sinusoïdal forcé — impédances', duration: '70 min', difficulty: 3 },
        ],
      },
      {
        id: 'l1-onde',
        title: 'Ondes et vibrations',
        icon: '🔊',
        lessons: [
          { id: 'l1-onde-1', title: 'Équation des ondes 1D', duration: '60 min', difficulty: 2 },
          { id: 'l1-onde-2', title: 'Ondes stationnaires', duration: '55 min', difficulty: 2 },
          { id: 'l1-onde-3', title: 'Acoustique — ondes sonores', duration: '50 min', difficulty: 2 },
        ],
      },
    ],
  },
  // ════════════════════════════════════════════════════
  {
    level: 'l2',
    chapters: [
      {
        id: 'l2-em',
        title: 'Électromagnétisme',
        icon: '🧲',
        lessons: [
          { id: 'l2-em-1', title: 'Électrostatique — loi de Coulomb & Gauss', duration: '75 min', difficulty: 3 },
          { id: 'l2-em-2', title: 'Potentiel électrostatique', duration: '65 min', difficulty: 3 },
          { id: 'l2-em-3', title: 'Magnétostatique — loi de Biot-Savart', duration: '80 min', difficulty: 3 },
          { id: 'l2-em-4', title: 'Induction électromagnétique — loi de Faraday', duration: '75 min', difficulty: 3 },
          { id: 'l2-em-5', title: "Équations de Maxwell dans le vide", duration: '90 min', difficulty: 4 },
          { id: 'l2-em-6', title: 'Ondes électromagnétiques planes', duration: '85 min', difficulty: 4 },
        ],
      },
      {
        id: 'l2-optique',
        title: 'Optique ondulatoire',
        icon: '🔬',
        lessons: [
          { id: 'l2-optique-1', title: 'Diffraction de Fraunhofer', duration: '80 min', difficulty: 4 },
          { id: 'l2-optique-2', title: 'Interférences — fentes de Young', duration: '75 min', difficulty: 3 },
          { id: 'l2-optique-3', title: 'Polarisation de la lumière', duration: '70 min', difficulty: 3 },
        ],
      },
      {
        id: 'l2-meca-sol',
        title: 'Mécanique du solide',
        icon: '⚙️',
        lessons: [
          { id: 'l2-sol-1', title: 'Cinématique du solide indéformable', duration: '70 min', difficulty: 3 },
          { id: 'l2-sol-2', title: 'Moment cinétique et tenseur d\'inertie', duration: '85 min', difficulty: 4 },
          { id: 'l2-sol-3', title: 'Gyroscopes et toupies', duration: '90 min', difficulty: 4 },
        ],
      },
    ],
  },
  // ════════════════════════════════════════════════════
  {
    level: 'l3',
    chapters: [
      {
        id: 'l3-qm',
        title: 'Mécanique quantique',
        icon: '🌀',
        lessons: [
          { id: 'l3-qm-1', title: 'Postulats de la mécanique quantique', duration: '90 min', difficulty: 4 },
          { id: 'l3-qm-2', title: "Équation de Schrödinger — puits infini", duration: '85 min', difficulty: 4 },
          { id: 'l3-qm-3', title: 'Oscillateur harmonique quantique', duration: '90 min', difficulty: 5 },
          { id: 'l3-qm-4', title: 'Atome d\'hydrogène — moment cinétique', duration: '100 min', difficulty: 5 },
          { id: 'l3-qm-5', title: 'Spin et matrices de Pauli', duration: '85 min', difficulty: 5 },
        ],
      },
      {
        id: 'l3-thermo',
        title: 'Thermodynamique statistique',
        icon: '🌡️',
        lessons: [
          { id: 'l3-thermo-1', title: 'Distribution de Boltzmann', duration: '80 min', difficulty: 4 },
          { id: 'l3-thermo-2', title: 'Ensembles statistiques — canonique', duration: '85 min', difficulty: 4 },
          { id: 'l3-thermo-3', title: 'Gaz de Fermi-Dirac et de Bose-Einstein', duration: '95 min', difficulty: 5 },
        ],
      },
      {
        id: 'l3-lagrange',
        title: 'Mécanique analytique',
        icon: '📊',
        lessons: [
          { id: 'l3-lag-1', title: 'Formalisme lagrangien', duration: '90 min', difficulty: 4 },
          { id: 'l3-lag-2', title: 'Formalisme hamiltonien', duration: '90 min', difficulty: 5 },
          { id: 'l3-lag-3', title: 'Théorème de Noether — symétries', duration: '85 min', difficulty: 5 },
        ],
      },
    ],
  },
  // ════════════════════════════════════════════════════
  {
    level: 'master',
    chapters: [
      {
        id: 'master-rel',
        title: 'Relativité restreinte',
        icon: '🌌',
        lessons: [
          { id: 'master-rel-1', title: 'Transformations de Lorentz', duration: '100 min', difficulty: 5 },
          { id: 'master-rel-2', title: 'Quadri-vecteurs et tenseurs', duration: '110 min', difficulty: 5 },
          { id: 'master-rel-3', title: 'Électrodynamique relativiste', duration: '120 min', difficulty: 5 },
        ],
      },
      {
        id: 'master-qft',
        title: 'Introduction à la QFT',
        icon: '🔮',
        lessons: [
          { id: 'master-qft-1', title: 'Champ scalaire — quantification canonique', duration: '120 min', difficulty: 5 },
          { id: 'master-qft-2', title: "Champ de Dirac — spineurs", duration: '130 min', difficulty: 5 },
        ],
      },
      {
        id: 'master-physstat',
        title: 'Physique statistique avancée',
        icon: '📈',
        lessons: [
          { id: 'master-stat-1', title: 'Transitions de phase — modèle d\'Ising', duration: '100 min', difficulty: 5 },
          { id: 'master-stat-2', title: 'Groupe de renormalisation', duration: '120 min', difficulty: 5 },
        ],
      },
    ],
  },
]

// ── Featured lesson content (example) ───────────────────
export const LESSON_CONTENT = { 'term-meca-1': {
  title: "Les Lois de Newton",
  level: 'terminale',
  difficulty: 3,
  duration: '60 min',
  tags: ['Mécanique', 'Newton', 'Cinématique', 'Dynamique'],
  intro: "La mécanique a pour but de relier les forces appliquées à un système à son mouvement futur. Ce chapitre constitue le fondement de la dynamique classique.",

  sections: [
    {
      id: 's1',
      title: '1. Référentiels et point matériel',
      content: `Pour décrire un mouvement, on définit un **référentiel** : association d'un solide de référence et d'une horloge.

Un **référentiel galiléen** est un référentiel dans lequel le principe d'inertie est vérifié. Les lois de Newton ne s'appliquent rigoureusement que dans ce cadre.

On modélise l'objet par un **point matériel** de masse *m* concentrée en son centre de masse.`,
      formulas: [],
    },
    {
      id: 's2',
      title: '2. Cinématique — Description mathématique',
      content: `Dans un repère cartésien (O, **i**, **j**, **k**), on définit les grandeurs du mouvement :`,
      formulas: [
        {
          id: 'f1',
          label: 'Vecteur Position',
          latex: '\\vec{OM}(t) = x(t)\\,\\vec{i} + y(t)\\,\\vec{j} + z(t)\\,\\vec{k}',
          comment: 'Coordonnées cartésiennes du point matériel',
        },
        {
          id: 'f2',
          label: 'Vecteur Vitesse',
          latex: '\\vec{v}(t) = \\frac{d\\vec{OM}}{dt}',
          comment: 'Dérivée temporelle de la position',
        },
        {
          id: 'f3',
          label: 'Vecteur Accélération',
          latex: '\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{OM}}{dt^2}',
          comment: 'Dérivée temporelle de la vitesse',
        },
      ],
    },
    {
      id: 's3',
      title: '3. Les Trois Lois de Newton',
      content: `**1ère Loi — Principe d'inertie :**
       Dans un référentiel galiléen, si la somme des forces est nulle, le vecteur vitesse est constant (repos ou mouvement rectiligne uniforme).

**2ème Loi — Principe Fondamental de la Dynamique (PFD) :**
 La somme vectorielle des forces extérieures est égale au produit de la masse par l'accélération. C'est la loi centrale qui permet d'établir les équations différentielles du mouvement.

**3ème Loi — Action-Réaction :**
 Si A exerce une force sur B, alors B exerce sur A une force opposée, simultanée et de même norme.`,
      formulas: [
        {
          id: 'f4',
          label: "1ère Loi — Principe d'inertie",
          latex: '\\sum \\vec{F}_{ext} = \\vec{0} \\implies \\vec{v} = \\text{constante}',
          comment: 'Valable uniquement dans un référentiel galiléen',
        },
        {
          id: 'f5',
          label: '2ème Loi — PFD',
          latex: '\\sum \\vec{F}_{ext} = m\\,\\vec{a}',
          comment: "Loi fondamentale de la dynamique — cœur de la mécanique classique",
        },
        {
          id: 'f6',
          label: '3ème Loi — Action-Réaction',
          latex: '\\vec{F}_{A/B} = -\\vec{F}_{B/A}',
          comment: 'Forces opposées, simultanées, de même droite d\'action',
        },
      ],
    },
    {
      id: 's4',
      title: '4. Les principales forces',
      content: `Voici les forces les plus rencontrées en mécanique classique :`,
      formulas: [
        {
          id: 'f7',
          label: 'Poids',
          latex: '\\vec{P} = m\\,\\vec{g}',
          comment: 'Force d\'attraction terrestre, dirigée vers le bas',
        },
        {
          id: 'f8',
          label: 'Force Gravitationnelle Universelle',
          latex: 'F = G\\,\\frac{Mm}{r^2}',
          comment: 'G = 6,674 × 10⁻¹¹ N·m²/kg² — responsable du mouvement des planètes',
        },
      ],
    },
    {
      id: 's5',
      title: '5. Démonstration — Tir parabolique',
      content: `**Objectif :** Trouver la loi de position d'un projectile lancé avec une vitesse initiale v₀ à l'angle α.

**Application du PFD :** En négligeant les frottements, l'objet n'est soumis qu'à son poids, donc **a** = **g**.

**Projections** dans le repère (O, x, y) avec y vertical vers le haut :
- aₓ = 0 et aᵧ = −g

**1ère intégration → Vitesse :**
- vₓ(t) = v₀ cos α
- vᵧ(t) = −gt + v₀ sin α

**2ème intégration → Position :**

En éliminant t, on obtient une **parabole**.`,
      formulas: [
        {
          id: 'f9',
          label: 'Position horizontale',
          latex: 'x(t) = (v_0 \\cos\\alpha)\\,t',
          comment: 'Mouvement rectiligne uniforme selon x',
        },
        {
          id: 'f10',
          label: 'Position verticale',
          latex: 'y(t) = -\\frac{1}{2}g\\,t^2 + (v_0 \\sin\\alpha)\\,t + y_0',
          comment: 'Mouvement uniformément accéléré selon y',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'ex1',
      title: "Démonstration de la 3ème loi de Kepler",
      difficulty: 4,
      statement: `Un satellite de masse m est en orbite circulaire à une distance r du centre de la Terre (masse M). En utilisant la 2ème loi de Newton, démontrez la 3ème loi de Kepler : T²/r³ = constante.`,
      hint: "Appliquez le PFD au satellite en orbite circulaire. L'accélération de Frenet vaut a = v²/r dirigée vers le centre.",
      solution: `**Système :** le satellite. **Référentiel :** géocentrique galiléen.

**Force unique :** $F = G\\frac{Mm}{r^2}$

**Accélération centripète :** $a = \\frac{v^2}{r}$ (mouvement circulaire uniforme)

**Application du PFD :**
$$G\\frac{Mm}{r^2} = m\\frac{v^2}{r} \\implies v^2 = \\frac{GM}{r}$$

**Période T :** le satellite parcourt $2\\pi r$ à la vitesse $v$ :
$$T = \\frac{2\\pi r}{v} \\implies T^2 = \\frac{4\\pi^2 r^2}{v^2} = \\frac{4\\pi^2 r^3}{GM}$$

**Conclusion :**
$$\\boxed{\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM} = \\text{constante}}$$

C'est bien la **3ème loi de Kepler** ! ✓`,
    },
    {
      id: 'ex2',
      title: "Chute libre et tir parabolique",
      difficulty: 2,
      statement: `Un ballon est lancé depuis le sol avec une vitesse initiale v₀ = 20 m/s à un angle α = 30° par rapport à l'horizontale. Calculez : (1) la hauteur maximale atteinte, (2) la portée horizontale. On prendra g = 10 m/s².`,
      hint: "La hauteur maximale est atteinte quand vᵧ = 0. La portée est la valeur de x quand y revient à 0.",
      solution: `**Données :** v₀ = 20 m/s, α = 30°, g = 10 m/s²

**Composantes initiales :**
- v₀ₓ = 20 cos30° = 10√3 ≈ 17,3 m/s
- v₀ᵧ = 20 sin30° = 10 m/s

**1) Hauteur maximale** (quand vᵧ = 0) :
0 = −gt_max + v₀ᵧ  ⟹  t_max = 1 s
h_max = −½×10×1² + 10×1 = **5 m**

**2) Portée horizontale** (quand y = 0, t ≠ 0) :
0 = −½gt² + v₀ᵧt  ⟹  t = 2v₀ᵧ/g = 2 s
x_max = v₀ₓ × 2 = 10√3 × 2 ≈ **34,6 m**`,
    },
  ],
},
  'l3-qm-1': {
    title: "Postulats de la mécanique quantique",
    level: 'l3',
    difficulty: 4,
    duration: '90 min',
    tags: ['Quantique', 'Fondements', 'Opérateurs', 'Mesure'],
    intro: `La mécanique quantique est l'une des théories les plus précises et les plus
            fondamentales jamais élaborées par l'être humain. Elle décrit le comportement
            des systèmes physiques à l'échelle atomique et subatomique, là où la
            mécanique classique échoue irrémédiablement.`,
    sections: [
      {
        id: 's1',
        title: '1. État quantique et espace de Hilbert',
        content: `Tout état physique d\'un système quantique est représenté par un
                  vecteur d'état — appelé **ket** dans la notation de Dirac — dans un
                  espace de Hilbert complexe ℋ. Contrairement à la mécanique classique,
                  l'état d'un système *ne contient pas l'information de toutes ses
                  propriétés simultanément*, mais uniquement la distribution de
                  probabilité de tout résultat de mesure.`,
        formulas: [
          {
            id: 'f1',
            label: 'Ket d\'état',
            latex: '\\ket{\\psi} \\in \\mathcal{H}',
            comment: 'Vecteur état dans l\'espace de Hilbert',
          },
          {
            id: 'f2',
            label: 'Normalisation',
            latex: '\\braket{\\psi | \\psi} = \\int_{-\\infty}^{+\\infty} |\\psi(x)|^2 \\, dx = 1',
            comment: 'Condition de normalisation — conservation de la probabilité totale',
          },
          {
            id: 'f3',
            label: 'Superposition',
            latex: '\\ket{\\psi} = \\sum_n c_n \\ket{\\phi_n}, \\quad \\sum_n |c_n|^2 = 1',
            comment: 'Principe de superposition — combinaison linéaire d\'états propres',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Observables et opérateurs hermitiens',
        content: `À toute grandeur physique mesurable (observable) est associé un
                  **opérateur linéaire hermitien** Â sur ℋ. Les seuls résultats possibles
                  d\'une mesure sont les **valeurs propres** réelles de cet opérateur,
                  ce qui garantit que tout résultat expérimental est un nombre réel.`,
        formulas: [
          {
            id: 'f4',
            label: 'Équation aux valeurs propres',
            latex: '\\hat{A}\\ket{\\phi_n} = a_n \\ket{\\phi_n}, \\quad a_n \\in \\mathbb{R}',
            comment: 'Hermiticité ⟹ valeurs propres réelles',
          },
          {
            id: 'f5',
            label: 'Valeur moyenne',
            latex: '\\langle \\hat{A} \\rangle_\\psi = \\bra{\\psi}\\hat{A}\\ket{\\psi} = \\sum_n a_n |c_n|^2',
            comment: 'Valeur attendue (expectation value) de l\'observable A dans l\'état ψ',
          },
          {
            id: 'f6',
            label: 'Relation de commutation canonique',
            latex: '[\\hat{x}, \\hat{p}] = \\hat{x}\\hat{p} - \\hat{p}\\hat{x} = i\\hbar',
            comment: 'Incompatibilité fondamentale entre position et impulsion',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Principe d\'incertitude de Heisenberg',
        content: `Si deux observables **ne commutent pas**, il est *fondamentalement
                  impossible* de les connaître simultanément avec une précision
                  arbitraire. Ce n\'est pas une limitation technique — c\'est une
                  propriété intrinsèque de la nature.`,
        formulas: [
          {
            id: 'f7',
            label: 'Inégalité de Robertson',
            latex: '\\Delta A \\cdot \\Delta B \\geq \\frac{1}{2}\\left|\\langle[\\hat{A},\\hat{B}]\\rangle\\right|',
            comment: 'Forme générale du principe d\'incertitude',
          },
          {
            id: 'f8',
            label: 'Heisenberg position-impulsion',
            latex: '\\Delta x \\cdot \\Delta p_x \\geq \\frac{\\hbar}{2}',
            comment: 'Incertitude minimale incompressible (ℏ/2)',
          },
          {
            id: 'f9',
            label: 'Heisenberg énergie-temps',
            latex: '\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}',
            comment: 'Temps de vie d\'un état excité et largeur spectrale',
          },
        ],
      },
      {
        id: 's4',
        title: '4. Évolution temporelle — Équation de Schrödinger',
        content: `En dehors de toute mesure, l\'état d\'un système quantique **isolé**
                  évolue de façon déterministe et réversible selon l\'équation de
                  Schrödinger. C\'est l\'analogue quantique de la deuxième loi de Newton.`,
        formulas: [
          {
            id: 'f10',
            label: 'Équation de Schrödinger dépendante du temps',
            latex: 'i\\hbar \\frac{\\partial}{\\partial t}\\ket{\\psi(t)} = \\hat{H}\\ket{\\psi(t)}',
            comment: 'Ĥ est l\'opérateur hamiltonien (énergie totale du système)',
          },
          {
            id: 'f11',
            label: 'Opérateur d\'évolution',
            latex: '\\ket{\\psi(t)} = \\hat{U}(t)\\ket{\\psi(0)}, \\quad \\hat{U}(t) = e^{-i\\hat{H}t/\\hbar}',
            comment: 'Ûest unitaire : il préserve la norme (et donc la probabilité totale)',
          },
          {
            id: 'f12',
            label: 'Équation stationnaire',
            latex: '\\hat{H}\\ket{\\phi_n} = E_n\\ket{\\phi_n}',
            comment: 'États stationnaires : énergie définie, phase oscillante e^{-iEt/ℏ}',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Normalisation d\'une fonction d\'onde gaussienne',
        difficulty: 2,
        statement: `On donne la fonction d'onde : ψ(x) = A·exp(−x²/2σ²).
                    1. Déterminer la constante de normalisation A.
                    2. Calculer ⟨x⟩ et ⟨x²⟩.
                    3. En déduire Δx.`,
        hint: `Rappel : ∫_{-∞}^{+∞} e^{-ax²} dx = √(π/a).
               Exploitez la parité de la gaussienne.`,
        solution: `**1. Normalisation**
                   ⟨ψ|ψ⟩ = A² ∫ e^{-x²/σ²} dx = A² σ√π = 1
                   ⟹ A = (πσ²)^{-1/4}

                   **2. Valeurs moyennes**
                   ⟨x⟩ = 0 (par parité de la gaussienne, intégrant impaire sur ℝ)
                   ⟨x²⟩ = A² ∫ x² e^{-x²/σ²} dx = σ²/2

                   **3. Incertitude**
                   Δx = √(⟨x²⟩ − ⟨x⟩²) = σ/√2

                   Ce paquet d'onde gaussien minimise l'incertitude de Heisenberg
                   (état cohérent de l'oscillateur harmonique).`,
      },
      {
        id: 'ex2',
        title: 'Commutateur [x̂², p̂]',
        difficulty: 3,
        statement: `Calculer le commutateur [x̂², p̂] en utilisant les règles algébriques
                    des commutateurs et la relation fondamentale [x̂, p̂] = iℏ.`,
        hint: `Utilisez la règle du produit : [AB, C] = A[B,C] + [A,C]B.`,
        solution: `[x̂², p̂] = [x̂·x̂, p̂]
                   = x̂[x̂, p̂] + [x̂, p̂]x̂
                   = x̂(iℏ) + (iℏ)x̂
                   = 2iℏ x̂

                   **Généralisation :** [x̂ⁿ, p̂] = niℏ x̂^{n-1}
                   C'est l'analogue quantique de la dérivée : ∂(xⁿ)/∂x = nxⁿ⁻¹`,
      },
    ],
    relatedLessons: ['l3-qm-2', 'l3-qm-3', 'l3-lag-2'],
  }, 'term-meca-2': {
  title: "Travail et Énergie",
  level: 'terminale',
  difficulty: 3,
  duration: '60 min',
  tags: ['Énergie', 'Travail', 'Cinétique', 'Conservation'],
  intro: "L'énergie est le concept central de toute la physique. Ce chapitre établit le lien fondamental entre les forces et les transferts d'énergie, culminant avec le puissant Théorème de l'Énergie Cinétique.",

  sections: [
    {
      id: 's1',
      title: '1. Travail d\'une force constante',
      content: `Le travail d'une force modélise l'énergie transférée à un système lors d'un déplacement.

Pour une force constante $\\vec{F}$ lors d'un déplacement $\\vec{AB}$, le travail est le **produit scalaire** :

**Si $W > 0$** → le travail est **moteur** (la force accélère le système).

**Si $W < 0$** → le travail est **résistant** (la force freine le système).

**Si $W = 0$** → force perpendiculaire au mouvement, travail nul.`,
      formulas: [
        {
          id: 'f1',
          label: 'Travail d\'une force constante',
          latex: 'W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\times AB \\times \\cos(\\alpha)',
          comment: 'α est l\'angle entre la force et le déplacement',
        },
      ],
    },
    {
      id: 's2',
      title: '2. Énergie cinétique',
      content: `L'énergie cinétique $E_c$ est l'énergie que possède un corps **du fait de sa vitesse**.

Elle s'exprime en **Joules (J)**, ce qui est homogène à un travail : $[E_c] = ML^2T^{-2}$.

Plus un objet est lourd et rapide, plus son énergie cinétique est grande.`,
      formulas: [
        {
          id: 'f2',
          label: 'Énergie cinétique',
          latex: 'E_c = \\frac{1}{2}mv^2',
          comment: 'm en kg, v en m/s → Ec en Joules (J)',
        },
      ],
    },
    {
      id: 's3',
      title: '3. Forces conservatives et Énergie potentielle',
      content: `Une force est dite **conservative** si son travail ne dépend pas du chemin suivi, mais uniquement des positions initiale et finale.

**Énergie potentielle de pesanteur $E_{pp}$ :**
Liée à l'interaction gravitationnelle près de la Terre.

**Énergie potentielle élastique $E_{pe}$ :**
Liée à la déformation d'un ressort de raideur $k$ et d'allongement $x$.

**Lien fondamental** entre force conservative et énergie potentielle :`,
      formulas: [
        {
          id: 'f3',
          label: 'Énergie potentielle de pesanteur',
          latex: 'E_{pp} = mgh + \\text{cte}',
          comment: 'h est la hauteur par rapport à un niveau de référence',
        },
        {
          id: 'f4',
          label: 'Énergie potentielle élastique',
          latex: 'E_{pe} = \\frac{1}{2}kx^2',
          comment: 'k : raideur du ressort (N/m), x : allongement (m)',
        },
        {
          id: 'f5',
          label: 'Force conservative et énergie potentielle',
          latex: '\\vec{F} = -\\overrightarrow{\\text{grad}}(E_p)',
          comment: 'La force dérive de l\'énergie potentielle',
        },
      ],
    },
    {
      id: 's4',
      title: '4. Énergie mécanique et Conservation',
      content: `L'énergie mécanique $E_m$ est la **somme** des énergies cinétique et potentielle du système.

**Principe de conservation :**
Dans un système soumis uniquement à des forces conservatives, $E_m$ reste constante : $\\Delta E_m = 0$.

**Non-conservation :**
En présence de frottements ou forces non-conservatives, l'énergie mécanique diminue :`,
      formulas: [
        {
          id: 'f6',
          label: 'Énergie mécanique',
          latex: 'E_m = E_c + \\sum E_p',
          comment: 'Somme de l\'énergie cinétique et de toutes les énergies potentielles',
        },
        {
          id: 'f7',
          label: 'Variation d\'énergie mécanique',
          latex: '\\Delta E_m = \\sum W(\\vec{F}_{\\text{non-cons}})',
          comment: 'Égale au travail des forces non-conservatives (frottements...)',
        },
      ],
    },
    {
      id: 's5',
      title: '5. Démonstration — Théorème de l\'Énergie Cinétique (TEC)',
      content: `**Énoncé :** La variation de l'énergie cinétique est égale à la somme des travaux de toutes les forces appliquées.

**Démonstration (cas unidimensionnel) :**

Partons de la 2ème loi de Newton : $F = m\\frac{dv}{dt}$

Multiplions par le déplacement élémentaire $dx$ : $F\\,dx = m\\frac{dv}{dt}\\,dx$

En remarquant que $\\frac{dx}{dt} = v$, on obtient : $F\\,dx = mv\\,dv$

Intégrons entre A et B :
$$\\int_A^B F\\,dx = \\int_{v_A}^{v_B} mv\\,dv = \\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2$$

On retrouve bien le **TEC** :`,
      formulas: [
        {
          id: 'f8',
          label: 'Théorème de l\'Énergie Cinétique (TEC)',
          latex: '\\Delta E_c = \\sum W_{ext} \\quad \\Longleftrightarrow \\quad \\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_A^2 = \\sum W(\\vec{F})',
          comment: 'Théorème fondamental — valable même en présence de frottements',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'ex1',
      title: 'Saut à l\'élastique et sécurité',
      difficulty: 3,
      statement: `Un bloc de masse $m = 2$ kg glisse sur une piste horizontale avec une vitesse initiale $v_0 = 5$ m/s. Il rencontre une zone de frottements de longueur $d = 3$ m où s'exerce une force de frottement constante $f = 4$ N. Calculez sa vitesse finale $v_f$.`,
      hint: `Appliquez le **Théorème de l'Énergie Cinétique** : $\\Delta E_c = W(\\vec{f})$.
Le travail du frottement est négatif car la force est opposée au déplacement : $W = -f \\times d$.`,
      solution: `**Système :** le bloc. **Référentiel :** terrestre galiléen.

**Forces en présence :**
- Poids $\\vec{P}$ et réaction $\\vec{R}$ → travaux nuls (perpendiculaires au déplacement)
- Frottement $\\vec{f}$ → travail résistant

**Application du TEC :**
$$\\Delta E_c = W(\\vec{f})$$

**Calcul du travail de frottement** ($\\alpha = 180°$) :
$$W(\\vec{f}) = -f \\times d = -4 \\times 3 = -12 \\text{ J}$$

**Résolution :**
$$\\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_0^2 = -f \\times d$$
$$v_f^2 = v_0^2 - \\frac{2fd}{m} = 25 - \\frac{2 \\times 4 \\times 3}{2} = 25 - 12 = 13$$

**Résultat :**
$$\\boxed{v_f = \\sqrt{13} \\approx 3{,}6 \\text{ m/s}}$$`,
    },
    {
      id: 'ex2',
      title: 'Conservation de l\'énergie mécanique',
      difficulty: 2,
      statement: `Une bille de masse $m = 0{,}1$ kg est lâchée sans vitesse initiale depuis une hauteur $h = 2$ m. En négligeant les frottements, calculez sa vitesse au moment où elle touche le sol. On prendra $g = 10$ m/s².`,
      hint: `En l'absence de frottements, l'énergie mécanique se conserve : $E_m^{initial} = E_m^{final}$.
Au départ, $v = 0$ donc $E_c = 0$. En bas, $h = 0$ donc $E_{pp} = 0$.`,
      solution: `**Conservation de l'énergie mécanique** ($\\Delta E_m = 0$) :
$$E_c^{initial} + E_{pp}^{initial} = E_c^{final} + E_{pp}^{final}$$

**État initial** (hauteur $h$, vitesse nulle) :
$$0 + mgh = \\frac{1}{2}mv^2 + 0$$

**Simplification :**
$$mgh = \\frac{1}{2}mv^2 \\implies v^2 = 2gh$$

**Application numérique :**
$$v = \\sqrt{2 \\times 10 \\times 2} = \\sqrt{40}$$

**Résultat :**
$$\\boxed{v = 2\\sqrt{10} \\approx 6{,}3 \\text{ m/s}}$$`,
    },
  ],
}, 'term-thermo-1': {
  title: "Thermodynamique",
  level: 'terminale',
  difficulty: 3,
  duration: '75 min',
  tags: ['Thermodynamique', 'Gaz Parfait', 'Énergie', 'Entropie'],
  intro: "La thermodynamique étudie les échanges d'énergie sous forme de chaleur et de travail. Elle repose sur deux grands principes : la conservation de l'énergie et le sens naturel de l'évolution des systèmes.",

  sections: [
    {
      id: 's1',
      title: '1. Système et variables d\'état',
      content: `Un système thermodynamique est une portion d'espace délimitée par une frontière. Il est caractérisé par deux types de variables :

**Variables intensives :** Indépendantes de la taille du système — Pression $P$, Température $T$.

**Variables extensives :** Proportionnelles à la quantité de matière — Volume $V$, Masse $m$, Énergie interne $U$.`,
      formulas: [],
    },
    {
      id: 's2',
      title: '2. Le Modèle du Gaz Parfait',
      content: `Le gaz parfait est un modèle simplifié où l'on néglige les interactions intermoléculaires et le volume propre des molécules.

$P$ en Pascals (Pa), $V$ en m³, $T$ en Kelvins (K), $n$ en moles (mol).

La constante universelle des gaz parfaits vaut $R \\approx 8{,}314$ J·K⁻¹·mol⁻¹.`,
      formulas: [
        {
          id: 'f1',
          label: 'Équation d\'état du Gaz Parfait',
          latex: 'PV = nRT',
          comment: 'P en Pa, V en m³, T en K, n en mol, R = 8,314 J·K⁻¹·mol⁻¹',
        },
      ],
    },
    {
      id: 's3',
      title: '3. Le Premier Principe — Conservation de l\'Énergie',
      content: `L'énergie totale d'un système au repos macroscopique est appelée **énergie interne** $U$. Elle correspond à la somme des énergies cinétiques et potentielles microscopiques.

**Énoncé :** La variation de l'énergie interne $\\Delta U$ est égale à la somme du travail $W$ et de la chaleur $Q$ échangés avec l'extérieur.

Pour un système **incompressible** (solide ou liquide), la variation d'énergie interne dépend uniquement de la température :`,
      formulas: [
        {
          id: 'f2',
          label: 'Premier Principe de la Thermodynamique',
          latex: '\\Delta U = W + Q',
          comment: 'W : travail reçu, Q : chaleur reçue — tous deux algébriques',
        },
        {
          id: 'f3',
          label: 'Énergie interne d\'un système incompressible',
          latex: '\\Delta U = m \\cdot C \\cdot \\Delta T',
          comment: 'C : capacité thermique massique (J·kg⁻¹·K⁻¹)',
        },
      ],
    },
    {
      id: 's4',
      title: '4. Le Second Principe et l\'Entropie',
      content: `Alors que le premier principe impose la **conservation**, le second principe impose le **sens de l'évolution**.

On introduit une fonction d'état, l'**entropie** $S$, qui mesure le "désordre" du système.

Pour un système **isolé**, l'entropie ne peut qu'augmenter : $\\Delta S_{isolé} \\geq 0$.

**Approche statistique (L3) :** L'entropie est reliée au nombre de micro-états accessibles $\\Omega$ par la **formule de Boltzmann** :`,
      formulas: [
        {
          id: 'f4',
          label: 'Second Principe — Entropie d\'un système isolé',
          latex: '\\Delta S_{\\text{isolé}} \\geq 0',
          comment: 'L\'entropie croît pour une transformation irréversible, reste constante pour une transformation réversible',
        },
        {
          id: 'f5',
          label: 'Formule de Boltzmann',
          latex: 'S = k_B \\ln(\\Omega)',
          comment: 'k_B = 1,38 × 10⁻²³ J·K⁻¹ — constante de Boltzmann, Ω : nombre de micro-états',
        },
      ],
    },
    {
      id: 's5',
      title: '5. Démonstration — Loi de refroidissement de Newton',
      content: `**Objectif :** Modéliser l'évolution de la température $T(t)$ d'un corps au contact d'un thermostat à $T_{ext}$.

**Bilan énergétique :** $\\frac{dU}{dt} = \\Phi$ où $\\Phi$ est le flux thermique reçu.

**Pour un corps incompressible :** $\\frac{dU}{dt} = m \\cdot C \\cdot \\frac{dT}{dt}$

**Loi de Newton :** Le flux est proportionnel à l'écart de température :
$$\\Phi = -h \\cdot S \\cdot (T(t) - T_{ext})$$

**Équation différentielle obtenue :**
$$m \\cdot C \\cdot \\frac{dT}{dt} + h \\cdot S \\cdot T(t) = h \\cdot S \\cdot T_{ext}$$

En posant $\\tau = \\frac{mC}{hS}$ (temps caractéristique de refroidissement), la solution est :`,
      formulas: [
        {
          id: 'f6',
          label: 'Loi de refroidissement de Newton',
          latex: 'T(t) = T_{ext} + (T_0 - T_{ext})\\,e^{-t/\\tau}',
          comment: 'τ = mC/hS : temps caractéristique — la température rejoint exponentiellement celle du thermostat',
        },
      ],
    },
    {
      id: 's6',
      title: '6. Machines Thermiques',
      content: `Une machine thermique échange de la chaleur avec deux sources pour produire du travail **(moteur)** ou en consommer **(réfrigérateur / pompe à chaleur)**.

**Cycle de Carnot :** C'est le cycle théorique **réversible** offrant le rendement maximal entre une source chaude $T_c$ et une source froide $T_f$ :`,
      formulas: [
        {
          id: 'f7',
          label: 'Rendement d\'un moteur thermique',
          latex: '\\eta = \\frac{|W|}{Q_{chaude}}',
          comment: 'Rapport entre le travail produit et la chaleur absorbée à la source chaude',
        },
        {
          id: 'f8',
          label: 'Rendement de Carnot (maximum théorique)',
          latex: '\\eta_{max} = 1 - \\frac{T_f}{T_c}',
          comment: 'T_c : température source chaude, T_f : température source froide — en Kelvins',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'ex1',
      title: 'Équilibre thermique — Mélange fer et eau',
      difficulty: 2,
      statement: `Une masse $m_{fer} = 0{,}5$ kg de fer à $T_i = 100°C$ est plongée dans $m_{eau} = 1$ kg d'eau à $T_{eau} = 20°C$. Le système est calorifugé.

On donne : $C_{fer} = 450$ J·kg⁻¹·K⁻¹ et $C_{eau} = 4180$ J·kg⁻¹·K⁻¹.

Déterminer la température finale d'équilibre $T_f$.`,
      hint: `Le système est **isolé** : la chaleur perdue par le fer est égale à la chaleur gagnée par l'eau.
$$Q_{fer} + Q_{eau} = 0$$`,
      solution: `**Système isolé** : $Q_{fer} + Q_{eau} = 0$

**Expression des chaleurs :**
$$Q_{fer} = m_{fer} \\cdot C_{fer} \\cdot (T_f - 100)$$
$$Q_{eau} = m_{eau} \\cdot C_{eau} \\cdot (T_f - 20)$$

**Équation :**
$$0{,}5 \\times 450 \\times (T_f - 100) + 1 \\times 4180 \\times (T_f - 20) = 0$$

**Développement :**
$$225(T_f - 100) + 4180(T_f - 20) = 0$$
$$225T_f - 22500 + 4180T_f - 83600 = 0$$
$$4405 T_f = 106100$$

**Résultat :**
$$\\boxed{T_f = \\frac{106100}{4405} \\approx 24{,}1°C}$$

Le fer se refroidit et l'eau se réchauffe jusqu'à l'équilibre thermique.`,
    },
    {
      id: 'ex2',
      title: 'Rendement d\'un moteur et cycle de Carnot',
      difficulty: 3,
      statement: `Un moteur thermique fonctionne entre une source chaude à $T_c = 500$ K et une source froide à $T_f = 300$ K. Il absorbe $Q_c = 1000$ J à la source chaude.

1. Calculez le rendement maximal de Carnot $\\eta_{max}$.
2. Calculez le travail maximal $|W|$ que peut produire ce moteur.`,
      hint: `Utilisez la formule du rendement de Carnot : $\\eta_{max} = 1 - \\frac{T_f}{T_c}$

Puis $|W| = \\eta \\times Q_c$`,
      solution: `**1. Rendement de Carnot :**
$$\\eta_{max} = 1 - \\frac{T_f}{T_c} = 1 - \\frac{300}{500} = 1 - 0{,}6 = 0{,}4$$

Le rendement maximal est de **40%**.

**2. Travail maximal produit :**
$$|W| = \\eta_{max} \\times Q_c = 0{,}4 \\times 1000$$

$$\\boxed{|W| = 400 \\text{ J}}$$

La chaleur rejetée à la source froide vaut :
$$Q_f = Q_c - |W| = 1000 - 400 = 600 \\text{ J}$$`,
    },
  ],
},
}
