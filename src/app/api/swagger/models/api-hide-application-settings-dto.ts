/* tslint:disable */
/* eslint-disable */
import { ApiHideApplicationSettingsForCustomerDto } from '../models/api-hide-application-settings-for-customer-dto';
import { ApiHideApplicationSettingsForOpenPartDto } from '../models/api-hide-application-settings-for-open-part-dto';
import { ApiHideApplicationSettingsForParticipantDto } from '../models/api-hide-application-settings-for-participant-dto';
export interface ApiHideApplicationSettingsDto {
  HideApplicationSettingsForCustomer?: ApiHideApplicationSettingsForCustomerDto | null;
  HideApplicationSettingsForOpenPart?: ApiHideApplicationSettingsForOpenPartDto | null;
  HideApplicationSettingsForParticipant?: ApiHideApplicationSettingsForParticipantDto | null;
}
