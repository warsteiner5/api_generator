import { ApiHideApplicationSettingsForParticipantDto } from '../../../swagger/models/api-hide-application-settings-for-participant-dto';
import { HideApplicationSettingsForParticipant } from '../../models/hide-application-settings-for-participant.interface';
import { adaptHideApplicationDataForParticipantModeEnumToUI } from './hide-application-data-for-participant-mode-enum.adapter';

export function adaptHideApplicationSettingsForParticipantToUI(source?: ApiHideApplicationSettingsForParticipantDto | null): HideApplicationSettingsForParticipant {
  return {
    hideApplicationDataForParticipantMode: adaptHideApplicationDataForParticipantModeEnumToUI(source?.HideApplicationDataForParticipantMode),
    hideForCertainMinutesBeforeEndFilingApplicationsForParticipant: source?.HideForCertainMinutesBeforeEndFilingApplicationsForParticipant ?? 0,
  };
}
