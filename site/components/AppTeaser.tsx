import AnimateIn from './AnimateIn'
import TicketScreen from './TicketScreen'

const features = [
  'Онлайн-запись на занятия и автодром',
  'Билеты ПДД: ошибка сразу ведёт к разбору в видеоуроке',
  'Электронный дневник вождения и прогресс',
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
            <div className="relative" style={{ width: 390 * 0.62, height: 844 * 0.62 }}>
              <span className="absolute -top-3 -right-3 z-10 text-[9px] font-black tracking-widest uppercase text-white bg-primary rounded-full px-3 py-1.5 shadow-lg shadow-primary/30">
                Скоро
              </span>
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/5" />
              <div style={{ ['--phone-scale' as string]: '0.62' }}>
                <TicketScreen />
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
