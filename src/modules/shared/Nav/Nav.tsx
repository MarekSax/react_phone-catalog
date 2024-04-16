import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export const Nav = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/phones" className={linkClasses}>
            Phones
          </NavLink>
        </li>
        <li>
          <NavLink to="/tablets" className={linkClasses}>
            Tablets
          </NavLink>
        </li>
        <li>
          <NavLink to="/accessories" className={linkClasses}>
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
