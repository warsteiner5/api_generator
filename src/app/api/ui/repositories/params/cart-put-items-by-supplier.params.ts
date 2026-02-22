import { CartPutItemsBySupplier$Params } from '../../../swagger/fn/cart/cart-put-items-by-supplier';
import { CartSupplierPut } from '../../models/cart-supplier-put.interface';
import { apiCartSupplierPutDtoAdapter } from '../../adapters/models/api-cart-supplier-put-dto.adapter';

// @ts-ignore
export interface CartPutItemsBySupplierParams {
  cartId: string;
  supplierOrganizationId: number;
  body?: CartSupplierPut;
}

export function cartPutItemsBySupplierAdapter(params?: CartPutItemsBySupplierParams): CartPutItemsBySupplier$Params {
  if (!params) {
    return {} as CartPutItemsBySupplier$Params;
  }
  return {
      cartId: params.cartId,
      supplierOrganizationId: params.supplierOrganizationId,
      body: apiCartSupplierPutDtoAdapter(params.body),
  };
}
