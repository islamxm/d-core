import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react';
import Sidebar from '../../widgets/sidebar/sidebar';
import Header from '../../widgets/header/header';
import { useLocation } from 'react-router-dom';
import routes from '../../../data/routes';

const MainLayout:FC<PropsWithChildren> = ({
  children
}) => {
  const {pathname} = useLocation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}><Header/></div>
      {(pathname !== routes.start) && <div className={styles.sidebar}><Sidebar/></div>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout;