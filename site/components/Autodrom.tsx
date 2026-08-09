import AnimateIn from './AnimateIn'

export default function Autodrom() {
  return (
    <section className="py-32 bg-ink text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <AnimateIn direction="left" className="space-y-10">
          <div className="inline-block py-2 px-4 border border-white/20 rounded-full text-[10px] font-black tracking-widest uppercase text-white/60">
            Собственный автодром
          </div>

          <h2 className="font-headline text-6xl md:text-8xl font-black leading-none tracking-tighter">
            АВТОДРОМ<br />ПРЯМО В<br />
            <span className="text-primary">ЦЕНТРЕ</span>
          </h2>

          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-lg">
            Собственный автодром прямо в центре Новосибирска. Отрабатывайте навыки вождения на площадке с профессиональной разметкой и препятствиями.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '24/7', label: 'Доступность' },
              { value: '100%', label: 'Безопасность' },
              { value: '5 га', label: 'Площадь' },
              { value: 'ГИБДД', label: 'Аккредитация' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl font-black font-headline mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#prices"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-primary/30"
          >
            Записаться на экскурсию
          </a>
        </AnimateIn>

        <AnimateIn direction="right" className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-white/[0.03] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-14 h-14 text-zinc-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18M3 4h11l-1 3 1 3H3" />
              </svg>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Фото автодрома</p>
              <p className="text-zinc-700 text-xs mt-1">Добавьте в /public/images/autodrom.jpg</p>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
