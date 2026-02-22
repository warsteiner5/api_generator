import { CartCheckItemsBySupplier$Params } from '../../../swagger/fn/cart/cart-check-items-by-supplier';
import { ValueDtoOfBoolean } from '../../models/value-dto-of-boolean.interface';
import { apiValueDtoOfBooleanAdapter } from '../../adapters/models/api-value-dto-of-boolean.adapter';

// @ts-ignore
export interface CartCheckItemsBySupplierParams {
  cartId: string;
  supplierOrganizationId: number;
  body?: ValueDtoOfBoolean;
}

export function cartCheckItemsBySupplierAdapter(params?: CartCheckItemsBySupplierParams): CartCheckItemsBySupplier$Params {
  if (!params) {
    return {} as CartCheckItemsBySupplier$Params;
  }
  return {
      cartId: params.cartId,
      supplierOrganizationId: params.supplierOrganizationId,
      body: apiValueDtoOfBooleanAdapter(params.body),
  };
}
