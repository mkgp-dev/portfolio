import { useEffect, useState, type RefObject } from 'react'
import { ArrowUp } from 'lucide-react'

const VISIBILITY_THRESHOLD = 160

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ? 'auto' : 'smooth'
}

type ScrollToTopButtonProps = {
  scrollContainerRef: RefObject<HTMLElement | null>
}

export function ScrollToTopButton({ scrollContainerRef }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current

    const syncVisibility = () => {
      const containerOffset = scrollContainer?.scrollTop ?? 0
      const windowOffset = window.scrollY || document.documentElement.scrollTop || 0

      setIsVisible(
        containerOffset > VISIBILITY_THRESHOLD || windowOffset > VISIBILITY_THRESHOLD,
      )
    }

    syncVisibility()
    scrollContainer?.addEventListener('scroll', syncVisibility)
    window.addEventListener('scroll', syncVisibility)

    return () => {
      scrollContainer?.removeEventListener('scroll', syncVisibility)
      window.removeEventListener('scroll', syncVisibility)
    }
  }, [scrollContainerRef])

  const handleScrollToTop = () => {
    const behavior = getScrollBehavior()
    const scrollContainer = scrollContainerRef.current

    if (scrollContainer && scrollContainer.scrollTop > 0) {
      scrollContainer.scrollTo({ top: 0, behavior })
      return
    }

    window.scrollTo({ top: 0, behavior })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-20 inline-flex size-11 items-center justify-center rounded-full border border-sky-300/25 bg-slate-950/85 text-sky-50 shadow-lg shadow-slate-950/40 backdrop-blur-sm transition duration-200 hover:border-sky-200/40 hover:bg-slate-900 focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <ArrowUp aria-hidden="true" className="size-4" />
    </button>
  )
}
