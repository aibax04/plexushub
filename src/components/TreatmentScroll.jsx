import React, { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 120
const frameSrc = (i) => `/dental-frames/frame_${String(i).padStart(3, '0')}.webp`

// Each stage: scroll-progress window + annotation anchored to a point on the
// 1120x630 frame (percentages so it scales with the canvas cover-fit).
const STAGES = [
  {
    from: 0.02,
    to: 0.34,
    label: 'Canal Cleaning & Shaping',
    sub: 'Infected tissue is gently removed with precision rotary files',
    anchor: { x: 50, y: 38 },
    labelSide: 'left',
  },
  {
    from: 0.36,
    to: 0.66,
    label: 'Sealing & Disinfection',
    sub: 'The canal is disinfected and sealed to prevent reinfection',
    anchor: { x: 46, y: 30 },
    labelSide: 'right',
  },
  {
    from: 0.68,
    to: 0.98,
    label: 'Fully Restored Tooth',
    sub: 'Natural look and full function — completely painless',
    anchor: { x: 50, y: 42 },
    labelSide: 'left',
  },
]

function TreatmentScroll() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const progressRef = useRef(0)
  const currentFrameRef = useRef(-1)
  const [activeStage, setActiveStage] = useState(-1)
  const [ready, setReady] = useState(false)

  // Preload frames: first frame immediately, the rest in the background
  useEffect(() => {
    let cancelled = false
    const images = new Array(FRAME_COUNT)
    imagesRef.current = images

    const load = (i) =>
      new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => resolve(null)
        img.src = frameSrc(i)
      })

    load(0).then(async (first) => {
      if (cancelled) return
      images[0] = first
      setReady(true)
      // load remaining frames in small parallel batches to avoid jank
      const BATCH = 12
      for (let start = 1; start < FRAME_COUNT; start += BATCH) {
        const batch = []
        for (let i = start; i < Math.min(start + BATCH, FRAME_COUNT); i++) {
          batch.push(load(i).then((img) => { images[i] = img }))
        }
        await Promise.all(batch)
        if (cancelled) return
      }
    })

    return () => { cancelled = true }
  }, [])

  // Scroll + render loop
  useEffect(() => {
    if (!ready) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let rafId = null
    let renderedFrame = -1

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      renderedFrame = -1 // force redraw
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (frameIndex) => {
      // fall back to the nearest loaded frame so scrubbing never blanks
      let img = imagesRef.current[frameIndex]
      if (!img) {
        for (let d = 1; d < FRAME_COUNT && !img; d++) {
          img = imagesRef.current[frameIndex - d] || imagesRef.current[frameIndex + d]
        }
      }
      if (!img) return
      const cw = canvas.width
      const ch = canvas.height
      // cover fit
      const scale = Math.max(cw / img.width, ch / img.height)
      const w = img.width * scale
      const h = img.height * scale
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h)
    }

    const tick = () => {
      const section = sectionRef.current
      if (section) {
        const rect = section.getBoundingClientRect()
        const scrollable = rect.height - window.innerHeight
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable))
        progressRef.current = progress

        const frame = Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1)))
        if (frame !== renderedFrame) {
          draw(frame)
          renderedFrame = frame
          currentFrameRef.current = frame
        }

        const stage = STAGES.findIndex((s) => progress >= s.from && progress <= s.to)
        setActiveStage((prev) => (prev !== stage ? stage : prev))
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [ready])

  return (
    <section ref={sectionRef} className="relative z-10 bg-dark-bg" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Frame canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Soft edge blending into dark sections above/below */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-bg to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />

        {/* Section heading */}
        <div className="absolute top-[8%] inset-x-0 text-center px-6 pointer-events-none">
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/50 font-medium mb-3">
            Watch The Treatment
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight drop-shadow-lg">
            Root Canal, Reimagined.
          </h2>
        </div>

        {/* Dotted annotations per stage */}
        {STAGES.map((stage, i) => (
          <StageAnnotation key={i} stage={stage} active={activeStage === i} index={i} />
        ))}

        {/* Stage progress dots - desktop: vertical rail on the right */}
        <div className="hidden sm:flex absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-0">
          {STAGES.map((_, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-8 border-l-2 border-dotted border-white/25" />}
              <div
                className={`rounded-full border-2 transition-all duration-500 ${
                  activeStage >= i
                    ? 'w-3.5 h-3.5 border-primary bg-primary shadow-[0_0_12px_rgba(1,72,128,0.9)]'
                    : 'w-3 h-3 border-white/40 bg-transparent'
                }`}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: bottom sheet label + horizontal progress dots */}
        <div className="sm:hidden absolute inset-x-0 bottom-0 px-4 pb-6 pointer-events-none">
          <div className="relative h-[92px]">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className={`absolute inset-x-0 bottom-0 transition-all duration-500 ease-out ${
                  activeStage === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className="bg-black/55 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3">
                  <span className="text-[10px] font-semibold tracking-widest text-primary uppercase">
                    Step {i + 1}
                  </span>
                  <p className="text-white text-sm font-medium leading-snug mt-0.5">{stage.label}</p>
                  <p className="text-white/60 text-[11px] mt-1 leading-relaxed">{stage.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            {STAGES.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-500 ${
                  activeStage === i
                    ? 'w-5 h-1.5 bg-primary shadow-[0_0_8px_rgba(1,72,128,0.9)]'
                    : 'w-1.5 h-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StageAnnotation({ stage, active, index }) {
  const isLeft = stage.labelSide === 'left'
  const { x, y } = stage.anchor
  // leader line runs from anchor point toward the label block
  const lineLength = 'clamp(60px, 12vw, 180px)'

  return (
    <div
      className={`absolute pointer-events-none transition-all duration-700 ease-out ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Pulsing dotted target ring on the treatment point */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-dotted border-primary/90"
          style={{ animation: active ? 'ts-spin 12s linear infinite' : 'none' }}
        />
        <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(1,72,128,0.9)]" />
        <div className="absolute inset-0 m-auto w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: '2.5s' }} />
      </div>

      {/* Dotted leader line - desktop only, mobile uses bottom sheet instead */}
      <div
        className="hidden sm:block absolute top-0 border-t-2 border-dotted border-white/70"
        style={{
          width: lineLength,
          [isLeft ? 'right' : 'left']: '2.4rem',
          transform: 'translateY(-1px)',
        }}
      />

      {/* Label card - desktop only */}
      <div
        className="hidden sm:block absolute top-0 -translate-y-1/2 w-52 sm:w-64"
        style={{ [isLeft ? 'right' : 'left']: `calc(${lineLength} + 2.8rem)` }}
      >
        <div className={`bg-black/45 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 ${isLeft ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-center gap-2 mb-1 ${isLeft ? 'justify-end' : ''}`}>
            <span className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Step {index + 1}
            </span>
          </div>
          <p className="text-white text-sm sm:text-base font-medium leading-snug">{stage.label}</p>
          <p className="text-white/60 text-[11px] sm:text-xs mt-1 leading-relaxed">{stage.sub}</p>
        </div>
      </div>

      <style>{`
        @keyframes ts-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default TreatmentScroll
