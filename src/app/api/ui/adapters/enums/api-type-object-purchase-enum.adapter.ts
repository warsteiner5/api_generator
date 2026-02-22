import { TypeObjectPurchaseEnum } from '../../enums/type-object-purchase.enum';
import { ApiTypeObjectPurchaseEnum } from '../../../swagger/models/api-type-object-purchase-enum';

export const apiTypeObjectPurchaseEnumAdapter = (source?: TypeObjectPurchaseEnum | null): ApiTypeObjectPurchaseEnum => {
  switch (source) {
    case TypeObjectPurchaseEnum.Undefined:
      return ApiTypeObjectPurchaseEnum.Undefined;
    case TypeObjectPurchaseEnum.Product:
      return ApiTypeObjectPurchaseEnum.Product;
    case TypeObjectPurchaseEnum.Work:
      return ApiTypeObjectPurchaseEnum.Work;
    case TypeObjectPurchaseEnum.Service:
      return ApiTypeObjectPurchaseEnum.Service;
    default:
      throw new Error(`Enum value is not defined: TypeObjectPurchaseEnum=${String(source)}`);
  }
}
