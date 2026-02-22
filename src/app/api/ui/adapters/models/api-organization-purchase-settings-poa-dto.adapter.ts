import { OrganizationPurchaseSettingsPoa } from '../../models/organization-purchase-settings-poa.interface';
import { ApiOrganizationPurchaseSettingsPoaDto } from '../../../swagger/models/api-organization-purchase-settings-poa-dto';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';

export const apiOrganizationPurchaseSettingsPoaDtoAdapter = (source?: OrganizationPurchaseSettingsPoa | null): ApiOrganizationPurchaseSettingsPoaDto => {
  return {
    M4DDealSignRequired: source?.m4DDealSignRequired === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.m4DDealSignRequired),
  };
}
