import { useState } from 'react';
import styles from './MenuButton.module.scss';
import cn from 'classnames';
import { MenuButtonProps, MenuButtonType } from '../../../types';
import { CustomNavLink } from '../CustomNavLink';

const buttonTypes = {
  cart: '/img/icons/cart-button.svg',
  favorites: '/img/icons/fav-button.svg',
};

export const MenuButton = ({ type }: MenuButtonProps) => {
  const [itemsCount] = useState(3);
  const classNames = cn(styles.icon, { [styles.iconitems]: itemsCount });

  const generateAriaLabel = () => {
    const ariaLabel =
      type === MenuButtonType.cart ? 'Shopping cart.' : 'Favorites.';
    const plural = itemsCount > 1 ? 's' : '';
    const itemsCountLabel =
      itemsCount > 0 ? `${itemsCount} item${plural} inside.` : '';

    return `${ariaLabel} ${itemsCountLabel}`;
  };

  return (
    <CustomNavLink to={type} aria-label={generateAriaLabel()}>
      <div className={styles.container}>
        <div className={classNames} data-items={itemsCount}>
          <img src={buttonTypes[type]} alt={type} />
        </div>
      </div>
    </CustomNavLink>
  );
};
