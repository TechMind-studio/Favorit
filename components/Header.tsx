'use client'

import { useState } from 'react'
import Image from 'next/image'


const navLinks = [
  { label: 'Автопарк', href: '#cars' },
  { label: 'Цены', href: '#prices' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Филиалы', href: '#branches' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-0">
      <div className="max-w-6xl mx-auto glass rounded-full px-10 py-3 flex justify-between items-center shadow-xl shadow-black/5 border border-white/50">
        <a href="#" className="flex items-center gap-4 flex-shrink-0">
          <Image src="/logo.svg" alt="Автошкола Фаворит" width={495} height={387} className="h-[52px] w-auto" priority />
          <div className="block">
            <span className="block text-[11px] font-black uppercase tracking-[0.25em] leading-none text-gray-400">Автошкола</span>
            <span className="block text-lg font-black tracking-tight leading-none text-primary">ФАВОРИТ</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-bold tracking-tight text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#prices"
          className="hidden md:block bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all active:scale-95"
        >
          Записаться
        </a>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
          <span className="block w-5 h-0.5 mb-1 bg-gray-800" />
          <span className="block w-5 h-0.5 mb-1 bg-gray-800" />
          <span className="block w-5 h-0.5 bg-gray-800" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 glass rounded-2xl px-4 py-4 border border-white/50 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-800 font-bold border-b border-gray-100 last:border-0 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#prices"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 bg-gray-900 text-white text-center py-3 rounded-full font-bold text-[11px] tracking-widest uppercase"
          >
            Записаться
          </a>
        </div>
      )}
    </header>
  )
}
