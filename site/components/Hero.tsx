import Image from 'next/image'
import { basePath } from '@/lib/basePath'

const badges = [
  { value: '30 лет', label: 'работаем для вас' },
  { value: 'Автодром', label: 'в центре города' },
]

// Координаты обведены вручную по фото (кликер) — left/top это левый верхний угол
// bounding-box'а фары, clip-path — точный периметр внутри этого box'а.
const carLights = [
  {
    // красная машина, ближняя фара
    left: '19.25%', top: '34.88%', width: '9.21%', height: '5.22%',
    clip: 'polygon(0.00% 0.00%, 100.00% 68.57%, 94.55% 100.00%, 13.64% 77.14%, 0.91% 5.71%)',
    delay: '0.1s',
  },
  {
    // красная машина, дальняя фара (у решётки)
    left: '42.09%', top: '35.32%', width: '2.51%', height: '3.43%',
    clip: 'polygon(0.00% 60.87%, 90.00% 0.00%, 100.00% 69.57%, 16.67% 100.00%, 0.00% 69.57%)',
    delay: '0.1s',
  },
  {
    // чёрная машина, световая полоса (DRL)
    left: '47.36%', top: '33.67%', width: '22.09%', height: '2.83%',
    clip: 'polygon(0.76% 0.00%, 3.03% 0.00%, 31.06% 63.16%, 39.02% 68.42%, 97.73% 36.84%, 99.62% 0.00%, 100.00% 31.58%, 96.21% 73.68%, 38.26% 100.00%, 5.30% 42.11%, 6.06% 78.95%, 3.03% 73.68%, 0.00% 5.26%)',
    delay: '0.4s',
  },
  {
    // чёрная машина, сама фара (линза под DRL)
    left: '48.54%', top: '38.60%', width: '4.18%', height: '7.74%',
    clip: 'polygon(0.00% 0.00%, 52.00% 13.46%, 100.00% 80.77%, 74.00% 100.00%, 16.00% 96.15%, 18.00% 75.00%, 0.00% 3.85%)',
    delay: '0.4s',
  },
  {
    // белая машина, ближняя фара
    left: '74.31%', top: '32.79%', width: '9.87%', height: '6.12%',
    clip: 'polygon(0.00% 0.00%, 100.00% 68.29%, 88.98% 100.00%, 30.51% 82.93%, 8.47% 46.34%, 0.00% 2.44%)',
    delay: '0.65s',
  },
  {
    // белая машина, дальняя фара
    left: '93.97%', top: '32.05%', width: '1.67%', height: '5.66%',
    clip: 'polygon(40.00% 63.16%, 70.00% 100.00%, 100.00% 71.05%, 80.00% 21.05%, 0.00% 0.00%, 40.00% 31.58%)',
    delay: '0.65s',
  },
]

const motoLights = [
  {
    // мотоцикл 1 (Yamaha), круглая фара
    left: '12.16%', top: '27.99%', width: '3.79%', height: '8.53%',
    clip: 'polygon(32.56% 0.00%, 67.44% 4.69%, 83.72% 17.19%, 95.35% 40.62%, 100.00% 68.75%, 86.05% 84.38%, 65.12% 100.00%, 32.56% 96.88%, 13.95% 79.69%, 4.65% 62.50%, 0.00% 46.88%, 2.33% 25.00%, 11.63% 10.94%, 27.91% 1.56%)',
    delay: '1.1s',
  },
  {
    // мотоцикл 2 (средний), круглая фара
    left: '38.41%', top: '25.61%', width: '5.02%', height: '8.80%',
    clip: 'polygon(8.77% 7.58%, 28.07% 0.00%, 54.39% 0.00%, 68.42% 6.06%, 100.00% 80.30%, 80.70% 92.42%, 59.65% 100.00%, 35.09% 96.97%, 19.30% 87.88%, 8.77% 75.76%, 5.26% 65.15%, 1.75% 50.00%, 0.00% 34.85%, 3.51% 18.18%, 8.77% 10.61%)',
    delay: '1.3s',
  },
  {
    // мотоцикл 2, доп. световой блик рядом с фарой
    left: '42.47%', top: '25.46%', width: '1.50%', height: '6.13%',
    clip: 'polygon(0.00% 0.00%, 23.53% 0.00%, 88.24% 32.61%, 100.00% 67.39%, 100.00% 100.00%, 5.88% 4.35%)',
    delay: '1.45s',
  },
  {
    // Honda CBR, угловатая фара
    left: '68.99%', top: '37.99%', width: '7.84%', height: '6.53%',
    clip: 'polygon(4.49% 48.98%, 65.17% 12.24%, 100.00% 0.00%, 76.40% 59.18%, 73.03% 79.59%, 6.74% 100.00%, 0.00% 93.88%, 3.37% 51.02%)',
    delay: '1.6s',
  },
  {
    // Honda CBR, вторая фара
    left: '60.70%', top: '37.34%', width: '3.35%', height: '6.80%',
    clip: 'polygon(0.00% 0.00%, 86.84% 50.98%, 100.00% 100.00%, 13.16% 64.71%, 0.00% 3.92%)',
    delay: '1.6s',
  },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7F6F4]" style={{ marginTop: '112px' }}>
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">

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
            <div className="relative flex flex-col w-full">
              <div className="relative w-full aspect-[1195/671]">
                <Image
                  src={`${basePath}/images/cars/cars-fleet-nobg.png`}
                  alt="Учебные автомобили"
                  fill
                  className="object-contain object-center"
                  priority
                />
                {carLights.map((l, i) => (
                  <span
                    key={i}
                    className="headlight-wrap"
                    style={{ left: l.left, top: l.top, width: l.width, height: l.height }}
                  >
                    <span className="headlight-bloom" style={{ borderRadius: '50%', animationDelay: l.delay }} />
                    <span className="headlight-core" style={{ clipPath: l.clip, animationDelay: l.delay }} />
                  </span>
                ))}
              </div>
              <div className="relative w-[68%] aspect-[1135/750] -mt-24">
                <Image
                  src={`${basePath}/images/cars/moto-fleet-nobg.png`}
                  alt="Учебные мотоциклы"
                  fill
                  className="object-contain object-center"
                  priority
                />
                {motoLights.map((l, i) => (
                  <span
                    key={i}
                    className="headlight-wrap"
                    style={{ left: l.left, top: l.top, width: l.width, height: l.height }}
                  >
                    <span className="headlight-bloom" style={{ borderRadius: '50%', animationDelay: l.delay }} />
                    <span className="headlight-core" style={{ clipPath: l.clip, animationDelay: l.delay }} />
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
