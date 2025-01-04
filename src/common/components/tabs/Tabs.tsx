import { Row, Col } from 'antd';
import setClassNames from '../../../utils/setClassNames';
import styles from './styles.module.scss';
import { FC, ReactNode, useEffect, useState } from 'react';
export type TabItemType = {
  id: string,
  label: string,
  content?: ReactNode
}

type T = {
  tabList: TabItemType[],
  initActiveId?: string
}

const Tabs:FC<T> = ({
  tabList,
  initActiveId
}) => {
  const [ activeId, setActiveId ] = useState<string>('')

  const onChange = (id: string) => {
    setActiveId(id)
  }

  useEffect(() => {
    initActiveId && setActiveId(initActiveId)
  }, [initActiveId])

  return (
    <Row className={styles.wrapper}>
      <Col span={24}>
        <div className={styles.tabs}>
          {
            tabList.map((data) => (
              <button onClick={() => onChange(data.id)} className={setClassNames([styles.tab, data.id === activeId && styles.active])}>{data.label}</button>
            ))
          }
        </div>
      </Col>
      <Col span={24}>
        <div className={styles.body}>
          {tabList.find(i => i.id === activeId)?.content}
        </div>
      </Col>

    </Row>
    
  )
}

export default Tabs;