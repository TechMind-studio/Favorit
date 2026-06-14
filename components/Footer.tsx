import Image from 'next/image'


export default function Footer() {
  return (
    <footer>
      <div className="relative overflow-hidden bg-[#111] py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(214,32,39,0.18) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Автошкола Фаворит · Новосибирск
            </span>
            <h2 className="text-white font-black text-4xl md:text-5xl leading-tight">
              Готовы получить<br />
              <span className="text-primary">права?</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              Ответим за 15 минут и подберём удобный филиал
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:+73833832100"
              className="group flex items-center gap-3 bg-primary hover:bg-primary-dark transition-colors px-7 py-4 rounded-2xl"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white font-bold text-lg whitespace-nowrap">+7 (383) 383-21-00</span>
            </a>
            <a
              href="#prices"
              className="flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all px-7 py-4 rounded-2xl text-white font-semibold"
            >
              Записаться
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto px-6 py-8">

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

            <div className="flex items-center gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity flex-shrink-0">
                <Image src="/logo.svg" alt="Автошкола Фаворит" width={56} height={56} />
              </a>
              <p className="text-gray-600 text-xs leading-5">
                30 лет обучаем вождению<br />
                15 филиалов · Новосибирск
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <a href="tel:+73833832100" className="text-white font-bold text-xl hover:text-primary transition-colors">
                +7 (383) 383-21-00
              </a>
              <div className="flex gap-2">
                {[
                  { href: 'https://vk.com/favoritavtoshkola', label: 'ВКонтакте', d: 'M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z' },
                  { href: 'https://t.me/driving_school_Favorit', label: 'Telegram', d: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.024 9.532c-.149.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.868 13.71l-2.938-.916c-.638-.2-.651-.638.136-.945l11.492-4.432c.531-.193.995.13.804.831z' },
                  { href: 'https://wa.me/79139168131', label: 'WhatsApp', d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
                ].map(({ href, label, d }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-gray-500 hover:text-white transition-all flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex flex-col items-center md:items-start gap-1.5">
              <p className="text-gray-700 text-xs">© {new Date().getFullYear()} Автошкола Фаворит</p>
              <a href="https://tech-mind-info.ru/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity">
                <span className="text-gray-400 text-sm font-medium">Разработано:</span>
                <Image src="/techmind-logo.png" alt="TechMind" width={24} height={24} className="rounded" />
                <span className="text-gray-400 text-sm font-medium">TechMind</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              <a href="/policy" className="text-gray-700 hover:text-gray-400 transition-colors text-xs">Политика конфиденциальности</a>
              <a href="/offer" className="text-gray-700 hover:text-gray-400 transition-colors text-xs">Условия оферты</a>
              <a href="/cookie" className="text-gray-700 hover:text-gray-400 transition-colors text-xs">Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
