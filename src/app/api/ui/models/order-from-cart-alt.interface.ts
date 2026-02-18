import { OrderAlt } from './order-alt.interface';

export interface OrderFromCartAlt {
  cartId: string;
  deliveryPlace: string;
  deliveryTerms: string;
  kladrRegionCode: string;
  orders: OrderAlt[];
}
