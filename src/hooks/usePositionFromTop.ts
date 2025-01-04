import { HtmlHTMLAttributes, LegacyRef, useEffect, useLayoutEffect, useRef, useState } from "react"

const usePositionFromTop = () => {
  const ref = useRef<any>(null)
  const [top, setTop] = useState(0)

  useLayoutEffect(() => {
    if(ref.current) {
      setTop(ref.current.getBoundingClientRect().top)
    }
  }, [ref])

  return {
    ref,
    top
  }
}

export default usePositionFromTop