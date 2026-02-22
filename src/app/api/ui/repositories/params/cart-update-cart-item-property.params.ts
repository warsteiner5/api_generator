import { CartUpdateCartItemProperty$Params } from '../../../swagger/fn/cart/cart-update-cart-item-property';
import { ValueDtoOfString } from '../../models/value-dto-of-string.interface';
import { apiValueDtoOfStringAdapter } from '../../adapters/models/api-value-dto-of-string.adapter';

// @ts-ignore
export interface CartUpdateCartItemPropertyParams {
  cartItemid: string;
  propertyName: string;
  body?: ValueDtoOfString;
}

export function cartUpdateCartItemPropertyAdapter(params?: CartUpdateCartItemPropertyParams): CartUpdateCartItemProperty$Params {
  if (!params) {
    return {} as CartUpdateCartItemProperty$Params;
  }
  return {
      cartItemid: params.cartItemid,
      propertyName: params.propertyName,
      body: apiValueDtoOfStringAdapter(params.body),
  };
}
