import Image from 'next/image'
import { basePath } from '@/lib/basePath'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ marginTop: '112px', backgroundColor: '#F2F1EF' }}>

      <div className="w-full bg-gray-900 py-1.5 flex items-center justify-center">
        <p className="text-white text-base md:text-2xl lg:text-3xl font-extrabold font-headline tracking-wide uppercase">
          30 лет работаем для вас
        </p>
      </div>

      <div className="relative flex w-full" style={{ height: '50vw', maxHeight: '65vh', minHeight: '220px' }}>

        <div className="relative w-1/2 h-full overflow-hidden">
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 'calc(-9.375vw + 17px)' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={`${basePath}/images/cars/cars-fleet.jpg`}
                alt="Учебные автомобили"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 pointer-events-none"
            style={{ width: '8%', background: 'linear-gradient(to right, transparent, #F2F1EF)' }} />
        </div>

        <div className="w-1/2 h-full flex items-end overflow-hidden">
          <div className="relative w-full" style={{ height: 'min(27vw, 35vh)' }}>
            <Image
              src={`${basePath}/images/cars/moto-fleet.jpg`}
              alt="Учебные мотоциклы"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-20" style={{ paddingTop: '8%' }}>
          <Image
            src={`${basePath}/img-logo.svg`}
            alt="Автошкола Фаворит"
            width={260}
            height={260}
            className="w-[15vw] min-w-[80px] max-w-[260px] h-auto"
          />
        </div>

      </div>

      <div className="w-full bg-primary py-1.5 flex items-center justify-center">
        <p className="text-white text-base md:text-2xl lg:text-3xl font-extrabold font-headline tracking-wide uppercase">
          Автодром в центре города
        </p>
      </div>

    </section>
  )
}
