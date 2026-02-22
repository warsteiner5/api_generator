import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';
import { ApiAllTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-all-trades-filter-object-for-customer';

export const apiAllTradesFilterObjectForCustomerAltDtoAdapter = (source?: AllTradesFilterObjectForCustomerAlt | null): ApiAllTradesFilterObjectForCustomerAltDto => {
  return (source ?? {}) as ApiAllTradesFilterObjectForCustomerAltDto;
}
