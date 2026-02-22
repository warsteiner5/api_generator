import { ApiOrderFromCartCreatedInfoAltDto } from '../../../swagger/models/api-order-from-cart-created-info';
import { OrderFromCartCreatedInfoAlt } from '../../models/order-from-cart-created-info-alt.interface';

export const orderFromCartCreatedInfoAltAdapter = (source?: ApiOrderFromCartCreatedInfoAltDto | null): OrderFromCartCreatedInfoAlt => {
  return {
    date: source?.Date,
    id: source?.Id,
    sum: source?.Sum,
  };
}
