import { GarawulBase } from "../models"

const Garawul:GarawulBase[] = [
  {
    id: 1,
    number: 1,
    type: 'IG',
    posts: [
      {id: 1, number: 1, changes: 3, isActive: true, isRest: false},
      {id: 1, number: 2, changes: 3, isActive: true, isRest: false},
      {id: 1, number: 2, changes: 3, isActive: true, isRest: true},
    ]
  },
  {
    id: 2,
    number: 1,
    type: 'GG',
    posts: [
      {id: 1, number: 1, changes: 3, isActive: true, isRest: false},
    ]
  }
]
export default Garawul