import { useEffect, useRef, useState } from "react"

type T = {  
  initState: boolean,

}

const useCollapse = ({
  initState
}: T) => {
  const collapsableRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)

  const toggle = () => setIsOpen(s => !s)
  
  const open = () => setIsOpen(true)
  
  const close = () => setIsOpen(false)
  
  useEffect(() => {
    if(collapsableRef.current) {
      setHeight(collapsableRef.current.scrollHeight)
    }
  }, [collapsableRef])

  useEffect(() => {
    setIsOpen(initState)
  }, [initState])

  return {
    collapsableRef,
    isOpen,
    height,
    toggle,
    open,
    close
  }
}

export default useCollapse