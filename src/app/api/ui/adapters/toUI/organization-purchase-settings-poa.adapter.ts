import { ApiOrganizationPurchaseSettingsPoaDto } from '../../../swagger/models/api-organization-purchase-settings-poa-dto';
import { OrganizationPurchaseSettingsPoa } from '../../models/organization-purchase-settings-poa.interface';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';

export function adaptOrganizationPurchaseSettingsPoaToUI(source?: ApiOrganizationPurchaseSettingsPoaDto | null): OrganizationPurchaseSettingsPoa {
  return {
    m4DDealSignRequired: adaptM4DDealSignRequiredEnumToUI(source?.M4DDealSignRequired),
  };
}
