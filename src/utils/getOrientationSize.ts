import { DocumentOrientation } from "../models"
import getPxFromSm from "./getPxFromSm"

const getOrientationSize = (orientation: DocumentOrientation = 'portrait') => {
  if(orientation === 'album') {
    return {
      width: getPxFromSm(29.7),
      height: getPxFromSm(21)
    }
  }
  if(orientation === 'portrait') {
    return {
      width: getPxFromSm(21),
      height: getPxFromSm(29.7)
    }
  }
  return {
    width: getPxFromSm(29.7),
    height: getPxFromSm(21)
  }
}

export default getOrientationSize;