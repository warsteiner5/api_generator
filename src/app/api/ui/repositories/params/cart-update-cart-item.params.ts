import { CartItemPut } from '../../models/cart-item-put.interface';
import { CartUpdateCartItem$Params } from '../../../swagger/fn/cart/cart-update-cart-item';
import { adaptApiCartItemPutDto } from '../../adapters/toDto/api-cart-item-put-dto.adapter';

export interface CartUpdateCartItemParams {
  id: string;
  body?: CartItemPut;
}

export const cartUpdateCartItemParamsAdapter = {
  adapt(params?: CartUpdateCartItemParams): CartUpdateCartItem$Params {
    if (!params) {
      return {} as CartUpdateCartItem$Params;
    }
    return {
      id: params.id,
      body: adaptApiCartItemPutDto(params.body),
    };
  }
};
