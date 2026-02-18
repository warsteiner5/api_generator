import { PriceListItemAlt } from '../../models/price-list-item-alt.interface';
import { ApiPriceListItemAltDto } from '../../../swagger/models/api-price-list-item';
import { adaptApiPriceListInfoAltDto } from './api-price-list-info.adapter';

export function adaptApiPriceListItemAltDto(source?: PriceListItemAlt | null): ApiPriceListItemAltDto {
  return {
    DeviationPercent: source?.deviationPercent,
    Id: source?.id,
    IsActive: source?.isActive,
    PriceListInfo: adaptApiPriceListInfoAltDto(source?.priceListInfo),
    Regions: source?.regions ?? [],
  };
}
