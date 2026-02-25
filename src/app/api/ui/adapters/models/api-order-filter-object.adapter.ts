import { OrderFilterObjectAlt } from '../../models/order-filter-object-alt.interface';
import { ApiOrderFilterObjectAltDto } from '../../../swagger/models/api-order-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiOrderStateEnumAdapter } from '../enums/api-order-state-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiOrderFilterObjectAltDtoAdapter = (source?: OrderFilterObjectAlt | null): ApiOrderFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    OrderName: source?.orderName,
    OfferName: source?.offerName,
    ClassificatorCodes: source?.classificatorCodes,
    UsedClassificatorType: source?.usedClassificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificatorType),
    OrderState: source?.orderState === null ? undefined : apiOrderStateEnumAdapter(source?.orderState),
    FilterPriceMax: source?.filterPriceMax,
    FilterPriceMin: source?.filterPriceMin,
  };
}
