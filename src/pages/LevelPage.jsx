import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { CURRICULUM, LEVELS } from '../data/curriculum'

const DIFF_COLORS = ['', 'bg-pulsar/20 text-pulsar', 'bg-cyan/20 text-cyan',
  'bg-indigo/20 text-indigo-light', 'bg-nova/20 text-nova', 'bg-orange-400/20 text-orange-400']

export default function LevelPage() {
  const { levelId } = useParams()
  const navigate    = useNavigate()
  const levelData   = CURRICULUM.find(c => c.level === levelId)
  const levelMeta   = LEVELS.find(l => l.id === levelId)

  if (!levelData) return <p className="text-slate-500">Niveau introuvable.</p>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="text-4xl">{levelMeta?.icon}</span>
        <div>
          <h1 className="font-display text-4xl font-semibold text-white">{levelMeta?.label}</h1>
          <p className="text-slate-400 mt-1">{levelMeta?.description}</p>
        </div>
      </div>

      {/* Chapters */}
      {levelData.chapters.map((chapter, ci) => (
        <motion.section
          key={chapter.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ci * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{chapter.icon}</span>
            <h2 className="font-display text-xl font-semibold text-white">{chapter.title}</h2>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {chapter.lessons.map((lesson, li) => (
              <motion.button
                key={lesson.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: ci * 0.1 + li * 0.05 }}
                onClick={() => navigate(`/lecon/${lesson.id}`)}
                className="glass glass-hover rounded-xl p-4 text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`badge text-[10px] ${DIFF_COLORS[lesson.difficulty]}`}>
                    {'★'.repeat(lesson.difficulty)}
                  </span>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-cyan
                                                    group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-white font-medium text-sm leading-snug mb-2">
                  {lesson.title}
                </h3>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <Clock size={11} />
                  <span>{lesson.duration}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.div>
  )
}
