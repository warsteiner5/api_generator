import { ApiOrganizationPurchaseSettingsPoaDto } from '../../../swagger/models/api-organization-purchase-settings-poa-dto';
import { OrganizationPurchaseSettingsPoa } from '../../models/organization-purchase-settings-poa.interface';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';

export const organizationPurchaseSettingsPoaAdapter = (source?: ApiOrganizationPurchaseSettingsPoaDto | null): OrganizationPurchaseSettingsPoa => {
  return {
    m4DDealSignRequired: source?.M4DDealSignRequired === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.M4DDealSignRequired),
  };
}
