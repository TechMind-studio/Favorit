import Image from 'next/image'
import { basePath } from '@/lib/basePath'

const badges = [
  { value: '30 лет', label: 'работаем для вас' },
  { value: 'Автодром', label: 'в центре города' },
]

// Фары обведены вручную кликером tools/lights-picker.html на объединённом снимке
// hero-pair.png, потом картинка разрезана на car-solo.png/moto-solo.png (независимый
// размер каждого), а left/top/width/height каждой фары пересчитаны в проценты уже
// от СВОЕГО обрезанного файла — см. tools/isolate.py, remap() в истории чата.
// kind: 'turn' — только поворотник (янтарный, мигает).
// kind: 'dual' — реальный совмещённый блок-фара/поворотник у Omoda (фары 3 и 4,
// левый и правый край DRL-полосы): тёплым светится вместе с обычными фарами, а во
// вторую половину цикла ЕЩЁ РАЗ загорается янтарным как поворотник — оба слоя
// рисуются одновременно, каждый видим только в своей фазе, потому что их окна
// на таймлайне не пересекаются.
// waveFrom — для секвентального поворотника (см. turnWaveCore в globals.css):
// с какого края фары волна света начинает бежать наружу. Едет от ВНУТРЕННЕГО
// края (ближе к решётке/логотипу) к внешнему — как у настоящих динамических
// поворотников. У фары 4 (справа) внутренний край левый, у фары 3 (слева от
// центра машины) — правый.
type Lamp = {
  left: string; top: string; width: string; height: string; clip?: string
  delay: string; turnDelay?: string; kind?: 'lamp' | 'turn' | 'dual'
  waveFrom?: 'left' | 'right'
}

const motoLights: Lamp[] = [
  {
    // фара 1
    left: '68.28%', top: '25.42%', width: '16.10%', height: '11.52%',
    clip: 'polygon(0.60% 0.00%, 0.00% 4.91%, 21.15% 55.28%, 21.83% 64.35%, 94.83% 100.00%, 99.74% 98.72%, 100.00% 92.04%, 91.32% 64.10%, 81.95% 51.80%, 61.81% 35.84%)',
    kind: 'lamp',
    delay: '0.15s',
  },
  {
    // фара 2
    left: '89.92%', top: '31.61%', width: '2.89%', height: '6.17%',
    clip: 'polygon(12.90% 38.74%, 95.55% 0.00%, 100.00% 75.21%, 78.36% 92.32%, 0.00% 100.00%)',
    kind: 'lamp',
    delay: '0.27s',
  },
  {
    // поворотник 1
    left: '53.84%', top: '40.57%', width: '5.04%', height: '3.33%',
    clip: 'polygon(0.00% 53.36%, 2.61% 16.86%, 24.85% 3.22%, 75.48% 0.00%, 100.00% 39.53%, 94.27% 69.73%, 79.50% 98.64%, 50.39% 100.00%, 13.32% 84.24%)',
    kind: 'turn',
    delay: '0s',
  },
  {
    // поворотник 2
    left: '86.38%', top: '45.05%', width: '3.00%', height: '2.75%',
    clip: 'polygon(0.00% 49.58%, 16.47% 9.28%, 42.69% 3.38%, 53.46% 0.00%, 100.00% 40.06%, 96.39% 72.74%, 82.43% 96.65%, 56.21% 100.00%, 39.08% 96.65%, 16.13% 83.85%, 1.23% 81.55%)',
    kind: 'turn',
    delay: '0s',
  },
]

const carLights: Lamp[] = [
  {
    // фара 3 — кончик левой DRL-полосы, выглядывающий из-за капота (самая
    // маленькая) — вместе с фарой 4 это одна и та же полоса ходовых огней
    // слева и справа, поэтому обе дублируют поворотник, синхронно.
    left: '4.43%', top: '35.76%', width: '2.07%', height: '3.16%',
    clip: 'polygon(100.00% 42.69%, 54.38% 100.00%, 0.00% 47.15%, 21.46% 0.00%)',
    kind: 'dual',
    delay: '0.39s',
    turnDelay: '0s',
    waveFrom: 'right',
  },
  {
    // фара 4 — верхняя световая полоса (DRL) справа, самая длинная — вместе
    // с фарой 3 реально дублирует поворотник у Omoda. Тёплая волна 3→4→5→6→7→8
    // остаётся (см. delay ниже), а амбер-поворотник горит только у 3 и 4.
    left: '39.77%', top: '34.51%', width: '18.85%', height: '5.32%',
    clip: 'polygon(0.00% 70.73%, 15.31% 59.02%, 16.68% 70.64%, 91.58% 25.99%, 94.85% 5.50%, 100.00% 0.00%, 93.89% 87.25%, 85.27% 89.34%, 88.59% 54.03%, 7.98% 100.00%)',
    kind: 'dual',
    delay: '0.51s',
    turnDelay: '0s',
    waveFrom: 'left',
  },
  {
    // фара 5 — верхняя секция блок-фары, ближе к центру связки — только тёплый
    // свет, к моменту поворотника уже погасла, амбером не мигает.
    left: '49.45%', top: '45.34%', width: '7.07%', height: '6.04%',
    clip: 'polygon(23.61% 40.11%, 100.00% 0.00%, 93.22% 85.97%, 0.00% 100.00%)',
    kind: 'lamp',
    delay: '0.63s',
  },
  {
    // фара 6 — средняя секция, центр связки — только тёплый свет.
    left: '46.78%', top: '50.76%', width: '8.96%', height: '8.42%',
    clip: 'polygon(28.61% 14.14%, 100.00% 0.00%, 98.53% 28.88%, 89.78% 83.42%, 4.13% 100.00%, 0.00% 82.04%)',
    kind: 'lamp',
    delay: '0.75s',
  },
  {
    // фара 7 — нижняя секция — только тёплый свет.
    left: '46.68%', top: '58.89%', width: '8.52%', height: '5.39%',
    clip: 'polygon(3.96% 22.06%, 99.02% 0.00%, 100.00% 76.53%, 94.96% 83.60%, 39.58% 100.00%, 0.00% 33.13%)',
    kind: 'lamp',
    delay: '0.87s',
  },
  {
    // фара 8 — боковой маркер у решётки (край противоположной фары в кадре) —
    // только тёплый свет, поворотником не мигает.
    left: '0.86%', top: '46.40%', width: '1.66%', height: '12.75%',
    clip: 'polygon(0.00% 56.63%, 26.71% 73.84%, 28.52% 93.26%, 74.92% 100.00%, 100.00% 83.57%, 74.91% 0.00%)',
    kind: 'lamp',
    delay: '0.99s',
  },
]

function Headlight({ l }: { l: Lamp }) {
  const shape = l.clip ? { clipPath: l.clip } : { borderRadius: '50%' }
  const showLamp = l.kind !== 'turn'
  const showTurn = l.kind === 'turn' || l.kind === 'dual'
  // Секвентальная волна — только у ЧЁТКОГО ядра блок-фары машины (kind:'dual').
  // Bloom (размытое сияние, scale 2.6) специально НЕ участвует в волне: если его
  // растить от края, а не от центра, огромное пятно расползается почти целиком
  // в одну сторону и засвечивает соседние панели кузова — bloom остаётся плоским
  // миганием по центру, как у обычной фары. Поворотник мотоцикла (kind:'turn')
  // тоже мигает как обычная лампа с реле, без волны.
  const waveClassCore = l.kind === 'dual' ? ' headlight-core--wave' : ''
  return (
    <span className="headlight-wrap" style={{ left: l.left, top: l.top, width: l.width, height: l.height }}>
      {showLamp && (
        <>
          <span className="headlight-bloom" style={{ borderRadius: '50%', animationDelay: l.delay }} />
          <span className="headlight-core" style={{ ...shape, animationDelay: l.delay }} />
        </>
      )}
      {showTurn && (
        <>
          <span
            className="headlight-bloom headlight-bloom--turn"
            style={{ borderRadius: '50%', animationDelay: l.turnDelay ?? l.delay }}
          />
          <span
            className={`headlight-core headlight-core--turn${waveClassCore}`}
            style={{ ...shape, animationDelay: l.turnDelay ?? l.delay, transformOrigin: l.waveFrom ?? 'center' }}
          />
        </>
      )}
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
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[0.97] text-gray-900">
              Действительно<br />
              <span className="text-primary">учим!</span>
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
              Разрезаны на два файла (было — один hero-pair.png), потому что ширину
              каждого нужно задавать независимо: машина крупнее мотоцикла, а не в
              пропорции, в которой их снял фотограф. */}
          <div className="relative order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="flex flex-col items-center">

              {/* Логотип — над транспортом (не поверх!), но центрирован не по всей
                  группе (иначе съезжает к машине, она шире), а ровно по стыку
                  moto/car: обёртка шириной 63% = 2× (30% moto + половина зазора
                  1.5%) от левого края, flex центрирует логотип внутри неё — так
                  его середина попадает точно на границу мотоцикла и машины. */}
              <div className="w-[63%] flex justify-center mb-3">
                <div className="relative w-[54%] max-w-[190px] aspect-square">
                  <Image
                    src={`${basePath}/logo-round.svg`}
                    alt="Автошкола Фаворит"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="flex w-full items-end justify-center gap-[3%]">
                <div className="relative w-[30%] aspect-[541/556]">
                  <Image
                    src={`${basePath}/images/cars/moto-solo.png`}
                    alt="Учебный мотоцикл Honda CBR"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                  {motoLights.map((l, i) => <Headlight key={i} l={l} />)}
                </div>

                <div className="relative w-[62%] aspect-[597/368]">
                  <Image
                    src={`${basePath}/images/cars/car-solo.png`}
                    alt="Учебный автомобиль Omoda C5"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                  {carLights.map((l, i) => <Headlight key={i} l={l} />)}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
