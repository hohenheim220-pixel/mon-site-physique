import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, X, ArrowRight, Hash, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { CURRICULUM, LEVELS } from '../data/curriculum'
import { useApp } from '../App'

// Build flat searchable list
const ALL_LESSONS = CURRICULUM.flatMap(lvl =>
  lvl.chapters.flatMap(ch =>
    ch.lessons.map(l => ({
      ...l,
      level:   lvl.level,
      chapter: ch.title,
      levelMeta: LEVELS.find(lv => lv.id === lvl.level),
    }))
  )
)

export default function SearchModal() {
  const { setSearchOpen } = useApp()
  const [query,   setQuery]   = useState('')
  const [results, setResults] = useState([])
  const [sel,     setSel]     = useState(0)
  const inputRef  = useRef(null)
  const navigate  = useNavigate()

  // Focus input on mount
  useEffect(() => { inputRef.current?.focus() }, [])

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setSearchOpen(false)
      if (e.key === 'ArrowDown') setSel(s => Math.min(s + 1, results.length - 1))
      if (e.key === 'ArrowUp')   setSel(s => Math.max(s - 1, 0))
      if (e.key === 'Enter' && results[sel]) select(results[sel])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [results, sel])

  // Filter
  useEffect(() => {
    const q = query.trim().toLowerCase()
    if (!q) { setResults(ALL_LESSONS.slice(0, 8)); return }
    setResults(
      ALL_LESSONS.filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.chapter.toLowerCase().includes(q) ||
        l.level.toLowerCase().includes(q)
      ).slice(0, 10)
    )
    setSel(0)
  }, [query])

  const select = (lesson) => {
    navigate(`/lecon/${lesson.id}`)
    setSearchOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4"
      onClick={() => setSearchOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-void/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{    scale: 0.95, y: -20 }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        className="relative w-full max-w-xl glass rounded-2xl
                   border border-white/10 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06]">
          <Search size={16} className="text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Rechercher une leçon, un chapitre…"
            className="flex-1 bg-transparent text-white placeholder-slate-500
                       text-sm outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-500 hover:text-white">
              <X size={14} />
            </button>
          )}
          <kbd className="glass rounded px-2 py-0.5 text-[10px] text-slate-500
                          border border-white/10">Esc</kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-slate-500 text-sm">
              Aucune leçon trouvée
            </div>
          ) : (
            <div className="p-2">
              {!query && (
                <p className="text-[10px] font-medium text-slate-600 uppercase
                              tracking-widest px-3 py-1.5">
                  Leçons récentes
                </p>
              )}
              {results.map((lesson, i) => (
                <button
                  key={lesson.id}
                  onClick={() => select(lesson)}
                  onMouseEnter={() => setSel(i)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                              text-left transition-all text-sm
                              ${sel === i ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'}`}
                >
                  <span className="text-base flex-shrink-0">{lesson.levelMeta?.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{lesson.title}</p>
                    <p className="text-slate-500 text-[11px] truncate">
                      {lesson.levelMeta?.label} · {lesson.chapter}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="text-[10px] text-slate-600 flex items-center gap-1">
                      <Clock size={9} /> {lesson.duration}
                    </span>
                    {sel === i && <ArrowRight size={12} className="text-cyan" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-3
                        text-[10px] text-slate-600">
          <span><kbd className="glass rounded px-1.5 py-0.5 border border-white/10">↑↓</kbd> Naviguer</span>
          <span><kbd className="glass rounded px-1.5 py-0.5 border border-white/10">↵</kbd> Ouvrir</span>
          <span className="ml-auto">{ALL_LESSONS.length} leçons disponibles</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
