import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <header className="border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur z-10">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-slate-100">
          Mini Web App
        </Link>
        <div className="flex gap-3 text-sm">
          <Link to="/" className="hover:text-sky-400">Home</Link>
          <Link to="/form" className="hover:text-sky-400">Form</Link>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Navbar