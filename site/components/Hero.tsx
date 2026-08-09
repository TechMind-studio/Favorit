import Image from 'next/image'
import { basePath } from '@/lib/basePath'

const badges = [
  { value: '30 лет', label: 'работаем для вас' },
  { value: 'Автодром', label: 'в центре города' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7F6F4]" style={{ marginTop: '112px' }}>
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

          <div className="hero-anim">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-5">
              Автошкола Фаворит · Новосибирск
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[0.97] text-gray-900">
              Учим водить<br />
              <span className="text-primary">уверенно.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-6 max-w-md font-light leading-relaxed">
              30 лет обучаем вождению в Новосибирске. Категории A и B, собственный
              автодром в центре города, рассрочка 0%.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <a href="#prices" className="btn-primary">Записаться на обучение</a>
              <a href="tel:+73833832100" className="btn-outline">Позвонить</a>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-gray-200">
              {badges.map((b) => (
                <div key={b.value}>
                  <div className="font-headline text-2xl font-extrabold text-gray-900 leading-none">{b.value}</div>
                  <div className="text-gray-400 text-xs mt-1.5 uppercase tracking-widest font-medium">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-black/5">
              <div className="relative flex w-full" style={{ height: 'min(38vw, 380px)', minHeight: '220px' }}>
                <div className="relative w-1/2 h-full overflow-hidden">
                  <Image
                    src={`${basePath}/images/cars/cars-fleet.jpg`}
                    alt="Учебные автомобили"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
                <div className="w-1/2 h-full flex items-end overflow-hidden">
                  <div className="relative w-full" style={{ height: '78%' }}>
                    <Image
                      src={`${basePath}/images/cars/moto-fleet.jpg`}
                      alt="Учебные мотоциклы"
                      fill
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-white shadow-lg shadow-black/5 flex items-center justify-center p-3">
              <Image
                src={`${basePath}/img-logo.svg`}
                alt="Автошкола Фаворит"
                width={64}
                height={64}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
