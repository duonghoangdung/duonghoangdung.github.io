import { useEffect, RefObject } from 'react'

const useOnClickOutside = (ref: RefObject<HTMLElement>, handler?: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      console.log(ref)
      if (!ref?.current || ref?.current?.contains(event.target as Node)) {
        return
      }
      handler?.(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
