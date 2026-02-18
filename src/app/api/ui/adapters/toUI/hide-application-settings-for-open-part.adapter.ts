import { ApiHideApplicationSettingsForOpenPartDto } from '../../../swagger/models/api-hide-application-settings-for-open-part-dto';
import { HideApplicationSettingsForOpenPart } from '../../models/hide-application-settings-for-open-part.interface';
import { adaptHideApplicationDataModeOpenPartEnumToUI } from './hide-application-data-mode-open-part-enum.adapter';

export function adaptHideApplicationSettingsForOpenPartToUI(source?: ApiHideApplicationSettingsForOpenPartDto | null): HideApplicationSettingsForOpenPart {
  return {
    hideApplicationDataOpenPartMode: adaptHideApplicationDataModeOpenPartEnumToUI(source?.HideApplicationDataOpenPartMode),
    hideForCertainMinutesBeforeEndFilingApplicationsForOpenPart: source?.HideForCertainMinutesBeforeEndFilingApplicationsForOpenPart ?? 0,
  };
}
