import { CartPutItemsBySupplier$Params } from '../../../swagger/fn/cart/cart-put-items-by-supplier';
import { CartSupplierPut } from '../../models/cart-supplier-put.interface';
import { adaptApiCartSupplierPutDto } from '../../adapters/toDto/api-cart-supplier-put-dto.adapter';

export interface CartPutItemsBySupplierParams {
  cartId: string;
  supplierOrganizationId: number;
  body?: CartSupplierPut;
}

export const cartPutItemsBySupplierParamsAdapter = {
  adapt(params?: CartPutItemsBySupplierParams): CartPutItemsBySupplier$Params {
    if (!params) {
      return {} as CartPutItemsBySupplier$Params;
    }
    return {
      cartId: params.cartId,
      supplierOrganizationId: params.supplierOrganizationId,
      body: adaptApiCartSupplierPutDto(params.body),
    };
  }
};
