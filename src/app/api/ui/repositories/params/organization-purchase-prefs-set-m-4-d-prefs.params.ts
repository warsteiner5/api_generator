import { OrganizationPurchasePrefsSetM4DPrefs$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-m-4-d-prefs';
import { OrganizationPurchaseSettingsPoa } from '../../models/organization-purchase-settings-poa.interface';
import { apiOrganizationPurchaseSettingsPoaDtoAdapter } from '../../adapters/models/api-organization-purchase-settings-poa-dto.adapter';

// @ts-ignore
export interface OrganizationPurchasePrefsSetM4DPrefsParams {
  body?: OrganizationPurchaseSettingsPoa;
}

export function organizationPurchasePrefsSetM4DPrefsAdapter(params?: OrganizationPurchasePrefsSetM4DPrefsParams): OrganizationPurchasePrefsSetM4DPrefs$Params {
  if (!params) {
    return {} as OrganizationPurchasePrefsSetM4DPrefs$Params;
  }
  return {
      body: apiOrganizationPurchaseSettingsPoaDtoAdapter(params.body),
  };
}
