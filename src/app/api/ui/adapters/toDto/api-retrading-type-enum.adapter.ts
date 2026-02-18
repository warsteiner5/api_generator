import { RetradingTypeEnum } from '../../enums/retrading-type.enum';
import { ApiRetradingTypeEnum } from '../../../swagger/models/api-retrading-type-enum';

export function adaptApiRetradingTypeEnum(source?: RetradingTypeEnum | null): ApiRetradingTypeEnum {
  switch (source) {
    case RetradingTypeEnum.PrivateTrading:
      return ApiRetradingTypeEnum.PrivateTrading;
    case RetradingTypeEnum.PublicTrading:
      return ApiRetradingTypeEnum.PublicTrading;
    case RetradingTypeEnum.RatingTrading:
      return ApiRetradingTypeEnum.RatingTrading;
    default:
      throw new Error(`Enum value is not defined: RetradingTypeEnum=${String(source)}`);
  }
}
