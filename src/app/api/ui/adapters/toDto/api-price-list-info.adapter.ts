import { PriceListInfoAlt } from '../../models/price-list-info-alt.interface';
import { ApiPriceListInfoAltDto } from '../../../swagger/models/api-price-list-info';

export function adaptApiPriceListInfoAltDto(source?: PriceListInfoAlt | null): ApiPriceListInfoAltDto {
  return {
    Count: source?.count,
    Id: source?.id,
    Name: source?.name,
    Regions: source?.regions ?? [],
    Url: source?.url,
  };
}
