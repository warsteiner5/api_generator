import { ApiHideApplicationDataForParticipantModeEnum } from '../../../swagger/models/api-hide-application-data-for-participant-mode-enum';
import { HideApplicationDataForParticipantModeEnum } from '../../enums/hide-application-data-for-participant-mode.enum';

export const hideApplicationDataForParticipantModeEnumAdapter = (source?: ApiHideApplicationDataForParticipantModeEnum | null): HideApplicationDataForParticipantModeEnum => {
  switch (source) {
    case ApiHideApplicationDataForParticipantModeEnum.DoNotHide:
      return HideApplicationDataForParticipantModeEnum.DoNotHide;
    case ApiHideApplicationDataForParticipantModeEnum.HideBeforeEndFilingApplications:
      return HideApplicationDataForParticipantModeEnum.HideBeforeEndFilingApplications;
    case ApiHideApplicationDataForParticipantModeEnum.HideBeforeConclusionContract:
      return HideApplicationDataForParticipantModeEnum.HideBeforeConclusionContract;
    case ApiHideApplicationDataForParticipantModeEnum.HideForCertainMinutesBeforeEndFilingApplications:
      return HideApplicationDataForParticipantModeEnum.HideForCertainMinutesBeforeEndFilingApplications;
    case ApiHideApplicationDataForParticipantModeEnum.HideAlways:
      return HideApplicationDataForParticipantModeEnum.HideAlways;
    default:
      throw new Error(`Enum value is not defined: ApiHideApplicationDataForParticipantModeEnum=${String(source)}`);
  }
}
