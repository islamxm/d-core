import { FC, useContext, useEffect, useState } from "react";
import { MenuItemType } from "../../../../../../../models";
import styles from './styles.module.scss'
import {BsChevronDown} from 'react-icons/bs'
import { Link, useLocation, useNavigate } from "react-router-dom";
import setClassNames from "../../../../../../../utils/setClassNames";
import { MenuContext } from "../../provider";
import useCollapse from "../../../../../../../hooks/useCollapse";


const MenuItem:FC<MenuItemType> = ({
  id,
  label,
  getRoute,
  isActive,
  icon,
  children = [],
  isDisabled,
  ...restProps
}) => {
  const {pathname} = useLocation()
  const [routePath, setRoutePath] = useState<string>('#')

  useEffect(() => {
    getRoute && setRoutePath(getRoute())
  }, [getRoute])

  const {
    collapsableRef,
    isOpen,
    height,
    toggle,
  } = useCollapse({initState: typeof restProps.isOpen === 'boolean' && restProps.isOpen})

  return (
    <div className={setClassNames([styles.wrapper, routePath.includes(pathname) && styles.active, isOpen && styles.opened, isDisabled && styles.disabled])}>
      <div className={styles.button}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <Link to={routePath} className={styles.label}>{label}</Link>
        {children.length > 0 && 
          <button
            onClick={toggle} 
            className={setClassNames([styles.toggle, isOpen && styles.active])}>
            <span><BsChevronDown/></span>
          </button>}
      </div>
      {
        children.length > 0 && (
          <div 
            ref={collapsableRef} 
            style={{height: isOpen ? height : 0}} 
            className={styles.body}>
            {
              children.map((data) => (
                <MenuItem {...data} key={data.id} children={[]}/>
              ))
            }
          </div>
        )
      }
    </div>
  )
}



export default MenuItem;