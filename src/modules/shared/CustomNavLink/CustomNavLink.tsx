import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomNavLinkProps } from '../../../types/CustomNavLink';
import styles from './CustomNavLink.module.scss';

export const CustomNavLink: React.FC<PropsWithChildren<CustomNavLinkProps>> = ({
  to,
  children,
}) => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <NavLink to={to} className={linkClasses}>
      {children}
    </NavLink>
  );
};
