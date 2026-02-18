import { OrganizationPurchaseSettingsPoa } from '../../models/organization-purchase-settings-poa.interface';
import { ApiOrganizationPurchaseSettingsPoaDto } from '../../../swagger/models/api-organization-purchase-settings-poa-dto';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';

export function adaptApiOrganizationPurchaseSettingsPoaDto(source?: OrganizationPurchaseSettingsPoa | null): ApiOrganizationPurchaseSettingsPoaDto {
  return {
    M4DDealSignRequired: adaptApiM4DDealSignRequiredEnum(source?.m4DDealSignRequired),
  };
}
