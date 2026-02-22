import { ApiPurchaseMethodTypeEnum } from '../../../swagger/models/api-purchase-method-type-enum';
import { PurchaseMethodTypeEnum } from '../../enums/purchase-method-type.enum';

export const purchaseMethodTypeEnumAdapter = (source?: ApiPurchaseMethodTypeEnum | null): PurchaseMethodTypeEnum => {
  switch (source) {
    case ApiPurchaseMethodTypeEnum.PriceRequest:
      return PurchaseMethodTypeEnum.PriceRequest;
    case ApiPurchaseMethodTypeEnum.SingleSupplier:
      return PurchaseMethodTypeEnum.SingleSupplier;
    case ApiPurchaseMethodTypeEnum.QuotationSession:
      return PurchaseMethodTypeEnum.QuotationSession;
    default:
      throw new Error(`Enum value is not defined: ApiPurchaseMethodTypeEnum=${String(source)}`);
  }
}
