import { HideApplicationSettings } from '../../models/hide-application-settings.interface';
import { ApiHideApplicationSettingsDto } from '../../../swagger/models/api-hide-application-settings-dto';
import { adaptApiHideApplicationSettingsForCustomerDto } from './api-hide-application-settings-for-customer-dto.adapter';
import { adaptApiHideApplicationSettingsForOpenPartDto } from './api-hide-application-settings-for-open-part-dto.adapter';
import { adaptApiHideApplicationSettingsForParticipantDto } from './api-hide-application-settings-for-participant-dto.adapter';

export function adaptApiHideApplicationSettingsDto(source?: HideApplicationSettings | null): ApiHideApplicationSettingsDto {
  return {
    HideApplicationSettingsForCustomer: adaptApiHideApplicationSettingsForCustomerDto(source?.hideApplicationSettingsForCustomer),
    HideApplicationSettingsForOpenPart: adaptApiHideApplicationSettingsForOpenPartDto(source?.hideApplicationSettingsForOpenPart),
    HideApplicationSettingsForParticipant: adaptApiHideApplicationSettingsForParticipantDto(source?.hideApplicationSettingsForParticipant),
  };
}
