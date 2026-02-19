import { CartCheckItemsBySupplier$Params } from '../../../swagger/fn/cart/cart-check-items-by-supplier';
import { ValueDtoOfBoolean } from '../../models/value-dto-of-boolean.interface';
import { adaptApiValueDtoOfBoolean } from '../../adapters/toDto/api-value-dto-of-boolean.adapter';

export interface CartCheckItemsBySupplierParams {
  cartId: string;
  supplierOrganizationId: number;
  body?: ValueDtoOfBoolean;
}

export const cartCheckItemsBySupplierParamsAdapter = {
  adapt(params?: CartCheckItemsBySupplierParams): CartCheckItemsBySupplier$Params {
    if (!params) {
      return {} as CartCheckItemsBySupplier$Params;
    }
    return {
      cartId: params.cartId,
      supplierOrganizationId: params.supplierOrganizationId,
      body: adaptApiValueDtoOfBoolean(params.body),
    };
  }
};
