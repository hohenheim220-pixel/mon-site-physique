import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb, Eye, EyeOff, CheckCircle2, FlaskConical } from 'lucide-react'

const DIFF_LABELS = ['', 'Facile', 'Intermédiaire', 'Difficile', 'Avancé', 'Expert']
const DIFF_STYLES = [
  '',
  'text-pulsar border-pulsar/30 bg-pulsar/5',
  'text-cyan border-cyan/30 bg-cyan/5',
  'text-indigo-light border-indigo/30 bg-indigo/5',
  'text-nova border-nova/30 bg-nova/5',
  'text-orange-400 border-orange-400/30 bg-orange-400/5',
]

export default function ExerciseCard({ exercise, index = 0 }) {
  const [showHint,     setShowHint]     = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [solved,       setSolved]       = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className={`rounded-2xl border transition-all duration-300
                  ${solved
                    ? 'border-pulsar/30 bg-pulsar/[0.03]'
                    : 'border-white/[0.08] bg-white/[0.02]'}`}
    >
      {/* ── Header ── */}
      <div className="flex items-start gap-3 p-5 pb-4">
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                         text-sm font-bold font-display
                         ${solved ? 'bg-pulsar/15 text-pulsar' : 'bg-white/[0.06] text-slate-400'}`}>
          {solved ? <CheckCircle2 size={16} /> : index + 1}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-display text-base font-semibold text-white">
              {exercise.title}
            </h4>
            <span className={`badge text-[10px] ${DIFF_STYLES[exercise.difficulty]}`}>
              {DIFF_LABELS[exercise.difficulty]}
            </span>
            {solved && (
              <span className="badge text-[10px] text-pulsar border-pulsar/30 bg-pulsar/5">
                ✓ Résolu
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Statement ── */}
      <div className="px-5 pb-4">
        <div className="glass rounded-xl p-4 border-l-2 border-cyan/40">
          <div className="flex items-center gap-1.5 mb-2">
            <FlaskConical size={12} className="text-cyan" />
            <span className="text-[10px] font-medium text-cyan uppercase tracking-widest">
              Énoncé
            </span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
            {exercise.statement}
          </p>
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="px-5 pb-4 flex items-center gap-2 flex-wrap">
        {exercise.hint && (
          <button
            onClick={() => setShowHint(v => !v)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs
                        font-medium transition-all border
                        ${showHint
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                          : 'glass glass-hover text-slate-400 hover:text-white'}`}
          >
            <Lightbulb size={12} />
            {showHint ? 'Masquer l\'indice' : 'Afficher un indice'}
          </button>
        )}

        <button
          onClick={() => setShowSolution(v => !v)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs
                      font-medium transition-all border
                      ${showSolution
                        ? 'bg-indigo/10 border-indigo/30 text-indigo-light'
                        : 'glass glass-hover text-slate-400 hover:text-white'}`}
        >
          {showSolution ? <EyeOff size={12} /> : <Eye size={12} />}
          {showSolution ? 'Masquer la solution' : 'Voir la solution'}
        </button>

        {!solved && (
          <button
            onClick={() => setSolved(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs
                       font-medium glass glass-hover text-slate-400 hover:text-pulsar
                       transition-all border ml-auto"
          >
            <CheckCircle2 size={12} />
            Marquer résolu
          </button>
        )}
      </div>

      {/* ── Hint ── */}
      <AnimatePresence>
        {showHint && exercise.hint && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-5"
          >
            <div className="mb-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.05]
                            p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Lightbulb size={12} className="text-amber-400" />
                <span className="text-[10px] font-medium text-amber-400 uppercase tracking-widest">
                  Indice
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                {exercise.hint}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Solution ── */}
      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-5 pb-5"
          >
            <div className="rounded-xl border border-indigo/20 bg-indigo/[0.04] p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <CheckCircle2 size={12} className="text-indigo-light" />
                <span className="text-[10px] font-medium text-indigo-light uppercase tracking-widest">
                  Solution détaillée
                </span>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line
                              font-body space-y-2">
                {exercise.solution.split('\n').map((line, i) => (
                  <p key={i}
                     className={line.startsWith('**') ? 'text-white font-semibold mt-3' : ''}>
                    {line.replace(/\*\*/g, '')}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
