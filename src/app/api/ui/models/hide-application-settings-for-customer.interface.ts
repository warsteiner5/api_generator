import { HideApplicationDataForCustomerModeEnum } from '../enums/hide-application-data-for-customer-mode.enum';

// @ts-ignore
export interface HideApplicationSettingsForCustomer {
  hideApplicationDataForCustomerMode: HideApplicationDataForCustomerModeEnum;
  hideForCertainMinutesBeforeEndFilingApplicationsForCustomer: number;
}
