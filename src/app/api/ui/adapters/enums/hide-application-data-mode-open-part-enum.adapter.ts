import { ApiHideApplicationDataModeOpenPartEnum } from '../../../swagger/models/api-hide-application-data-mode-open-part-enum';
import { HideApplicationDataModeOpenPartEnum } from '../../enums/hide-application-data-mode-open-part.enum';

export const hideApplicationDataModeOpenPartEnumAdapter = (source?: ApiHideApplicationDataModeOpenPartEnum | null): HideApplicationDataModeOpenPartEnum => {
  switch (source) {
    case ApiHideApplicationDataModeOpenPartEnum.DoNotHide:
      return HideApplicationDataModeOpenPartEnum.DoNotHide;
    case ApiHideApplicationDataModeOpenPartEnum.HideAlways:
      return HideApplicationDataModeOpenPartEnum.HideAlways;
    case ApiHideApplicationDataModeOpenPartEnum.HideBeforeEndFilingApplications:
      return HideApplicationDataModeOpenPartEnum.HideBeforeEndFilingApplications;
    case ApiHideApplicationDataModeOpenPartEnum.HideForCertainMinutesBeforeEndFilingApplications:
      return HideApplicationDataModeOpenPartEnum.HideForCertainMinutesBeforeEndFilingApplications;
    default:
      throw new Error(`Enum value is not defined: ApiHideApplicationDataModeOpenPartEnum=${String(source)}`);
  }
}
