import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Atom, BookOpen, FlaskConical, Star, Zap } from 'lucide-react'
import { LEVELS, CURRICULUM } from '../data/curriculum'
import { useApp } from '../App'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
}

const FEATURED_LESSONS = [
  { id: 'l3-qm-1',    title: 'Postulats de la MQ',       level: 'l3',        icon: '🌀' },
  { id: 'l2-em-5',    title: 'Équations de Maxwell',      level: 'l2',        icon: '⚡' },
  { id: 'term-meca-3', title: 'Mouvement des satellites', level: 'terminale', icon: '🛸' },
  { id: 'l3-lag-1',   title: 'Formalisme lagrangien',     level: 'l3',        icon: '📊' },
]

export default function Home() {
  const navigate = useNavigate()
  const { setActiveLevel } = useApp()

  const totalLessons = CURRICULUM.reduce(
    (acc, lvl) => acc + lvl.chapters.reduce((a, ch) => a + ch.lessons.length, 0), 0
  )

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      {/* ── Hero ── */}
      <motion.div variants={stagger.item} className="pt-4">
        <div className="relative">
          {/* Decorative atom */}
          <div className="absolute -top-6 -right-4 opacity-5 pointer-events-none select-none">
            <div className="font-display text-[200px] font-bold text-cyan leading-none">
              ψ
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan" />
            <span className="text-xs font-medium text-cyan uppercase tracking-widest">
              Plateforme éducative
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-tight mb-4">
            <span className="text-white">Maîtrisez la </span>
            <span className="shimmer-text">Physique</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Du lycée à l'université — cours complets, formules interactives, 
            démonstrations et exercices corrigés.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => navigate('/lecon/l3-qm-1')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-gradient-to-r from-cyan to-indigo text-white font-medium
                         text-sm hover:opacity-90 transition-all shadow-glow-sm
                         hover:shadow-glow-md hover:-translate-y-0.5"
            >
              Commencer <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate('/niveau/terminale')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass
                         glass-hover text-slate-300 text-sm font-medium"
            >
              <BookOpen size={16} /> Explorer les cours
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Stats ── */}
      <motion.div variants={stagger.item}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: totalLessons, label: 'Leçons', icon: BookOpen, color: 'text-cyan' },
          { value: '5',          label: 'Niveaux', icon: Star,     color: 'text-nova' },
          { value: '120+',       label: 'Formules', icon: Atom,    color: 'text-indigo-light' },
          { value: '48',         label: 'Exercices', icon: FlaskConical, color: 'text-pulsar' },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-4 text-center">
            <s.icon size={18} className={`${s.color} mx-auto mb-2`} />
            <p className="font-display text-2xl font-semibold text-white">{s.value}</p>
            <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* ── Level cards ── */}
      <motion.section variants={stagger.item}>
        <h2 className="font-display text-2xl font-semibold text-white mb-5">
          Choisir un niveau
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEVELS.map(lv => {
            const lvData     = CURRICULUM.find(c => c.level === lv.id)
            const nChapters  = lvData?.chapters.length ?? 0
            const nLessons   = lvData?.chapters.reduce((a, ch) => a + ch.lessons.length, 0) ?? 0
            return (
              <motion.button
                key={lv.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveLevel(lv.id)
                  navigate(`/niveau/${lv.id}`)
                }}
                className="relative overflow-hidden glass glass-hover rounded-2xl p-5
                           text-left group transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full
                                blur-2xl opacity-0 group-hover:opacity-100
                                transition-opacity duration-500"
                     style={{ backgroundColor: lv.color + '30' }} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{lv.icon}</span>
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-white
                                                      group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {lv.label}
                  </h3>
                  <p className="text-slate-500 text-xs mb-4">{lv.description}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-slate-500">
                      <BookOpen size={11} /> {nChapters} chapitres
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Zap size={11} /> {nLessons} leçons
                    </span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.section>

      {/* ── Featured lessons ── */}
      <motion.section variants={stagger.item}>
        <h2 className="font-display text-2xl font-semibold text-white mb-5">
          Leçons populaires
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {FEATURED_LESSONS.map((lesson, i) => {
            const lv = LEVELS.find(l => l.id === lesson.level)
            return (
              <motion.button
                key={lesson.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/lecon/${lesson.id}`)}
                className="glass glass-hover rounded-xl p-4 text-left flex items-center gap-3"
              >
                <span className="text-2xl">{lesson.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{lesson.title}</p>
                  <p className="text-slate-500 text-xs">{lv?.label}</p>
                </div>
                <ArrowRight size={14} className="text-slate-600 flex-shrink-0" />
              </motion.button>
            )
          })}
        </div>
      </motion.section>
    </motion.div>
  )
}
