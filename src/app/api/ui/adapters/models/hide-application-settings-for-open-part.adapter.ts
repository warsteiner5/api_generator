import { ApiHideApplicationSettingsForOpenPartDto } from '../../../swagger/models/api-hide-application-settings-for-open-part-dto';
import { HideApplicationSettingsForOpenPart } from '../../models/hide-application-settings-for-open-part.interface';
import { hideApplicationDataModeOpenPartEnumAdapter } from '../enums/hide-application-data-mode-open-part-enum.adapter';

export const hideApplicationSettingsForOpenPartAdapter = (source?: ApiHideApplicationSettingsForOpenPartDto | null): HideApplicationSettingsForOpenPart => {
  return {
    hideApplicationDataOpenPartMode: source?.HideApplicationDataOpenPartMode === null ? undefined : hideApplicationDataModeOpenPartEnumAdapter(source?.HideApplicationDataOpenPartMode),
    hideForCertainMinutesBeforeEndFilingApplicationsForOpenPart: source?.HideForCertainMinutesBeforeEndFilingApplicationsForOpenPart,
  };
}
