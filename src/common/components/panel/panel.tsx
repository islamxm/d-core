import styles from './styles.module.scss';
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Row, Col } from 'antd';
import Button from '../button/button';
import { DefFuctionType } from '../../../models';
import {AiOutlineClose, AiFillEdit} from 'react-icons/ai'

type T = FC<PropsWithChildren & {
  title?: string,
  padding?: number | `${number}px ${number}px`,

  action?: {
    onDelete?: DefFuctionType,
    onEdit?: DefFuctionType
  }
}>

const Panel:T = ({
  children,
  title,
  padding,
  action
}) => {
  const actionBlockRef = useRef<HTMLDivElement>(null)
  const [paddingRight, setPaddingR] = useState<number>(0)

  useEffect(() => {
    if(actionBlockRef?.current) {
      setPaddingR(actionBlockRef.current.scrollWidth + 5)
    }
  }, [actionBlockRef])

  return (
    <Row style={actionBlockRef?.current ? {padding, paddingRight} : {padding}} className={styles.wrapper}>
      {
        action && (
          <div ref={actionBlockRef} className={styles.action}>
            {action?.onDelete && (
              <div>
                <Button 
                  colorVariant={'danger'}
                  onClick={action.onDelete} 
                  iconButton={{size: 'md', isRound: true}}>
                  <AiOutlineClose/>
                </Button>
              </div>
            )}
            {action?.onEdit && (
              <div>
                <Button 
                  iconButton={{size: 'md', isRound: true}}
                  onClick={action.onEdit}>
                  <AiFillEdit/>
                </Button>
              </div>
            )}
          </div>
        )
      }
      {
        title && <Col span={24}><h3 className={styles.title}>{title}</h3></Col>
      }
      <Col span={24} className={styles.body}>
        {children}
      </Col>
    </Row>
  )
}

export default Panel