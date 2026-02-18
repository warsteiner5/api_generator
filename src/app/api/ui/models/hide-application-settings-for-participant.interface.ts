import { HideApplicationDataForParticipantModeEnum } from '../enums/hide-application-data-for-participant-mode.enum';

export interface HideApplicationSettingsForParticipant {
  hideApplicationDataForParticipantMode: HideApplicationDataForParticipantModeEnum;
  hideForCertainMinutesBeforeEndFilingApplicationsForParticipant: number;
}
