import { ApiPriceListTypeEnum } from '../../../swagger/models/api-price-list-type-enum';
import { PriceListTypeEnum } from '../../enums/price-list-type.enum';

export function adaptPriceListTypeEnumToUI(source?: ApiPriceListTypeEnum | null): PriceListTypeEnum {
  switch (source) {
    case ApiPriceListTypeEnum.Empty:
      return PriceListTypeEnum.Empty;
    case ApiPriceListTypeEnum.Manual:
      return PriceListTypeEnum.Manual;
    case ApiPriceListTypeEnum.AutoUpdated:
      return PriceListTypeEnum.AutoUpdated;
    default:
      throw new Error(`Enum value is not defined: ApiPriceListTypeEnum=${String(source)}`);
  }
}
