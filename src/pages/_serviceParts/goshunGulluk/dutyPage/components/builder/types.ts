import { Duties } from "../../../../../../models"

type DutyGroup = {
  name: string,
  children?: DutyElement[]
}

type DutyElement = {
  type: Duties,
}

const dutyScheme_1:DutyGroup[] = [
  {
    name: 'Gozegci topar',
    
  }
]