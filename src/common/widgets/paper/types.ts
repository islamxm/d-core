import { PropsWithChildren } from "react"

type PaperWidgetType = PropsWithChildren & {
  padding?: {
    left: number,
    right: number,
    top: number,
    bottom: number
  },
  font?: {
    size: number,
    lineHeight: number,
  },
  orientation?: 'portrait' | 'album'
}

export default PaperWidgetType;