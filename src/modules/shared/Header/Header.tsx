import styles from './Header.module.scss';
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
        <Hamburger />
        <MenuButton type={MenuButtonType.fav} />
        <MenuButton type={MenuButtonType.cart} />
      </div>
    </header>
  );
};
