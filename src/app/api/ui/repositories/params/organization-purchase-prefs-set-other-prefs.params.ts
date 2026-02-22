import { OrganizationPurchasePrefsSetOtherPrefs$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-other-prefs';
import { OrganizationPurchaseSettingsOtherPrefs } from '../../models/organization-purchase-settings-other-prefs.interface';
import { apiOrganizationPurchaseSettingsOtherPrefsDtoAdapter } from '../../adapters/models/api-organization-purchase-settings-other-prefs-dto.adapter';

// @ts-ignore
export interface OrganizationPurchasePrefsSetOtherPrefsParams {
  body?: OrganizationPurchaseSettingsOtherPrefs;
}

export function organizationPurchasePrefsSetOtherPrefsAdapter(params?: OrganizationPurchasePrefsSetOtherPrefsParams): OrganizationPurchasePrefsSetOtherPrefs$Params {
  if (!params) {
    return {} as OrganizationPurchasePrefsSetOtherPrefs$Params;
  }
  return {
      body: apiOrganizationPurchaseSettingsOtherPrefsDtoAdapter(params.body),
  };
}
