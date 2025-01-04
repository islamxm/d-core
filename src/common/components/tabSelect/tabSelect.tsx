import setClassNames from '../../../utils/setClassNames'
import styles from './styles.module.scss'
import { useState, useEffect, FC, ReactNode, CSSProperties, useRef } from 'react'

type tabItemType = {
  id: number,
  isActive: boolean,
  label: ReactNode
} 


type T = FC<{
  list?: tabItemType[]
  onSelect?: (id: number) => any
}>

const TabSelect:T = ({
  list = [],
  onSelect
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [badgeStyle, setBadgeStyle] = useState<CSSProperties>()
  const r = useRef<HTMLDivElement>(null)

  const setStyle = () => {
    const index = list.findIndex(f => f.id === activeTab)
    console.log(index)
    if(r.current) {
      setBadgeStyle({
        width: r.current.children[index].scrollWidth,
        transform: `translateX(${r.current.children[index].getBoundingClientRect().x - r.current.getBoundingClientRect().x}px)`
      })
    }  
  }

  useEffect(() => {
    setStyle()
  }, [activeTab])

  return (
    <div className={styles.wrapper}>
      <div style={badgeStyle} className={styles.badge}></div>
      <div className={styles.list} ref={r}>
        {
          list.map(tab => (
            <div 
              onClick={_ => {
                setActiveTab(tab.id)
                onSelect && onSelect(tab.id)
              }} 
              className={setClassNames([styles.tab, tab.id === activeTab && styles.active])}>
              {tab.label}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TabSelect