import { CartItems } from './CartItem';
import { User } from './User';

export type Order = {
  user: User | null;
  cartItems: CartItems[]; // Використовуємо тип CartItems
  totalPrice: number;
};
