import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import useDutyBuilder from "../../hooks/useDutyBuilder/useDutyBuilder"
import { _DutyBuilderItemType } from "../../hooks/useDutyBuilder/types"
import dutyGroups, { DutyGroup, DutyGroupType } from "../../data/dutyGroups"
import dutyGroupDefaultTempObj from "../../pages/_serviceParts/goshunGulluk/dutyPage/components/builder/dutyGroupsDefaultTempObj"
import { _DutyBuilderDefaultScheme } from "../../hooks/useDutyBuilder/types"
import { Duties, PersonBase } from "../../models"

type CurrentPerson = {
  isOpen: boolean,
  data?: {
    groupIndex: number,
    personIndex: number,
    groupType: DutyGroupType
    person?: PersonBase
  }
}

type T = {
  data: _DutyBuilderItemType[],
  avilableDutyGroupList: DutyGroup[],
}

const initialState:T = {
  data: [],
  avilableDutyGroupList: dutyGroups,
}

const _createAll = ():_DutyBuilderDefaultScheme => dutyGroupDefaultTempObj

export const dutySlice = createSlice({
  name: 'duty',
  initialState,
  reducers: {
    addDutyGroup: (state, action: PayloadAction<_DutyBuilderItemType>) => {
      state.data = [...state.data, action.payload]
    },
    deleteDutyGroup: (state, action: PayloadAction<{index: number}>) => {
      state.data = state.data.filter((_,index) => index !== action.payload.index)
    },
    createDefaultDutyTemplate: (state) => {
      state.data = _createAll()
    },
    clear: (state) => {
      state.data = []
    },
    updateAvilableDutyGroupList: (state, action: PayloadAction<DutyGroup[]>) => {
      state.avilableDutyGroupList = action.payload
    },
    onChangePerson: (state, action: PayloadAction<{
      groupIndex: number
      body: any
    }>) => {
      const { 
        groupIndex,
        body
      } = action.payload
      state.data[groupIndex].body = body
    },
  }
})

export const dutyActions = dutySlice.actions
export default dutySlice.reducer



