import { createContext, FC, PropsWithChildren } from "react";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";
import { _DutyBuilderDefaultScheme } from "../../../../../../hooks/useDutyBuilder/types";

type T = {
  
}

export const DutyContext = createContext<T>({})

export const DutyContextProvider:FC<PropsWithChildren> = ({children}) => {
  const builder = useDutyBuilder()

  return (
    <DutyContext.Provider value={builder}>
      {children}
    </DutyContext.Provider>
  )
}

