import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb, Eye, EyeOff, CheckCircle2, Flask } from 'lucide-react'
import katex from 'katex'

const DIFF_LABELS = ['', 'Facile', 'Intermédiaire', 'Difficile', 'Expert', 'Magistral']
const DIFF_STYLES = [
  '',
  'text-pulsar border-pulsar/30 bg-pulsar/5',
  'text-cyan border-cyan/30 bg-cyan/5',
  'text-indigo-light border-indigo/30 bg-indigo/5',
  'text-nova border-nova/30 bg-nova/5',
  'text-orange-400 border-orange-400/30 bg-orange-400/5',
]

function renderMath(text) {
  if (!text) return ''
  return text
    .replace(/\$\$(.+?)\$\$/gs, (_, tex) =>
      katex.renderToString(tex, { displayMode: true, throwOnError: false })
    )
    .replace(/\$(.+?)\$/g, (_, tex) =>
      katex.renderToString(tex, { throwOnError: false })
    )
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}

export default function ExerciseCard({ exercise, index = 0 }) {
  const [showHint,     setShowHint]     = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [solved,       setSolved]       = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className={`rounded-2xl border transition-all duration-300 ${
        solved
          ? 'border-pulsar/30 bg-pulsar/[0.03]'
          : 'border-white/[0.08] bg-white/[0.02]'
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-3 p-5 pb-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo/10 border border-indigo/20 flex items-center justify-center">
          <Flask size={14} className="text-indigo-light" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h4 className="font-semibold text-white text-sm">{exercise.title}</h4>
            {exercise.difficulty && (
              <span className={`badge text-[10px] ${DIFF_STYLES[exercise.difficulty]}`}>
                {DIFF_LABELS[exercise.difficulty]}
              </span>
            )}
          </div>
          <p
            className="text-slate-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderMath(exercise.statement) }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 px-5 pb-4 flex-wrap">
        {exercise.hint && (
          <button
            onClick={() => setShowHint(v => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                       bg-nova/10 border border-nova/20 text-nova hover:bg-nova/20 transition-colors"
          >
            <Lightbulb size={12} />
            {showHint ? 'Masquer l\'indice' : 'Afficher un indice'}
          </button>
        )}
        <button
          onClick={() => setShowSolution(v => !v)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                     bg-indigo/10 border border-indigo/20 text-indigo-light hover:bg-indigo/20 transition-colors"
        >
          {showSolution ? <EyeOff size={12} /> : <Eye size={12} />}
          {showSolution ? 'Masquer la solution' : 'Voir la solution'}
        </button>
        <button
          onClick={() => setSolved(v => !v)}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                     border transition-colors ${
                       solved
                         ? 'bg-pulsar/20 border-pulsar/30 text-pulsar'
                         : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                     }`}
        >
          <CheckCircle2 size={12} />
          {solved ? 'Résolu ✓' : 'Marquer résolu'}
        </button>
      </div>

      {/* Hint */}
      <AnimatePresence>
        {showHint && exercise.hint && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-5 pb-4"
          >
            <div className="rounded-xl border border-nova/20 bg-nova/5 p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Lightbulb size={12} className="text-nova" />
                <span className="text-[10px] font-medium text-nova uppercase tracking-wide">Indice</span>
              </div>
              <p
                className="text-slate-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMath(exercise.hint) }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solution */}
      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-5 pb-5"
          >
            <div className="rounded-xl border border-indigo/20 bg-indigo/[0.04] p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <CheckCircle2 size={12} className="text-indigo-light" />
                <span className="text-[10px] font-medium text-indigo-light uppercase tracking-wide">
                  Solution détaillée
                </span>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed font-body space-y-2">
                {exercise.solution.split('\n').map((line, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{ __html: renderMath(line) }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}