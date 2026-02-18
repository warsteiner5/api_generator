import { ApiPriceTypesEnum } from '../../../swagger/models/api-price-types-enum';
import { PriceTypesEnum } from '../../enums/price-types.enum';

export function adaptPriceTypesEnumToUI(source?: ApiPriceTypesEnum | null): PriceTypesEnum {
  switch (source) {
    case ApiPriceTypesEnum.Common:
      return PriceTypesEnum.Common;
    default:
      throw new Error(`Enum value is not defined: ApiPriceTypesEnum=${String(source)}`);
  }
}
