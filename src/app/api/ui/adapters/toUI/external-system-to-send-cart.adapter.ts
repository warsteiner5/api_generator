import { ApiExternalSystemToSendCartDto } from '../../../swagger/models/api-external-system-to-send-cart-dto';
import { ExternalSystemToSendCart } from '../../models/external-system-to-send-cart.interface';

export function adaptExternalSystemToSendCartToUI(source?: ApiExternalSystemToSendCartDto | null): ExternalSystemToSendCart {
  return {
    externalSystemIdentityKey: source?.ExternalSystemIdentityKey ?? '',
    externalSystemName: source?.ExternalSystemName ?? '',
  };
}
