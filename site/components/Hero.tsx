import Image from 'next/image'
import { basePath } from '@/lib/basePath'

const badges = [
  { value: '30 лет', label: 'работаем для вас' },
  { value: 'Автодром', label: 'в центре города' },
]

const carLights = [
  { left: '24%', top: '52%', delay: '0.2s', angle: -10 },
  { left: '50%', top: '55%', delay: '0.5s', angle: -8 },
  { left: '79%', top: '52%', delay: '0.8s', angle: -12 },
]

const motoLights = [
  { left: '17%', top: '39%', delay: '1.1s', shape: 'round' as const },
  { left: '42%', top: '41%', delay: '1.4s', shape: 'round' as const },
  { left: '74%', top: '48%', delay: '1.7s', shape: 'sport' as const, angle: 6 },
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
            <h1 className="font-headline text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[0.97] text-gray-900">
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
            <div className="relative rounded-3xl overflow-hidden bg-[#EDEBE7] shadow-xl shadow-black/5">
              <div className="relative flex w-full aspect-[1195/448]">
                <div className="relative w-1/2 h-full border-r border-black/5">
                  <Image
                    src={`${basePath}/images/cars/cars-fleet.jpg`}
                    alt="Учебные автомобили"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                  {carLights.map((l, i) => (
                    <span
                      key={i}
                      className="headlight-wrap"
                      style={{ left: l.left, top: l.top, transform: `translate(-50%, -50%) rotate(${l.angle}deg)` }}
                    >
                      <span className="headlight-glow headlight-glow--car" style={{ animationDelay: l.delay }} />
                    </span>
                  ))}
                </div>
                <div className="relative w-1/2 h-full">
                  <Image
                    src={`${basePath}/images/cars/moto-fleet.jpg`}
                    alt="Учебные мотоциклы"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                  {motoLights.map((l, i) => (
                    <span
                      key={i}
                      className="headlight-wrap"
                      style={{
                        left: l.left,
                        top: l.top,
                        transform: `translate(-50%, -50%)${l.angle ? ` rotate(${l.angle}deg)` : ''}`,
                      }}
                    >
                      <span className={`headlight-glow headlight-glow--${l.shape}`} style={{ animationDelay: l.delay }} />
                    </span>
                  ))}
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
