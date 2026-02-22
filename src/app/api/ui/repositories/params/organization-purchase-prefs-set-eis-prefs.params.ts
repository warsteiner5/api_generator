import { OrganizationPurchasePrefsSetEisPrefs$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-eis-prefs';
import { OrganizationPurchaseSettingsEisPrefs } from '../../models/organization-purchase-settings-eis-prefs.interface';
import { apiOrganizationPurchaseSettingsEisPrefsDtoAdapter } from '../../adapters/models/api-organization-purchase-settings-eis-prefs-dto.adapter';

// @ts-ignore
export interface OrganizationPurchasePrefsSetEisPrefsParams {
  body?: OrganizationPurchaseSettingsEisPrefs;
}

export function organizationPurchasePrefsSetEisPrefsAdapter(params?: OrganizationPurchasePrefsSetEisPrefsParams): OrganizationPurchasePrefsSetEisPrefs$Params {
  if (!params) {
    return {} as OrganizationPurchasePrefsSetEisPrefs$Params;
  }
  return {
      body: apiOrganizationPurchaseSettingsEisPrefsDtoAdapter(params.body),
  };
}
