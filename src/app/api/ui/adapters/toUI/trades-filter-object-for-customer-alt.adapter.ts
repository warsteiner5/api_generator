import { ApiTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-trades-filter-object-for-customer';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';

export function adaptTradesFilterObjectForCustomerAltToUI(source?: ApiTradesFilterObjectForCustomerAltDto | null): TradesFilterObjectForCustomerAlt {
  return (source ?? {}) as TradesFilterObjectForCustomerAlt;
}
