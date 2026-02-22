import { ApiPriceListItemAltDto } from '../../../swagger/models/api-price-list-item';
import { PriceListItemAlt } from '../../models/price-list-item-alt.interface';
import { priceListInfoAltAdapter } from './price-list-info-alt.adapter';

export const priceListItemAltAdapter = (source?: ApiPriceListItemAltDto | null): PriceListItemAlt => {
  return {
    deviationPercent: source?.DeviationPercent,
    id: source?.Id,
    isActive: source?.IsActive,
    priceListInfo: source?.PriceListInfo === null ? undefined : priceListInfoAltAdapter(source?.PriceListInfo),
    regions: source?.Regions,
  };
}
