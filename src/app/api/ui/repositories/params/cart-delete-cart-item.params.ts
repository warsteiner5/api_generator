import { CartDeleteCartItem$Params } from '../../../swagger/fn/cart/cart-delete-cart-item';

// @ts-ignore
export interface CartDeleteCartItemParams {
  id: string;
}

export function cartDeleteCartItemAdapter(params?: CartDeleteCartItemParams): CartDeleteCartItem$Params {
  if (!params) {
    return {} as CartDeleteCartItem$Params;
  }
  return {
      id: params.id,
  };
}
