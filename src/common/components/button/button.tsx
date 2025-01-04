import { CSSProperties, FC, HTMLProps, PropsWithChildren, ReactNode } from 'react';
import styles from './styles.module.scss';
import setClassNames from '../../../utils/setClassNames';

type ButtonType = 'submit' | 'reset' | 'button'

type ButtonTypeVariant = 'outlined' | 'filled'
type ButtonColorVariant = 'default' | 'danger' | 'success' | 'info'

type Alignment = 'start' | 'center' | 'end'

type Type = FC<PropsWithChildren<HTMLProps<HTMLButtonElement> & {
  type?: ButtonType
  typeVariant?: ButtonTypeVariant
  colorVariant?: ButtonColorVariant
  before?: ReactNode
  after?: ReactNode
  isFill?: boolean
  justify?: Alignment,
  align?: Alignment,
  iconButton?: {
    size: number | 'sm' | 'md' | 'lg',
    isRound?: boolean
  }
}>>


const getIconButtonVal = (size: number | 'sm' | 'md' | 'lg'):CSSProperties => {
  switch(size) {
    case 'sm':
      return {width:'20px',height:'20px', fontSize: '10px', lineHeight: '10px'}
    case 'md':
      return {width:'30px',height:'30px', fontSize: '15px', lineHeight: '15px'}
    case 'lg':
      return {width:'45px',height:'45px', fontSize: '30px', lineHeight: '30px'}
    default:
      return {width:`${size}px`,height:`${size}px`, fontSize: `${size / 1.5}px`, lineHeight: `${size / 1.5}px`}
  }
}


const setButtonTypeV = (value?: ButtonTypeVariant) => {
  switch(value) {
    case 'filled':
      return styles.filled
    case 'outlined':
      return styles.outlined
    default: 
      return styles.filled
  }
}

const setJustify = (value: Alignment) => {
  switch(value) {
    case 'start':
      return styles.justify_start
    case 'center':
      return styles.justify_center
    case 'end':
      return styles.justify_end
    default:
      return styles.justify_center
  }
}

const setAlign = (value: Alignment) => {
  switch(value) {
    case 'start':
      return styles.align_start
    case 'center':
      return styles.align_center
    case 'end':
      return styles.align_end
    default:
      return styles.align_center
  }
}

const setButtonColorV = (value?: ButtonColorVariant) => {
  switch(value) {
    case 'default':
      return styles.default
    case 'danger':
      return styles.danger
    case 'info':
      return styles.info
    case 'success':
      return styles.success
    default:
      return styles.default
  }
}


const Button:Type = ({
  typeVariant,
  colorVariant,
  children,
  disabled,
  isFill,
  before,
  after,
  align = 'center',
  justify = 'center',
  iconButton,
  ...restProps
}) => {

  

  return (
    <button 
      {...restProps}
      disabled={disabled}
      style={iconButton ? {...restProps.style, ...getIconButtonVal(iconButton.size)} : restProps.style}
      className={setClassNames([
        styles.wrapper, 
        setButtonTypeV(typeVariant), 
        setButtonColorV(colorVariant), 
        disabled && styles.disabled, 
        isFill && styles.fill, 
        iconButton && styles.icon,
        iconButton?.isRound && `${styles.round}`,
        setAlign(align), 
        setJustify(justify)])}>
      {before && (
        <span className={setClassNames([styles.ex, styles.before])}>
          {before}
        </span>
      )}
      <span className={styles.main}>
        {children}
      </span>
      {after && (
        <span className={setClassNames([styles.ex, styles.after])}>
          {after}
        </span>
      )}
    </button>
  )
}

export default Button;