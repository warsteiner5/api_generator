import { PriceTypesEnum } from '../../enums/price-types.enum';
import { ApiPriceTypesEnum } from '../../../swagger/models/api-price-types-enum';

export function adaptApiPriceTypesEnum(source?: PriceTypesEnum | null): ApiPriceTypesEnum {
  switch (source) {
    case PriceTypesEnum.Common:
      return ApiPriceTypesEnum.Common;
    default:
      throw new Error(`Enum value is not defined: PriceTypesEnum=${String(source)}`);
  }
}
