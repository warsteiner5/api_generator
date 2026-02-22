import { HideApplicationDataForParticipantModeEnum } from '../enums/hide-application-data-for-participant-mode.enum';

// @ts-ignore
export interface HideApplicationSettingsForParticipant {
  hideApplicationDataForParticipantMode: HideApplicationDataForParticipantModeEnum;
  hideForCertainMinutesBeforeEndFilingApplicationsForParticipant: number;
}
