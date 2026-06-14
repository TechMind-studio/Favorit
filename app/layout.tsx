import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Автошкола Фаворит — Новосибирск',
  description:
    '30 лет обучаем вождению. Категории A и B. 15 филиалов по Новосибирску. Автодром в центре города. Рассрочка 0%.',
  keywords: 'автошкола, Новосибирск, права, категория B, категория A, вождение',
  openGraph: {
    title: 'Автошкола Фаворит — Новосибирск',
    description: '70% водителей Новосибирска учились у нас! Рассрочка 0%, автодром в центре города.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
