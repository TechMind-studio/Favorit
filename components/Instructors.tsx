const instructors = [
  {
    name: 'Михаил Воронин',
    experience: '15 лет мастерства',
    badge: 'Эксперт кат. B',
    initials: 'МВ',
    color: 'from-slate-700 to-slate-900',
  },
  {
    name: 'Алексей Смирнов',
    experience: '10 лет в спорте',
    badge: 'Safety Specialist',
    initials: 'АС',
    color: 'from-zinc-600 to-zinc-900',
  },
  {
    name: 'Дмитрий Иванов',
    experience: '12 лет опыта',
    badge: 'Инструктор кат. A',
    initials: 'ДИ',
    color: 'from-stone-600 to-stone-900',
  },
  {
    name: 'Елена Кузьмина',
    experience: '8 лет практики',
    badge: 'Психолог вождения',
    initials: 'ЕК',
    color: 'from-neutral-600 to-neutral-900',
  },
]

export default function Instructors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter leading-none text-gray-900">
            ЭЛИТА<br />ОБУЧЕНИЯ.
          </h2>
          <p className="text-gray-400 font-medium max-w-xs text-sm">
            Инструкторы с многолетним опытом и международной квалификацией
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((inst) => (
            <div key={inst.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <div className={`w-full h-full bg-gradient-to-br ${inst.color} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                  <span className="text-5xl font-black text-white/20 font-headline">{inst.initials}</span>
                </div>
                <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 glass-dark text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase">
                  {inst.badge}
                </div>
              </div>

              <h4 className="text-lg font-extrabold font-headline text-gray-900 group-hover:text-primary transition-colors leading-tight">
                {inst.name}
              </h4>

              <div className="mt-2 mb-1.5 h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
                <div className="absolute left-0 top-0 h-full w-[30%] bg-primary rounded-full" />
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {inst.experience}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-300 mt-10 uppercase tracking-widest font-bold">
          * Фотографии инструкторов будут добавлены позднее
        </p>
      </div>
    </section>
  )
}
