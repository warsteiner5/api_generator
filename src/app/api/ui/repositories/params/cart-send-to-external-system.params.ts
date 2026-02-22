import { CartSendToExternalSystem$Params } from '../../../swagger/fn/cart/cart-send-to-external-system';
import { CartToExternalSystem } from '../../models/cart-to-external-system.interface';
import { apiCartToExternalSystemDtoAdapter } from '../../adapters/models/api-cart-to-external-system-dto.adapter';

// @ts-ignore
export interface CartSendToExternalSystemParams {
  body?: CartToExternalSystem;
}

export function cartSendToExternalSystemAdapter(params?: CartSendToExternalSystemParams): CartSendToExternalSystem$Params {
  if (!params) {
    return {} as CartSendToExternalSystem$Params;
  }
  return {
      body: apiCartToExternalSystemDtoAdapter(params.body),
  };
}
