import { PriceListTypeEnum } from '../../enums/price-list-type.enum';
import { ApiPriceListTypeEnum } from '../../../swagger/models/api-price-list-type-enum';

export const apiPriceListTypeEnumAdapter = (source?: PriceListTypeEnum | null): ApiPriceListTypeEnum => {
  switch (source) {
    case PriceListTypeEnum.Empty:
      return ApiPriceListTypeEnum.Empty;
    case PriceListTypeEnum.Manual:
      return ApiPriceListTypeEnum.Manual;
    case PriceListTypeEnum.AutoUpdated:
      return ApiPriceListTypeEnum.AutoUpdated;
    default:
      throw new Error(`Enum value is not defined: PriceListTypeEnum=${String(source)}`);
  }
}
