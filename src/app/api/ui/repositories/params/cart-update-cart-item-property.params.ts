import { CartUpdateCartItemProperty$Params } from '../../../swagger/fn/cart/cart-update-cart-item-property';
import { ValueDtoOfStringAlt } from '../../models/value-dto-of-string-alt.interface';
import { adaptApiValueDtoOfStringAltDto } from '../../adapters/toDto/api-value-dto-of-string.adapter';

export interface CartUpdateCartItemPropertyParams {
  cartItemid: string;
  propertyName: string;
  body?: ValueDtoOfStringAlt;
}

export const cartUpdateCartItemPropertyParamsAdapter = {
  adapt(params?: CartUpdateCartItemPropertyParams): CartUpdateCartItemProperty$Params {
    if (!params) {
      return {} as CartUpdateCartItemProperty$Params;
    }
    return {
      cartItemid: params.cartItemid,
      propertyName: params.propertyName,
      body: adaptApiValueDtoOfStringAltDto(params.body),
    };
  }
};
