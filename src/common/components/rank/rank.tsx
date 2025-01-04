import styles from './styles.module.scss';
import { Contracts, Ranks } from '../../../models';
import { FC } from 'react';
import setClassNames from '../../../utils/setClassNames';
import {AiFillStar} from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs';
type T = {
  rank?: Ranks,
  contractType?: Contracts
}

const Rank:FC<T> = ({
  rank = Ranks.hatarçy,
  contractType = Contracts['çagyryş boýunça h/g']
}) => {
  
  if(rank === Ranks['kiçi seržant'] && contractType === Contracts['çagyryş boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.cg, styles.ksnt])}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks.seržant && contractType === Contracts['çagyryş boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.cg, styles.snt])}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks['uly seržant'] && contractType === Contracts['çagyryş boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.cg, styles.usnt])}>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks['kiçi seržant'] && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.ksnt])}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks['seržant'] && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.snt])}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks['uly seržant'] && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.usnt])}>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks.starşina && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.starshina])}>
        <span className={styles.line}></span>
      </div>  
    )
  }
  if(rank === Ranks.maýor && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.mayor])}>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
      </div>
    )
  }
  if(rank === Ranks.leýtenant && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.lnt])}>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
      </div>
    )
  }
  if(rank === Ranks['uly leýtenant'] && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.ulnt])}>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
      </div>
    )
  }
  if(rank === Ranks.kapitan && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.kapitan])}>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
      </div>
    )
  }
  if(rank === Ranks.podpolkownik && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.ppk])}>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
      </div>
    )
  }
  if(rank === Ranks.polkownik && contractType === Contracts['borçnama boýunça h/g']) {
    return (
      <div className={setClassNames([styles.wrapper, styles.bg, styles.pk])}>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
        <span className={styles.star}>
          <AiFillStar/>
        </span>
      </div>
    )
  }
  return (
    <div className={setClassNames([styles.wrapper, styles.cg])}></div>
  )
}

export default Rank;