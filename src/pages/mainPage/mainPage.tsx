import { FC } from "react";
import styles from './styles.module.scss';
import {Row, Col} from 'antd'
import LinkTab from "./components/linkTab/linkTab";
import routes from "../../data/routes";

const MainPage:FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        
        <Row
          gutter={[10,10]}  
          >
          <Col span={8}>
          <LinkTab 
              content={"Goshun gullugy"}
              linkTo={routes.goshunGullugy.home}
              />          
          </Col>
          
          <Col span={8}>
            <LinkTab 
              isDisabled
              content={"_____ gullugy"}
              />
          </Col>
          <Col span={8}>
            <LinkTab 
              isDisabled
              content={"_____ gullugy"}
              />
          </Col>
          <Col span={8}>
            <LinkTab 
              isDisabled
              content={"_____ gullugy"}
              />
          </Col>
          <Col span={8}>
            <LinkTab 
              isDisabled
              content={"_____ gullugy"}
              />
          </Col>
          <Col span={8}>
            <LinkTab 
              isDisabled
              content={"_____ gullugy"}
              />
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default MainPage