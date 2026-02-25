import { ApiAcceptedPriceListFilterDto } from '../../../swagger/models/api-accepted-price-list-filter-dto';
import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const acceptedPriceListFilterAdapter = (source?: ApiAcceptedPriceListFilterDto | null): AcceptedPriceListFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    tradeId: source?.TradeId,
    deliveryKladrRegionCode: source?.DeliveryKladrRegionCode,
  };
}
