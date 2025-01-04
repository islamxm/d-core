import styles from './styles.module.scss';
import { CSSProperties, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import setClassNames from '../../../../utils/setClassNames';

type T = {
  content: ReactNode
  style?: CSSProperties
  linkTo?: string,
  isDisabled?: boolean,
}

const LinkTab:FC<T> = ({
  style,
  linkTo,
  isDisabled,
  content
}) => {

  return (
    <Link  
      className={setClassNames([styles.wrapper, isDisabled && styles.disabled])} 
      style={style}
      to={linkTo || '/'}>
      {content}
    </Link> 
  )
}

export default LinkTab