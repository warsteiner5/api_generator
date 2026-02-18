import { ApiPriceListItemAltDto } from '../../../swagger/models/api-price-list-item';
import { PriceListItemAlt } from '../../models/price-list-item-alt.interface';
import { adaptPriceListInfoAltToUI } from './price-list-info-alt.adapter';

export function adaptPriceListItemAltToUI(source?: ApiPriceListItemAltDto | null): PriceListItemAlt {
  return {
    deviationPercent: source?.DeviationPercent ?? 0,
    id: source?.Id ?? '',
    isActive: source?.IsActive ?? false,
    priceListInfo: adaptPriceListInfoAltToUI(source?.PriceListInfo),
    regions: source?.Regions ?? [],
  };
}
