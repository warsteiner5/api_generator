import { HideApplicationSettingsForOpenPart } from '../../models/hide-application-settings-for-open-part.interface';
import { ApiHideApplicationSettingsForOpenPartDto } from '../../../swagger/models/api-hide-application-settings-for-open-part-dto';
import { apiHideApplicationDataModeOpenPartEnumAdapter } from '../enums/api-hide-application-data-mode-open-part-enum.adapter';

export const apiHideApplicationSettingsForOpenPartDtoAdapter = (source?: HideApplicationSettingsForOpenPart | null): ApiHideApplicationSettingsForOpenPartDto => {
  return {
    HideApplicationDataOpenPartMode: source?.hideApplicationDataOpenPartMode === null ? undefined : apiHideApplicationDataModeOpenPartEnumAdapter(source?.hideApplicationDataOpenPartMode),
    HideForCertainMinutesBeforeEndFilingApplicationsForOpenPart: source?.hideForCertainMinutesBeforeEndFilingApplicationsForOpenPart,
  };
}
