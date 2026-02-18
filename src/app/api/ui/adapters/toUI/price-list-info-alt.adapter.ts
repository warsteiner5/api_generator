import { ApiPriceListInfoAltDto } from '../../../swagger/models/api-price-list-info';
import { PriceListInfoAlt } from '../../models/price-list-info-alt.interface';

export function adaptPriceListInfoAltToUI(source?: ApiPriceListInfoAltDto | null): PriceListInfoAlt {
  return {
    count: source?.Count ?? 0,
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    regions: source?.Regions ?? [],
    url: source?.Url ?? '',
  };
}
