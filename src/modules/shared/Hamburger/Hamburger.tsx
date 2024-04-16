/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

import styles from './Hamburger.module.scss';
export const Hamburger = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <img src="/img/icons/hamburger.svg" />
      </Link>
    </div>
  );
};
