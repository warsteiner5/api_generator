import { ApiOrderFromCartCreatedInfoAltDto } from '../../../swagger/models/api-order-from-cart-created-info';
import { OrderFromCartCreatedInfoAlt } from '../../models/order-from-cart-created-info-alt.interface';

export function adaptOrderFromCartCreatedInfoAltToUI(source?: ApiOrderFromCartCreatedInfoAltDto | null): OrderFromCartCreatedInfoAlt {
  return {
    date: source?.Date ?? '',
    id: source?.Id ?? 0,
    sum: source?.Sum ?? 0,
  };
}
