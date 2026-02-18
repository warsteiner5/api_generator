import { ApiAllTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-all-trades-filter-object-for-customer';
import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';

export function adaptAllTradesFilterObjectForCustomerAltToUI(source?: ApiAllTradesFilterObjectForCustomerAltDto | null): AllTradesFilterObjectForCustomerAlt {
  return (source ?? {}) as AllTradesFilterObjectForCustomerAlt;
}
