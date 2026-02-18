import { ApiMzPriceListShortInfoDto } from '../../../swagger/models/api-mz-price-list-short-info-dto';
import { MzPriceListShortInfo } from '../../models/mz-price-list-short-info.interface';
import { adaptPriceListTypeEnumToUI } from './price-list-type-enum.adapter';

export function adaptMzPriceListShortInfoToUI(source?: ApiMzPriceListShortInfoDto | null): MzPriceListShortInfo {
  return {
    externalId: source?.ExternalId ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    type: adaptPriceListTypeEnumToUI(source?.Type),
  };
}
