import { ApiTypeObjectPurchaseEnum } from '../../../swagger/models/api-type-object-purchase-enum';
import { TypeObjectPurchaseEnum } from '../../enums/type-object-purchase.enum';

export function adaptTypeObjectPurchaseEnumToUI(source?: ApiTypeObjectPurchaseEnum | null): TypeObjectPurchaseEnum {
  switch (source) {
    case ApiTypeObjectPurchaseEnum.Undefined:
      return TypeObjectPurchaseEnum.Undefined;
    case ApiTypeObjectPurchaseEnum.Product:
      return TypeObjectPurchaseEnum.Product;
    case ApiTypeObjectPurchaseEnum.Work:
      return TypeObjectPurchaseEnum.Work;
    case ApiTypeObjectPurchaseEnum.Service:
      return TypeObjectPurchaseEnum.Service;
    default:
      throw new Error(`Enum value is not defined: ApiTypeObjectPurchaseEnum=${String(source)}`);
  }
}
