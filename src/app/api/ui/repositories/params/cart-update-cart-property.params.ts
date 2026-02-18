import { CartUpdateCartProperty$Params } from '../../../swagger/fn/cart/cart-update-cart-property';
import { ValueDtoOfStringAlt } from '../../models/value-dto-of-string-alt.interface';
import { adaptApiValueDtoOfStringAltDto } from '../../adapters/toDto/api-value-dto-of-string.adapter';

export interface CartUpdateCartPropertyParams {
  id: string;
  propertyName: string;
  body?: ValueDtoOfStringAlt;
}

export const cartUpdateCartPropertyParamsAdapter = {
  adapt(params?: CartUpdateCartPropertyParams): CartUpdateCartProperty$Params {
    if (!params) {
      return {} as CartUpdateCartProperty$Params;
    }
    return {
      id: params.id,
      propertyName: params.propertyName,
      body: adaptApiValueDtoOfStringAltDto(params.body),
    };
  }
};
