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
export const LESSON_CONTENT = {
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
  },
}
