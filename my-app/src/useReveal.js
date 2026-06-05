import { useEffect, useRef } from 'react'

export function useReveal(triggerAt = 1.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (window.innerHeight - top) / (height * triggerAt)))
      el.style.opacity = progress
      el.style.transform = `translateY(${(1 - progress) * 120}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [triggerAt])
  return ref
}
