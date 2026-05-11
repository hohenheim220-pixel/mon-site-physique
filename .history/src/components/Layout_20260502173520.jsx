import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Sidebar from './Sidebar'
import SearchModal from './SearchModal'
import { useApp } from '../App'
import { useKeyboardSearch } from '../hooks/useKeyboardSearch'

export default function Layout() {
  const { sidebarOpen, searchOpen } = useApp()
  useKeyboardSearch()

  return (
    <div className="noise min-h-screen bg-cosmos bg-grid flex flex-col">

      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full
                        bg-indigo/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full
                        bg-cyan/10 blur-[100px] animate-pulse-slow"
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full
                        bg-nova/5 blur-[80px] animate-pulse-slow"
             style={{ animationDelay: '4s' }} />
      </div>

      <Header />

      <div className="flex flex-1 pt-[var(--header-height)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <motion.main
          className="flex-1 overflow-y-auto min-h-0"
          animate={{ marginLeft: sidebarOpen ? 'var(--sidebar-width)' : '0px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        >
          <div className="max-w-4xl mx-auto px-6 py-10">
            <Outlet />
          </div>
        </motion.main>
      </div>

      {/* Search modal */}
      <AnimatePresence>
        {searchOpen && <SearchModal />}
      </AnimatePresence>
    </div>
  )
}
