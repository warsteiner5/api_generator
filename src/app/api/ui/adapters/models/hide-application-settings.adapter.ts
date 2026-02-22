import { ApiHideApplicationSettingsDto } from '../../../swagger/models/api-hide-application-settings-dto';
import { HideApplicationSettings } from '../../models/hide-application-settings.interface';
import { hideApplicationSettingsForCustomerAdapter } from './hide-application-settings-for-customer.adapter';
import { hideApplicationSettingsForOpenPartAdapter } from './hide-application-settings-for-open-part.adapter';
import { hideApplicationSettingsForParticipantAdapter } from './hide-application-settings-for-participant.adapter';

export const hideApplicationSettingsAdapter = (source?: ApiHideApplicationSettingsDto | null): HideApplicationSettings => {
  return {
    hideApplicationSettingsForCustomer: source?.HideApplicationSettingsForCustomer === null ? undefined : hideApplicationSettingsForCustomerAdapter(source?.HideApplicationSettingsForCustomer),
    hideApplicationSettingsForOpenPart: source?.HideApplicationSettingsForOpenPart === null ? undefined : hideApplicationSettingsForOpenPartAdapter(source?.HideApplicationSettingsForOpenPart),
    hideApplicationSettingsForParticipant: source?.HideApplicationSettingsForParticipant === null ? undefined : hideApplicationSettingsForParticipantAdapter(source?.HideApplicationSettingsForParticipant),
  };
}
