import { FC } from "react";
import styles from './styles.module.scss'
import MenuItem from "./components/menuItem/menuItem";
import { MenuItemType } from "../../../../../models";
import {Row, Col} from 'antd'
const Menu:FC<{menuList: MenuItemType[]}> = ({menuList}) => {

  return (
    <div className={styles.wrapper}>
      <Row gutter={[0,10]}>
        {menuList.length > 0 && (
          menuList.map((menuItemData) => (
            <Col span={24} key={menuItemData.id}>
              <MenuItem 
                {...menuItemData}
                />
            </Col>
          ))
        )}  
      </Row>
      
    </div>
  )
}
export default Menu;