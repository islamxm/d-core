import dutyGroupDefaultTempObj from "../pages/_serviceParts/goshunGulluk/dutyPage/components/builder/dutyGroupsDefaultTempObj"
import { DutyGroupType } from "../data/dutyGroups"
import { _DutyBuilderItemType } from "../hooks/useDutyBuilder/types"

const getDutyGroup = (type: DutyGroupType) => {
  return dutyGroupDefaultTempObj.find(t => t.groupType === type) ?? dutyGroupDefaultTempObj[0]
}

const createDutyGroup = (type: DutyGroupType): _DutyBuilderItemType => {
  switch (type) {
    case 1:
      return getDutyGroup(type)
    case 2:
      return getDutyGroup(type)
    case 3:
      return getDutyGroup(type)
    case 4:
      return getDutyGroup(type)
    case 5:
      return getDutyGroup(type)
    case 6:
      return getDutyGroup(type)
    case 7:
      return getDutyGroup(type)
    case 8:
      return getDutyGroup(type)
    case 9: 
      return getDutyGroup(type)
    case 10:
      return getDutyGroup(type)
    case 11:
      return getDutyGroup(type)
    case 12: 
      return getDutyGroup(type)
    case 13:
      return getDutyGroup(type)
    case 14:
      return getDutyGroup(type)
    case 15:
      return getDutyGroup(type)
    case 16:
      return getDutyGroup(type)
    case 17:
      return getDutyGroup(type)
  }
}

export default createDutyGroup