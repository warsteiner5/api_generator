import { HideApplicationSettingsForCustomer } from '../../models/hide-application-settings-for-customer.interface';
import { ApiHideApplicationSettingsForCustomerDto } from '../../../swagger/models/api-hide-application-settings-for-customer-dto';
import { adaptApiHideApplicationDataForCustomerModeEnum } from './api-hide-application-data-for-customer-mode-enum.adapter';

export function adaptApiHideApplicationSettingsForCustomerDto(source?: HideApplicationSettingsForCustomer | null): ApiHideApplicationSettingsForCustomerDto {
  return {
    HideApplicationDataForCustomerMode: adaptApiHideApplicationDataForCustomerModeEnum(source?.hideApplicationDataForCustomerMode),
    HideForCertainMinutesBeforeEndFilingApplicationsForCustomer: source?.hideForCertainMinutesBeforeEndFilingApplicationsForCustomer,
  };
}
