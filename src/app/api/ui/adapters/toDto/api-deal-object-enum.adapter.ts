import { DealObjectEnum } from '../../enums/deal-object.enum';
import { ApiDealObjectEnum } from '../../../swagger/models/api-deal-object-enum';

export function adaptApiDealObjectEnum(source?: DealObjectEnum | null): ApiDealObjectEnum {
  switch (source) {
    case DealObjectEnum.Trade:
      return ApiDealObjectEnum.Trade;
    case DealObjectEnum.Order:
      return ApiDealObjectEnum.Order;
    default:
      throw new Error(`Enum value is not defined: DealObjectEnum=${String(source)}`);
  }
}
