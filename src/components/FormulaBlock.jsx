import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import katex from 'katex'

export default function FormulaBlock({ latex, label, comment, displayMode = true, index = 0 }) {
  const ref    = useRef(null)
  const [copied, setCopied] = useState(false)
  const [error,  setError]  = useState(null)

  useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(latex, ref.current, {
        displayMode,
        throwOnError:    false,
        errorColor:      '#f87171',
        macros: {
          '\\ket':    '\\left|#1\\right\\rangle',
          '\\bra':    '\\left\\langle#1\\right|',
          '\\braket': '\\left\\langle#1\\right\\rangle',
        },
      })
      setError(null)
    } catch (e) {
      setError(e.message)
    }
  }, [latex, displayMode])

  const copyLatex = () => {
    navigator.clipboard.writeText(latex).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
      className="group relative my-5"
    >
      <div className="relative overflow-hidden rounded-xl border border-indigo/20
                      bg-gradient-to-br from-indigo/[0.06] to-cyan/[0.04]
                      shadow-formula p-5 pr-12">

        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]
                        bg-gradient-to-b from-cyan via-indigo to-transparent
                        rounded-l-xl" />

        {/* Label */}
        {label && (
          <p className="text-[11px] font-medium text-indigo-light/70 mb-3
                        uppercase tracking-widest font-body">
            {label}
          </p>
        )}

        {/* Formula */}
        {error ? (
          <p className="text-red-400 font-mono text-sm">{error}</p>
        ) : (
          <div
            ref={ref}
            className="overflow-x-auto py-1 text-slate-100 formula-rendered"
          />
        )}

        {/* Comment */}
        {comment && (
          <p className="mt-3 text-[11px] text-slate-500 italic border-t
                        border-white/[0.06] pt-2 font-body">
            {comment}
          </p>
        )}

        {/* Copy button */}
        <button
          onClick={copyLatex}
          className="absolute top-3 right-3 p-1.5 rounded-md text-slate-600
                     hover:text-slate-300 hover:bg-white/[0.06] transition-all
                     opacity-0 group-hover:opacity-100"
          title="Copier le code LaTeX"
        >
          {copied ? <Check size={13} className="text-pulsar" /> : <Copy size={13} />}
        </button>
      </div>
    </motion.div>
  )
}

// ── Inline formula (for use within text) ─────────────────
export function InlineFormula({ latex }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(latex, ref.current, {
        displayMode:  false,
        throwOnError: false,
        macros: {
          '\\ket':    '\\left|#1\\right\\rangle',
          '\\bra':    '\\left\\langle#1\\right|',
          '\\braket': '\\left\\langle#1\\right\\rangle',
        },
      })
    } catch (e) { /* silent */ }
  }, [latex])

  return (
    <span
      ref={ref}
      className="inline-block align-middle mx-0.5"
    />
  )
}
