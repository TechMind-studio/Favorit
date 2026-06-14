'use client'

import { useState } from 'react'
import AnimateIn from './AnimateIn'

interface Branch {
  id: number
  district: string
  address: string
  phone: string
  hours: string
  metro?: string
}

const branches: Branch[] = [
  {
    id: 1,
    district: 'Центральный',
    address: 'ул. Фрунзе, 15',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Сибирская',
  },
  {
    id: 2,
    district: 'Центральный',
    address: 'ул. Гоголя, 15',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Площадь Ленина',
  },
  {
    id: 3,
    district: 'Центральный',
    address: 'ул. Красный проспект, 77 А',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Красный проспект',
  },
  {
    id: 4,
    district: 'Центральный',
    address: 'ул. Ядринцевская, 18',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Площадь Ленина',
  },
  {
    id: 5,
    district: 'Заельцовский',
    address: 'ул. Красный проспект, 182/1',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Заельцовская',
  },
  {
    id: 6,
    district: 'Железнодорожный',
    address: 'ул. Челюскинцев, 14/2',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Гарина-Михайловского',
  },
  {
    id: 7,
    district: 'Дзержинский',
    address: 'пр. Дзержинского, 6',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
    metro: 'Гагаринская',
  },
  {
    id: 8,
    district: 'Октябрьский',
    address: 'ул. Выборная, 89/4',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
  },
  {
    id: 9,
    district: 'Октябрьский',
    address: 'ул. Кирова, 82',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
  },
  {
    id: 10,
    district: 'Калининский',
    address: 'ул. Б. Хмельницкого, 28/1',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
  },
  {
    id: 11,
    district: 'Первомайский',
    address: 'ул. Первомайская, 198',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
  },
  {
    id: 12,
    district: 'Ленинский',
    address: 'ул. Спортивная, 21',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–20:00, Сб: 10:00–17:00',
  },
  {
    id: 13,
    district: 'Искитим',
    address: 'г. Искитим, ул. Индустриальная, 52а',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–19:00, Сб: 10:00–16:00',
  },
  {
    id: 14,
    district: 'Куйбышев',
    address: 'г. Куйбышев, ул. Куйбышева, 25',
    phone: '+7 (383) 383-21-00',
    hours: 'Пн–Пт: 9:00–19:00, Сб: 10:00–16:00',
  },
]

function MapPinIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const SHOW_COUNT = 6

export default function Branches() {
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  const filtered = branches.filter(
    (b) =>
      b.district.toLowerCase().includes(search.toLowerCase()) ||
      b.address.toLowerCase().includes(search.toLowerCase()),
  )

  const visible = search ? filtered : (showAll ? filtered : filtered.slice(0, SHOW_COUNT))

  return (
    <section id="branches" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn><h2 className="section-title text-white">РЯДОМ С ВАМИ<br /><span className="text-primary">В ЛЮБОЙ ТОЧКЕ</span></h2></AnimateIn>
        <p className="text-gray-400 text-center text-lg mb-8">
          15 филиалов в Новосибирске, Искитиме и Куйбышеве — найдите ближайший
        </p>

        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Поиск по районам и адресам"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((branch) => (
            <div
              key={branch.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-white text-lg">{branch.district}</h3>
                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                  #{branch.id}
                </span>
              </div>

              <div className="flex items-start gap-2 text-gray-400 text-sm mb-2">
                <span className="text-primary mt-0.5 flex-shrink-0">
                  <MapPinIcon />
                </span>
                <span>{branch.address}</span>
              </div>

              {branch.metro && (
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                  <span className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    М
                  </span>
                  <span>{branch.metro}</span>
                </div>
              )}

              <div className="flex items-start gap-2 text-gray-400 text-xs mb-4">
                <span className="text-gray-500 mt-0.5 flex-shrink-0">
                  <ClockIcon />
                </span>
                <span>{branch.hours}</span>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://yandex.ru/maps/?text=Автошкола+Фаворит+${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs font-medium py-2 rounded-lg bg-white/10 hover:bg-primary hover:text-white transition-colors text-gray-300"
                >
                  На карте
                </a>
                <a
                  href="tel:+73833832100"
                  className="flex-1 text-center text-xs font-medium py-2 rounded-lg bg-primary/20 hover:bg-primary text-primary hover:text-white transition-colors"
                >
                  Позвонить
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-10">Филиалы не найдены</p>
        )}

        {!search && !showAll && filtered.length > SHOW_COUNT && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="border border-white/20 hover:border-primary text-white hover:text-primary px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
            >
              Показать все {filtered.length} филиалов
            </button>
          </div>
        )}

        <div className="mt-10 bg-primary rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-white font-bold text-xl mb-1">🏁 Автодром в центре города</div>
            <p className="text-white/80 text-sm">
              Современная учебная площадка с разметкой и препятствиями. Удобный проезд из любого района.
            </p>
          </div>
          <a
            href="https://yandex.ru/maps/?text=Автодром+Фаворит+Новосибирск"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0 text-sm"
          >
            Посмотреть на карте
          </a>
        </div>
      </div>
    </section>
  )
}
