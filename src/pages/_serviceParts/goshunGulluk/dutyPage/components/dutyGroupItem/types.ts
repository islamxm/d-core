import { FC } from "react";
import { _DutyBuilderItemType } from "../../../../../../hooks/useDutyBuilder/types";


export type DutyGroupItemComponent<T extends _DutyBuilderItemType> = FC<{
  data: T,
  index: number
}>