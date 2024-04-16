import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <NavLink to="/" className={styles.container}>
      <img src="/img/icons/logo.svg" alt="Logo" className={styles.logo} />
    </NavLink>
  );
};
