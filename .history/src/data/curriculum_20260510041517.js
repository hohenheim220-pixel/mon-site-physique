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
  }, // --- DYNAMIQUE NEWTONIENNE L1 (ID: l1-meca-2) ---
  'l1-meca-2': {
    title: "Dynamique Newtonienne",
    level: 'l1',
    difficulty: 4,
    duration: '75 min',
    tags: ['Newton', 'Forces', 'Lois du mouvement'],
    intro: "La dynamique étudie les causes du mouvement. Nous allons voir comment les forces appliquées à un point matériel déterminent son accélération à travers les lois de Newton.",
    sections: [
      {
        id: 's1',
        title: '1. Les Trois Lois de Newton',
        content: `La mécanique classique repose sur trois principes fondamentaux :

- **1ère Loi (Principe d'Inertie) :** Dans un référentiel galiléen, si la somme des forces est nulle, le vecteur vitesse est constant.
- **2ème Loi (PFD) :** La somme vectorielle des forces est égale à la variation de la quantité de mouvement. Pour une masse constante :
$$\\sum \\vec{F} = m \\cdot \\vec{a}$$
- **3ème Loi (Action-Réaction) :** Si un corps A exerce une force sur B, alors B exerce sur A une force opposée : $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$.`,
        formulas: [
          {
            id: 'f1',
            label: 'Principe Fondamental de la Dynamique',
            latex: '\\sum \\vec{F} = m \\cdot \\vec{a}',
            comment: 'Loi centrale de la dynamique.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Méthodologie de résolution',
        content: `Pour résoudre un problème de dynamique, il faut suivre rigoureusement ces étapes :
1. **Système :** Définir le point matériel étudié.
2. **Référentiel :** Choisir un référentiel galiléen (ex: Terrestre).
3. **Bilan des forces :** Inventorier toutes les actions (Poids $\\vec{P}$, Réaction $\\vec{R}$, Frottements $\\vec{f}$, Tension $\\vec{T}$).
4. **Projection :** Projeter la relation $\\sum \\vec{F} = m \\vec{a}$ sur les axes du repère choisi.`,
        formulas: [
          {
            id: 'f2',
            label: 'Poids terrestre',
            latex: '\\vec{P} = m \\cdot \\vec{g}',
            comment: 'g ≈ 9,81 m/s²',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Le Plan Incliné',
        difficulty: 3,
        statement: `Un bloc de masse $m = 5\\,kg$ glisse sans frottement sur un plan incliné d'un angle $\\alpha = 30^\\circ$ par rapport à l'horizontale.
1. Faites le bilan des forces.
2. Calculez l'accélération $a$ du bloc le long du plan.`,
        hint: `Projeter le poids sur l'axe parallèle au plan : $P_x = mg \\sin(\\alpha)$.`,
        solution: `1. Forces : Le poids $\\vec{P}$ (vertical) et la réaction normale $\\vec{R_n}$ (perpendiculaire au plan).
2. PFD : $\\vec{P} + \\vec{R_n} = m\\vec{a}$.
Projection sur l'axe $(Ox)$ parallèle au plan : $mg \\sin(\\alpha) = m \\cdot a$.
D'où $a = g \\sin(\\alpha) = 9,81 \\cdot \\sin(30^\\circ) = 4,9\\,m/s^2$.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Tension d\'un câble',
        difficulty: 4,
        statement: `Un ascenseur de masse $M = 800\\,kg$ monte avec une accélération verticale $a = 2\\,m/s^2$.
Calculez la tension $T$ du câble qui soutient l'ascenseur. (Prendre $g = 10\\,m/s^2$)`,
        hint: `L'accélération est vers le haut, donc $\\vec{a}$ et $\\vec{T}$ sont dans le même sens.`,
        solution: `Système : Ascenseur. Forces : Tension $\\vec{T}$ (vers le haut), Poids $\\vec{P}$ (vers le bas).
PFD sur un axe vertical orienté vers le haut :
$T - P = M \\cdot a$
$T - Mg = M \\cdot a$
$T = M(g + a) = 800(10 + 2) = 800 \\cdot 12 = 9600\\,N$.
La tension est supérieure au poids car l'ascenseur accélère vers le haut.`,
      },
    ],
  }, // --- MÉCANIQUE DU POINT L1 : ÉNERGIE (ID: l1-meca-3) ---
  'l1-meca-3': {
    title: "Travail et Énergie",
    level: 'l1',
    difficulty: 4,
    duration: '70 min',
    tags: ['Énergie', 'Travail', 'Théorèmes'],
    intro: "L'approche énergétique est une alternative puissante aux lois de Newton. Elle repose sur des grandeurs scalaires (énergie) plutôt que vectorielles, ce qui simplifie grandement l'étude des systèmes complexes.",
    sections: [
      {
        id: 's1',
        title: '1. Travail d\'une Force',
        content: `Le travail d'une force constante $\\vec{F}$ lors d'un déplacement $\\vec{AB}$ est le produit scalaire de la force par le vecteur déplacement.
        
$$W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\cdot AB \\cdot \\cos(\\alpha)$$

- Si $W > 0$ : le travail est **moteur**.
- Si $W < 0$ : le travail est **résistant** (ex: frottements).
- Si $W = 0$ : la force ne travaille pas (force perpendiculaire au mouvement).`,
        formulas: [
          {
            id: 'f1',
            label: 'Travail d\'une force constante',
            latex: 'W_{AB}(\\vec{F}) = F \\cdot d \\cdot \\cos(\\alpha)',
            comment: 'Unité : Joule (J)',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Énergie Cinétique et Théorème associé',
        content: `L'énergie cinétique est l'énergie liée au mouvement d'un point matériel de masse $m$ et de vitesse $v$.
        
$$E_c = \\frac{1}{2} m v^2$$

**Théorème de l'énergie cinétique :**
La variation de l'énergie cinétique d'un point matériel entre deux points $A$ et $B$ est égale à la somme des travaux de toutes les forces (intérieures et extérieures) appliquées au point :
$$\\Delta E_c = E_c(B) - E_c(A) = \\sum W_{AB}(\\vec{F})$$`,
        formulas: [
          {
            id: 'f2',
            label: 'Énergie Cinétique',
            latex: 'E_c = \\frac{1}{2}mv^2',
            comment: 'Toujours positive.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Énergie Mécanique et Conservation',
        content: `L'énergie mécanique $E_m$ est la somme de l'énergie cinétique et de l'énergie potentielle $E_p$ (liée à la position).
        
$$E_m = E_c + E_p$$

Pour le poids : $E_p = mgh + Cte$.
Pour un ressort : $E_p = \\frac{1}{2} kx^2 + Cte$.

**Conservation :** En l'absence de forces non-conservatives (comme les frottements), l'énergie mécanique se conserve :
$$\\Delta E_m = 0 \\implies E_m(A) = E_m(B)$$`,
        formulas: [
          {
            id: 'f3',
            label: 'Énergie Mécanique',
            latex: 'E_m = E_c + E_p',
            comment: 'Se conserve si pas de frottements.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Freinage d\'un véhicule',
        difficulty: 3,
        statement: `Une voiture de masse $m = 1000\\,kg$ roule à $v_A = 20\\,m/s$. Le conducteur freine et s'arrête sur une distance $d = 50\\,m$. 
Calculez la force de freinage moyenne $\\vec{f}$ exercée sur le véhicule en utilisant le théorème de l'énergie cinétique.`,
        hint: `La vitesse finale $v_B = 0$. Le travail de la force de freinage est $W = -f \\cdot d$.`,
        solution: `D'après le théorème de l'énergie cinétique :
$\\Delta E_c = W(\\vec{P}) + W(\\vec{R_n}) + W(\\vec{f})$
Comme $\\vec{P}$ et $\\vec{R_n}$ sont perpendiculaires au mouvement, leur travail est nul.
$E_c(B) - E_c(A) = -f \\cdot d$
$0 - \\frac{1}{2} m v_A^2 = -f \\cdot d$
$f = \\frac{m v_A^2}{2d} = \\frac{1000 \\cdot 20^2}{2 \\cdot 50} = \\frac{400000}{100} = 4000\\,N$.
La force de freinage est de **4000 N**.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Chute libre d\'une bille',
        difficulty: 3,
        statement: `On lâche une bille de masse $m = 100\\,g$ sans vitesse initiale d'une hauteur $h = 5\\,m$. 
En négligeant les frottements de l'air, calculez la vitesse $v$ de la bille juste avant qu'elle ne touche le sol. (Prendre $g = 10\\,m/s^2$)`,
        hint: `Utilisez la conservation de l'énergie mécanique entre le point de départ et le sol.`,
        solution: `L'énergie mécanique se conserve car il n'y a pas de frottements.
$E_m(départ) = E_m(sol)$
$E_c(A) + E_p(A) = E_c(B) + E_p(B)$
$0 + mgh = \\frac{1}{2}mv^2 + 0$
$v^2 = 2gh \\implies v = \\sqrt{2gh}$
$v = \\sqrt{2 \\cdot 10 \\cdot 5} = \\sqrt{100} = 10\\,m/s$.
La bille touche le sol à une vitesse de **10 m/s**.`,
      },
    ],
  }, // --- MÉCANIQUE DU POINT L1 : FORCES CENTRALES (ID: l1-meca-4) ---
  'l1-meca-4': {
    title: "Forces Centrales et Gravitation",
    level: 'l1',
    difficulty: 5,
    duration: '80 min',
    tags: ['Gravitation', 'Kepler', 'Moments Cinétiques'],
    intro: "Une force est dite centrale si sa direction passe constamment par un point fixe O. C'est le cas de la gravitation, qui régit le mouvement des astres et des satellites selon les célèbres lois de Kepler.",
    sections: [
      {
        id: 's1',
        title: '1. Définition et Propriétés',
        content: `Une force centrale s'écrit sous la forme :
$$\\vec{F} = F(r)\\vec{u_r}$$
Où $r$ est la distance au centre de force $O$.

**Propriété fondamentale :** Le moment cinétique $\\vec{L_O} = \\vec{OM} \\wedge m\\vec{v}$ d'un point matériel soumis à une force centrale est **constant**.
Conséquence : Le mouvement est nécessairement **plan**, et la loi des aires est vérifiée.`,
        formulas: [
          {
            id: 'f1',
            label: 'Loi de la Gravitation (Newton)',
            latex: '\\vec{F} = -G \\frac{M m}{r^2} \\vec{u_r}',
            comment: 'Force toujours attractive.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Énergie en Force Centrale',
        content: `La force de gravitation est conservative. On lui associe une énergie potentielle de gravitation :
$$E_p(r) = -\\frac{GMm}{r}$$
(On choisit $E_p \\to 0$ quand $r \\to \\infty$).

L'énergie mécanique totale est :
$$E_m = \\frac{1}{2}mv^2 - \\frac{GMm}{r}$$

- Si $E_m < 0$ : L'objet est **lié** (trajectoire circulaire ou elliptique).
- Si $E_m \\ge 0$ : L'objet est **libre** (trajectoire parabolique ou hyperbolique).`,
        formulas: [
          {
            id: 'f2',
            label: 'Énergie Potentielle Gravitationnelle',
            latex: 'E_p = -G \\frac{Mm}{r}',
            comment: 'Négative car la force est attractive.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Les Lois de Kepler',
        content: `1. **Loi des orbites :** Les planètes décrivent des ellipses dont le Soleil occupe l'un des foyers.
2. **Loi des aires :** Le segment reliant le Soleil à la planète balaie des aires égales en des temps égaux.
3. **Loi des périodes :** Le carré de la période de révolution $T$ est proportionnel au cube du demi-grand axe $a$ :
$$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM_{soleil}}$$`,
        formulas: [
          {
            id: 'f3',
            label: '3ème loi de Kepler',
            latex: '\\frac{T^2}{a^3} = \\text{Cte}',
            comment: 'La constante ne dépend que de la masse de l\'astre central.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Vitesse d\'un satellite',
        difficulty: 4,
        statement: `Un satellite de masse $m$ est en orbite circulaire autour de la Terre (masse $M_T$) à une altitude $h$. Soit $R_T$ le rayon de la Terre.
1. Exprimer la vitesse orbitale $v$ du satellite.
2. Calculez $v$ pour l'ISS qui orbite à environ $400\\,km$ d'altitude. 
($G = 6,67 \\cdot 10^{-11}$, $M_T = 5,97 \\cdot 10^{24}\\,kg$, $R_T = 6370\\,km$).`,
        hint: `En orbite circulaire, l'accélération est normale : $a = v^2/r$ avec $r = R_T + h$.`,
        solution: `1. D'après le PFD : $G\\frac{M_Tm}{r^2} = m\\frac{v^2}{r} \\implies v = \\sqrt{\\frac{GM_T}{R_T + h}}$.
2. Application numérique : $r = 6370 + 400 = 6770\\,km = 6,77 \\cdot 10^6\\,m$.
$v = \\sqrt{\\frac{6,67 \\cdot 10^{-11} \\cdot 5,97 \\cdot 10^{24}}{6,77 \\cdot 10^6}} \\approx \\sqrt{5,88 \\cdot 10^7} \\approx 7670\\,m/s$.
L'ISS file à environ **27 600 km/h**.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Masse de Jupiter',
        difficulty: 4,
        statement: `Io, un satellite de Jupiter, a une période de révolution $T = 1,77$ jours terrestres et un rayon orbital moyen $r = 4,22 \\cdot 10^5\\,km$.
En utilisant la 3ème loi de Kepler, déterminez la masse $M_J$ de Jupiter.`,
        hint: `Convertissez $T$ en secondes et $r$ en mètres avant de calculer.`,
        solution: `D'après la 3ème loi de Kepler : $M_J = \\frac{4\\pi^2 r^3}{G T^2}$.
- $T = 1,77 \\cdot 24 \\cdot 3600 \\approx 1,53 \\cdot 10^5\\,s$.
- $r = 4,22 \\cdot 10^8\\,m$.
$M_J = \\frac{4 \\cdot (3,14)^2 \\cdot (4,22 \\cdot 10^8)^3}{6,67 \\cdot 10^{-11} \\cdot (1,53 \\cdot 10^5)^2} \\approx \\frac{39,44 \\cdot 7,51 \\cdot 10^{25}}{1,56 \\cdot 10^0} \\approx 1,9 \\cdot 10^{27}\\,kg$.
C'est environ **318 fois la masse de la Terre**.`,
      },
    ],
  }, // --- MÉCANIQUE DU POINT L1 : RÉFÉRENTIELS NON-INERTIELS (ID: l1-meca-5) ---
  'l1-meca-5': {
    title: "Référentiels Non-Inertiels",
    level: 'l1',
    difficulty: 5,
    duration: '90 min',
    tags: ['Coriolis', 'Inertie', 'Relativité du mouvement'],
    intro: "Les lois de Newton ne sont valables que dans les référentiels galiléens. Pour étudier le mouvement dans un cadre accéléré ou en rotation (comme la Terre), nous devons introduire des forces fictives appelées forces d'inertie.",
    sections: [
      {
        id: 's1',
        title: '1. Composition des Mouvements',
        content: `Soit $R$ un référentiel galiléen et $R'$ un référentiel en mouvement par rapport à $R$. 
        
L'accélération d'un point $M$ dans $R$ (absolue) est la somme de trois termes :
$$\\vec{a_a} = \\vec{a_r} + \\vec{a_e} + \\vec{a_c}$$

- $\\vec{a_r}$ : Accélération relative (dans $R'$).
- $\\vec{a_e}$ : Accélération d'entraînement (mouvement de $R'$ / $R$).
- $\\vec{a_c}$ : Accélération de Coriolis (interaction entre rotation et vitesse relative).`,
        formulas: [
          {
            id: 'f1',
            label: 'Loi de composition des accélérations',
            latex: '\\vec{a_a} = \\vec{a_r} + \\vec{a_e} + \\vec{a_c}',
            comment: 'Fondement de la dynamique en référentiel non-galiléen.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Le PFD en Référentiel Non-Inertiel',
        content: `Pour appliquer la deuxième loi de Newton dans un référentiel non-galiléen $R'$, on écrit :
$$m\\vec{a_r} = \\sum \\vec{F}_{réelles} + \\vec{f_{ie}} + \\vec{f_{ic}}$$

Où les forces d'inertie sont définies par :
- **Force d'inertie d'entraînement :** $\\vec{f_{ie}} = -m\\vec{a_e}$
- **Force d'inertie de Coriolis :** $\\vec{f_{ic}} = -m\\vec{a_c} = -2m(\\vec{\\Omega} \\wedge \\vec{v_r})$
*(Où $\\vec{\\Omega}$ est le vecteur rotation de $R'/R$)*.`,
        formulas: [
          {
            id: 'f2',
            label: 'Force de Coriolis',
            latex: '\\vec{f_{ic}} = -2m(\\vec{\\Omega} \\wedge \\vec{v_r})',
            comment: 'Nulle si le point est au repos dans R\'.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Applications Classiques',
        content: `Deux cas majeurs sont étudiés en L1 :
1. **Accélération de translation :** Un bus qui freine. La force d'inertie pousse les passagers vers l'avant.
2. **Rotation (Force centrifuge) :** Dans un manège, la force d'inertie d'entraînement $\\vec{f_{ie}}$ nous pousse vers l'extérieur :
$$\\vec{f_{ie}} = m\\omega^2\\vec{HM}$$
Où $H$ est la projection de $M$ sur l'axe de rotation.`,
        formulas: [
          {
            id: 'f3',
            label: 'Force centrifuge',
            latex: 'f_{cf} = m\\omega^2 r',
            comment: 'Cas d\'une rotation uniforme.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Le Pendule dans le Train',
        difficulty: 4,
        statement: `Un train accélère horizontalement avec une accélération constante $a_0$. Un pendule de masse $m$ suspendu au plafond s'incline d'un angle $\\theta$ vers l'arrière.
Déterminez l'expression de $\\tan(\\theta)$ en fonction de $a_0$ et $g$.`,
        hint: `Travaillez dans le référentiel du train. Le poids, la tension et la force d'inertie d'entraînement s'équilibrent au repos relatif.`,
        solution: `Dans le référentiel $R'$ du train (non-galiléen) :
1. Bilan des forces : Poids $\\vec{P}$, Tension $\\vec{T}$, Force d'inertie $\\vec{f_{ie}} = -m\\vec{a_0}$.
2. À l'équilibre dans $R'$ : $\\vec{P} +\\vec{T} + \\vec{f_{ie}} = \\vec{0}$.
3. Projection :
- Sur l'horizontale : $T\\sin(\\theta) - ma_0 = 0 \\implies T\\sin(\\theta) = ma_0$.
- Sur la verticale : $T\\cos(\\theta) - mg = 0 \\implies T\\cos(\\theta) = mg$.
4. En faisant le rapport : $\\tan(\\theta) = \\frac{a_0}{g}$.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Déviation vers l\'Est',
        difficulty: 5,
        statement: `On lâche une bille sans vitesse initiale d'une tour de hauteur $H$. À cause de la rotation de la Terre (force de Coriolis), la bille ne tombe pas exactement à la verticale mais subit une petite déviation. 
Dans quel sens la force de Coriolis agit-elle pour une chute dans l'hémisphère Nord ?`,
        hint: `Utilisez la règle de la main droite pour le produit scalaire $-2m(\\vec{\\Omega} \\wedge \\vec{v_r})$. $\\vec{\\Omega}$ pointe vers le Nord, $\\vec{v_r}$ vers le bas.`,
        solution: `1. Le vecteur rotation de la Terre $\\vec{\\Omega}$ est dirigé du Sud vers le Nord (parallèle à l'axe des pôles).
2. Le vecteur vitesse relative $\\vec{v_r}$ est dirigé vers le centre de la Terre (vertical bas).
3. La force de Coriolis est $\\vec{f_{ic}} = -2m(\\vec{\\Omega} \\wedge \\vec{v_r})$.
4. Le produit vectoriel $\\vec{\\Omega} \\wedge \\vec{v_r}$ donne un vecteur vers l'Ouest.
5. Avec le signe "moins", la force $\\vec{f_{ic}}$ est donc dirigée vers l'**Est**.
C'est ce qu'on appelle la déviation vers l'Est.`,
      },
    ],
  }, // --- ÉLECTROCINÉTIQUE L1 : BASES ET LOIS DE KIRCHHOFF (ID: l1-elec-1) ---
  'l1-elec-1': {
    title: "Lois des mailles et des nœuds",
    level: 'l1',
    difficulty: 2,
    duration: '50 min',
    tags: ['Kirchhoff', 'Électrocinétique', 'Bases'],
    intro: "L'analyse de circuit repose sur deux principes de conservation fondamentaux : la conservation de la charge et celle de l'énergie. Ces principes se traduisent par les lois de Kirchhoff, outils universels pour tout électronicien.",
    sections: [
      {
        id: 's1',
        title: '1. La Loi des Nœuds (Conservation de la charge)',
        content: `Un nœud est un point de jonction où convergent au moins trois conducteurs. La loi des nœuds stipule que la somme des intensités des courants arrivant à un nœud est égale à la somme des intensités des courants qui en partent.
        
En notation algébrique, si l'on compte positivement les courants entrants et négativement les sortants :
$$\\sum_{k=1}^{n} \\epsilon_k I_k = 0$$

C'est une loi topologique : elle ne dépend pas de la nature des composants, mais seulement de la structure du réseau.`,
        formulas: [
          {
            id: 'f1',
            label: 'Loi des Nœuds',
            latex: '\\sum I_{entrante} = \\sum I_{sortante}',
            comment: 'Principe de conservation de la charge électrique.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. La Loi des Mailles (Conservation de l\'énergie)',
        content: `Une maille est un contour fermé d'un circuit. La loi des mailles exprime que la somme algébrique des tensions rencontrées le long de ce contour est nulle.
        
$$\\sum_{k=1}^{n} U_k = 0$$

**Règle de signe :** On choisit un sens de parcours arbitraire. Une tension est comptée positivement si elle est dans le sens du parcours, négativement sinon.`,
        formulas: [
          {
            id: 'f2',
            label: 'Loi des Mailles',
            latex: '\\sum U_k = 0',
            comment: 'La circulation du champ électrique sur un contour fermé est nulle.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Les outils de simplification : Diviseurs',
        content: `Pour éviter de résoudre des systèmes d'équations trop longs, on utilise des "raccourcis" mathématiques :
        
- **Pont diviseur de tension :** Utile pour trouver la tension aux bornes d'une résistance dans une branche série.
$$U_2 = E \\cdot \\frac{R_2}{R_1 + R_2}$$

- **Pont diviseur de courant :** Utile pour trouver la répartition du courant dans deux branches en parallèle.
$$I_1 = I \\cdot \\frac{R_2}{R_1 + R_2}$$ (Notez l'inversion des indices !)`,
        formulas: [
          {
            id: 'f3',
            label: 'Diviseur de tension',
            latex: 'U_k = E \\cdot \\frac{R_k}{R_{tot}}',
            comment: 'Uniquement pour des résistances en série.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Application de la loi des nœuds',
        difficulty: 1,
        statement: `Dans un nœud de circuit, on mesure trois courants entrants : $I_1 = 1,2\\,A$, $I_2 = 0,8\\,A$ et $I_3 = 2,5\\,A$. Un seul fil repart du nœud avec un courant $I_4$. 
Quelle est l'intensité $I_4$ ?`,
        hint: `Appliquez la conservation du débit de charges : ce qui entre doit sortir.`,
        solution: `Selon la loi des nœuds :
$\\sum I_{entrante} = \\sum I_{sortante}$
$I_1 + I_2 + I_3 = I_4$
$1,2 + 0,8 + 2,5 = I_4 \\implies I_4 = 4,5\\,A$.
Le courant sortant est de **4,5 Ampères**.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Pont diviseur et loi des mailles',
        difficulty: 3,
        statement: `Un circuit est composé d'une pile $E = 12\\,V$ et de deux résistances en série $R_1 = 400\\,\\Omega$ et $R_2 = 800\\,\\Omega$. 
1. Calculez la tension $U_2$ aux bornes de $R_2$ par la loi des mailles.
2. Vérifiez le résultat avec la formule du diviseur de tension.`,
        hint: `En série, le courant $I$ est le même partout. $I = E / (R_1 + R_2)$.`,
        solution: `**1. Par la loi des mailles :**
L'intensité est $I = \\frac{E}{R_1 + R_2} = \\frac{12}{1200} = 0,01\\,A$.
La tension $U_2 = R_2 \\cdot I = 800 \\cdot 0,01 = 8\\,V$.

**2. Par le diviseur de tension :**
$U_2 = E \\cdot \\frac{R_2}{R_1 + R_2} = 12 \\cdot \\frac{800}{1200} = 12 \\cdot \\frac{2}{3} = 8\\,V$.
Les deux méthodes confirment que la tension est de **8 Volts**.`,
      },
    ],
  }, // --- ÉLECTROCINÉTIQUE L1 : RÉGIMES TRANSITOIRES (ID: l1-elec-2) ---
  'l1-elec-2': {
    title: "Régimes transitoires RC, RL, RLC",
    level: 'l1',
    difficulty: 4,
    duration: '65 min',
    tags: ['Équations Différentielles', 'Condensateur', 'Inductance'],
    intro: "Un régime transitoire est l'évolution d'un circuit entre deux états permanents (par exemple, lors de la fermeture d'un interrupteur). C'est ici que la physique rejoint le calcul différentiel pour décrire la 'mémoire' des composants réactifs.",
    sections: [
      {
        id: 's1',
        title: '1. Circuits du Premier Ordre (RC et RL)',
        content: `Ces circuits contiennent un seul composant capable de stocker de l'énergie ($C$ ou $L$). Leur comportement est régi par une équation différentielle linéaire du premier ordre.
        
**Cas du circuit RC (Charge) :**
$$R C \\frac{du_c}{dt} + u_c = E$$
La solution est de la forme : $u_c(t) = E(1 - e^{-t/\\tau})$ avec $\\tau = RC$.

**Cas du circuit RL :**
$$\\frac{L}{R} \\frac{di}{dt} + i = \\frac{E}{R}$$
La solution est : $i(t) = \\frac{E}{R}(1 - e^{-t/\\tau})$ avec $\\tau = L/R$.

**La constante de temps $\\tau$ :** Elle représente le temps nécessaire pour atteindre environ $63\\%$ de la valeur finale. On considère le régime permanent établi après $5\\tau$ ($99\\%$).`,
        formulas: [
          {
            id: 'f1',
            label: 'Constante de temps RC',
            latex: '\\tau = R \\cdot C',
            comment: 'Unité : seconde (s).',
          },
          {
            id: 'f2',
            label: 'Constante de temps RL',
            latex: '\\tau = \\frac{L}{R}',
            comment: 'L en Henry (H), R en Ohm (Ω).',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Circuits du Second Ordre (RLC Série)',
        content: `Le circuit RLC possède deux réservoirs d'énergie qui peuvent s'échanger des charges. Cela introduit la possibilité d'oscillations.
        
L'équation différentielle porte sur la charge $q(t)$ ou la tension $u_c(t)$ :
$$\\frac{d^2u_c}{dt^2} + \\frac{R}{L}\\frac{du_c}{dt} + \\frac{1}{LC}u_c = \\frac{E}{LC}$$

On définit la pulsation propre $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ et le facteur de qualité $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.`,
        formulas: [
          {
            id: 'f3',
            label: 'Pulsation propre',
            latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}',
            comment: 'Détermine la fréquence naturelle d\'oscillation.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Les Trois Régimes du RLC',
        content: `Le comportement dépend de la valeur de la résistance par rapport à la résistance critique $R_c = 2\\sqrt{\\frac{L}{C}}$ :

1.  **Régime Pseudo-périodique ($R < R_c$) :** Le système oscille avec une amplitude qui décroît exponentiellement.
2.  **Régime Critique ($R = R_c$) :** Le système revient à l'équilibre le plus rapidement possible sans osciller.
3.  **Régime Apériodique ($R > R_c$) :** Le système est trop amorti, le retour à l'équilibre est lent et sans oscillations.`,
        formulas: [
          {
            id: 'f4',
            label: 'Résistance critique',
            latex: 'R_c = 2\\sqrt{\\frac{L}{C}}',
            comment: 'Frontière entre oscillation et amortissement pur.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Chronophotographie d\'un condensateur',
        difficulty: 3,
        statement: `On charge un condensateur $C = 470\\,\\mu F$ à travers une résistance $R = 10\\,k\\Omega$ avec une source $E = 12\\,V$.
1. Calculez la constante de temps $\\tau$.
2. Au bout de combien de temps la tension aux bornes du condensateur atteindra-t-elle $11,4\\,V$ (soit $95\\%$ de $E$) ?`,
        hint: `Utilisez la solution $u_c(t) = E(1 - e^{-t/\\tau})$. On sait que $95\\%$ est atteint pour $t \\approx 3\\tau$.`,
        solution: `1. $\\tau = RC = 10 \\cdot 10^3 \\cdot 470 \\cdot 10^{-6} = 4,7\\,s$.
2. On cherche $t$ tel que $1 - e^{-t/\\tau} = 0,95 \\implies e^{-t/\\tau} = 0,05$.
En prenant le logarithme : $-t/\\tau = \\ln(0,05) \\approx -3$.
D'où $t = 3\\tau = 3 \\cdot 4,7 = 14,1\\,s$.
Le condensateur est presque chargé en environ **14 secondes**.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Diagnostic d\'un circuit RLC',
        difficulty: 4,
        statement: `Soit un circuit RLC série avec $L = 0,1\\,H$ et $C = 10\\,nF$. 
Quelle valeur de résistance $R$ permet d'obtenir un régime critique ?`,
        hint: `Le régime critique est obtenu pour $R = R_c = 2\\sqrt{L/C}$.`,
        solution: `$R_c = 2\\sqrt{\\frac{0,1}{10 \\cdot 10^{-9}}} = 2\\sqrt{\\frac{10^{-1}}{10^{-8}}} = 2\\sqrt{10^7} = 2 \\cdot 3162 \\approx 6324\\,\\Omega$.
Pour obtenir un régime critique, il faut une résistance d'environ **6,32 kΩ**.`,
      },
    ],
  }, // --- ÉLECTROCINÉTIQUE L1 : RÉGIME SINUSOÏDAL FORCÉ (ID: l1-elec-3) ---
  'l1-elec-3': {
    title: "Régime sinusoïdal forcé — impédances",
    level: 'l1',
    difficulty: 5,
    duration: '70 min',
    tags: ['Nombres Complexes', 'Impédance', 'Résonance'],
    intro: "En régime sinusoïdal permanent, toutes les tensions et courants oscillent à la même fréquence que le générateur. L'utilisation des complexes permet de transformer les problèmes différentiels en simples calculs algébriques.",
    sections: [
      {
        id: 's1',
        title: '1. Représentation Complexe et Impédance',
        content: `À toute grandeur réelle $s(t) = S_0 \\cos(\\omega t + \\phi)$, on associe une grandeur complexe $\\underline{s} = S_0 e^{j(\\omega t + \\phi)}$. 
        
L'**impédance complexe** $\\underline{Z}$ généralise la loi d'Ohm : $\\underline{U} = \\underline{Z} \\cdot \\underline{I}$.

- **Résistance :** $\\underline{Z_R} = R$ (tension et courant en phase).
- **Inductance :** $\\underline{Z_L} = jL\\omega$ (le courant est en retard de $90^\\circ$).
- **Condensateur :** $\\underline{Z_C} = \\frac{1}{jC\\omega} = -\\frac{j}{C\\omega}$ (le courant est en avance de $90^\\circ$).`,
        formulas: [
          {
            id: 'f1',
            label: 'Loi d\'Ohm complexe',
            latex: '\\underline{U} = \\underline{Z} \\cdot \\underline{I}',
            comment: 'Z dépend de la pulsation ω.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Puissance en Régime Sinusoïdal',
        content: `La puissance instantanée oscille, on utilise donc la **puissance moyenne** (ou active) :
$$P = U_{eff} I_{eff} \\cos(\\phi)$$
Où $\\cos(\\phi)$ est le **facteur de puissance**. 

Pour maximiser le transfert d'énergie, il faut que ce facteur soit proche de 1. Les condensateurs et bobines ne consomment pas de puissance active (ils ne font qu'échanger de l'énergie réactive).`,
        formulas: [
          {
            id: 'f2',
            label: 'Puissance Active',
            latex: 'P = U \\cdot I \\cdot \\cos(\\phi)',
            comment: 'Seule la résistance dissipe de la chaleur.',
          },
        ],
      },
      {
        id: 's3',
        title: '3. Phénomène de Résonance',
        content: `Dans un circuit RLC série, l'impédance totale est minimale à une fréquence précise appelée **fréquence de résonance**.
        
À la résonance ($\\omega = \\omega_0$) :
- L'impédance est purement réelle : $Z = R$.
- L'intensité $I$ est maximale.
- Les tensions aux bornes de $L$ et $C$ peuvent être bien supérieures à la tension du générateur (phénomène de surtension).`,
        formulas: [
          {
            id: 'f3',
            label: 'Fréquence de résonance',
            latex: 'f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
            comment: 'C\'est là que le circuit "vibre" le mieux.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Exercice 1 : Calcul d\'impédance équivalente',
        difficulty: 3,
        statement: `Un haut-parleur est modélisé par une résistance $R = 8\\,\\Omega$ en série avec une bobine $L = 0,5\\,mH$. 
Calculez le module de l'impédance $|Z|$ à une fréquence de $1\\,kHz$.`,
        hint: `Calculez d'abord $\\omega = 2\\pi f$, puis $|Z| = \\sqrt{R^2 + (L\\omega)^2}$.`,
        solution: `1. $\\omega = 2 \\cdot \\pi \\cdot 1000 \\approx 6283\\,rad/s$.
2. Réactance de la bobine : $L\\omega = 0,0005 \\cdot 6283 \\approx 3,14\\,\\Omega$.
3. $|Z| = \\sqrt{8^2 + 3,14^2} = \\sqrt{64 + 9,86} \\approx 8,6\\,\\Omega$.
L'impédance totale à cette fréquence est de **8,6 Ω**.`,
      },
      {
        id: 'ex2',
        title: 'Exercice 2 : Facteur de Qualité',
        difficulty: 4,
        statement: `Un circuit RLC série possède les valeurs suivantes : $L = 10\\,mH$, $C = 100\\,nF$, $R = 10\\,\\Omega$. 
Calculez le facteur de qualité $Q$. Le circuit est-il très sélectif ?`,
        hint: `$Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$. Plus $Q$ est grand, plus la résonance est pointue.`,
        solution: `$Q = \\frac{1}{10} \\sqrt{\\frac{10 \\cdot 10^{-3}}{100 \\cdot 10^{-9}}} = \\frac{1}{10} \\sqrt{10^5} \\approx \\frac{316}{10} = 31,6$.
Avec un $Q > 10$, le circuit est considéré comme **très sélectif** (la bande passante est étroite).`,
      },
    ],
  }, // --- ONDES ET VIBRATIONS L1 : ÉQUATION DES ONDES (ID: l1-onde-1) ---
  'l1-onde-1': {
    title: "Équation des ondes 1D",
    level: 'l1',
    difficulty: 3,
    duration: '60 min',
    tags: ['Ondes', 'D\'Alembert', 'Propagation'],
    intro: "Une onde est la propagation d'une perturbation sans transport de matière, mais avec transport d'énergie. Nous allons étudier ici le modèle fondamental : l'onde se déplaçant sur une corde tendue.",
    sections: [
      {
        id: 's1',
        title: '1. L\'Équation de D\'Alembert',
        content: `Pour une onde se propageant selon l'axe $x$, l'amplitude $s(x,t)$ vérifie l'équation aux dérivées partielles suivante :
$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$
Où $v$ est la célérité (vitesse de propagation) de l'onde.

**Solution générale :** Toute fonction de la forme $f(x - vt) + g(x + vt)$ est solution. Cela représente la superposition d'une onde progressive (vers les $x > 0$) et d'une onde régressive (vers les $x < 0$).`,
        formulas: [
          {
            id: 'f1',
            label: 'Équation de D\'Alembert',
            latex: '\\Delta s - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0',
            comment: 'Modèle de base de la propagation.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Célérité sur une corde tendue',
        content: `Pour une corde de masse linéique $\\mu$ (en $kg/m$) soumise à une tension $T$ (en Newton), la vitesse de propagation est :
$$v = \\sqrt{\\frac{T}{\\mu}}$$
Plus la corde est tendue ou légère, plus l'onde voyage vite.`,
        formulas: [
          {
            id: 'f2',
            label: 'Vitesse sur une corde',
            latex: 'v = \\sqrt{T/\\mu}',
            comment: 'Dépend des propriétés mécaniques du milieu.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Calcul de célérité',
        difficulty: 2,
        statement: `Une corde de guitare a une masse de $5\\,g$ pour une longueur de $1\\,m$. Elle est tendue avec une force de $450\\,N$. Calculez la vitesse des ondes sur cette corde.`,
        hint: `Vérifiez bien les unités : la masse linéique $\\mu$ doit être en $kg/m$.`,
        solution: `1. Masse linéique $\\mu = 0,005\\,kg / 1\\,m = 0,005\\,kg/m$.
2. $v = \\sqrt{450 / 0,005} = \\sqrt{90\\,000} = 300\\,m/s$.
La vitesse de l'onde est de **300 m/s**.`,
      },
      {
        id: 'ex2',
        title: 'Sens de propagation',
        difficulty: 2,
        statement: `Une onde est décrite par $s(x,t) = A \\cos(kx + \\omega t)$. Dans quel sens se déplace-t-elle ?`,
        hint: `Regardez le signe devant le terme temporel par rapport au terme spatial.`,
        solution: `L'argument est de la forme $(kx + \\omega t)$, ce qui équivaut à $k(x + vt)$ avec $v = \\omega/k$. 
Comme c'est un signe '+', l'onde se déplace vers les **x négatifs** (onde régressive).`,
      },
    ],
  },

  // --- ONDES ET VIBRATIONS L1 : ONDES STATIONNAIRES (ID: l1-onde-2) ---
  'l1-onde-2': {
    title: "Ondes stationnaires",
    level: 'l1',
    difficulty: 4,
    duration: '55 min',
    tags: ['Résonance', 'Nœuds', 'Vantres'],
    intro: "Lorsque deux ondes identiques se propagent en sens inverse (souvent après réflexion), elles interfèrent pour créer une onde qui ne 'voyage' plus : l'onde stationnaire.",
    sections: [
      {
        id: 's1',
        title: '1. Structure de l\'onde stationnaire',
        content: `L'amplitude résulte de la somme : $s(x,t) = A \\cos(kx - \\omega t) + A \\cos(kx + \\omega t)$.
Par trigonométrie, on obtient :
$$s(x,t) = 2A \\cos(kx) \\cos(\\omega t)$$

Il y a séparation des variables :
- **Nœuds :** Points où l'amplitude est toujours nulle ($\\cos(kx) = 0$).
- **Ventres :** Points où l'amplitude d'oscillation est maximale.`,
        formulas: [
          {
            id: 'f1',
            label: 'Forme stationnaire',
            latex: 's(x,t) = f(x) \\cdot g(t)',
            comment: 'L\'espace et le temps sont découplés.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Modes propres (Corde fixée)',
        content: `Pour une corde de longueur $L$ fixée aux deux bouts, seules certaines fréquences peuvent exister. La condition aux limites impose que $L$ soit un multiple de demi-longueurs d'onde :
$$L = n \\frac{\\lambda_n}{2} \\implies f_n = n \\frac{v}{2L}$$
Où $n$ est un entier appelé mode harmonique. $n=1$ est le fondamental.`,
        formulas: [
          {
            id: 'f2',
            label: 'Fréquences harmoniques',
            latex: 'f_n = n \\cdot f_1',
            comment: 'Base de l\'acoustique musicale.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Modes d\'une corde',
        difficulty: 3,
        statement: `Quelle est la longueur d'onde du mode fondamental pour une corde de longueur $L = 80\\,cm$ ?`,
        hint: `Pour le fondamental ($n=1$), il n'y a qu'un fuseau.`,
        solution: `$L = \\lambda/2 \\implies \\lambda = 2L = 2 \\cdot 80 = 160\\,cm = 1,6\\,m$.`,
      },
    ],
  },

  // --- ONDES ET VIBRATIONS L1 : ACOUSTIQUE (ID: l1-onde-3) ---
  'l1-onde-3': {
    title: "Acoustique — ondes sonores",
    level: 'l1',
    difficulty: 3,
    duration: '50 min',
    tags: ['Son', 'Décibels', 'Pression'],
    intro: "Le son est une onde de compression-dilatation dans un fluide (air, eau). Nous allons lier la perception auditive aux grandeurs physiques de pression et de puissance.",
    sections: [
      {
        id: 's1',
        title: '1. Pression et Vitesse du son',
        content: `L'onde sonore est une variation locale de la pression autour de la pression atmosphérique. Dans l'air à $20^\\circ C$, la célérité est d'environ $340\\,m/s$.
        
Elle dépend de la température : $v \\propto \\sqrt{T_{Kelvin}}$.`,
        formulas: [
          {
            id: 'f1',
            label: 'Vitesse dans l\'air',
            latex: 'v \\approx 340\\,m/s',
            comment: 'À température ambiante.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Niveau d\'intensité sonore (Décibels)',
        content: `L'oreille humaine a une réponse logarithmique. On définit le niveau $L$ en décibels (dB) par :
$$L = 10 \\log_{10} \\left( \\frac{I}{I_0} \\right)$$
Où $I_0 = 10^{-12}\\,W/m^2$ est le seuil d'audibilité.`,
        formulas: [
          {
            id: 'f2',
            label: 'Niveau sonore',
            latex: 'L_{dB} = 10 \\log(I/I_0)',
            comment: 'Une augmentation de 3 dB correspond à un doublement de l\'intensité.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Addition de sources sonores',
        difficulty: 4,
        statement: `Un aspirateur produit $70\\,dB$. Quel est le niveau sonore si on allume un deuxième aspirateur identique à côté ?`,
        hint: `On additionne les intensités $I$, pas les décibels directement !`,
        solution: `1. $70\\,dB$ correspond à une intensité $I$.
2. Deux sources doublent l'intensité : $I_{total} = 2I$.
3. $L' = 10 \\log(2I/I_0) = 10 \\log(I/I_0) + 10 \\log(2) = 70 + 3 = 73\\,dB$.
Le niveau monte à **73 dB**.`,
      },
    ],
  }, // --- MÉCANIQUE DU SOLIDE L2 : CINÉMATIQUE (ID: l2-sol-1) ---
  'l2-sol-1': {
    title: "Cinématique du solide indéformable",
    level: 'l2',
    difficulty: 4,
    duration: '70 min',
    tags: ['Torseur', 'Champ des vitesses', 'Liaisons'],
    intro: "Un solide indéformable est un ensemble de points dont les distances mutuelles restent constantes. L'étude de son mouvement repose sur un outil mathématique puissant : le torseur cinématique.",
    sections: [
      {
        id: 's1',
        title: '1. Champ des vecteurs vitesses',
        content: `Pour deux points $A$ et $B$ d'un solide $S$, la relation fondamentale (formule de transport des vitesses) est :
$$\\vec{v}(B \\in S/R) = \\vec{v}(A \\in S/R) + \\vec{BA} \\wedge \\vec{\\Omega}(S/R)$$
Où $\\vec{\\Omega}(S/R)$ est le vecteur rotation du solide par rapport au référentiel $R$. 

Cette relation montre que le champ des vitesses est un champ de vecteurs équiprojectif, ce qui définit la structure de **torseur cinématique**.`,
        formulas: [
          {
            id: 'f1',
            label: 'Formule de Varignon',
            latex: '\\vec{v}_B = \\vec{v}_A + \\vec{\\Omega} \\wedge \\vec{AB}',
            comment: 'Attention au sens du produit vectoriel.',
          },
        ],
      },
      {
        id: 's2',
        title: '2. Torseur Cinématique',
        content: `Le mouvement du solide est entièrement décrit au point $A$ par :
$$\\{V(S/R)\\} = \\begin{Bmatrix} \\vec{\\Omega}(S/R) \\\\ \\vec{v}(A \\in S/R) \\end{Bmatrix}_A$$
- **La résultante :** $\\vec{\\Omega}$ (vecteur rotation, identique en tout point).
- **Le moment :** $\\vec{v}_A$ (vitesse du point $A$, dépend du point choisi).`,
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Vitesse d\'un point distant',
        difficulty: 3,
        statement: `Un solide tourne à $\\omega = 10\\,rad/s$ autour de l'axe $(Oz)$. On sait qu'au point $O(0,0,0)$, la vitesse est nulle. Calculez la vitesse au point $M(0, 0.5, 0)$.`,
        hint: `Utilisez $\\vec{v}_M = \\vec{v}_O + \\vec{\\Omega} \\wedge \\vec{OM}$ avec $\\vec{\\Omega} = 10\\vec{k}$.`,
        solution: `$\\vec{v}_M = \\vec{0} + (10\\vec{k}) \\wedge (0,5\\vec{j})$.
Le produit vectoriel $\\vec{k} \\wedge \\vec{j} = -\\vec{i}$.
Donc $\\vec{v}_M = -5\\vec{i}\\,m/s$.
Le module de la vitesse est de **5 m/s**.`,
      },
    ],
  },

  // --- MÉCANIQUE DU SOLIDE L2 : MOMENT ET INERTIE (ID: l2-sol-2) ---
  'l2-sol-2': {
    title: "Moment cinétique et tenseur d'inertie",
    level: 'l2',
    difficulty: 5,
    duration: '85 min',
    tags: ['Tenseur', 'Matrice d\'inertie', 'Huygens'],
    intro: "La répartition de la masse dans un solide influence sa résistance au mouvement de rotation. C'est ce qu'on appelle l'inertie.",
    sections: [
      {
        id: 's1',
        title: '1. Le Tenseur d\'Inertie',
        content: `L'inertie d'un solide est représentée par une matrice symétrique $[I_A(S)]$. Ses termes diagonaux sont les moments d'inertie par rapport aux axes, et les termes extra-diagonaux sont les produits d'inertie.
        
Pour un solide homogène, on calcule : $I_{Oz} = \\iiint (x^2+y^2) \\rho \\, dV$.`,
      },
      {
        id: 's2',
        title: '2. Théorème de Huygens',
        content: `Il permet de calculer le moment d'inertie par rapport à un axe quelconque si on connaît celui par rapport à l'axe passant par le centre d'inertie $G$ :
$$I_{\\Delta} = I_{\\Delta_G} + M \\cdot d^2$$
Où $d$ est la distance entre les deux axes parallèles.`,
        formulas: [
          {
            id: 'f2',
            label: 'Théorème de Huygens',
            latex: 'J_{\\Delta} = J_{\\Delta_G} + Md^2',
            comment: 'Essentiel pour simplifier les calculs.',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Inertie d\'une tige',
        difficulty: 4,
        statement: `Le moment d'inertie d'une tige de masse $M$ et longueur $L$ par rapport à son centre est $I_G = \\frac{1}{12}ML^2$. Quel est son moment d'inertie par rapport à l'une de ses extrémités ?`,
        hint: `Appliquez Huygens avec $d = L/2$.`,
        solution: `$I_{ext} = \\frac{1}{12}ML^2 + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{4}{12}ML^2 = \\frac{1}{3}ML^2$.`,
      },
    ],
  },

  // --- MÉCANIQUE DU SOLIDE L2 : GYROSCOPES (ID: l2-sol-3) ---
  'l2-sol-3': {
    title: "Gyroscopes et toupies",
    level: 'l2',
    difficulty: 5,
    duration: '90 min',
    tags: ['Précession', 'Nutation', 'Euler'],
    intro: "L'étude des mouvements de rotation complexes, comme celui d'une toupie, fait appel aux angles d'Euler et aux effets gyroscopiques.",
    sections: [
      {
        id: 's1',
        title: '1. Angles d\'Euler',
        content: `Pour repérer un solide en rotation, on utilise trois angles successifs :
1.  **Précession ($\\psi$)** : rotation autour de l'axe vertical fixe.
2.  **Nutation ($\\theta$)** : inclinaison de l'axe du solide.
3.  **Rotation propre ($\\phi$)** : rotation du solide sur lui-même.`,
      },
      {
        id: 's2',
        title: '2. Effet Gyroscopique',
        content: `Lorsqu'un solide tourne très vite sur lui-même, il acquiert une grande stabilité. Toute tentative de modifier l'axe de rotation crée un couple de réaction perpendiculaire à l'effort appliqué. C'est ce qui permet à un vélo de tenir en équilibre ou à un gyroscope de maintenir son orientation.`,
      },
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Vitesse de précession',
        difficulty: 5,
        statement: `Expliquez qualitativement pourquoi une toupie ne tombe pas immédiatement sous l'effet de son poids.`,
        solution: `Le poids crée un moment par rapport au point de contact. En raison de la rotation rapide (moment cinétique élevé), ce couple ne provoque pas une chute (variation de l'inclinaison) mais un mouvement de rotation de l'axe lui-même autour de la verticale : c'est la **précession**.`,
      },
    ],
  }, // --- ÉLECTROMAGNÉTISME L2 : PARTIE 1 (VERSION FINALE CORRIGÉE) ---
  'l2-em-1': {
    title: "Électrostatique — loi de Coulomb & Gauss",
    level: 'l2',
    difficulty: 3,
    duration: '75 min',
    tags: ['Coulomb', 'Gauss', 'Champ Électrique'],
    intro: "Cette leçon pose les deux piliers de l'électrostatique : l'interaction entre charges (Loi de Coulomb) et le calcul du flux électrique (Théorème de Gauss).",
    sections: [
      {
        id: 's1',
        title: '1. Loi de Coulomb et Force Électrique',
        content: `La force exercée par une charge $q_1$ sur une charge $q_2$ séparées d'une distance $r$ est :

$$ \\vec{F}_{1 \\to 2} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2} \\vec{u}_{12} $$

**Ce qu'il faut retenir sur le sens de la force :**
- Des charges de **même signe** ($q_1 q_2 > 0$) se repoussent.
- Des charges de **signes contraires** ($q_1 q_2 < 0$) s'attirent.

Le champ électrique $\\vec{E}$ est alors défini comme la force subie par une charge test unité :

$$ \\vec{E}(M) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\vec{u}_r $$`,
      },
      {
        id: 's2',
        title: '2. Théorème de Gauss',
        content: `Le flux du champ électrique à travers une surface fermée $S$ est proportionnel à la charge totale enfermée :

$$ \\Phi = \\oint_S \\vec{E} \\cdot d\\vec{S} = \\frac{Q_{int}}{\\epsilon_0} $$`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Application : Attraction ou Répulsion ?',
        difficulty: 2,
        statement: "Un ion $Na^+$ et un ion $Cl^-$ sont proches. La force est-elle attractive ou répulsive ?",
        solution: "L'ion sodium est positif et l'ion chlore est négatif. Les signes étant contraires, la force est **attractive**."
      }
    ]
  }, // --- ÉLECTROMAGNÉTISME L2 : PARTIE 2 (ID: l2-em-2) ---
  'l2-em-2': {
    title: "Potentiel électrostatique",
    level: 'l2',
    difficulty: 3,
    duration: '65 min',
    tags: ['Potentiel', 'Énergie', 'Gradient'],
    intro: "Le champ électrique est un champ conservatif. On lui associe une grandeur scalaire, le potentiel V, qui permet de calculer facilement l'énergie d'un système de charges.",
    sections: [
      {
        id: 's1',
        title: '1. Relation entre Champ et Potentiel',
        content: `Le champ électrique dérive d'un potentiel scalaire. Cette relation s'écrit avec l'opérateur gradient :

$$ \\vec{E} = -\\vec{grad}(V) $$

**Interprétation physique :** 
Le signe "$-$" est crucial. Il indique que le champ électrique $\\vec{E}$ est toujours dirigé vers les potentiels décroissants. On peut comparer le potentiel à l'altitude d'une montagne : une charge positive "descend" naturellement la pente vers les bas potentiels.`,
      },
      {
        id: 's2',
        title: '2. Potentiel d\'une charge ponctuelle',
        content: `Pour une charge $q$ placée à l'origine, le potentiel créé en un point $M$ à une distance $r$ est :

$$ V(M) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r} $$

*Note : Par convention, on considère souvent que le potentiel est nul à l'infini.*`,
      },
      {
        id: 's3',
        title: '3. Énergie Potentielle et Travail',
        content: `L'énergie potentielle électrostatique d'une charge $q$ placée dans un potentiel $V$ est :

$$ E_{pe} = q \\cdot V $$

Lorsqu'on déplace une charge d'un point $A$ à un point $B$, le travail de la force électrique est :

$$ W_{A \\to B} = q(V_A - V_B) $$`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Accélération d\'un électron',
        difficulty: 3,
        statement: "Un électron ($q = -1,6 \\cdot 10^{-19}$ C) est accéléré par une différence de potentiel $U = 1000$ V. Quelle est son énergie cinétique finale en électron-volts (eV) ?",
        solution: "L'énergie cinétique acquise est $\\Delta E_c = -q \\cdot \\Delta V$. Ici, $\\Delta E_c = -(-e) \\cdot 1000 = 1000$ eV. L'électron a gagné 1000 eV d'énergie."
      }
    ]
  }, // --- ÉLECTROMAGNÉTISME L2 : PARTIE 3 (ID: l2-em-3) ---
  'l2-em-3': {
    title: "Magnétostatique — loi de Biot-Savart",
    level: 'l2',
    difficulty: 4,
    duration: '80 min',
    tags: ['Biot-Savart', 'Champ B', 'Magnétisme'],
    intro: "Après les charges fixes, nous étudions les charges en mouvement (courants permanents). C'est la naissance du champ magnétique, moteur de nombreuses technologies.",
    sections: [
      {
        id: 's1',
        title: '1. Loi de Biot et Savart',
        content: `Pour un élément de circuit conducteur $d\\vec{l}$ parcouru par un courant d'intensité $I$, le champ magnétique élémentaire $d\\vec{B}$ créé en un point $M$ est donné par :

$$ d\\vec{B}(M) = \\frac{\\mu_0 I}{4\\pi} \\frac{d\\vec{l} \\wedge \\vec{u}_r}{r^2} $$

**Points clés à retenir :**
- Le champ $\\vec{B}$ est toujours **perpendiculaire** au plan formé par le courant ($d\\vec{l}$) et le point $M$.
- $\\mu_0$ est la perméabilité du vide ($4\\pi \\cdot 10^{-7}$ T·m/A).
- L'unité du champ magnétique est le **Tesla (T)**.`,
      },
      {
        id: 's2',
        title: '2. Règle de la main droite',
        content: `Pour déterminer le sens du vecteur $\\vec{B}$ sans calcul :
1. Le pouce suit le sens du courant $I$.
2. Les autres doigts s'enroulent dans le sens du champ magnétique $\\vec{B}$.

Cela permet de visualiser immédiatement que les lignes de champ magnétique forment des cercles concentriques autour d'un fil rectiligne.`,
      },
      {
        id: 's3',
        title: '3. Théorème d\'Ampère',
        content: `Pour des distributions à haute symétrie, on utilise la circulation du champ :

$$ \\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enlacé} $$

C'est l'équivalent du théorème de Gauss pour le magnétisme.`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Champ d\'un fil infini',
        difficulty: 3,
        statement: "Calculer le module du champ $B$ à une distance $d = 5$ cm d'un fil parcouru par un courant $I = 10$ A.",
        solution: "En utilisant le théorème d'Ampère : $B \\cdot (2\\pi d) = \\mu_0 I$. Soit $B = \\frac{\\mu_0 I}{2\\pi d}$. En remplaçant : $B = \\frac{4\\pi \\cdot 10^{-7} \\cdot 10}{2\\pi \\cdot 0,05} = 4 \\cdot 10^{-5}$ T (soit 40 µT)."
      }
    ]
  }, // --- ÉLECTROMAGNÉTISME L2 : PARTIE 4 (ID: l2-em-4) ---
  'l2-em-4': {
    title: "Induction électromagnétique — loi de Faraday",
    level: 'l2',
    difficulty: 4,
    duration: '75 min',
    tags: ['Faraday', 'Lenz', 'Flux Magnétique'],
    intro: "L'induction est le phénomène physique qui permet de transformer l'énergie mécanique en énergie électrique. C'est la base du fonctionnement des transformateurs et des alternateurs.",
    sections: [
      {
        id: 's1',
        title: '1. Le Flux Magnétique',
        content: `Avant de parler d'induction, il faut définir le flux du champ magnétique $\\vec{B}$ à travers une surface $S$ :

$$ \\Phi = \\iint_S \\vec{B} \\cdot d\\vec{S} $$

Le flux s'exprime en **Weber (Wb)**. Il représente grossièrement le "nombre de lignes de champ" qui traversent la surface.`,
      },
      {
        id: 's2',
        title: '2. Loi de Faraday',
        content: `Lorsqu'un circuit est soumis à un flux magnétique variable (soit parce que le champ $B$ change, soit parce que le circuit bouge), il apparaît une force électromotrice (f.e.m.) notée $e$ :

$$ e = -\\frac{d\\Phi}{dt} $$

Cette f.e.m. induite est responsable de l'apparition d'un courant induit dans le circuit si celui-ci est fermé.`,
      },
      {
        id: 's3',
        title: '3. Loi de Lenz (La loi de modération)',
        content: `Le signe "$-$" dans la loi de Faraday exprime la Loi de Lenz : 
**Le sens du courant induit est tel que, par ses effets électromagnétiques, il s'oppose à la cause qui lui a donné naissance.**

Si le flux augmente, le courant induit créera un champ magnétique pour tenter de le diminuer.`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Calcul de f.e.m. induite',
        difficulty: 3,
        statement: "Une bobine de 100 spires possède une surface totale de $0,02\\,m^2$. On fait varier le champ magnétique de $0\\,T$ à $0,5\\,T$ en $0,1\\,s$. Calculez la f.e.m. induite.",
        solution: "Le flux initial est 0. Le flux final est $\\Phi = N \\cdot B \\cdot S = 100 \\cdot 0,5 \\cdot 0,02 = 1\\,Wb$. La f.e.m. moyenne est $|e| = |\\Delta\\Phi / \\Delta t| = 1 / 0,1 = 10\\,V$."
      }
    ]
  }, // --- ÉLECTROMAGNÉTISME L2 : PARTIE 5 (ID: l2-em-5) ---
  'l2-em-5': {
    title: "Équations de Maxwell dans le vide",
    level: 'l2',
    difficulty: 5,
    duration: '90 min',
    tags: ['Maxwell', 'Régime Variable', 'Analyse Vectorielle'],
    intro: "C'est la synthèse ultime : quatre équations qui unifient l'électricité et le magnétisme. Elles décrivent comment les champs $\\vec{E}$ et $\\vec{B}$ s'engendrent mutuellement.",
    sections: [
      {
        id: 's1',
        title: '1. Les Équations sous forme locale',
        content: `Dans le vide, en l'absence de charges et de courants sources, les équations de Maxwell s'écrivent :

1. **Maxwell-Gauss :** $div \\vec{E} = 0$
2. **Maxwell-Thomson :** $div \\vec{B} = 0$
3. **Maxwell-Faraday :** $\\vec{rot} \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$
4. **Maxwell-Ampère :** $\\vec{rot} \\vec{B} = \\mu_0\\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$

*Note : Le terme $\\mu_0\\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ est appelé courant de déplacement de Maxwell.*`,
      },
      {
        id: 's2',
        title: '2. Signification Physique',
        content: `Ces équations révèlent une symétrie profonde :
- Un champ magnétique qui varie dans le temps crée un champ électrique (Induction).
- Un champ électrique qui varie dans le temps crée un champ magnétique.

C'est ce couplage "perpétuel" qui permet aux ondes de voyager sans support matériel.`,
      },
      {
        id: 's3',
        title: '3. Conservation de la Charge',
        content: `Les équations de Maxwell sont cohérentes avec l'équation de continuité :
        
$$ div \\vec{j} + \\frac{\\partial \\rho}{\\partial t} = 0 $$

Elle exprime que la charge électrique ne peut être ni créée ni détruite, seulement déplacée.`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Interprétation du Rotationnel',
        difficulty: 4,
        statement: "Que se passe-t-il pour le champ électrique $\\vec{E}$ si le champ magnétique $\\vec{B}$ est constant dans le temps ?",
        solution: "Si $\\vec{B}$ est constant, $\\frac{\\partial \\vec{B}}{\\partial t} = \\vec{0}$. D'après Maxwell-Faraday, $\\vec{rot} \\vec{E} = \\vec{0}$. Le champ électrique est alors irrotationnel, comme en électrostatique."
      }
    ]
  }, 'l2-em-6': {
    title: "Ondes électromagnétiques planes",
    level: 'l2',
    difficulty: 5,
    duration: '85 min',
    tags: ['Ondes', 'Poynting', 'Lumière'],
    intro: "Cette dernière étape démontre que les champs électrique et magnétique peuvent voyager dans le vide à la vitesse de la lumière sous forme d'ondes autopropagées.",
    sections: [
      {
        id: 's1',
        title: '1. Équation de propagation',
        content: `À partir des équations de Maxwell, on montre que le champ électrique vérifie l'équation de d'Alembert :
        
$$ \\Delta \\vec{E} - \\frac{1}{c^2} \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0} $$

Où $c$ est la célérité de la lumière dans le vide.`,
      },
      {
        id: 's2',
        title: '2. Structure de l\'onde plane (OPPM)',
        content: `Pour une onde plane se propageant selon le vecteur d'onde $\\vec{k}$, les champs $\\vec{E}$ et $\\vec{B}$ sont :
1. **Transverses** : perpendiculaires à la direction de propagation.
2. **Orthogonaux** entre eux : $\\vec{E} \\perp \\vec{B}$.
3. Liés par la relation :

$$ \\vec{B} = \\frac{\\vec{k} \\wedge \\vec{E}}{\\omega} $$`,
      },
      {
        id: 's3',
        title: '3. Énergie et Vecteur de Poynting',
        content: `Le transport d'énergie est décrit par le vecteur de Poynting $\\vec{\\Pi}$ (parfois noté $\\vec{R}$) :

$$ \\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0} $$

Il représente la puissance surfacique transportée par l'onde.`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Intensité lumineuse',
        difficulty: 4,
        statement: "Calculer la valeur moyenne du vecteur de Poynting pour une onde dont l'amplitude du champ électrique est $E_0$.",
        solution: "La moyenne temporelle est : $\\langle \\Pi \\rangle = \\frac{E_0^2}{2 \\mu_0 c}$."
      }
    ]
  }, // --- OPTIQUE ONDULATOIRE L2 (ID: l2-optique-1 à l2-optique-3) ---
  
  'l2-optique-1': {
    title: "Diffraction de Fraunhofer",
    level: 'l2',
    difficulty: 4,
    duration: '80 min',
    tags: ['Diffraction', 'Optique', 'Fraunhofer'],
    intro: "La diffraction est le phénomène de déviation de la lumière lorsqu'elle rencontre un obstacle. Nous étudions ici la diffraction à l'infini, dite de Fraunhofer.",
    sections: [
      {
        id: 's1',
        title: '1. Principe de Huygens-Fresnel',
        content: `Chaque point d'une surface atteinte par la lumière se comporte comme une source secondaire d'ondes sphériques. La figure de diffraction est le résultat de l'interférence de toutes ces sources.`,
      },
      {
        id: 's2',
        title: '2. Diffraction par une fente rectangulaire',
        content: `Pour une fente de largeur $a$, l'intensité lumineuse $I(\theta)$ sur un écran lointain suit une fonction sinus cardinal :

$$ I(\theta) = I_0 \\left[ \\frac{\\sin(\\beta)}{\\beta} \\right]^2 $$

Où $\\beta = \\frac{\\pi a \\sin(\\theta)}{\\lambda}$. La tache centrale de diffraction concentre la majorité de l'énergie.`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Largeur de la tache centrale',
        difficulty: 3,
        statement: "Une fente de $0,1\\,mm$ est éclairée par un laser de $633\\,nm$. L'écran est à $2\\,m$. Quelle est la largeur de la tache centrale ?",
        solution: "La demi-largeur angulaire est $\\theta \\approx \\lambda / a$. La largeur linéaire est $L = 2 \\cdot D \\cdot \\theta = 2 \\cdot 2 \\cdot (633 \\cdot 10^{-9} / 10^{-4}) \\approx 2,53\\,cm$."
      }
    ]
  },

  'l2-optique-2': {
    title: "Interférences — fentes de Young",
    level: 'l2',
    difficulty: 3,
    duration: '75 min',
    tags: ['Interférences', 'Young', 'Cohérence'],
    intro: "L'expérience des fentes de Young démontre la nature ondulatoire de la lumière en faisant apparaître des franges sombres et brillantes sur un écran.",
    sections: [
      {
        id: 's1',
        title: '1. Différence de marche',
        content: `Pour deux sources distantes de $a$, la différence de trajet optique $\\delta$ vers un point de l'écran est :
        
$$ \\delta = a \\sin(\\theta) \\approx a \\frac{x}{D} $$

Les interférences sont constructives (frange brillante) si $\\delta = k\\lambda$.`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Calcul de l\'interfrange',
        difficulty: 3,
        statement: "Calculer la distance entre deux franges brillantes ($i$) pour $a = 0,2\\,mm$, $D = 1,5\\,m$ et $\\lambda = 500\\,nm$.",
        solution: "$i = \\frac{\\lambda D}{a} = \\frac{500 \\cdot 10^{-9} \\cdot 1,5}{0,2 \\cdot 10^{-3}} = 3,75\\,mm$."
      }
    ]
  },

  'l2-optique-3': {
    title: "Polarisation de la lumière",
    level: 'l2',
    difficulty: 3,
    duration: '70 min',
    tags: ['Polarisation', 'Malus', 'Brewster'],
    intro: "La polarisation décrit la direction d'oscillation du vecteur champ électrique $\\vec{E}$. C'est une propriété essentielle des ondes transversales.",
    sections: [
      {
        id: 's1',
        title: '1. Loi de Malus',
        content: `Lorsqu'une lumière de direction de polarisation fixe traverse un analyseur dont l'axe fait un angle $\\alpha$, l'intensité transmise est :

$$ I = I_0 \\cos^2(\\alpha) $$`,
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Extinction par polariseurs',
        difficulty: 2,
        statement: "Si l'angle entre un polariseur et un analyseur est de $90^\\circ$ (axes croisés), quelle fraction de l'intensité passe ?",
        solution: "D'après la loi de Malus, $I = I_0 \\cos^2(90^\\circ) = 0$. Il y a extinction totale de la lumière."
      }
    ]
  }, 'l3-qm-2': {
    title: "Équation de Schrödinger — puits infini",
    level: 'l3',
    difficulty: 5,
    duration: '120 min',
    tags: ['Schrödinger', 'Physique Quantique', 'Confinement'],
    intro: "Maîtrisez l'équation fondamentale qui régit le monde microscopique et découvrez comment elle impose la quantification de l'énergie dans un puits.",
    sections: [
      {
        id: 's1',
        title: '1. L\'Équation Maîtresse (Dépendante du temps)',
        content: `L'évolution de tout système quantique est régie par l'équation de Schrödinger temporelle :

$$ i\\hbar \\frac{\\partial}{\\partial t} \\Psi(x,t) = \\hat{H} \\Psi(x,t) $$

**Comprendre les symboles :**
- **$i$** : L'unité imaginaire, indispensable pour décrire la nature ondulatoire.
- **$\\hbar$** : La constante de Planck réduite ($1,054 \\times 10^{-34}$ J·s).
- **$\\hat{H}$** : L'Hamiltonien, l'opérateur représentant l'énergie totale du système.`
      },
      {
        id: 's2',
        title: '2. L\'Énergie Cinétique et la Courbure',
        content: `Pour une particule de masse $m$ dans un potentiel $V(x)$, l'Hamiltonien s'écrit :
        
$$ \\hat{H} = -\\frac{\\hbar^2}{2m} \\frac{d^2}{dx^2} + V(x) $$

Le terme de dérivée seconde $\\frac{d^2}{dx^2}$ mesure la **courbure** de la fonction d'onde. Plus la fonction d'onde oscille (courbure forte), plus l'énergie cinétique de la particule est grande.`
      },
      {
        id: 's3',
        title: '3. Le Puits de Potentiel Infini',
        content: `Dans un puits de largeur $L$ (où $V=0$ à l'intérieur et $\\infty$ aux bords), la particule est confinée. Les murs forcent la fonction d'onde à s'annuler aux extrémités :
$$ \\psi(0) = 0 \\quad \\text{et} \\quad \\psi(L) = 0 $$

Les seules solutions possibles sont des ondes stationnaires :
$$ \\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{n\\pi x}{L}\\right) $$`
      },
      {
        id: 's4',
        title: '4. Énergie Quantifiée',
        content: `En injectant ces solutions dans l'équation, on obtient les niveaux d'énergie :
$$ E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2} $$
L'énergie ne peut prendre que des valeurs discrètes. L'état $n=1$ est l'énergie de point zéro, montrant qu'une particule quantique n'est jamais immobile.`
      }
    ],
    exercises: [
      {
        id: 'ex1',
        title: 'Calcul de longueur d\'onde',
        difficulty: 4,
        statement: "Un électron est dans un puits de $0,5$ nm. Calculez son énergie fondamentale en eV.",
        solution: "En utilisant $E_1 = \\frac{\\pi^2 \\hbar^2}{2m_e L^2}$, on trouve $E_1 \\approx 1,5$ eV."
      }
    ]
  },
}
