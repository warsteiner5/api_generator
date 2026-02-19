import { CartUpdateCartItemProperty$Params } from '../../../swagger/fn/cart/cart-update-cart-item-property';
import { ValueDtoOfString } from '../../models/value-dto-of-string.interface';
import { adaptApiValueDtoOfString } from '../../adapters/toDto/api-value-dto-of-string.adapter';

export interface CartUpdateCartItemPropertyParams {
  cartItemid: string;
  propertyName: string;
  body?: ValueDtoOfString;
}

export const cartUpdateCartItemPropertyParamsAdapter = {
  adapt(params?: CartUpdateCartItemPropertyParams): CartUpdateCartItemProperty$Params {
    if (!params) {
      return {} as CartUpdateCartItemProperty$Params;
    }
    return {
      cartItemid: params.cartItemid,
      propertyName: params.propertyName,
      body: adaptApiValueDtoOfString(params.body),
    };
  }
};
