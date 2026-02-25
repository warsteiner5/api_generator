import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';
import { ApiAllTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-all-trades-filter-object-for-customer';
import { apiTradesFilterObjectAltDtoAdapter } from './api-trades-filter-object.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiAllTradesFilterObjectForCustomerAltDtoAdapter = (source?: AllTradesFilterObjectForCustomerAlt | null): ApiAllTradesFilterObjectForCustomerAltDto => {
  return {
    ...apiTradesFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiTradesFilterObjectAltDtoAdapter>[0]),
    OnlyTradesWithMyApplications: source?.onlyTradesWithMyApplications,
    ClassificatorCodes: source?.classificatorCodes,
    UsedClassificatorType: source?.usedClassificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificatorType),
    CustomerAddress: source?.customerAddress,
  };
}
