'use client'

import { useState } from 'react'
import AnimateIn from './AnimateIn'

interface Review {
  name: string
  date: string
  rating: number
  category: string
  text: string
  avatar: string
}

const reviews: Review[] = [
  {
    name: 'Алёна',
    date: '21 год',
    rating: 5,
    category: 'Категория B',
    avatar: 'АЛ',
    text: 'Пришла учиться с нуля — за рулём ни разу не сидела. Оказалось, что с грамотными и терпеливыми инструкторами стать хорошим водителем можно достаточно быстро. Экзамен с первого раза сдала. Очень довольна!',
  },
  {
    name: 'Ольга',
    date: '32 года',
    rating: 5,
    category: 'Категория B',
    avatar: 'ОЛ',
    text: 'Я та самая ученица, которая с самого начала очень боялась водить. Огромное спасибо инструкторам — совместить теорию и практику оказалось проще, чем я рассчитывала. Легко сдала экзамен.',
  },
  {
    name: 'Алексей',
    date: '27 лет',
    rating: 5,
    category: 'Категория B',
    avatar: 'АЛ',
    text: 'Теорию объясняют просто и доходчиво, много примеров из практики. Инструкторы отличные — бодро и с юмором, но без ущерба для процесса. Благодарю!',
  },
  {
    name: 'Оксана',
    date: '46 лет',
    rating: 5,
    category: 'Категория B',
    avatar: 'ОК',
    text: 'Пришла после 8 лет перерыва. Инструкторы отнеслись с пониманием, подбадривали. Через несколько занятий уверенно села за руль, и теперь мои поездки по городу стали комфортнее. Спасибо!',
  },
  {
    name: 'Артём',
    date: '26 лет',
    rating: 5,
    category: 'Категория B',
    avatar: 'АР',
    text: 'Инструкторы теории — настоящие профессионалы: объясняют доступно, конкретно, с примерами. Инструкторы практики научили быстро ориентироваться в дорожной ситуации. Экзамен с первого раза.',
  },
  {
    name: 'Олег',
    date: '24 года',
    rating: 5,
    category: 'Категория B',
    avatar: 'ОЛ',
    text: 'Понравился подход инструкторов — атмосфера непринуждённая, помогает расслабиться и верить в себя. Инструкторы вождения очень спокойные и терпеливые. Теперь рекомендую «Фаворит» друзьям.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const SHOW_COUNT = 3

export default function Reviews() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? reviews : reviews.slice(0, SHOW_COUNT)

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn><h2 className="section-title">ИСТОРИИ<br /><span className="text-gradient">УСПЕХА.</span></h2></AnimateIn>
        <AnimateIn delay={0.1}><p className="section-subtitle">
          Более&nbsp;50&nbsp;000 выпускников доверили нам своё обучение
        </p></AnimateIn>

        <div className="flex justify-center mb-10">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl px-8 py-5 text-center max-w-sm">
            <div className="text-5xl font-black text-primary mb-1">92%</div>
            <div className="text-gray-700 font-semibold">наших учеников сдают экзамен ГИБДД</div>
            <div className="text-gray-400 text-sm mt-1">с&nbsp;первого раза — без пересдач</div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 md:gap-6 bg-gray-50 rounded-2xl px-4 md:px-8 py-4 md:py-5 border border-gray-100">
            <div className="text-center">
              <div className="text-5xl font-black text-gray-900">4.9</div>
              <StarRating rating={5} />
              <div className="text-xs text-gray-500 mt-1">средняя оценка</div>
            </div>
            <div className="w-px h-14 bg-gray-200" />
            <div className="space-y-1">
              {[5, 4, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500 w-4">{s}</span>
                  <svg className="w-3 h-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-yellow-400 h-1.5 rounded-full"
                      style={{ width: s === 5 ? '85%' : s === 4 ? '12%' : '3%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visible.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
                <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full flex-shrink-0">
                  {review.category}
                </span>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {!showAll && reviews.length > SHOW_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              Показать все отзывы ({reviews.length})
            </button>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://vk.com/favoritavtoshkola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
            </svg>
            Читать все отзывы во ВКонтакте
          </a>
        </div>
      </div>
    </section>
  )
}
