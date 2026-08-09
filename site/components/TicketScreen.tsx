import { basePath } from '@/lib/basePath'
import styles from './TicketScreen.module.css'

const icons = {
  back: <path d="m15 5-7 7 7 7" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  xCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.7 2.7L16 9.5" />
    </>
  ),
  chev: <path d="m9 5 7 7-7 7" />,
}

/**
 * Портировано 1:1 из presentation/app-mockup/index.html — экран
 * «09 — Разбор ошибки» (билет 6, вопрос 13). Разметка, тексты и
 * значения стилей не менялись, только class -> className и zoom -> scale.
 */
export default function TicketScreen() {
  return (
    <div className={styles.phone}>
      <div className={styles.shell}>
        <span className={`${styles.btnSide} ${styles.btnSideA}`} />
        <span className={`${styles.btnSide} ${styles.btnSideB}`} />
        <span className={`${styles.btnSide} ${styles.btnSideC}`} />
        <span className={`${styles.btnSide} ${styles.btnSideD}`} />

        <div className={styles.screen}>
          <span className={styles.island} />
          <div className={styles.statusbar}>
            <span>9:41</span>
            <span className={styles.sbR}>
              <span className={styles.sbBars}>
                <i /><i /><i /><i />
              </span>
              <span className={styles.sbBat} />
            </span>
          </div>

          <div className={styles.body}>
            <div className={styles.qhead}>
              <span className={styles.navback}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  {icons.back}
                </svg>
              </span>
              <div>
                <p className={styles.mini}>Билет 6</p>
                <p style={{ font: '600 15px/1.2 var(--ui)', margin: '3px 0 0', letterSpacing: '-.015em' }}>
                  Вопрос 13 из 20
                </p>
              </div>
              <span className={styles.timer}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  {icons.clock}
                </svg>
                11:54
              </span>
            </div>

            <div className={`${styles.pad} ${styles.stack} ${styles.g14} ${styles.pb28}`}>
              <div className={styles.verdict}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                  {icons.xCircle}
                </svg>
                <div>
                  <b>Неверно</b>
                  <span>Это самая частая ошибка темы «Перекрёстки»</span>
                </div>
              </div>

              <div className={styles.scene} style={{ borderRadius: 16 }}>
                <img
                  src={`${basePath}/images/app-ticket-illustration.jpg`}
                  alt="Билет 6, вопрос 13 — иллюстрация Автошколы Фаворит"
                />
              </div>

              <div className={styles.opts}>
                <div className={`${styles.opt} ${styles.optWrong}`}>
                  <b>1</b>
                  <span>Проедете перекрёсток первым</span>
                  <svg style={{ color: 'var(--sc-brand)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    {icons.xCircle}
                  </svg>
                </div>
                <div className={styles.opt}>
                  <b>2</b>
                  <span>Уступите дорогу трамваю, выполнив поворот с проезжей части</span>
                </div>
                <div className={`${styles.opt} ${styles.optRight}`}>
                  <b>3</b>
                  <span>Пропустите трамвай, перестроитесь на трамвайные пути попутного направления и выполните с них поворот</span>
                  <svg style={{ color: 'var(--sc-ok)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    {icons.checkCircle}
                  </svg>
                </div>
              </div>

              <div className={styles.rule}>
                <span className={styles.rulePt}>Пункт 8.5 ПДД РФ</span>
                <p>
                  <q>
                    При наличии слева трамвайных путей попутного направления… поворот налево и разворот
                    должны выполняться с них. При этом не должно создаваться помех трамваю.
                  </q>
                </p>
                <p style={{ color: 'var(--sc-ink)' }}>
                  Трамваю горит сигнал в виде буквы «Т» — ему разрешено прямо. Сначала пропускаем
                  трамвай, затем поворачиваем с путей.
                </p>
              </div>

              <div className={styles.vidlink}>
                <span className={styles.vidlinkTh}>
                  <img src={`${basePath}/images/app-ticket-vidlink-thumb.jpg`} alt="" />
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4.5v15l13-7.5z" />
                  </svg>
                </span>
                <div>
                  <b>Смотреть разбор в уроке</b>
                  <span>«Поворот налево: кому уступаем» · с 02:15</span>
                </div>
              </div>

              <div className={styles.added}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                  {icons.checkCircle}
                </svg>
                Вопрос добавлен в «Работу над ошибками»
              </div>

              <div className={styles.cta}>
                Следующий вопрос
                <svg style={{ width: 17, height: 17 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  {icons.chev}
                </svg>
              </div>
            </div>
          </div>
          <span className={styles.homebar} />
        </div>
      </div>
    </div>
  )
}
