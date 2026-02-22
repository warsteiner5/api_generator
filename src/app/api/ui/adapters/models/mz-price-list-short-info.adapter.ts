import { ApiMzPriceListShortInfoDto } from '../../../swagger/models/api-mz-price-list-short-info-dto';
import { MzPriceListShortInfo } from '../../models/mz-price-list-short-info.interface';
import { priceListTypeEnumAdapter } from '../enums/price-list-type-enum.adapter';

export const mzPriceListShortInfoAdapter = (source?: ApiMzPriceListShortInfoDto | null): MzPriceListShortInfo => {
  return {
    externalId: source?.ExternalId,
    id: source?.Id,
    name: source?.Name,
    type: source?.Type === null ? undefined : priceListTypeEnumAdapter(source?.Type),
  };
}
