import { HideApplicationDataModeOpenPartEnum } from '../enums/hide-application-data-mode-open-part.enum';

export interface HideApplicationSettingsForOpenPart {
  hideApplicationDataOpenPartMode: HideApplicationDataModeOpenPartEnum;
  hideForCertainMinutesBeforeEndFilingApplicationsForOpenPart: number;
}
