import { CSSProperties, FC } from "react"
import styles from './styles.module.scss';
import { DatePicker } from "antd";

type T = {
  style?: CSSProperties
  width?: number
  placeholder?: string,
  value?: string | string[]
  onChange?: (e: any, dateString: string | string[]) => any
}

const DateSelect:FC<T> = ({
  width,
  placeholder,
  style,
  value,
  onChange
}) => {
  return (
    <div className={styles.wrapper}>
      <DatePicker
        placeholder={placeholder}
        style={style}
        width={width}
        format={'DD.MM.YYYY'}
        onChange={onChange}
       />
    </div>
  )
}
export default DateSelect