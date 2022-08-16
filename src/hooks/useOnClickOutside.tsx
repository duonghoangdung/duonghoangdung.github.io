import { useEffect } from 'react'

const useOnClickOutside = (refs: Array<HTMLElement | null>, handler?: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (refs.some((ref) => ref?.contains(event.target as Node))) {
        return
      }
      // if (!ref?.current || ref?.current?.contains(event.target as Node)) {
      //   return
      // }
      handler?.(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler])
}

export default useOnClickOutside
