import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import LevelPage from './pages/LevelPage'

// ── App-wide context ──────────────────────────────────────────────────────────
export const AppContext = createContext(null)
export const useApp = () => useContext(AppContext)

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchOpen,  setSearchOpen]  = useState(false)
  const [activeLevel, setActiveLevel] = useState('terminale')

  const ctx = {
    sidebarOpen, setSidebarOpen,
    searchOpen,  setSearchOpen,
    activeLevel, setActiveLevel,
  }

  return (
    <AppContext.Provider value={ctx}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index          element={<Home />} />
            <Route path="niveau/:levelId"             element={<LevelPage />} />
            <Route path="lecon/:lessonId"             element={<Lesson />} />
            <Route path="*"       element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
