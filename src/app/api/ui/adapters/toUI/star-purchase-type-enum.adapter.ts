import { ApiStarPurchaseTypeEnum } from '../../../swagger/models/api-star-purchase-type-enum';
import { StarPurchaseTypeEnum } from '../../enums/star-purchase-type.enum';

export function adaptStarPurchaseTypeEnumToUI(source?: ApiStarPurchaseTypeEnum | null): StarPurchaseTypeEnum {
  switch (source) {
    case ApiStarPurchaseTypeEnum.Trade:
      return StarPurchaseTypeEnum.Trade;
    case ApiStarPurchaseTypeEnum.QuotationSession:
      return StarPurchaseTypeEnum.QuotationSession;
    default:
      throw new Error(`Enum value is not defined: ApiStarPurchaseTypeEnum=${String(source)}`);
  }
}
