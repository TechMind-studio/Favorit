import Image from 'next/image'
import AnimateIn from './AnimateIn'
import { basePath } from '@/lib/basePath'

const features = [
  'Онлайн-запись на занятия и автодром',
  'Электронный дневник вождения и прогресс',
  'Бесплатные билеты ПДД для подготовки',
]

const answers = [
  'Проедете перекрёсток первым',
  'Уступите дорогу трамваю, выполнив поворот с проезжей части',
  'Пропустите трамвай, перестроитесь на трамвайные пути попутного направления и выполните с них поворот',
]

export default function AppTeaser() {
  return (
    <section className="py-24 bg-[#F7F6F4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <AnimateIn direction="left">
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Скоро
            </span>

            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900">
              Мобильное приложение<br />«Фаворит» уже в разработке.
            </h2>
            <p className="text-gray-500 text-lg mt-5 max-w-md font-light leading-relaxed">
              Готовим приложение, чтобы записи, прогресс и билеты ПДД всегда были под рукой.
            </p>

            <ul className="space-y-3 mt-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/driving_school_Favorit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-9 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-primary transition-colors"
            >
              Узнать первым в Telegram
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimateIn>

          <AnimateIn direction="right" className="flex justify-center">
            <div className="relative w-64">
              <div className="rounded-[2.5rem] border-[6px] border-ink bg-white shadow-xl shadow-black/10 aspect-[9/19] flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-4 pt-3 pb-1">
                  <span className="text-[9px] font-bold text-gray-400">9:41</span>
                  <span className="text-[7px] font-black tracking-widest uppercase text-primary bg-primary/10 rounded-full px-2 py-0.5">Скоро</span>
                </div>

                <div className="flex items-center justify-between px-4 mb-2">
                  <span className="text-[11px] font-black font-headline text-gray-900">БИЛЕТ 6</span>
                  <span className="text-[8px] text-gray-400 font-medium">Вопрос 13 из 20</span>
                </div>

                <div className="mx-4 rounded-xl overflow-hidden aspect-[16/9] relative mb-2.5 bg-gray-100">
                  <Image
                    src={`${basePath}/images/app-ticket-illustration.jpg`}
                    alt="Билет 6, вопрос 13 — фирменная иллюстрация Автошколы Фаворит"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="px-4 text-[9.5px] text-gray-700 font-semibold leading-snug mb-2.5">
                  Вы намерены повернуть налево. Ваши действия?
                </p>

                <div className="px-4 space-y-1.5">
                  {answers.map((a, i) => (
                    <div
                      key={a}
                      className={`flex items-start gap-1.5 rounded-lg px-2 py-1.5 text-[8px] leading-tight ${
                        i === 0 ? 'bg-primary/10 border border-primary/30 text-gray-900' : 'bg-gray-50 text-gray-500'
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-3 h-3 rounded-full flex items-center justify-center text-[7px] font-bold ${
                          i === 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {i + 1}
                      </span>
                      {a}
                    </div>
                  ))}
                </div>

                <div className="mt-auto px-4 pb-4 pt-2.5">
                  <div className="w-full bg-gray-900 text-white text-[8px] font-black tracking-widest uppercase text-center py-2 rounded-full">
                    Ответить
                  </div>
                </div>
              </div>
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/5" />
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
