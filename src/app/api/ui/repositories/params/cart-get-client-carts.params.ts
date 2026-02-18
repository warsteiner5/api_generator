import { CartGetClientCarts$Params } from '../../../swagger/fn/cart/cart-get-client-carts';

export interface CartGetClientCartsParams {
  clientSessionId?: string;
}

export const cartGetClientCartsParamsAdapter = {
  adapt(params?: CartGetClientCartsParams): CartGetClientCarts$Params {
    if (!params) {
      return {} as CartGetClientCarts$Params;
    }
    return {
      clientSessionId: params.clientSessionId,
    };
  }
};
