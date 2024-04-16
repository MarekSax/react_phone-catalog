export enum MenuButtonType {
  cart = 'cart',
  fav = 'favorites',
}

export interface MenuButtonProps {
  type: MenuButtonType.cart | MenuButtonType.fav;
}
