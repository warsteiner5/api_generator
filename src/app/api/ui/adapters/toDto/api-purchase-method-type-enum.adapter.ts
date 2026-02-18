import { PurchaseMethodTypeEnum } from '../../enums/purchase-method-type.enum';
import { ApiPurchaseMethodTypeEnum } from '../../../swagger/models/api-purchase-method-type-enum';

export function adaptApiPurchaseMethodTypeEnum(source?: PurchaseMethodTypeEnum | null): ApiPurchaseMethodTypeEnum {
  switch (source) {
    case PurchaseMethodTypeEnum.PriceRequest:
      return ApiPurchaseMethodTypeEnum.PriceRequest;
    case PurchaseMethodTypeEnum.SingleSupplier:
      return ApiPurchaseMethodTypeEnum.SingleSupplier;
    case PurchaseMethodTypeEnum.QuotationSession:
      return ApiPurchaseMethodTypeEnum.QuotationSession;
    default:
      throw new Error(`Enum value is not defined: PurchaseMethodTypeEnum=${String(source)}`);
  }
}
