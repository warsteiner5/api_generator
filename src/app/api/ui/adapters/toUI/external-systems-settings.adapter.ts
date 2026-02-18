import { ApiExternalSystemsSettingsDto } from '../../../swagger/models/api-external-systems-settings-dto';
import { ExternalSystemsSettings } from '../../models/external-systems-settings.interface';
import { adaptExternalSystemToSendCartToUI } from './external-system-to-send-cart.adapter';

export function adaptExternalSystemsSettingsToUI(source?: ApiExternalSystemsSettingsDto | null): ExternalSystemsSettings {
  return {
    externalSystemsToSendCart: (source?.ExternalSystemsToSendCart ?? []).map((item) => adaptExternalSystemToSendCartToUI(item)),
    isSendCartToExternalSystemsEnabled: source?.IsSendCartToExternalSystemsEnabled ?? false,
  };
}
