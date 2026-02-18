import { HideApplicationSettingsForCustomer } from './hide-application-settings-for-customer.interface';
import { HideApplicationSettingsForOpenPart } from './hide-application-settings-for-open-part.interface';
import { HideApplicationSettingsForParticipant } from './hide-application-settings-for-participant.interface';

export interface HideApplicationSettings {
  hideApplicationSettingsForCustomer: HideApplicationSettingsForCustomer;
  hideApplicationSettingsForOpenPart: HideApplicationSettingsForOpenPart;
  hideApplicationSettingsForParticipant: HideApplicationSettingsForParticipant;
}
