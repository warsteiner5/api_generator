import { CartPut } from '../../models/cart-put.interface';
import { CartUpdateCart$Params } from '../../../swagger/fn/cart/cart-update-cart';
import { adaptApiCartPutDto } from '../../adapters/toDto/api-cart-put-dto.adapter';

export interface CartUpdateCartParams {
  id: string;
  body?: CartPut;
}

export const cartUpdateCartParamsAdapter = {
  adapt(params?: CartUpdateCartParams): CartUpdateCart$Params {
    if (!params) {
      return {} as CartUpdateCart$Params;
    }
    return {
      id: params.id,
      body: adaptApiCartPutDto(params.body),
    };
  }
};
