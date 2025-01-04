import { createContext, FC, PropsWithChildren, useState } from "react";
import { DefFuctionType } from "../../../../../models";

type MenuContextType = {
  activeId: string,
  setActiveId?: DefFuctionType 
} 

export const MenuContext = createContext<MenuContextType>({
  activeId: '',
  setActiveId: () => {}
})

const MenuProvider:FC<PropsWithChildren> = ({
  children
}) => {
  const [activeId, setActiveId] = useState<string>('')

  return (
    <MenuContext.Provider value={{activeId, setActiveId}}>
      {children}
    </MenuContext.Provider>
  )
}


export default MenuProvider