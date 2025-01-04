import { useEffect, useRef, useState } from "react";
import * as fabric from 'fabric';
import { type CanvasOptions } from "fabric/dist/src/canvas/CanvasOptions";

const t = new fabric.Canvas()

const useMain = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [canvas, setCanvas] = useState<typeof t>()
  const [isRefReady, setIsRefReady] = useState(false)

  const [canvasSize, setCanvasSize] = useState<{width: number, height: number}>({
    width: 0,
    height: 0
  })

  useEffect(() => {ref?.current && setIsRefReady(true)})

  useEffect(() => {
    if(containerRef?.current) {
      const height = containerRef.current.getBoundingClientRect().height - 10
      const width = containerRef.current.getBoundingClientRect().width - 10
      setCanvasSize({width,height})
    }
  }, [containerRef])

  const createInstance = (options?: Partial<CanvasOptions>) => {
    const {width, height} = canvasSize || null
    ref?.current && setCanvas(new fabric.Canvas(ref.current, {
      width,
      height,
      ...options,
    }))
  }

  const destroyInstance = () => canvas?.destroy()

  return {
    isRefReady,
    ref,
    containerRef,
    canvas,
    createInstance,
    destroyInstance
  }
}

export default useMain;