'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { basePath } from '@/lib/basePath'

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'running' | 'fading' | 'done'>('running')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 2100)
    const t2 = setTimeout(() => setPhase('done'), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[200] overflow-hidden ${phase === 'fading' ? 'opacity-0' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.8s ease', background: 'var(--ink)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(214,32,39,0.12) 0%, transparent 70%)' }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center">
          <p className="font-headline font-normal text-white/60 text-xs uppercase tracking-[0.5em] mb-1">Автошкола</p>
          <div className="font-headline font-bold text-[96px] tracking-normal leading-none text-white uppercase">
            ФАВОРИТ
          </div>
          <div className="h-0.5 w-20 bg-primary mx-auto mt-5 rounded-full" />
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.4em] mt-3">Новосибирск</p>
        </div>
      </div>

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-36 pointer-events-none z-20">

        <div
          className="absolute top-0 h-full"
          style={{
            width: 320,
            animation: 'introCarDrive 2.3s cubic-bezier(0.4, 0, 0.3, 1) forwards',
          }}
        >
          <Image src={`${basePath}/images/intro-car.png`} alt="" fill className="object-contain" unoptimized priority />
        </div>

        <div
          className="absolute h-[80px]"
          style={{
            width: 175,
            bottom: 0,
            animation: 'introMotoDrive 2.3s cubic-bezier(0.4, 0, 0.3, 1) forwards',
          }}
        >
          <Image src={`${basePath}/images/intro-moto.png`} alt="" fill className="object-contain" unoptimized priority />
        </div>
      </div>

      <div
        className="absolute left-0 right-0"
        style={{ top: 'calc(50% + 68px)', height: '1px', background: 'rgba(255,255,255,0.05)' }}
      />
      <div
        className="absolute left-0 right-0"
        style={{
          top: 'calc(50% + 40px)',
          height: '2px',
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 40px, transparent 40px, transparent 70px)',
        }}
      />
    </div>
  )
}
