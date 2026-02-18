import { CartToExternalSystem } from '../../models/cart-to-external-system.interface';
import { ApiCartToExternalSystemDto } from '../../../swagger/models/api-cart-to-external-system-dto';

export function adaptApiCartToExternalSystemDto(source?: CartToExternalSystem | null): ApiCartToExternalSystemDto {
  return {
    CartId: source?.cartId,
    CartItemIds: source?.cartItemIds ?? [],
    ExternalSystemIdentityKey: source?.externalSystemIdentityKey,
  };
}
