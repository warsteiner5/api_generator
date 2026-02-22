import { ExternalSystemsSettings } from '../../models/external-systems-settings.interface';
import { ApiExternalSystemsSettingsDto } from '../../../swagger/models/api-external-systems-settings-dto';
import { apiExternalSystemToSendCartDtoAdapter } from './api-external-system-to-send-cart-dto.adapter';

export const apiExternalSystemsSettingsDtoAdapter = (source?: ExternalSystemsSettings | null): ApiExternalSystemsSettingsDto => {
  return {
    ExternalSystemsToSendCart: source?.externalSystemsToSendCart?.map((item) => apiExternalSystemToSendCartDtoAdapter(item)),
    IsSendCartToExternalSystemsEnabled: source?.isSendCartToExternalSystemsEnabled,
  };
}
