import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import {
  Clock, Tag, ArrowLeft, ArrowRight, BookMarked,
  ChevronDown, ChevronUp, FlaskConical, Layers,
  CheckCircle2, Share2, Printer,
} from 'lucide-react'
import FormulaBlock from '../components/FormulaBlock'
import ExerciseCard from '../components/ExerciseCard'
import { LESSON_CONTENT, LEVELS, CURRICULUM } from '../data/curriculum'
import katex from 'katex'
// ── Difficulty badge ─────────────────────────────────────
const DIFF_META = [
  null,
  { label: 'Facile',        color: 'text-pulsar border-pulsar/30 bg-pulsar/5' },
  { label: 'Intermédiaire', color: 'text-cyan border-cyan/30 bg-cyan/5' },
  { label: 'Difficile',     color: 'text-indigo-light border-indigo/30 bg-indigo/5' },
  { label: 'Avancé',        color: 'text-nova border-nova/30 bg-nova/5' },
  { label: 'Expert',        color: 'text-orange-400 border-orange-400/30 bg-orange-400/5' },
]

// ── Section with collapse ────────────────────────────────
function Section({ section, index }) {
  const [open, setOpen] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-2xl border border-white/[0.06] overflow-hidden"
    >
      {/* Section header */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-6 py-4 text-left
                   hover:bg-white/[0.03] transition-colors group"
      >
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan/20 to-indigo/20
                        border border-cyan/20 flex items-center justify-center
                        flex-shrink-0 text-xs font-bold text-cyan font-mono">
          {index + 1}
        </div>
        <h2 className="flex-1 font-display text-xl font-semibold text-white
                       group-hover:text-cyan-light transition-colors">
          {section.title}
        </h2>
        <motion.div
          animate={{ rotate: open ? 0 : -90 }}
          transition={{ duration: 0.2 }}
          className="text-slate-500 group-hover:text-slate-300 transition-colors"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-2 border-t border-white/[0.05]">
              {/* Text content */}
              <div className="pt-5 lesson-prose">
                <p dangerouslySetInnerHTML={{
__html: section.content
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/\$\$(.+?)\$\$/gs, (_, tex) => katex.renderToString(tex, {displayMode: true, throwOnError: false}))
  .replace(/\$(.+?)\$/g, (_, tex) => katex.renderToString(tex, {throwOnError: false}))
  .replace(/\n\n/g, '<br/><br/>')
  .replace(/\n/g, '<br/>')
                }} />
              </div>

              {/* Formulas */}
              {section.formulas?.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2 mt-4">
                    <div className="h-px flex-1 bg-white/[0.05]" />
                    <span className="text-[10px] font-medium text-slate-600
                                     uppercase tracking-widest">
                      Formules clés
                    </span>
                    <div className="h-px flex-1 bg-white/[0.05]" />
                  </div>
                  {section.formulas.map((f, fi) => (
                    <FormulaBlock
                      key={f.id}
                      latex={f.latex}
                      label={f.label}
                      comment={f.comment}
                      index={fi}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Table of contents ────────────────────────────────────
function TOC({ sections }) {
  return (
    <div className="glass rounded-xl p-4 sticky top-4">
      <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-3">
        Sommaire
      </p>
      <ul className="space-y-1">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#section-${s.id}`}
              className="flex items-center gap-2 text-xs text-slate-400
                         hover:text-white transition-colors py-0.5"
            >
              <span className="w-4 h-4 rounded-sm bg-white/[0.06] flex items-center
                               justify-center text-[9px] text-slate-500 flex-shrink-0">
                {i + 1}
              </span>
              <span className="line-clamp-2 leading-snug">{s.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Main Lesson page ─────────────────────────────────────
export default function Lesson() {
  const { lessonId } = useParams()
  const navigate     = useNavigate()
  const lesson       = LESSON_CONTENT[lessonId]

  // Reading progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  // Keyboard: Ctrl+K → search (handled in Header)

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4">🔭</div>
        <h2 className="font-display text-2xl text-white mb-2">Leçon non trouvée</h2>
        <p className="text-slate-500 mb-6 text-sm">
          Cette leçon n'est pas encore disponible — revenez bientôt !
        </p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass glass-hover
                     text-sm text-slate-300"
        >
          <ArrowLeft size={14} /> Retour à l'accueil
        </button>
      </div>
    )
  }

  const levelMeta = LEVELS.find(l => l.id === lesson.level)
  const diff      = DIFF_META[lesson.difficulty]
  const nFormulas = lesson.sections.reduce((a, s) => a + (s.formulas?.length ?? 0), 0)

  return (
    <>
      {/* ── Reading progress bar ── */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-[var(--header-height)] left-0 right-0 h-[2px] z-50
                   bg-gradient-to-r from-cyan via-indigo to-nova origin-left"
      />

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* ── Breadcrumb ── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs text-slate-500"
        >
          <Link to="/" className="hover:text-slate-300 transition-colors">Accueil</Link>
          <span>/</span>
          <Link to={`/niveau/${lesson.level}`} className="hover:text-slate-300 transition-colors">
            {levelMeta?.label}
          </Link>
          <span>/</span>
          <span className="text-slate-400 truncate max-w-48">{lesson.title}</span>
        </motion.nav>

        {/* ── Hero header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl p-8
                     border border-white/[0.06] bg-gradient-to-br
                     from-indigo/[0.08] via-cosmos to-cyan/[0.04]"
        >
          {/* BG decoration */}
          <div className="absolute top-0 right-0 text-[120px] opacity-5 leading-none
                          font-display select-none pointer-events-none text-white">
            {levelMeta?.icon}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px
                          bg-gradient-to-r from-cyan/40 via-indigo/40 to-transparent" />

          <div className="relative">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`badge text-[10px] ${diff?.color}`}>
                {diff?.label}
              </span>
              <span className="badge text-[10px] text-slate-400 border-white/10">
                <span className="mr-1">{levelMeta?.icon}</span>
                {levelMeta?.label}
              </span>
              {lesson.tags?.map(tag => (
                <span key={tag} className="badge text-[10px] text-slate-500 border-white/[0.06]">
                  <Tag size={9} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white
                           leading-tight mb-4">
              {lesson.title}
            </h1>

            <p className="text-slate-400 leading-relaxed max-w-2xl text-[15px]">
              {lesson.intro}
            </p>

            {/* Meta stats */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/[0.06]">
              {[
                { icon: Clock,      value: lesson.duration, label: 'Durée' },
                { icon: Layers,     value: lesson.sections.length, label: 'Parties' },
                { icon: BookMarked, value: nFormulas, label: 'Formules' },
                { icon: FlaskConical, value: lesson.exercises?.length ?? 0, label: 'Exercices' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center gap-1.5 text-sm">
                  <stat.icon size={13} className="text-slate-500" />
                  <span className="text-white font-medium">{stat.value}</span>
                  <span className="text-slate-600">{stat.label}</span>
                </div>
              ))}

              {/* Action buttons */}
              <div className="ml-auto flex items-center gap-2">
                <button className="p-1.5 glass glass-hover rounded-lg text-slate-500
                                   hover:text-white transition-colors" title="Imprimer">
                  <Printer size={14} />
                </button>
                <button className="p-1.5 glass glass-hover rounded-lg text-slate-500
                                   hover:text-white transition-colors" title="Partager">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Content + TOC layout ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_200px] gap-6 items-start">

          {/* Main content */}
          <div className="space-y-4 min-w-0">
            {/* Sections */}
            {lesson.sections.map((section, i) => (
              <div key={section.id} id={`section-${section.id}`}>
                <Section section={section} index={i} />
              </div>
            ))}

            {/* Exercises */}
            {lesson.exercises?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-white/[0.05]" />
                  <h2 className="font-display text-2xl font-semibold text-white
                                  flex items-center gap-2">
                    <FlaskConical size={20} className="text-cyan" />
                    Exercices
                  </h2>
                  <div className="h-px flex-1 bg-white/[0.05]" />
                </div>
                <div className="space-y-4">
                  {lesson.exercises.map((ex, i) => (
                    <ExerciseCard key={ex.id} exercise={ex} index={i} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between pt-4"
            >
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-4 py-2.5 glass glass-hover
                           rounded-xl text-sm text-slate-400 hover:text-white transition-all"
              >
                <ArrowLeft size={14} /> Précédent
              </button>

              {lesson.relatedLessons?.[0] && (
                <button
                  onClick={() => navigate(`/lecon/${lesson.relatedLessons[0]}`)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm
                             bg-gradient-to-r from-cyan/10 to-indigo/10
                             border border-cyan/20 text-white hover:border-cyan/40
                             transition-all"
                >
                  Leçon suivante <ArrowRight size={14} />
                </button>
              )}
            </motion.div>
          </div>

          {/* TOC — desktop only */}
          <div className="hidden xl:block">
            <TOC sections={lesson.sections} />
          </div>
        </div>
      </motion.article>
    </>
  )
}
