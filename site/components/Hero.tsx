import Image from 'next/image'
import { basePath } from '@/lib/basePath'

const badges = [
  { value: '30 лет', label: 'работаем для вас' },
  { value: 'Автодром', label: 'в центре города' },
]

// Фары обведены вручную кликером tools/lights-picker.html: left/top — левый верхний
// угол bounding-box'а линзы в процентах от hero-pair.png, clip — её точный контур
// внутри этого box'а. Перерисовал картинку — перекликай и вставь новый массив.
// kind: 'turn' — поворотник (янтарный, мигает), иначе обычная фара (тёплая, тлеет).
type Lamp = { left: string; top: string; width: string; height: string; clip?: string; delay: string; kind?: 'lamp' | 'turn' }

const heroLights: Lamp[] = [
  {
    // фара 1
    left: '31.68%', top: '25.42%', width: '7.47%', height: '11.52%',
    clip: 'polygon(0.60% 0.00%, 0.00% 4.91%, 21.15% 55.28%, 21.83% 64.35%, 94.83% 100.00%, 99.74% 98.72%, 100.00% 92.04%, 91.32% 64.10%, 81.95% 51.80%, 61.81% 35.84%)',
    kind: 'lamp',
    delay: '0.15s',
  },
  {
    // фара 2
    left: '41.72%', top: '31.61%', width: '1.34%', height: '6.17%',
    clip: 'polygon(12.90% 38.74%, 95.55% 0.00%, 100.00% 75.21%, 78.36% 92.32%, 0.00% 100.00%)',
    kind: 'lamp',
    delay: '0.27s',
  },
  {
    // поворотник 1
    left: '24.98%', top: '40.57%', width: '2.34%', height: '3.33%',
    clip: 'polygon(0.00% 53.36%, 2.61% 16.86%, 24.85% 3.22%, 75.48% 0.00%, 100.00% 39.53%, 94.27% 69.73%, 79.50% 98.64%, 50.39% 100.00%, 13.32% 84.24%)',
    kind: 'turn',
    delay: '0s',
  },
  {
    // поворотник 2
    left: '40.08%', top: '45.05%', width: '1.39%', height: '2.75%',
    clip: 'polygon(0.00% 49.58%, 16.47% 9.28%, 42.69% 3.38%, 53.46% 0.00%, 100.00% 40.06%, 96.39% 72.74%, 82.43% 96.65%, 56.21% 100.00%, 39.08% 96.65%, 16.13% 83.85%, 1.23% 81.55%)',
    kind: 'turn',
    delay: '0s',
  },
  {
    // фара 3
    left: '51.07%', top: '34.46%', width: '1.06%', height: '2.09%',
    clip: 'polygon(100.00% 42.69%, 54.38% 100.00%, 0.00% 47.15%, 21.46% 0.00%)',
    kind: 'lamp',
    delay: '0.39s',
  },
  {
    // фара 4
    left: '69.16%', top: '33.63%', width: '9.65%', height: '3.52%',
    clip: 'polygon(0.00% 70.73%, 15.31% 59.02%, 16.68% 70.64%, 91.58% 25.99%, 94.85% 5.50%, 100.00% 0.00%, 93.89% 87.25%, 85.27% 89.34%, 88.59% 54.03%, 7.98% 100.00%)',
    kind: 'lamp',
    delay: '0.51s',
  },
  {
    // фара 5
    left: '74.12%', top: '40.80%', width: '3.62%', height: '4.00%',
    clip: 'polygon(23.61% 40.11%, 100.00% 0.00%, 93.22% 85.97%, 0.00% 100.00%)',
    kind: 'lamp',
    delay: '0.63s',
  },
  {
    // фара 6
    left: '72.75%', top: '44.39%', width: '4.59%', height: '5.57%',
    clip: 'polygon(28.61% 14.14%, 100.00% 0.00%, 98.53% 28.88%, 89.78% 83.42%, 4.13% 100.00%, 0.00% 82.04%)',
    kind: 'lamp',
    delay: '0.75s',
  },
  {
    // фара 7
    left: '72.70%', top: '49.77%', width: '4.36%', height: '3.57%',
    clip: 'polygon(3.96% 22.06%, 99.02% 0.00%, 100.00% 76.53%, 94.96% 83.60%, 39.58% 100.00%, 0.00% 33.13%)',
    kind: 'lamp',
    delay: '0.87s',
  },
  {
    // фара 8
    left: '49.24%', top: '41.50%', width: '0.85%', height: '8.44%',
    clip: 'polygon(0.00% 56.63%, 26.71% 73.84%, 28.52% 93.26%, 74.92% 100.00%, 100.00% 83.57%, 74.91% 0.00%)',
    kind: 'lamp',
    delay: '0.99s',
  },
]

function Headlight({ l }: { l: Lamp }) {
  const shape = l.clip ? { clipPath: l.clip } : { borderRadius: '50%' }
  const isTurn = l.kind === 'turn'
  return (
    <span className="headlight-wrap" style={{ left: l.left, top: l.top, width: l.width, height: l.height }}>
      <span
        className={`headlight-bloom${isTurn ? ' headlight-bloom--turn' : ''}`}
        style={{ borderRadius: '50%', animationDelay: l.delay }}
      />
      <span
        className={`headlight-core${isTurn ? ' headlight-core--turn' : ''}`}
        style={{ ...shape, animationDelay: l.delay }}
      />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7F6F4]" style={{ marginTop: '112px' }}>
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-12 md:pt-8 md:pb-16">
        {/* На мобильном — одна колонка с явным порядком: заголовок → транспорт → текст и CTA,
            чтобы на первом экране было видно то же, что и на десктопе (обещание + автопарк).
            С lg — исходная сетка в две колонки, транспорт справа на всю высоту. */}
        <div className="flex flex-col gap-y-7 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0 lg:items-start">

          <div className="hero-anim order-1 lg:col-start-1 lg:row-start-1">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.3em] mb-5">
              Автошкола Фаворит · Новосибирск
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[0.97] text-gray-900">
              Учим водить<br />
              <span className="text-primary">уверенно.</span>
            </h1>
          </div>

          <div className="hero-anim order-3 lg:col-start-1 lg:row-start-2">
            <p className="text-gray-500 text-lg lg:mt-6 max-w-md font-light leading-relaxed">
              30 лет обучаем вождению в Новосибирске. Категории A и B, собственный
              автодром в центре города, рассрочка 0%.
            </p>

            <div className="flex flex-wrap gap-3 mt-7 lg:mt-9">
              <a href="#prices" className="btn-primary">Записаться на обучение</a>
              <a href="tel:+73833832100" className="btn-outline">Позвонить</a>
            </div>

            <div className="flex flex-wrap gap-8 mt-8 pt-7 lg:mt-10 lg:pt-8 border-t border-gray-200">
              {badges.map((b) => (
                <div key={b.value}>
                  <div className="font-headline text-2xl font-extrabold text-gray-900 leading-none">{b.value}</div>
                  <div className="text-gray-400 text-xs mt-1.5 uppercase tracking-widest font-medium">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Мотоцикл и машина съезжаются к эмблеме: слева категория A, справа B.
              Оба на одном студийном снимке (tools/cutout-hero.py убирает белый фон),
              поэтому ни зеркалить, ни подгонять масштаб между ними не нужно. */}
          <div className="relative order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="flex flex-col items-center">

              <div className="relative w-[26%] max-w-[150px] aspect-square mb-1">
                <Image
                  src={`${basePath}/logo.svg`}
                  alt="Автошкола Фаворит"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-3">
                Действительно учим!
              </p>

              <div className="relative w-full aspect-[1166/556]">
                <Image
                  src={`${basePath}/images/cars/hero-pair.png`}
                  alt="Учебный мотоцикл Honda CBR и автомобиль Omoda C5"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
                {heroLights.map((l, i) => <Headlight key={i} l={l} />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
