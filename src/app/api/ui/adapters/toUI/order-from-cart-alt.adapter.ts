import { ApiOrderFromCartAltDto } from '../../../swagger/models/api-order-from-cart';
import { OrderFromCartAlt } from '../../models/order-from-cart-alt.interface';
import { adaptOrderAltToUI } from './order-alt.adapter';

export function adaptOrderFromCartAltToUI(source?: ApiOrderFromCartAltDto | null): OrderFromCartAlt {
  return {
    cartId: source?.CartId ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    kladrRegionCode: source?.KladrRegionCode ?? '',
    orders: (source?.Orders ?? []).map((item) => adaptOrderAltToUI(item)),
  };
}
