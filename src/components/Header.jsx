import { motion } from 'framer-motion'
import { Menu, Search, BookOpen, FlaskConical, Atom } from 'lucide-react'
import { useApp } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { setSidebarOpen, sidebarOpen, setSearchOpen } = useApp()
  const navigate = useNavigate()

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)]
                 glass border-b border-white/[0.06] flex items-center px-4 gap-3"
    >
      {/* Toggle sidebar */}
      <button
        onClick={() => setSidebarOpen(o => !o)}
        className="p-2 rounded-lg glass-hover text-slate-400 hover:text-white transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={18} />
      </button>

      {/* Logo */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2.5 group mr-2"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan/30 rounded-lg blur-md
                          group-hover:bg-cyan/50 transition-all" />
          <div className="relative w-8 h-8 bg-gradient-to-br from-cyan to-indigo
                          rounded-lg flex items-center justify-center">
            <Atom size={16} className="text-white" />
          </div>
        </div>
        <span className="font-display text-xl font-semibold tracking-wide
                         shimmer-text hidden sm:block">
          Physica
        </span>
      </button>

      {/* Breadcrumb pill */}
      <div className="hidden md:flex items-center gap-1.5 glass rounded-full
                      px-3 py-1 text-xs text-slate-400">
        <FlaskConical size={12} className="text-cyan" />
        <span>Cours de Physique complet</span>
        <span className="text-white/20">·</span>
        <span className="text-cyan">Terminale → Master</span>
      </div>

      <div className="flex-1" />

      {/* Search button */}
      <button
        onClick={() => setSearchOpen(true)}
        className="flex items-center gap-2 glass glass-hover rounded-lg
                   px-3 py-1.5 text-sm text-slate-400 hover:text-white
                   transition-all w-48 justify-between"
      >
        <div className="flex items-center gap-2">
          <Search size={14} />
          <span>Rechercher…</span>
        </div>
        <kbd className="glass rounded px-1.5 py-0.5 text-[10px] text-slate-500
                        border border-white/10">⌘K</kbd>
      </button>

      {/* Progress indicator */}
      <div className="hidden lg:flex items-center gap-2 glass rounded-full
                      px-3 py-1 text-xs">
        <BookOpen size={12} className="text-pulsar" />
        <span className="text-pulsar font-medium">3 leçons</span>
        <span className="text-slate-500">complétées</span>
      </div>
    </motion.header>
  )
}
