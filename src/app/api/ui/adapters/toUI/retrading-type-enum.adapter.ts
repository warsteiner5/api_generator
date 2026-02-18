import { ApiRetradingTypeEnum } from '../../../swagger/models/api-retrading-type-enum';
import { RetradingTypeEnum } from '../../enums/retrading-type.enum';

export function adaptRetradingTypeEnumToUI(source?: ApiRetradingTypeEnum | null): RetradingTypeEnum {
  switch (source) {
    case ApiRetradingTypeEnum.PrivateTrading:
      return RetradingTypeEnum.PrivateTrading;
    case ApiRetradingTypeEnum.PublicTrading:
      return RetradingTypeEnum.PublicTrading;
    case ApiRetradingTypeEnum.RatingTrading:
      return RetradingTypeEnum.RatingTrading;
    default:
      throw new Error(`Enum value is not defined: ApiRetradingTypeEnum=${String(source)}`);
  }
}
