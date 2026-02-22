import { StarPurchaseTypeEnum } from '../../enums/star-purchase-type.enum';
import { ApiStarPurchaseTypeEnum } from '../../../swagger/models/api-star-purchase-type-enum';

export const apiStarPurchaseTypeEnumAdapter = (source?: StarPurchaseTypeEnum | null): ApiStarPurchaseTypeEnum => {
  switch (source) {
    case StarPurchaseTypeEnum.Trade:
      return ApiStarPurchaseTypeEnum.Trade;
    case StarPurchaseTypeEnum.QuotationSession:
      return ApiStarPurchaseTypeEnum.QuotationSession;
    default:
      throw new Error(`Enum value is not defined: StarPurchaseTypeEnum=${String(source)}`);
  }
}
