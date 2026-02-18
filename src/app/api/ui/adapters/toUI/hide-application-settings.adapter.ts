import { ApiHideApplicationSettingsDto } from '../../../swagger/models/api-hide-application-settings-dto';
import { HideApplicationSettings } from '../../models/hide-application-settings.interface';
import { adaptHideApplicationSettingsForCustomerToUI } from './hide-application-settings-for-customer.adapter';
import { adaptHideApplicationSettingsForOpenPartToUI } from './hide-application-settings-for-open-part.adapter';
import { adaptHideApplicationSettingsForParticipantToUI } from './hide-application-settings-for-participant.adapter';

export function adaptHideApplicationSettingsToUI(source?: ApiHideApplicationSettingsDto | null): HideApplicationSettings {
  return {
    hideApplicationSettingsForCustomer: adaptHideApplicationSettingsForCustomerToUI(source?.HideApplicationSettingsForCustomer),
    hideApplicationSettingsForOpenPart: adaptHideApplicationSettingsForOpenPartToUI(source?.HideApplicationSettingsForOpenPart),
    hideApplicationSettingsForParticipant: adaptHideApplicationSettingsForParticipantToUI(source?.HideApplicationSettingsForParticipant),
  };
}
