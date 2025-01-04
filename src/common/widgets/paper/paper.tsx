import styles from './styles.module.scss';
import { FC } from 'react';
import PaperWidgetType from './types';
import getOrientationSize from '../../../utils/getOrientationSize';
import getPaperPaddings from '../../../utils/getPaperPaddings';


const PaperWidget:FC<PaperWidgetType> = ({
  children,
  orientation = 'portrait',
  padding = {top: 2, right: 2, bottom: 2, left: 2},
  font = {
    size: 18.5,
    lineHeight: 24
  }
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          style={{
            width: getOrientationSize(orientation).width,
            height: getOrientationSize(orientation).height,
            padding: getPaperPaddings({
              top: padding.top, 
              right: padding.right, 
              bottom: padding.bottom, 
              left: padding.left
            }), 
            fontSize: font.size,
            lineHeight: `${font.lineHeight}px`
          }}
          className={styles.paper}>
            {children}
        </div>
      </div>
    </div>
  )
}

export default PaperWidget;