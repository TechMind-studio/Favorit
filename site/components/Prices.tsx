'use client'

import { useState } from 'react'
import AnimateIn from './AnimateIn'

type Category = 'B' | 'A'

interface PriceCard {
  category: Category
  title: string
  subtitle: string
  price: number
  oldPrice: number
  monthlyPrice: number
  spotsLeft: number
  nextGroup: string
  duration: string
  features: string[]
  popular?: boolean
  guarantee: string
}

const cards: PriceCard[] = [
  {
    category: 'B',
    title: 'Категория B',
    subtitle: 'Легковой автомобиль',
    price: 65000,
    oldPrice: 80000,
    monthlyPrice: 5417,
    spotsLeft: 4,
    nextGroup: '1 апреля',
    duration: '3 месяца',
    popular: true,
    guarantee: 'Не сдадите с 1-го раза — оплатим пересдачу',
    features: [
      'Теория — 130 академических часов',
      'Вождение — 56 часов (28 занятий)',
      'Автодром в центре города',
      'Подготовка к экзамену ГИБДД',
      'Помощь при записи в ГИБДД',
      'Опытный инструктор за вами закреплён',
    ],
  },
  {
    category: 'A',
    title: 'Категория A',
    subtitle: 'Мотоцикл',
    price: 35000,
    oldPrice: 45000,
    monthlyPrice: 2917,
    spotsLeft: 7,
    nextGroup: '1 апреля',
    duration: '3 месяца',
    guarantee: 'Не сдадите с 1-го раза — оплатим пересдачу',
    features: [
      'Теория — 130 академических часов',
      'Вождение — 18 часов (9 занятий)',
      'Современная учебная площадка',
      'Подготовка к экзамену ГИБДД',
      'Помощь при записи в ГИБДД',
      'Опытный инструктор за вами закреплён',
    ],
  },
]

export default function Prices() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category>('B')

  const openModal = (cat: Category) => {
    setSelectedCategory(cat)
    setModalOpen(true)
  }

  return (
    <section id="prices" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-title">СТОИМОСТЬ<br /><span className="text-gradient">ОБУЧЕНИЯ.</span></h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="section-subtitle">Фиксированная цена — никаких скрытых платежей</p>
        </AnimateIn>


        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const savings = card.oldPrice - card.price
            const isB = card.category === 'B'
            return (
              <AnimateIn key={card.category} delay={0.1 * idx} direction={idx === 0 ? 'left' : 'right'}>
              <div
                key={card.category}
                className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-6 md:p-10 bg-ink text-white"
              >
                <span className="absolute -top-4 -left-2 text-[80px] md:text-[140px] font-extrabold font-headline select-none pointer-events-none leading-none text-white/[0.03]">
                  {card.category}
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-1 text-zinc-500">
                        {card.subtitle}
                      </p>
                      <h3 className="text-3xl font-extrabold font-headline text-white">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest bg-white/10 text-zinc-300">
                      −{savings.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="line-through text-sm text-zinc-600">
                      {card.oldPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-black font-headline text-white">
                      {card.price.toLocaleString('ru-RU')}
                    </span>
                    <span className="text-xl font-semibold mb-1 text-zinc-400">₽</span>
                  </div>
                  <p className="text-primary font-bold text-sm mb-6">
                    от {card.monthlyPrice.toLocaleString('ru-RU')} ₽/мес · рассрочка 0%
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold rounded-xl px-4 py-3 mb-6 bg-white/5 text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                    Осталось {card.spotsLeft} места · группа {card.nextGroup}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {card.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10">
                  <button
                    onClick={() => openModal(card.category)}
                    className="w-full py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-100 bg-white text-gray-900 hover:bg-primary hover:text-white"
                  >
                    Забронировать место
                  </button>
                  <p className="text-center text-[10px] mt-2 text-zinc-600">
                    Бесплатно · без предоплаты
                  </p>
                </div>
              </div>
              </AnimateIn>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm text-gray-500">
          {['Лицензия МВД', 'Аккредитация ГИБДД', 'Рассрочка без %', 'Гарантия пересдачи'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-4 sm:p-8 w-full max-w-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-1">
              Бронирую место — Категория {selectedCategory}
            </h3>
            <p className="text-gray-500 mb-1 text-sm">
              Менеджер перезвонит за 15 минут и ответит на все вопросы
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-600 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Осталось {selectedCategory === 'B' ? '4' : '7'} места в ближайшей группе
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Заявка принята! Перезвоним в течение 15 минут.')
                setModalOpen(false)
              }}
            >
              <div className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  required
                  placeholder="Номер телефона"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  defaultValue={selectedCategory}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                >
                  <option value="B">Категория B — 65 000 ₽</option>
                  <option value="A">Категория A — 35 000 ₽</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full mt-5 py-4 text-base">
                Забронировать место бесплатно
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/policy" className="underline">политикой конфиденциальности</a>
              </p>
            </form>

            <button
              onClick={() => setModalOpen(false)}
              aria-label="Закрыть"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
