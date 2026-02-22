import { HideApplicationSettingsForParticipant } from '../../models/hide-application-settings-for-participant.interface';
import { ApiHideApplicationSettingsForParticipantDto } from '../../../swagger/models/api-hide-application-settings-for-participant-dto';
import { apiHideApplicationDataForParticipantModeEnumAdapter } from '../enums/api-hide-application-data-for-participant-mode-enum.adapter';

export const apiHideApplicationSettingsForParticipantDtoAdapter = (source?: HideApplicationSettingsForParticipant | null): ApiHideApplicationSettingsForParticipantDto => {
  return {
    HideApplicationDataForParticipantMode: source?.hideApplicationDataForParticipantMode === null ? undefined : apiHideApplicationDataForParticipantModeEnumAdapter(source?.hideApplicationDataForParticipantMode),
    HideForCertainMinutesBeforeEndFilingApplicationsForParticipant: source?.hideForCertainMinutesBeforeEndFilingApplicationsForParticipant,
  };
}
