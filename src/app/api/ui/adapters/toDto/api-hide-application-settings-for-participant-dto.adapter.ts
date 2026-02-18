import { HideApplicationSettingsForParticipant } from '../../models/hide-application-settings-for-participant.interface';
import { ApiHideApplicationSettingsForParticipantDto } from '../../../swagger/models/api-hide-application-settings-for-participant-dto';
import { adaptApiHideApplicationDataForParticipantModeEnum } from './api-hide-application-data-for-participant-mode-enum.adapter';

export function adaptApiHideApplicationSettingsForParticipantDto(source?: HideApplicationSettingsForParticipant | null): ApiHideApplicationSettingsForParticipantDto {
  return {
    HideApplicationDataForParticipantMode: adaptApiHideApplicationDataForParticipantModeEnum(source?.hideApplicationDataForParticipantMode),
    HideForCertainMinutesBeforeEndFilingApplicationsForParticipant: source?.hideForCertainMinutesBeforeEndFilingApplicationsForParticipant,
  };
}
