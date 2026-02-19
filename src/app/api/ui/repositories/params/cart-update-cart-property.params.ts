import { CartUpdateCartProperty$Params } from '../../../swagger/fn/cart/cart-update-cart-property';
import { ValueDtoOfString } from '../../models/value-dto-of-string.interface';
import { adaptApiValueDtoOfString } from '../../adapters/toDto/api-value-dto-of-string.adapter';

export interface CartUpdateCartPropertyParams {
  id: string;
  propertyName: string;
  body?: ValueDtoOfString;
}

export const cartUpdateCartPropertyParamsAdapter = {
  adapt(params?: CartUpdateCartPropertyParams): CartUpdateCartProperty$Params {
    if (!params) {
      return {} as CartUpdateCartProperty$Params;
    }
    return {
      id: params.id,
      propertyName: params.propertyName,
      body: adaptApiValueDtoOfString(params.body),
    };
  }
};
