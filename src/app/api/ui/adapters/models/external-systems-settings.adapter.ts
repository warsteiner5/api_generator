import { ApiExternalSystemsSettingsDto } from '../../../swagger/models/api-external-systems-settings-dto';
import { ExternalSystemsSettings } from '../../models/external-systems-settings.interface';
import { externalSystemToSendCartAdapter } from './external-system-to-send-cart.adapter';

export const externalSystemsSettingsAdapter = (source?: ApiExternalSystemsSettingsDto | null): ExternalSystemsSettings => {
  return {
    externalSystemsToSendCart: source?.ExternalSystemsToSendCart?.map((item) => externalSystemToSendCartAdapter(item)),
    isSendCartToExternalSystemsEnabled: source?.IsSendCartToExternalSystemsEnabled,
  };
}
