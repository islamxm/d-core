import styles from './styles.module.scss';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { Row, Col } from 'antd';
import { Gutter } from 'antd/es/grid/row';
import setClassNames from '../../../utils/setClassNames';


type T = PropsWithChildren & {
  label: ReactNode,
  gutter?: Gutter | [Gutter, Gutter]
  className?: string,
  labelClassName?: string,
  bodyClassName?: string,
}

const WithLabel:FC<T> = ({
  children,
  label,
  gutter = [10,10],
  className,
  labelClassName,
  bodyClassName
}) => {

  return (
    <Row gutter={gutter} className={setClassNames([styles.wrapper, className])}>
      <Col span={24} className={setClassNames([styles.label, labelClassName])}>{label}</Col>
      <Col span={24} className={setClassNames([styles.body, bodyClassName])}>
        {children}
      </Col>
    </Row>
  )
}

export default WithLabel; 