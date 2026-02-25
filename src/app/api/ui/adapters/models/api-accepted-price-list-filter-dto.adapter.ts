import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { ApiAcceptedPriceListFilterDto } from '../../../swagger/models/api-accepted-price-list-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiAcceptedPriceListFilterDtoAdapter = (source?: AcceptedPriceListFilter | null): ApiAcceptedPriceListFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    TradeId: source?.tradeId,
    DeliveryKladrRegionCode: source?.deliveryKladrRegionCode,
  };
}
