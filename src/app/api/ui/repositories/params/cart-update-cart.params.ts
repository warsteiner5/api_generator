import { CartPut } from '../../models/cart-put.interface';
import { CartUpdateCart$Params } from '../../../swagger/fn/cart/cart-update-cart';
import { apiCartPutDtoAdapter } from '../../adapters/models/api-cart-put-dto.adapter';

// @ts-ignore
export interface CartUpdateCartParams {
  id: string;
  body?: CartPut;
}

export function cartUpdateCartAdapter(params?: CartUpdateCartParams): CartUpdateCart$Params {
  if (!params) {
    return {} as CartUpdateCart$Params;
  }
  return {
      id: params.id,
      body: apiCartPutDtoAdapter(params.body),
  };
}
