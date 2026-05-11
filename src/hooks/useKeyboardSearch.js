import { useEffect } from 'react'
import { useApp } from '../App'

/**
 * useKeyboardSearch — registers the global Cmd/Ctrl+K shortcut
 * to open the search modal. Call once in App or Layout.
 */
export function useKeyboardSearch() {
  const { setSearchOpen } = useApp()

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(open => !open)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [setSearchOpen])
}
