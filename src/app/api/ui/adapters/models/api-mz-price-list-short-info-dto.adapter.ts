import { MzPriceListShortInfo } from '../../models/mz-price-list-short-info.interface';
import { ApiMzPriceListShortInfoDto } from '../../../swagger/models/api-mz-price-list-short-info-dto';
import { apiPriceListTypeEnumAdapter } from '../enums/api-price-list-type-enum.adapter';

export const apiMzPriceListShortInfoDtoAdapter = (source?: MzPriceListShortInfo | null): ApiMzPriceListShortInfoDto => {
  return {
    ExternalId: source?.externalId,
    Id: source?.id,
    Name: source?.name,
    Type: source?.type === null ? undefined : apiPriceListTypeEnumAdapter(source?.type),
  };
}
