import { PriceListItemAlt } from '../../models/price-list-item-alt.interface';
import { ApiPriceListItemAltDto } from '../../../swagger/models/api-price-list-item';
import { apiPriceListInfoAltDtoAdapter } from './api-price-list-info.adapter';

export const apiPriceListItemAltDtoAdapter = (source?: PriceListItemAlt | null): ApiPriceListItemAltDto => {
  return {
    DeviationPercent: source?.deviationPercent,
    Id: source?.id,
    IsActive: source?.isActive,
    PriceListInfo: source?.priceListInfo === null ? undefined : apiPriceListInfoAltDtoAdapter(source?.priceListInfo),
    Regions: source?.regions,
  };
}
