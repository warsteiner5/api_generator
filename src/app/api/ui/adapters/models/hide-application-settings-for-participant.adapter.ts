import { ApiHideApplicationSettingsForParticipantDto } from '../../../swagger/models/api-hide-application-settings-for-participant-dto';
import { HideApplicationSettingsForParticipant } from '../../models/hide-application-settings-for-participant.interface';
import { hideApplicationDataForParticipantModeEnumAdapter } from '../enums/hide-application-data-for-participant-mode-enum.adapter';

export const hideApplicationSettingsForParticipantAdapter = (source?: ApiHideApplicationSettingsForParticipantDto | null): HideApplicationSettingsForParticipant => {
  return {
    hideApplicationDataForParticipantMode: source?.HideApplicationDataForParticipantMode === null ? undefined : hideApplicationDataForParticipantModeEnumAdapter(source?.HideApplicationDataForParticipantMode),
    hideForCertainMinutesBeforeEndFilingApplicationsForParticipant: source?.HideForCertainMinutesBeforeEndFilingApplicationsForParticipant,
  };
}
