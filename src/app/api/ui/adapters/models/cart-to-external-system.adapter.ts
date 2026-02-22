import { ApiCartToExternalSystemDto } from '../../../swagger/models/api-cart-to-external-system-dto';
import { CartToExternalSystem } from '../../models/cart-to-external-system.interface';

export const cartToExternalSystemAdapter = (source?: ApiCartToExternalSystemDto | null): CartToExternalSystem => {
  return {
    cartId: source?.CartId,
    cartItemIds: source?.CartItemIds,
    externalSystemIdentityKey: source?.ExternalSystemIdentityKey,
  };
}
