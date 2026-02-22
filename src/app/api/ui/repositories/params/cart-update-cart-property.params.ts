import { CartUpdateCartProperty$Params } from '../../../swagger/fn/cart/cart-update-cart-property';
import { ValueDtoOfString } from '../../models/value-dto-of-string.interface';
import { apiValueDtoOfStringAdapter } from '../../adapters/models/api-value-dto-of-string.adapter';

// @ts-ignore
export interface CartUpdateCartPropertyParams {
  id: string;
  propertyName: string;
  body?: ValueDtoOfString;
}

export function cartUpdateCartPropertyAdapter(params?: CartUpdateCartPropertyParams): CartUpdateCartProperty$Params {
  if (!params) {
    return {} as CartUpdateCartProperty$Params;
  }
  return {
      id: params.id,
      propertyName: params.propertyName,
      body: apiValueDtoOfStringAdapter(params.body),
  };
}
