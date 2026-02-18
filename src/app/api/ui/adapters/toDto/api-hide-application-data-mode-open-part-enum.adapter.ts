import { HideApplicationDataModeOpenPartEnum } from '../../enums/hide-application-data-mode-open-part.enum';
import { ApiHideApplicationDataModeOpenPartEnum } from '../../../swagger/models/api-hide-application-data-mode-open-part-enum';

export function adaptApiHideApplicationDataModeOpenPartEnum(source?: HideApplicationDataModeOpenPartEnum | null): ApiHideApplicationDataModeOpenPartEnum {
  switch (source) {
    case HideApplicationDataModeOpenPartEnum.DoNotHide:
      return ApiHideApplicationDataModeOpenPartEnum.DoNotHide;
    case HideApplicationDataModeOpenPartEnum.HideAlways:
      return ApiHideApplicationDataModeOpenPartEnum.HideAlways;
    case HideApplicationDataModeOpenPartEnum.HideBeforeEndFilingApplications:
      return ApiHideApplicationDataModeOpenPartEnum.HideBeforeEndFilingApplications;
    case HideApplicationDataModeOpenPartEnum.HideForCertainMinutesBeforeEndFilingApplications:
      return ApiHideApplicationDataModeOpenPartEnum.HideForCertainMinutesBeforeEndFilingApplications;
    default:
      throw new Error(`Enum value is not defined: HideApplicationDataModeOpenPartEnum=${String(source)}`);
  }
}
