import { MzPriceListShortInfo } from '../../models/mz-price-list-short-info.interface';
import { ApiMzPriceListShortInfoDto } from '../../../swagger/models/api-mz-price-list-short-info-dto';
import { adaptApiPriceListTypeEnum } from './api-price-list-type-enum.adapter';

export function adaptApiMzPriceListShortInfoDto(source?: MzPriceListShortInfo | null): ApiMzPriceListShortInfoDto {
  return {
    ExternalId: source?.externalId,
    Id: source?.id,
    Name: source?.name,
    Type: adaptApiPriceListTypeEnum(source?.type),
  };
}
