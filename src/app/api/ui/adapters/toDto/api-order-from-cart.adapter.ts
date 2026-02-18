import { OrderFromCartAlt } from '../../models/order-from-cart-alt.interface';
import { ApiOrderFromCartAltDto } from '../../../swagger/models/api-order-from-cart';
import { adaptApiOrderAltDto } from './api-order.adapter';

export function adaptApiOrderFromCartAltDto(source?: OrderFromCartAlt | null): ApiOrderFromCartAltDto {
  return {
    CartId: source?.cartId,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    KladrRegionCode: source?.kladrRegionCode,
    Orders: (source?.orders ?? []).map((item) => adaptApiOrderAltDto(item)),
  };
}
