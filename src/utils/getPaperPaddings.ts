import getPxFromSm from "./getPxFromSm"

const getPaperPaddings = (data: {
  top: number
  right: number
  bottom: number
  left: number
} = {top: 0, right: 0, bottom: 0, left: 0}, metricType: 'cm' | 'px' = 'cm') => {
  const {
    top,
    right,
    bottom,
    left
  } = data

  if(metricType === 'cm') {
    return `${getPxFromSm(top)}px ${getPxFromSm(right)}px ${getPxFromSm(bottom)}px ${getPxFromSm(left)}px`  
  }
  if(metricType === 'px') {
    return `${top}px ${right}px ${bottom}px ${left}px`  
  }

  return `${top}px ${right}px ${bottom}px ${left}px`
}

export default getPaperPaddings;