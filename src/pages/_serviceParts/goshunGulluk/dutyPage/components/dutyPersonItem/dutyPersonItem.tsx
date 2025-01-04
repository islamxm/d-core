import {Select} from 'antd'
import {FC} from 'react'
import { SelectProps } from 'antd'
import styles from './styles.module.scss'
import Button from '../../../../../../common/components/button/button'
import {AiOutlineClose} from 'react-icons/ai'

type T = SelectProps & {
  onDelete?: (...args:any) => void,
  forceMinWidth?: number
}

const DutyPersonItem:FC<T> = ({onDelete, forceMinWidth, ...rest}) => {

  return (
    <div className={styles.wrapper}>
      <Select
        {...rest}
        style={{...rest.style, minWidth: forceMinWidth ?? 70}}
        optionFilterProp={'label'}
        showSearch
        virtual
        />
      <Button onClick={onDelete} typeVariant='filled' colorVariant='danger' iconButton={{size: 'md'}}>
        <AiOutlineClose/>
      </Button>
    </div>
  )
}

export default DutyPersonItem