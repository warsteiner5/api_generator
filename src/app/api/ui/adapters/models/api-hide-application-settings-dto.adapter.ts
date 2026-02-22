import { HideApplicationSettings } from '../../models/hide-application-settings.interface';
import { ApiHideApplicationSettingsDto } from '../../../swagger/models/api-hide-application-settings-dto';
import { apiHideApplicationSettingsForCustomerDtoAdapter } from './api-hide-application-settings-for-customer-dto.adapter';
import { apiHideApplicationSettingsForOpenPartDtoAdapter } from './api-hide-application-settings-for-open-part-dto.adapter';
import { apiHideApplicationSettingsForParticipantDtoAdapter } from './api-hide-application-settings-for-participant-dto.adapter';

export const apiHideApplicationSettingsDtoAdapter = (source?: HideApplicationSettings | null): ApiHideApplicationSettingsDto => {
  return {
    HideApplicationSettingsForCustomer: source?.hideApplicationSettingsForCustomer === null ? undefined : apiHideApplicationSettingsForCustomerDtoAdapter(source?.hideApplicationSettingsForCustomer),
    HideApplicationSettingsForOpenPart: source?.hideApplicationSettingsForOpenPart === null ? undefined : apiHideApplicationSettingsForOpenPartDtoAdapter(source?.hideApplicationSettingsForOpenPart),
    HideApplicationSettingsForParticipant: source?.hideApplicationSettingsForParticipant === null ? undefined : apiHideApplicationSettingsForParticipantDtoAdapter(source?.hideApplicationSettingsForParticipant),
  };
}
