import { HideApplicationDataForParticipantModeEnum } from '../../enums/hide-application-data-for-participant-mode.enum';
import { ApiHideApplicationDataForParticipantModeEnum } from '../../../swagger/models/api-hide-application-data-for-participant-mode-enum';

export const apiHideApplicationDataForParticipantModeEnumAdapter = (source?: HideApplicationDataForParticipantModeEnum | null): ApiHideApplicationDataForParticipantModeEnum => {
  switch (source) {
    case HideApplicationDataForParticipantModeEnum.DoNotHide:
      return ApiHideApplicationDataForParticipantModeEnum.DoNotHide;
    case HideApplicationDataForParticipantModeEnum.HideBeforeEndFilingApplications:
      return ApiHideApplicationDataForParticipantModeEnum.HideBeforeEndFilingApplications;
    case HideApplicationDataForParticipantModeEnum.HideBeforeConclusionContract:
      return ApiHideApplicationDataForParticipantModeEnum.HideBeforeConclusionContract;
    case HideApplicationDataForParticipantModeEnum.HideForCertainMinutesBeforeEndFilingApplications:
      return ApiHideApplicationDataForParticipantModeEnum.HideForCertainMinutesBeforeEndFilingApplications;
    case HideApplicationDataForParticipantModeEnum.HideAlways:
      return ApiHideApplicationDataForParticipantModeEnum.HideAlways;
    default:
      throw new Error(`Enum value is not defined: HideApplicationDataForParticipantModeEnum=${String(source)}`);
  }
}
