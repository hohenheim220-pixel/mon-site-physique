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
}, 'term-thermo-2': {
  title: "Transferts Thermiques",
  level: 'terminale',
  difficulty: 3,
  duration: '45 min',
  tags: ['Thermique', 'Conduction', 'Convection', 'Rayonnement'],
  intro: "La chaleur se propage selon trois modes distincts : la conduction, la convection et le rayonnement. Comprendre ces mécanismes est essentiel pour analyser tout système thermique.",

  sections: [
    {
      id: 's1',
      title: '1. Les trois modes de transfert thermique',
      content: `La chaleur se transfère toujours du corps **chaud** vers le corps **froid**, selon trois mécanismes :

**Conduction :** Transfert par contact direct entre molécules, sans déplacement de matière. Dominant dans les **solides**.

**Convection :** Transfert par déplacement de matière (fluide chaud qui monte, froid qui descend). Dominant dans les **liquides et gaz**.

**Rayonnement :** Transfert par ondes électromagnétiques (infrarouge). Ne nécessite **aucun milieu matériel** — fonctionne dans le vide.`,
      formulas: [],
    },
    {
      id: 's2',
      title: '2. Conduction thermique — Loi de Fourier',
      content: `La **loi de Fourier** décrit le flux de chaleur par conduction à travers un matériau.

Le flux thermique $\\Phi$ (en Watts) est proportionnel à la **différence de température** et à la **surface**, et inversement proportionnel à l'**épaisseur** :

$\\lambda$ est la **conductivité thermique** du matériau (W·m⁻¹·K⁻¹) :
- Métaux : $\\lambda \\approx 10$ à $400$ W·m⁻¹·K⁻¹
- Verre : $\\lambda \\approx 1$ W·m⁻¹·K⁻¹
- Air : $\\lambda \\approx 0{,}025$ W·m⁻¹·K⁻¹`,
      formulas: [
        {
          id: 'f1',
          label: 'Loi de Fourier — Flux thermique par conduction',
          latex: '\\Phi = -\\lambda \\cdot S \\cdot \\frac{\\Delta T}{e}',
          comment: 'λ : conductivité thermique (W·m⁻¹·K⁻¹), S : surface (m²), e : épaisseur (m), ΔT : différence de température (K)',
        },
        {
          id: 'f2',
          label: 'Résistance thermique',
          latex: 'R_{th} = \\frac{e}{\\lambda \\cdot S}',
          comment: 'Analogue à la résistance électrique — plus R_th est grand, moins le matériau conduit la chaleur',
        },
      ],
    },
    {
      id: 's3',
      title: '3. Convection thermique',
      content: `La convection est le transfert de chaleur par **mouvement de fluide**.

**Convection naturelle :** Le fluide chaud, moins dense, monte spontanément (ex: radiateur chauffant l'air d'une pièce).

**Convection forcée :** Le fluide est mis en mouvement par un dispositif extérieur (ventilateur, pompe).

Le flux thermique par convection suit la **loi de Newton** :`,
      formulas: [
        {
          id: 'f3',
          label: 'Loi de Newton — Convection',
          latex: '\\Phi = h \\cdot S \\cdot (T_{surface} - T_{fluide})',
          comment: 'h : coefficient de convection (W·m⁻²·K⁻¹), S : surface d\'échange (m²)',
        },
      ],
    },
    {
      id: 's4',
      title: '4. Rayonnement thermique — Loi de Stefan-Boltzmann',
      content: `Tout corps à une température $T > 0$ K émet un **rayonnement électromagnétique** (infrarouge).

La puissance rayonnée par un **corps noir** (absorbant parfait) suit la **loi de Stefan-Boltzmann** :

$\\sigma = 5{,}67 \\times 10^{-8}$ W·m⁻²·K⁻⁴ est la constante de Stefan-Boltzmann.

Pour un corps **réel**, on introduit l'**émissivité** $\\varepsilon \\in [0, 1]$ :`,
      formulas: [
        {
          id: 'f4',
          label: 'Loi de Stefan-Boltzmann — Corps noir',
          latex: '\\Phi = \\sigma \\cdot S \\cdot T^4',
          comment: 'σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴, T en Kelvins — attention T⁴ !',
        },
        {
          id: 'f5',
          label: 'Corps réel — avec émissivité',
          latex: '\\Phi = \\varepsilon \\cdot \\sigma \\cdot S \\cdot T^4',
          comment: 'ε = 1 pour un corps noir parfait, ε < 1 pour un corps réel',
        },
      ],
    },
    {
      id: 's5',
      title: '5. Bilan thermique global',
      content: `En pratique, les trois modes coexistent. On utilise un **bilan thermique** pour analyser un système.

**Exemple : isolation d'un bâtiment**

Le flux total perdu est la somme des flux par conduction (murs), convection (air) et rayonnement (fenêtres).

La **résistance thermique totale** en série :`,
      formulas: [
        {
          id: 'f6',
          label: 'Résistances thermiques en série',
          latex: 'R_{th,total} = \\sum_i R_{th,i} = \\frac{e_1}{\\lambda_1 S} + \\frac{e_2}{\\lambda_2 S} + \\cdots',
          comment: 'Analogue aux résistances électriques en série',
        },
        {
          id: 'f7',
          label: 'Flux thermique total',
          latex: '\\Phi = \\frac{\\Delta T}{R_{th,total}}',
          comment: 'Analogue à la loi d\'Ohm : I = U/R',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'ex1',
      title: 'Isolation d\'un mur — Conduction',
      difficulty: 2,
      statement: `Un mur de béton d'épaisseur $e = 20$ cm et de surface $S = 15$ m² sépare l'intérieur ($T_{int} = 20°C$) de l'extérieur ($T_{ext} = 0°C$). La conductivité du béton est $\\lambda = 1{,}75$ W·m⁻¹·K⁻¹.

1. Calculez la résistance thermique $R_{th}$ du mur.
2. Calculez le flux thermique $\\Phi$ perdu par ce mur.`,
      hint: `Utilisez $R_{th} = \\frac{e}{\\lambda S}$ puis $\\Phi = \\frac{\\Delta T}{R_{th}}$.

Attention : convertir l'épaisseur en mètres : $e = 0{,}20$ m.`,
      solution: `**1. Résistance thermique :**
$$R_{th} = \\frac{e}{\\lambda \\cdot S} = \\frac{0{,}20}{1{,}75 \\times 15}$$
$$\\boxed{R_{th} = \\frac{0{,}20}{26{,}25} \\approx 7{,}6 \\times 10^{-3} \\text{ K·W}^{-1}}$$

**2. Flux thermique perdu :**
$$\\Delta T = T_{int} - T_{ext} = 20 - 0 = 20 \\text{ K}$$
$$\\Phi = \\frac{\\Delta T}{R_{th}} = \\frac{20}{7{,}6 \\times 10^{-3}}$$
$$\\boxed{\\Phi \\approx 2625 \\text{ W} = 2{,}6 \\text{ kW}}$$

Ce mur perd **2,6 kW** — d'où l'importance de l'isolation !`,
    },
    {
      id: 'ex2',
      title: 'Rayonnement du corps humain',
      difficulty: 3,
      statement: `Le corps humain peut être modélisé comme un corps noir de surface $S = 1{,}8$ m² à une température $T = 37°C = 310$ K.

1. Calculez la puissance rayonnée par le corps humain.
2. Si la température ambiante est $T_{amb} = 20°C = 293$ K, calculez la puissance **nette** perdue par rayonnement.

On donne $\\sigma = 5{,}67 \\times 10^{-8}$ W·m⁻²·K⁻⁴.`,
      hint: `La puissance nette perdue est la différence entre ce que le corps émet et ce qu'il reçoit de l'environnement :
$$\\Phi_{net} = \\sigma S (T_{corps}^4 - T_{amb}^4)$$`,
      solution: `**1. Puissance rayonnée par le corps :**
$$\\Phi_{corps} = \\sigma \\cdot S \\cdot T^4 = 5{,}67 \\times 10^{-8} \\times 1{,}8 \\times (310)^4$$
$$(310)^4 = 9{,}24 \\times 10^9 \\text{ K}^4$$
$$\\boxed{\\Phi_{corps} \\approx 5{,}67 \\times 10^{-8} \\times 1{,}8 \\times 9{,}24 \\times 10^9 \\approx 942 \\text{ W}}$$

**2. Puissance nette perdue :**
$$\\Phi_{net} = \\sigma S (T_{corps}^4 - T_{amb}^4)$$
$$(293)^4 = 7{,}37 \\times 10^9 \\text{ K}^4$$
$$\\Phi_{net} = 5{,}67 \\times 10^{-8} \\times 1{,}8 \\times (9{,}24 - 7{,}37) \\times 10^9$$
$$\\boxed{\\Phi_{net} \\approx 190 \\text{ W}}$$

Le corps perd environ **190 W** par rayonnement seul !`,
    },
  ],
}, 'term-onde-1': {
  title: "Ondes et Signaux",
  level: 'terminale',
  difficulty: 3,
  duration: '75 min',
  tags: ['Ondes', 'Diffraction', 'Interférences', 'Doppler', 'Photon'],
  intro: "Les ondes sont partout : son, lumière, radio, séismes... Ce chapitre explore leurs propriétés fondamentales, des phénomènes de diffraction et d'interférences jusqu'au modèle quantique du photon.",

  sections: [
    {
      id: 's1',
      title: '1. Description d\'une onde périodique',
      content: `Une onde est la propagation d'une perturbation **sans transport de matière**, mais avec **transport d'énergie**.

**Période $T$ (s) :** Plus petite durée au bout de laquelle le phénomène se répète.

**Fréquence $f$ (Hz) :** Nombre de répétitions par seconde — $f = \\frac{1}{T}$.

**Longueur d'onde $\\lambda$ (m) :** Distance parcourue par l'onde pendant une période.

**Célérité $v$ (m/s) :** Vitesse de propagation de l'onde.`,
      formulas: [
        {
          id: 'f1',
          label: 'Relation fondamentale des ondes',
          latex: '\\lambda = v \\times T = \\frac{v}{f}',
          comment: 'λ en mètres, v en m/s, T en secondes, f en Hz',
        },
      ],
    },
    {
      id: 's2',
      title: '2. Intensité et niveau sonore',
      content: `L'intensité sonore $I$ (W·m⁻²) mesure la **puissance acoustique par unité de surface**.

À cause de la sensibilité **logarithmique** de l'oreille humaine, on définit le niveau sonore $L$ en **décibels (dB)**.

L'intensité de référence au seuil d'audibilité vaut $I_0 = 10^{-12}$ W·m⁻².

**Repères pratiques :**
- Silence : $0$ dB
- Conversation : $60$ dB
- Concert : $110$ dB
- Seuil de douleur : $130$ dB`,
      formulas: [
        {
          id: 'f2',
          label: 'Niveau d\'intensité sonore',
          latex: 'L = 10 \\log\\left(\\frac{I}{I_0}\\right)',
          comment: 'L en décibels (dB), I₀ = 10⁻¹² W·m⁻² (seuil d\'audibilité)',
        },
      ],
    },
    {
      id: 's3',
      title: '3. Diffraction',
      content: `La **diffraction** se produit lorsqu'une onde rencontre un obstacle ou une ouverture de taille $a$ **comparable à sa longueur d'onde** $\\lambda$.

L'onde s'éparpille dans différentes directions — elle contourne l'obstacle.

**Conditions :**
- Si $a \\gg \\lambda$ → pas de diffraction (optique géométrique)
- Si $a \\approx \\lambda$ → diffraction importante
- Si $a \\ll \\lambda$ → diffraction totale

**Application :** Limite de résolution des télescopes, microscopes et appareils photo.`,
      formulas: [
        {
          id: 'f3',
          label: 'Angle caractéristique de diffraction',
          latex: '\\theta = \\frac{\\lambda}{a}',
          comment: 'θ en radians, λ : longueur d\'onde, a : largeur de l\'ouverture — valable pour les petits angles',
        },
      ],
    },
    {
      id: 's4',
      title: '4. Interférences',
      content: `Lorsque deux ondes **cohérentes** (même fréquence, même phase à l'origine) se superposent, elles créent des zones d'amplitude maximale ou nulle.

**Interférences constructives :** Les ondes arrivent **en phase** → amplitude maximale.

**Interférences destructives :** Les ondes arrivent **en opposition de phase** → amplitude nulle.

**Trous d'Young :** Deux fentes séparées de $b$ éclairées par une lumière monochromatique $\\lambda$ à une distance $D$ d'un écran. On observe des franges alternativement brillantes et sombres.`,
      formulas: [
        {
          id: 'f4',
          label: 'Interférences constructives',
          latex: '\\delta = k \\cdot \\lambda \\quad (k \\in \\mathbb{Z})',
          comment: 'δ : différence de marche — amplitude maximale',
        },
        {
          id: 'f5',
          label: 'Interférences destructives',
          latex: '\\delta = \\left(k + \\frac{1}{2}\\right) \\cdot \\lambda',
          comment: 'Ondes en opposition de phase — amplitude nulle',
        },
        {
          id: 'f6',
          label: 'Interfrange — Trous d\'Young',
          latex: 'i = \\frac{\\lambda \\cdot D}{b}',
          comment: 'i : distance entre deux franges brillantes, D : distance fentes-écran, b : écartement des fentes',
        },
      ],
    },
    {
      id: 's5',
      title: '5. Effet Doppler',
      content: `L'**effet Doppler** est le décalage de fréquence perçue lorsque la source et l'observateur sont en **mouvement relatif**.

**Source s'approchant :** Fréquence perçue **plus haute** (son plus aigu, lumière décalée vers le bleu).

**Source s'éloignant :** Fréquence perçue **plus basse** (son plus grave, lumière décalée vers le rouge).

**Applications fondamentales :**
- **Radar de vitesse** (police, météo)
- **Échographie Doppler** (vitesse du sang)
- **Astrophysique** : mesure de la vitesse des étoiles et galaxies — preuve de l'expansion de l'Univers !`,
      formulas: [
        {
          id: 'f7',
          label: 'Effet Doppler — Fréquence perçue',
          latex: 'f_{perçue} = f_{source} \\times \\frac{v_{son}}{v_{son} \\mp v_{source}}',
          comment: '− si la source s\'approche (fréquence plus haute), + si elle s\'éloigne',
        },
      ],
    },
    {
      id: 's6',
      title: '6. Modèle particulaire — Le Photon',
      content: `Pour expliquer l'**effet photoélectrique** (Einstein, 1905), la lumière est modélisée par un flux de particules sans masse appelées **photons**.

Chaque photon transporte une énergie $E$ proportionnelle à la **fréquence** $\\nu$ de l'onde lumineuse.

$h \\approx 6{,}63 \\times 10^{-34}$ J·s est la **constante de Planck**.

**Dualité onde-corpuscule :** La lumière se comporte comme une onde (diffraction, interférences) ET comme un flux de particules (effet photoélectrique). C'est l'un des fondements de la physique quantique.`,
      formulas: [
        {
          id: 'f8',
          label: 'Énergie d\'un photon',
          latex: 'E = h \\cdot \\nu = \\frac{h \\cdot c}{\\lambda}',
          comment: 'h = 6,63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, ν : fréquence, λ : longueur d\'onde',
        },
      ],
    },
    {
      id: 's7',
      title: '7. Équation de d\'Alembert (Niveau Licence)',
      content: `À l'université, on démontre que la propagation d'une onde scalaire est régie par l'**équation de d'Alembert** :

Toute fonction de la forme $f(x - vt)$ ou $g(x + vt)$ est solution — correspondant physiquement à une onde se propageant vers la **droite** ou vers la **gauche** sans déformation.`,
      formulas: [
        {
          id: 'f9',
          label: 'Équation de d\'Alembert',
          latex: '\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{v^2}\\frac{\\partial^2 s}{\\partial t^2} = 0',
          comment: 's(x,t) : élongation de l\'onde, v : célérité de propagation',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'ex1',
      title: 'Lunette astronomique afocale',
      difficulty: 3,
      statement: `Une lunette afocale possède un objectif de distance focale $f_1' = 100$ cm et un oculaire de distance focale $f_2' = 5$ cm.

1. Calculez le grossissement $G$ de cette lunette.
2. Expliquez pourquoi le système est dit **afocal** et quel est l'avantage pour l'observateur.`,
      hint: `Pour une lunette afocale, le grossissement est le rapport des distances focales :
$$G = \\frac{f_1'}{f_2'}$$

Un système est afocal si l'image d'un objet à l'infini se forme également à l'infini.`,
      solution: `**1. Calcul du grossissement :**
$$G = \\frac{f_1'}{f_2'} = \\frac{100}{5}$$
$$\\boxed{G = 20}$$

Les objets observés paraissent **20 fois plus grands** qu'à l'œil nu.

**2. Système afocal :**

Un système est dit **afocal** si l'image d'un objet situé à l'infini se forme également à l'infini.

Concrètement, les rayons entrent **parallèles** dans l'objectif et ressortent **parallèles** de l'oculaire.

**Avantage :** L'œil n'a pas besoin d'accommoder — observation **sans fatigue** possible pendant de longues périodes. C'est essentiel pour l'observation astronomique.`,
    },
    {
      id: 'ex2',
      title: 'Interférences — Trous d\'Young',
      difficulty: 2,
      statement: `Deux fentes de Young sont séparées de $b = 0{,}5$ mm. Un écran est placé à $D = 2$ m des fentes. On éclaire avec une lumière monochromatique de longueur d'onde $\\lambda = 589$ nm (lumière jaune du sodium).

1. Calculez l'interfrange $i$.
2. Combien de franges brillantes peut-on observer sur une largeur de $4$ cm ?`,
      hint: `Utilisez la formule de l'interfrange : $i = \\frac{\\lambda D}{b}$

Attention aux unités : convertir $\\lambda$ en mètres et $b$ en mètres !`,
      solution: `**Données :** $\\lambda = 589 \\times 10^{-9}$ m, $D = 2$ m, $b = 0{,}5 \\times 10^{-3}$ m

**1. Calcul de l'interfrange :**
$$i = \\frac{\\lambda \\cdot D}{b} = \\frac{589 \\times 10^{-9} \\times 2}{0{,}5 \\times 10^{-3}}$$
$$\\boxed{i = \\frac{1178 \\times 10^{-9}}{5 \\times 10^{-4}} = 2{,}36 \\times 10^{-3} \\text{ m} \\approx 2{,}4 \\text{ mm}}$$

**2. Nombre de franges sur 4 cm :**
$$n = \\frac{\\text{largeur}}{i} = \\frac{40 \\text{ mm}}{2{,}4 \\text{ mm}}$$
$$\\boxed{n \\approx 17 \\text{ franges brillantes}}$$`,
    },
    {
      id: 'ex3',
      title: 'Énergie d\'un photon et effet photoélectrique',
      difficulty: 3,
      statement: `Une radiation ultraviolette de longueur d'onde $\\lambda = 200$ nm éclaire une plaque de zinc. Le travail d'extraction du zinc est $W_s = 6{,}9 \\times 10^{-19}$ J.

1. Calculez l'énergie d'un photon UV.
2. L'effet photoélectrique a-t-il lieu ? Si oui, calculez l'énergie cinétique maximale des électrons éjectés.

On donne $h = 6{,}63 \\times 10^{-34}$ J·s, $c = 3 \\times 10^8$ m/s.`,
      hint: `L'effet photoélectrique a lieu si $E_{photon} > W_s$.

L'énergie cinétique maximale des électrons est :
$$E_c = E_{photon} - W_s$$`,
      solution: `**1. Énergie du photon UV :**
$$E = \\frac{h \\cdot c}{\\lambda} = \\frac{6{,}63 \\times 10^{-34} \\times 3 \\times 10^8}{200 \\times 10^{-9}}$$
$$\\boxed{E = \\frac{1{,}989 \\times 10^{-25}}{2 \\times 10^{-7}} = 9{,}95 \\times 10^{-19} \\text{ J}}$$

**2. Effet photoélectrique :**

$E_{photon} = 9{,}95 \\times 10^{-19}$ J $> W_s = 6{,}9 \\times 10^{-19}$ J ✓

**Oui**, l'effet photoélectrique a lieu !

**Énergie cinétique maximale des électrons :**
$$E_c = E_{photon} - W_s = 9{,}95 \\times 10^{-19} - 6{,}9 \\times 10^{-19}$$
$$\\boxed{E_c = 3{,}05 \\times 10^{-19} \\text{ J}}$$`,
    },
  ],
}, // --- PARTIE 1 : Circuits RC et RL (ID: term-elec-1) ---
  'term-elec-1': {
    title: "Circuits RC et RL",
    level: 'terminale',
    difficulty: 3,
    duration: '50 min',
    tags: ['Électricité', 'Condensateur', 'Régime Transitoire'],
    intro: "L'étude des circuits RC et RL permet de comprendre comment l'énergie électrique est stockée et dissipée dans des composants passifs lors de régimes transitoires.",
    sections: [
      {
        id: 's1',
        title: '1. Le Condensateur et le circuit RC',
        content: `Un condensateur est constitué de deux armatures conductrices séparées par un isolant. Il stocke des charges électriques $q$ proportionnelles à la tension $u_C$ à ses bornes.
        
Relation fondamentale : $$q(t) = C \\cdot u_C(t)$$
Où $C$ est la capacité en Farads (F). 

Le courant est le débit de charge : $$i(t) = \\frac{dq}{dt} = C \\frac{du_C}{dt}$$`,
        formulas: [
          {
            id: 'f1',
            label: 'Temps caractéristique RC',
            latex: '\\tau = R \\cdot C',
            comment: 'Unité : seconde (s)',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Équation différentielle de charge',
        content: `En appliquant la loi des mailles à un circuit série comprenant un générateur $E$, une résistance $R$ et un condensateur $C$, on obtient :
        
$$R \\cdot C \\frac{du_C(t)}{dt} + u_C(t) = E$$

La solution est de la forme : $$u_C(t) = E(1 - e^{-t/\\tau})$$
À $t = \\tau$, la tension atteint environ **63%** de sa valeur finale $E$.`,
        formulas: [
          {
            id: 'f2',
            label: 'Solution de charge',
            latex: 'u_C(t) = E(1 - e^{-t/\\tau})',
            comment: 'Exponentielle croissante',
          },
        ],
      },
      {
        id: 's3',
        title: '3. La Bobine et le circuit RL',
        content: `Une bobine d'inductance $L$ s'oppose aux variations brusques du courant $i(t)$. 
La tension à ses bornes est : $$u_L(t) = L \\frac{di}{dt}$$ (en négligeant la résistance interne).
Le temps caractéristique d'un circuit RL est : $$\\tau = \\frac{L}{R}$$`,
        formulas: [
          {
            id: 'f3',
            label: 'Temps caractéristique RL',
            latex: '\\tau = \\frac{L}{R}',
            comment: 'L en Henry (H)',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Calcul de constante de temps',
        difficulty: 2,
        statement: `Soit un circuit RC avec $R = 2\\,k\\Omega$ et $C = 10\\,\\mu F$. Calculez la constante de temps $\\tau$ et déterminez le temps nécessaire pour que le condensateur soit considéré comme chargé (environ $5\\tau$).`,
        hint: `Attention aux unités : $10\\,\\mu F = 10 \\cdot 10^{-6}\\,F$.`,
        solution: `1. $\\tau = R \\cdot C = 2000 \\cdot 10 \\cdot 10^{-6} = 0,02\\,s$ soit **20 ms**.
2. Le temps de charge totale ($99\\%$) est environ $5\\tau = 5 \\cdot 0,02 = 0,1\\,s$ soit **100 ms**.`,
      },
    ],
  },

  // --- PARTIE 2 : Résonance RLC (ID: term-elec-2) ---
  'term-elec-2': {
    title: "Résonance RLC",
    level: 'terminale',
    difficulty: 4,
    duration: '55 min',
    tags: ['Oscillations', 'RLC', 'Résonance'],
    intro: "L'association d'une bobine et d'un condensateur crée un système oscillant. Nous allons étudier comment ce circuit réagit à différentes fréquences d'excitation.",
    sections: [
      {
        id: 's1',
        title: '1. Oscillations Libres (Circuit RLC)',
        content: `Dans un circuit RLC série sans générateur, l'énergie bascule entre le condensateur (électrique) et la bobine (magnétique). La résistance $R$ dissipe cette énergie par effet Joule.
        
L'équation différentielle du second ordre est :
$$\\frac{d^2u_C}{dt^2} + \\frac{R}{L}\\frac{du_C}{dt} + \\frac{1}{LC}u_C = 0$$`,
        formulas: [
          {
            id: 'f1',
            label: 'Pulsation propre',
            latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}',
            comment: 'En rad/s',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Phénomène de Résonance',
        content: `Lorsqu'on force le circuit avec un générateur sinusoïdal de fréquence $f$, l'amplitude du courant $I_{max}$ dépend de $f$. Elle est maximale pour une fréquence particulière appelée **fréquence de résonance** $f_0$.
        
Condition de résonance : $$f \\approx f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$`,
        formulas: [
          {
            id: 'f2',
            label: 'Fréquence de résonance',
            latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
            comment: 'Hz',
          },
          {
            id: 'f3',
            label: 'Facteur de qualité',
            latex: 'Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}',
            comment: 'Plus Q est grand, plus la résonance est aiguë.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Accord Radio',
        difficulty: 3,
        statement: `Une antenne radio utilise un circuit RLC avec $L = 1\\,mH$. Quelle doit être la capacité $C$ du condensateur pour capter une station émettant à $f = 100\\,kHz$ ?`,
        hint: `Utilisez la formule $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ et isolez $C$.`,
        solution: `De $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, on tire $C = \\frac{1}{4\\pi^2 L f_0^2}$.
        $C = \\frac{1}{4 \\cdot 3,14^2 \\cdot 10^{-3} \\cdot (10^5)^2} \\approx 2,53 \\cdot 10^{-9}\\,F$ soit **2,53 nF**.`,
      },
    ],
  },

  // --- PARTIE 3 : Signaux périodiques (ID: term-elec-3) ---
  'term-elec-3': {
    title: "Signaux périodiques",
    level: 'terminale',
    difficulty: 2,
    duration: '40 min',
    tags: ['Sinusoïdal', 'Fréquence', 'Valeur efficace'],
    intro: "La plupart de l'énergie électrique est distribuée sous forme de courant alternatif sinusoïdal. Comprendre ses caractéristiques est essentiel pour l'électrotechnique.",
    sections: [
      {
        id: 's1',
        title: '1. Caractéristiques temporelles',
        content: `Un signal périodique se répète identique à lui-même sur un intervalle de temps appelé période $T$.
        
- **Période $T$ (s)** : Durée du motif.
- **Fréquence $f$ (Hz)** : $f = \\frac{1}{T}$
- **Pulsation $\\omega$ (rad/s)** : $\\omega = 2\\pi f$`,
        formulas: [
          {
            id: 'f1',
            label: 'Relation Fréquence/Période',
            latex: 'f = \\frac{1}{T}',
            comment: 'T en secondes, f en Hertz',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Valeurs efficaces',
        content: `La valeur efficace $U_{eff}$ d'une tension alternative est la valeur de la tension continue qui produirait le même échauffement dans une résistance.
        
Pour un signal sinusoïdal :
$$U_{eff} = \\frac{U_{max}}{\\sqrt{2}}$$
C'est cette valeur (ex: 230V) qui est généralement indiquée sur les appareils ménagers.`,
        formulas: [
          {
            id: 'f2',
            label: 'Tension efficace',
            latex: 'U_{eff} = \\frac{U_{max}}{\\sqrt{2}}',
            comment: 'Uniquement pour le sinusoïdal',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Secteur domestique',
        difficulty: 1,
        statement: `En France, la tension du secteur a une valeur efficace $U_{eff} = 230\\,V$ et une fréquence $f = 50\\,Hz$. Calculez la tension maximale $U_{max}$ et la période $T$.`,
        hint: `$U_{max} = U_{eff} \\cdot \\sqrt{2}$`,
        solution: `1. $U_{max} = 230 \\cdot \\sqrt{2} \\approx 325\\,V$.
2. $T = \\frac{1}{f} = \\frac{1}{50} = 0,02\\,s$ soit **20 ms**.`,
      },
    ],
  }, // --- MÉCANIQUE DU POINT L1 (ID: l1-meca-1) ---
  'l1-meca-1': {
    title: "Cinématique Vectorielle",
    level: 'l1',
    difficulty: 3,
    duration: '60 min',
    tags: ['Mécanique', 'Vecteurs', 'Coordonnées'],
    intro: "La cinématique est l'étude du mouvement des corps sans se soucier des causes qui le produisent. En Licence 1, nous passons d'une approche scalaire à une approche vectorielle rigoureuse dans différents systèmes de coordonnées.",
    sections: [
      {
        id: 's1',
        title: '1. Vecteurs Position, Vitesse et Accélération',
        content: `Dans un référentiel donné muni d'un repère $(O, \\vec{i}, \\vec{j}, \\vec{k})$, la position d'un point $M$ est définie par le vecteur position :
        
$$\\vec{OM}(t) = x(t)\\vec{i} + y(t)\\vec{j} + z(t)\\vec{k}$$

Le vecteur vitesse est la dérivée du vecteur position par rapport au temps :
$$\\vec{v}(t) = \\frac{d\\vec{OM}}{dt} = \\dot{x}\\vec{i} + \\dot{y}\\vec{j} + \\dot{z}\\vec{k}$$

Le vecteur accélération est la dérivée du vecteur vitesse :
$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{OM}}{dt^2} = \\ddot{x}\\vec{i} + \\ddot{y}\\vec{j} + \\ddot{z}\\vec{k}$$`,
        formulas: [
          {
            id: 'f1',
            label: 'Vitesse instantanée',
            latex: '\\vec{v} = \\frac{d\\vec{OM}}{dt}',
            comment: 'Dérivée temporelle du vecteur position.',
          },
          {
            id: 'f2',
            label: 'Accélération',
            latex: '\\vec{a} = \\frac{d\\vec{v}}{dt}',
            comment: 'Variation du vecteur vitesse.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Système de Coordonnées Polaires',
        content: `Pour les mouvements circulaires ou centraux, on utilise la base polaire $(\\vec{u_r}, \\vec{u_\\theta})$.
        
Le vecteur position s'écrit simplement :
$$\\vec{OM} = r \\cdot \\vec{u_r}$$

**Attention :** Dans cette base, les vecteurs unitaires tournent avec le point $M$, donc leur dérivée n'est pas nulle :
$$\\frac{d\\vec{u_r}}{dt} = \\dot{\\theta}\\vec{u_\\theta} \\quad \\text{et} \\quad \\frac{d\\vec{u_\\theta}}{dt} = -\\dot{\\theta}\\vec{u_r}$$

Le vecteur vitesse en polaires devient alors :
$$\\vec{v} = \\dot{r}\\vec{u_r} + r\\dot{\\theta}\\vec{u_\\theta}$$`,
        formulas: [
          {
            id: 'f3',
            label: 'Vitesse en polaires',
            latex: '\\vec{v} = \\dot{r}\\vec{u_r} + r\\dot{\\theta}\\vec{u_\\theta}',
            comment: 'Composante radiale et orthoradiale.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Repère de Frenet',
        content: `Pour une trajectoire curviligne quelconque, il est utile d'utiliser le repère local $(\\vec{\\tau}, \\vec{n})$.
        
- $\\vec{\\tau}$ est le vecteur tangent au mouvement.
- $\\vec{n}$ est le vecteur normal, dirigé vers le centre de courbure.

L'accélération se décompose en :
$$\\vec{a} = a_t\\vec{\\tau} + a_n\\vec{n} = \\frac{dv}{dt}\\vec{\\tau} + \\frac{v^2}{R}\\vec{n}$$
Où $R$ est le rayon de courbure de la trajectoire.`,
        formulas: [
          {
            id: 'f4',
            label: 'Accélération de Frenet',
            latex: '\\vec{a} = \\frac{dv}{dt}\\vec{\\tau} + \\frac{v^2}{R}\\vec{n}',
            comment: 'Fondamental pour les trajectoires courbes.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Mouvement Circulaire Uniforme',
        difficulty: 2,
        statement: `Un point $M$ décrit un cercle de rayon $R = 2\\,m$ à une vitesse angulaire constante $\\omega = 3\\,rad/s$. 
1. Calculez la norme de la vitesse $v$.
2. Déterminez la norme de l'accélération $a$. Quelle est sa direction ?`,
        hint: `En mouvement circulaire uniforme, $\\dot{r} = 0$ et $\\dot{\\theta} = \\omega$.`,
        solution: `1. La vitesse est $v = R \\cdot \\omega = 2 \\cdot 3 = 6\\,m/s$.
2. L'accélération est purement normale (centripète) car $\\dot{v} = 0$.
$a = a_n = \\frac{v^2}{R} = \\frac{6^2}{2} = 18\\,m/s^2$.
Elle est dirigée vers le centre du cercle.`,
      },
    ],
  },
}
