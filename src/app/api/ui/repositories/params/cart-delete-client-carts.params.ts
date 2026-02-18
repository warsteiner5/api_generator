import { CartDeleteClientCarts$Params } from '../../../swagger/fn/cart/cart-delete-client-carts';
import { CartItemIdList } from '../../models/cart-item-id-list.interface';
import { adaptApiCartItemIdListDto } from '../../adapters/toDto/api-cart-item-id-list-dto.adapter';

export interface CartDeleteClientCartsParams {
  body?: CartItemIdList;
}

export const cartDeleteClientCartsParamsAdapter = {
  adapt(params?: CartDeleteClientCartsParams): CartDeleteClientCarts$Params {
    if (!params) {
      return {} as CartDeleteClientCarts$Params;
    }
    return {
      body: adaptApiCartItemIdListDto(params.body),
    };
  }
};
