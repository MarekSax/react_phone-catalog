import styles from './Nav.module.scss';
import { CustomNavLink } from '../CustomNavLink/CustomNavLink';

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <CustomNavLink to="/">Home</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/phones">Phones</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/tablets">Tablets</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/accessories">Accessories</CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};
