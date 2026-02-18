/* tslint:disable */
/* eslint-disable */
import { ApiHideApplicationDataForParticipantModeEnum } from '../models/api-hide-application-data-for-participant-mode-enum';
export interface ApiHideApplicationSettingsForParticipantDto {
  HideApplicationDataForParticipantMode?: ApiHideApplicationDataForParticipantModeEnum;
  HideForCertainMinutesBeforeEndFilingApplicationsForParticipant?: number | null;
}
