import { ApiAllTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-all-trades-filter-object-for-customer';
import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';

export const allTradesFilterObjectForCustomerAltAdapter = (source?: ApiAllTradesFilterObjectForCustomerAltDto | null): AllTradesFilterObjectForCustomerAlt => {
  return (source ?? {}) as AllTradesFilterObjectForCustomerAlt;
}
