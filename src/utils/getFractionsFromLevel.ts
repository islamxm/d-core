import { Fraction } from "../data/fractions";
import { FractionLevel } from "../models";

const getFractionsFromLevel = (list: Fraction[], level: FractionLevel) => {
  switch(level) {
    case 'rota':
      return list.filter(f => f.level === 'rota')
    case 'batalyon':
      return list.filter(f => f.level === 'batalyon')
    case 'bolumce':
      return list.filter(f => f.level === 'bolumce')
    case 'wzwod':
      return list.filter(f => f.level === 'wzwod')
    default:
      return list
  }
}
export default getFractionsFromLevel