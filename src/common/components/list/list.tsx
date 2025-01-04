import { Row, Col } from 'antd';
import styles from './styles.module.scss'
import Tabs from '../tabs/Tabs';
import TabSelect from '../tabSelect/tabSelect';

const List = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <div className={styles.action_main}></div>
        <div className={styles.action_viewType}>
          <TabSelect
            list={[{id:1, label: 'tab1', isActive: true}, {id:2, label: 'tab2', isActive:false}]}
            />          
        </div>
      </div>
      <div className={styles.body}>

      </div>
    </div>
  )

}

export default List;