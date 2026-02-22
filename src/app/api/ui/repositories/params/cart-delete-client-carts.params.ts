import { CartDeleteClientCarts$Params } from '../../../swagger/fn/cart/cart-delete-client-carts';
import { CartItemIdList } from '../../models/cart-item-id-list.interface';
import { apiCartItemIdListDtoAdapter } from '../../adapters/models/api-cart-item-id-list-dto.adapter';

// @ts-ignore
export interface CartDeleteClientCartsParams {
  body?: CartItemIdList;
}

export function cartDeleteClientCartsAdapter(params?: CartDeleteClientCartsParams): CartDeleteClientCarts$Params {
  if (!params) {
    return {} as CartDeleteClientCarts$Params;
  }
  return {
      body: apiCartItemIdListDtoAdapter(params.body),
  };
}
