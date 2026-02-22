import { ApiPriceListInfoAltDto } from '../../../swagger/models/api-price-list-info';
import { PriceListInfoAlt } from '../../models/price-list-info-alt.interface';

export const priceListInfoAltAdapter = (source?: ApiPriceListInfoAltDto | null): PriceListInfoAlt => {
  return {
    count: source?.Count,
    id: source?.Id,
    name: source?.Name,
    regions: source?.Regions,
    url: source?.Url,
  };
}
