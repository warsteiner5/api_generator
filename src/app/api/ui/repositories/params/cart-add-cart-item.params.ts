import { CartAddCartItem$Params } from '../../../swagger/fn/cart/cart-add-cart-item';
import { CartItemBinding } from '../../models/cart-item-binding.interface';
import { adaptApiCartItemBindingDto } from '../../adapters/toDto/api-cart-item-binding-dto.adapter';

export interface CartAddCartItemParams {
  clientSessionId?: string;
  body?: CartItemBinding;
}

export const cartAddCartItemParamsAdapter = {
  adapt(params?: CartAddCartItemParams): CartAddCartItem$Params {
    if (!params) {
      return {} as CartAddCartItem$Params;
    }
    return {
      clientSessionId: params.clientSessionId,
      body: adaptApiCartItemBindingDto(params.body),
    };
  }
};
