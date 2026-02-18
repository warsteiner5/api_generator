import { CartSendToExternalSystem$Params } from '../../../swagger/fn/cart/cart-send-to-external-system';
import { CartToExternalSystem } from '../../models/cart-to-external-system.interface';
import { adaptApiCartToExternalSystemDto } from '../../adapters/toDto/api-cart-to-external-system-dto.adapter';

export interface CartSendToExternalSystemParams {
  body?: CartToExternalSystem;
}

export const cartSendToExternalSystemParamsAdapter = {
  adapt(params?: CartSendToExternalSystemParams): CartSendToExternalSystem$Params {
    if (!params) {
      return {} as CartSendToExternalSystem$Params;
    }
    return {
      body: adaptApiCartToExternalSystemDto(params.body),
    };
  }
};
