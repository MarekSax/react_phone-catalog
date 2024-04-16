import styles from './Header.module.scss';
import MediaQuery from 'react-responsive';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Hamburger } from '../Hamburger';
import { MenuButton } from '../MenuButton';
import { MenuButtonType } from '../../../types';
export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <Logo />
        <Nav />
      </div>
      <div className={styles.right}>
        <MediaQuery maxWidth={639}>
          <Hamburger />
        </MediaQuery>
        <MediaQuery minWidth={640}>
          <MenuButton type={MenuButtonType.fav} />
          <MenuButton type={MenuButtonType.cart} />
        </MediaQuery>
      </div>
    </header>
  );
};
