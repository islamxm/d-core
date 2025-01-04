import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import usePositionFromTop from '../../../../../../hooks/usePositionFromTop';
import { Table, TableProps } from 'antd';

type DataItem = {
  key: string,
  order: number
  rank: ReactNode,
  name: string,
  position: string,
}


type T = {
  columns: TableProps<DataItem>['columns'],
  data: DataItem[]
}


const StuffTable:FC<T> = ({
  columns,
  data
}) => {
  const {ref,top} = usePositionFromTop()


  return (
    <div 
      ref={ref} 
      style={{height: `calc(100vh - ${top + 20}px)`}} 
      className={styles.wrapper}>
      <Table  
        className={styles.table}
        columns={columns}
        dataSource={data}
        pagination={false}
        />
    </div>
  )
} 

export default StuffTable;