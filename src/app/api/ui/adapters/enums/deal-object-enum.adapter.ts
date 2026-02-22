import { ApiDealObjectEnum } from '../../../swagger/models/api-deal-object-enum';
import { DealObjectEnum } from '../../enums/deal-object.enum';

export const dealObjectEnumAdapter = (source?: ApiDealObjectEnum | null): DealObjectEnum => {
  switch (source) {
    case ApiDealObjectEnum.Trade:
      return DealObjectEnum.Trade;
    case ApiDealObjectEnum.Order:
      return DealObjectEnum.Order;
    default:
      throw new Error(`Enum value is not defined: ApiDealObjectEnum=${String(source)}`);
  }
}
