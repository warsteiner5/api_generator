import { CartItemPut } from '../../models/cart-item-put.interface';
import { CartUpdateCartItem$Params } from '../../../swagger/fn/cart/cart-update-cart-item';
import { apiCartItemPutDtoAdapter } from '../../adapters/models/api-cart-item-put-dto.adapter';

// @ts-ignore
export interface CartUpdateCartItemParams {
  id: string;
  body?: CartItemPut;
}

export function cartUpdateCartItemAdapter(params?: CartUpdateCartItemParams): CartUpdateCartItem$Params {
  if (!params) {
    return {} as CartUpdateCartItem$Params;
  }
  return {
      id: params.id,
      body: apiCartItemPutDtoAdapter(params.body),
  };
}
