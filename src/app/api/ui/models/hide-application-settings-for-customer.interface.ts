import { HideApplicationDataForCustomerModeEnum } from '../enums/hide-application-data-for-customer-mode.enum';

export interface HideApplicationSettingsForCustomer {
  hideApplicationDataForCustomerMode: HideApplicationDataForCustomerModeEnum;
  hideForCertainMinutesBeforeEndFilingApplicationsForCustomer: number;
}
