import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { ApiTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-trades-filter-object-for-customer';

export const apiTradesFilterObjectForCustomerAltDtoAdapter = (source?: TradesFilterObjectForCustomerAlt | null): ApiTradesFilterObjectForCustomerAltDto => {
  return (source ?? {}) as ApiTradesFilterObjectForCustomerAltDto;
}
