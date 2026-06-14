'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import AnimateIn from './AnimateIn'

interface Car {
  name: string
  category: string
  description: string
  color: string
  imagePlaceholder: string
  image?: string
}

const cars: Car[] = [
  {
    name: 'JAC J7',
    category: 'Категория B',
    description: 'Современный седан с отличной обзорностью и просторным салоном.',
    color: 'from-blue-900 to-blue-700',
    imagePlaceholder: 'JAC J7',
    image: '/images/cars/jac_j7.png',
  },
  {
    name: 'Hyundai Solaris',
    category: 'Категория B',
    description: 'Современный седан с отличной обзорностью. Доступен с МКПП и АКПП.',
    color: 'from-gray-800 to-gray-600',
    imagePlaceholder: 'Hyundai Solaris',
  },
  {
    name: 'Kia Rio',
    category: 'Категория B',
    description: 'Компактный и манёвренный. Идеален для отработки парковки и городского вождения.',
    color: 'from-red-900 to-red-700',
    imagePlaceholder: 'Kia Rio',
  },
  {
    name: 'LADA Vesta',
    category: 'Категория B',
    description: 'Отечественный автомобиль с честной механикой. Отлично подходит для начинающих.',
    color: 'from-emerald-900 to-emerald-700',
    imagePlaceholder: 'LADA Vesta',
    image: '/images/cars/vesta.jpg',
  },
  {
    name: 'Honda CB500F',
    category: 'Категория A',
    description: 'Лёгкий учебный мотоцикл. Интуитивное управление и надёжные тормоза.',
    color: 'from-orange-900 to-orange-700',
    imagePlaceholder: 'Honda CB500F',
    image: '/images/cars/honda.png',
  },
  {
    name: 'Yamaha MT-03',
    category: 'Категория A',
    description: 'Спортивный нейкед для начинающих мотоциклистов. Лёгкий и отзывчивый.',
    color: 'from-violet-900 to-violet-700',
    imagePlaceholder: 'Yamaha MT-03',
  },
  {
    name: 'Omoda C5',
    category: 'Категория B',
    description: 'Современный кроссовер с просторным салоном и отличной обзорностью.',
    color: 'from-sky-900 to-sky-700',
    imagePlaceholder: 'Omoda C5',
  },
  {
    name: 'Yamaha YB125',
    category: 'Категория A',
    description: 'Лёгкий мотоцикл для начинающих. Надёжный и экономичный.',
    color: 'from-slate-700 to-slate-500',
    imagePlaceholder: 'Yamaha YB125',
  },
  {
    name: 'RegоMoto Викинг 150',
    category: 'Категория A',
    description: 'Надёжный учебный мотоцикл. Устойчивый и простой в управлении.',
    color: 'from-zinc-800 to-zinc-600',
    imagePlaceholder: 'RegоMoto Викинг 150',
  },
  {
    name: 'Xicite',
    category: 'Категория A',
    description: 'Компактный и манёвренный мотоцикл для отработки базовых навыков.',
    color: 'from-rose-900 to-rose-700',
    imagePlaceholder: 'Xicite',
  },
]

export default function CarsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % cars.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + cars.length) % cars.length), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section id="cars" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn><h2 className="section-title">ГАЛЕРЕЯ<br /><span className="text-zinc-300">АВТОПАРКА.</span></h2></AnimateIn>
        <AnimateIn delay={0.1}><p className="section-subtitle">Весь парк проходит регулярное техническое обслуживание</p></AnimateIn>

        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cars.map((car) => (
              <div key={car.name} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${car.color} aspect-[4/3] md:aspect-[16/7] flex items-center justify-center relative`}>
                  {car.image ? (
                    <Image src={car.image} alt={car.name} fill className="object-cover" />
                  ) : (
                    <div className="text-center">
                      <div className="text-white/20 text-8xl font-black mb-2">📸</div>
                      <p className="text-white/50 text-lg">Фото: {car.imagePlaceholder}</p>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-8">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {car.category}
                    </span>
                    <h3 className="text-white text-lg md:text-2xl font-bold mb-1">{car.name}</h3>
                    <p className="text-white/70 text-xs md:text-sm max-w-lg hidden sm:block">{car.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Назад"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Вперёд"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {cars.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-8' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mt-6">
          {cars.map((car, i) => (
            <button
              key={car.name}
              onClick={() => setCurrent(i)}
              className={`rounded-xl overflow-hidden border-2 transition-all ${
                i === current ? 'border-primary scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`bg-gradient-to-br ${car.color} aspect-[4/3] relative flex items-end p-2`}>
                {car.image && <Image src={car.image} alt={car.name} fill className="object-cover" />}
                <span className="relative text-white text-xs font-medium leading-tight drop-shadow">{car.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
