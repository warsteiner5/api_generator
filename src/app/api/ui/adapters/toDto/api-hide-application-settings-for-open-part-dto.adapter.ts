import { HideApplicationSettingsForOpenPart } from '../../models/hide-application-settings-for-open-part.interface';
import { ApiHideApplicationSettingsForOpenPartDto } from '../../../swagger/models/api-hide-application-settings-for-open-part-dto';
import { adaptApiHideApplicationDataModeOpenPartEnum } from './api-hide-application-data-mode-open-part-enum.adapter';

export function adaptApiHideApplicationSettingsForOpenPartDto(source?: HideApplicationSettingsForOpenPart | null): ApiHideApplicationSettingsForOpenPartDto {
  return {
    HideApplicationDataOpenPartMode: adaptApiHideApplicationDataModeOpenPartEnum(source?.hideApplicationDataOpenPartMode),
    HideForCertainMinutesBeforeEndFilingApplicationsForOpenPart: source?.hideForCertainMinutesBeforeEndFilingApplicationsForOpenPart,
  };
}
