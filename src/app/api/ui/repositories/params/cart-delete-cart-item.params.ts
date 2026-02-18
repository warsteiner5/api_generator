import { CartDeleteCartItem$Params } from '../../../swagger/fn/cart/cart-delete-cart-item';

export interface CartDeleteCartItemParams {
  id: string;
}

export const cartDeleteCartItemParamsAdapter = {
  adapt(params?: CartDeleteCartItemParams): CartDeleteCartItem$Params {
    if (!params) {
      return {} as CartDeleteCartItem$Params;
    }
    return {
      id: params.id,
    };
  }
};
