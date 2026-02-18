/* tslint:disable */
/* eslint-disable */
import { ApiHideApplicationDataForCustomerModeEnum } from '../models/api-hide-application-data-for-customer-mode-enum';
export interface ApiHideApplicationSettingsForCustomerDto {
  HideApplicationDataForCustomerMode?: ApiHideApplicationDataForCustomerModeEnum;
  HideForCertainMinutesBeforeEndFilingApplicationsForCustomer?: number | null;
}
