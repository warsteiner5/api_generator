import { CartAddCartItem$Params } from '../../../swagger/fn/cart/cart-add-cart-item';
import { CartItemBinding } from '../../models/cart-item-binding.interface';
import { apiCartItemBindingDtoAdapter } from '../../adapters/models/api-cart-item-binding-dto.adapter';

// @ts-ignore
export interface CartAddCartItemParams {
  clientSessionId?: string;
  body?: CartItemBinding;
}

export function cartAddCartItemAdapter(params?: CartAddCartItemParams): CartAddCartItem$Params {
  if (!params) {
    return {} as CartAddCartItem$Params;
  }
  return {
      clientSessionId: params.clientSessionId,
      body: apiCartItemBindingDtoAdapter(params.body),
  };
}
