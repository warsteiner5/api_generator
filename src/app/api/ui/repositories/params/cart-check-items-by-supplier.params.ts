import { CartCheckItemsBySupplier$Params } from '../../../swagger/fn/cart/cart-check-items-by-supplier';
import { ValueDtoOfBooleanAlt } from '../../models/value-dto-of-boolean-alt.interface';
import { adaptApiValueDtoOfBooleanAltDto } from '../../adapters/toDto/api-value-dto-of-boolean.adapter';

export interface CartCheckItemsBySupplierParams {
  cartId: string;
  supplierOrganizationId: number;
  body?: ValueDtoOfBooleanAlt;
}

export const cartCheckItemsBySupplierParamsAdapter = {
  adapt(params?: CartCheckItemsBySupplierParams): CartCheckItemsBySupplier$Params {
    if (!params) {
      return {} as CartCheckItemsBySupplier$Params;
    }
    return {
      cartId: params.cartId,
      supplierOrganizationId: params.supplierOrganizationId,
      body: adaptApiValueDtoOfBooleanAltDto(params.body),
    };
  }
};
