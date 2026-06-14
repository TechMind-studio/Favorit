import AnimateIn from './AnimateIn'

export default function Autodrom() {
  return (
    <section className="py-32 bg-gray-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <AnimateIn direction="left" className="space-y-10">
          <div className="inline-block py-2 px-4 border border-white/20 rounded-full text-[10px] font-black tracking-widest uppercase text-white/60">
            Собственный автодром
          </div>

          <h2 className="font-headline text-6xl md:text-8xl font-extrabold leading-none tracking-tighter">
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
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5] bg-zinc-800 flex items-center justify-center">
            <div className="text-center">
              <div className="text-zinc-600 text-6xl mb-3">🏁</div>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Фото автодрома</p>
              <p className="text-zinc-700 text-xs mt-1">Добавьте в /public/images/autodrom.jpg</p>
            </div>
          </div>
          <div className="absolute -inset-10 bg-primary/15 blur-[80px] -z-10 rounded-full" />
        </AnimateIn>

      </div>
    </section>
  )
}
