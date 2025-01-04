import styles from './styles.module.scss';
import Menu from './components/menu/menu';

import { GoshunGullukMenu } from '../../../data/menu';
import { useEffect, useState } from 'react';
import { MenuItemType } from '../../../models';

import MenuProvider from './components/menu/provider';
import Burger from './components/burger/burger';
import setClassNames from '../../../utils/setClassNames';


const Sidebar = () => {
  const [isActive, setActive] = useState(false)
  const [menuList, setMenuList] = useState<MenuItemType[]>([])

  useEffect(() => {
    setMenuList(GoshunGullukMenu)
  }, [])

  return (
    <div className={setClassNames([styles.wrapper, isActive && styles.active])}>
        <Burger
          isActive={isActive}
          onClick={() => setActive(s => !s)}
          />
        <div className={styles.body}>
          <MenuProvider>
            <Menu menuList={menuList}/>
          </MenuProvider>
        </div>
    </div>
  )
}

export default Sidebar