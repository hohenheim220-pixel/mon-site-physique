import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown, Clock, Star, Lock } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CURRICULUM, LEVELS } from '../data/curriculum'
import { useApp } from '../App'

const DIFF_COLORS = ['', 'text-pulsar', 'text-cyan', 'text-indigo-light', 'text-nova', 'text-orange-400']
const DIFF_STARS  = (n) => '★'.repeat(n) + '☆'.repeat(5 - n)

export default function Sidebar() {
  const { sidebarOpen, activeLevel, setActiveLevel } = useApp()
  const [openChapters, setOpenChapters] = useState({ 'l3-qm': true })
  const navigate  = useNavigate()
  const location  = useLocation()

  const levelData  = CURRICULUM.find(c => c.level === activeLevel)
  const levelMeta  = LEVELS.find(l => l.id === activeLevel)

  const toggleChapter = (id) =>
    setOpenChapters(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0,    opacity: 1 }}
          exit={{    x: -300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          className="fixed left-0 top-[var(--header-height)] bottom-0 z-40
                     w-[var(--sidebar-width)] flex flex-col
                     glass border-r border-white/[0.06] overflow-hidden"
        >
          {/* ── Level tabs ── */}
          <div className="p-3 border-b border-white/[0.06] flex-shrink-0">
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest
                          mb-2 px-1">Niveau</p>
            <div className="flex flex-col gap-1">
              {LEVELS.map(lv => (
                <button
                  key={lv.id}
                  onClick={() => setActiveLevel(lv.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                              transition-all duration-200 group text-left w-full
                              ${activeLevel === lv.id
                                ? 'bg-white/[0.08] border border-white/10 text-white'
                                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'}`}
                >
                  <span className="text-base leading-none">{lv.icon}</span>
                  <span className="font-medium">{lv.label}</span>
                  {activeLevel === lv.id && (
                    <motion.div
                      layoutId="level-indicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: lv.color }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Level header ── */}
          <div className="px-4 py-3 border-b border-white/[0.06] flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xl">{levelMeta?.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{levelMeta?.label}</p>
                <p className="text-slate-500 text-[11px]">{levelMeta?.description}</p>
              </div>
            </div>
          </div>

          {/* ── Chapter & lesson list ── */}
          <div className="flex-1 overflow-y-auto p-2">
            {levelData?.chapters.map(chapter => (
              <div key={chapter.id} className="mb-1">
                {/* Chapter header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg
                             text-slate-300 hover:text-white hover:bg-white/[0.04]
                             transition-all text-sm font-medium group"
                >
                  <span className="text-base">{chapter.icon}</span>
                  <span className="flex-1 text-left leading-snug">{chapter.title}</span>
                  <span className="text-slate-600 text-xs">{chapter.lessons.length}</span>
                  <motion.span
                    animate={{ rotate: openChapters[chapter.id] ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-slate-400" />
                  </motion.span>
                </button>

                {/* Lessons */}
                <AnimatePresence initial={false}>
                  {openChapters[chapter.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{    height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 pl-3 border-l border-white/[0.06] py-1 flex flex-col gap-0.5">
                        {chapter.lessons.map(lesson => {
                          const isActive = location.pathname === `/lecon/${lesson.id}`
                          const isLocked = lesson.difficulty >= 5 && activeLevel !== 'master'
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => !isLocked && navigate(`/lecon/${lesson.id}`)}
                              className={`w-full text-left px-3 py-2 rounded-md transition-all
                                          group flex items-start gap-2
                                          ${isActive
                                            ? 'bg-cyan/10 border border-cyan/20 text-white'
                                            : isLocked
                                              ? 'opacity-40 cursor-not-allowed text-slate-500'
                                              : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'}`}
                            >
                              <div className="flex-1 min-w-0">
                                <p className={`text-xs leading-snug truncate
                                               ${isActive ? 'text-white font-medium' : ''}`}>
                                  {lesson.title}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <Clock size={10} className="text-slate-600 flex-shrink-0" />
                                  <span className="text-[10px] text-slate-600">{lesson.duration}</span>
                                  <span className={`text-[9px] ${DIFF_COLORS[lesson.difficulty]}`}>
                                    {DIFF_STARS(lesson.difficulty)}
                                  </span>
                                </div>
                              </div>
                              {isLocked && <Lock size={10} className="flex-shrink-0 mt-0.5" />}
                              {isActive && (
                                <div className="w-1 h-full rounded-full bg-cyan flex-shrink-0
                                                self-stretch absolute right-2" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── Bottom status bar ── */}
          <div className="p-3 border-t border-white/[0.06] flex-shrink-0">
            <div className="glass rounded-lg p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-cyan to-indigo rounded-full
                              flex items-center justify-center text-xs font-bold">
                P
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">Mon parcours</p>
                <div className="mt-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '18%' }}
                    transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan to-indigo rounded-full"
                  />
                </div>
              </div>
              <span className="text-[10px] text-slate-500">18%</span>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
