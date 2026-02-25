import { ApiAllTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-all-trades-filter-object-for-customer';
import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';
import { tradesFilterObjectAltAdapter } from './trades-filter-object-alt.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const allTradesFilterObjectForCustomerAltAdapter = (source?: ApiAllTradesFilterObjectForCustomerAltDto | null): AllTradesFilterObjectForCustomerAlt => {
  return {
    ...tradesFilterObjectAltAdapter(source as unknown as Parameters<typeof tradesFilterObjectAltAdapter>[0]),
    onlyTradesWithMyApplications: source?.OnlyTradesWithMyApplications,
    classificatorCodes: source?.ClassificatorCodes,
    usedClassificatorType: source?.UsedClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificatorType),
    customerAddress: source?.CustomerAddress,
  };
}
