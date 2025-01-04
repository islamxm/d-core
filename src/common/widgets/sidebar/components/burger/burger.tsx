import { FC } from 'react';
import styles from './styles.module.scss';
import { DefFuctionType } from '../../../../../models';
import setClassNames from '../../../../../utils/setClassNames';

type BurgerType = {
  isActive: boolean,
  onClick: DefFuctionType
}

const Burger:FC<BurgerType> = ({
  isActive,
  onClick
}) => {

  return (
    <button onClick={onClick} className={setClassNames([styles.wrapper, isActive && styles.active])}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default Burger;