import { ApiOrderFilterObjectAltDto } from '../../../swagger/models/api-order-filter-object';
import { OrderFilterObjectAlt } from '../../models/order-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { orderStateEnumAdapter } from '../enums/order-state-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const orderFilterObjectAltAdapter = (source?: ApiOrderFilterObjectAltDto | null): OrderFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    orderName: source?.OrderName,
    offerName: source?.OfferName,
    classificatorCodes: source?.ClassificatorCodes,
    usedClassificatorType: source?.UsedClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificatorType),
    orderState: source?.OrderState === null ? undefined : orderStateEnumAdapter(source?.OrderState),
    filterPriceMax: source?.FilterPriceMax,
    filterPriceMin: source?.FilterPriceMin,
  };
}
