import { ExternalSystemToSendCart } from '../../models/external-system-to-send-cart.interface';
import { ApiExternalSystemToSendCartDto } from '../../../swagger/models/api-external-system-to-send-cart-dto';

export function adaptApiExternalSystemToSendCartDto(source?: ExternalSystemToSendCart | null): ApiExternalSystemToSendCartDto {
  return {
    ExternalSystemIdentityKey: source?.externalSystemIdentityKey,
    ExternalSystemName: source?.externalSystemName,
  };
}
