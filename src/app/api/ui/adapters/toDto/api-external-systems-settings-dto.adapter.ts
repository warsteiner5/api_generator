import { ExternalSystemsSettings } from '../../models/external-systems-settings.interface';
import { ApiExternalSystemsSettingsDto } from '../../../swagger/models/api-external-systems-settings-dto';
import { adaptApiExternalSystemToSendCartDto } from './api-external-system-to-send-cart-dto.adapter';

export function adaptApiExternalSystemsSettingsDto(source?: ExternalSystemsSettings | null): ApiExternalSystemsSettingsDto {
  return {
    ExternalSystemsToSendCart: (source?.externalSystemsToSendCart ?? []).map((item) => adaptApiExternalSystemToSendCartDto(item)),
    IsSendCartToExternalSystemsEnabled: source?.isSendCartToExternalSystemsEnabled,
  };
}
