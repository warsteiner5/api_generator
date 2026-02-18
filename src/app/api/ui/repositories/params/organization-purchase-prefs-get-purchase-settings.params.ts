import { OrganizationPurchasePrefsGetPurchaseSettings$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-get-purchase-settings';

export interface OrganizationPurchasePrefsGetPurchaseSettingsParams {
}

export const organizationPurchasePrefsGetPurchaseSettingsParamsAdapter = {
  adapt(params?: OrganizationPurchasePrefsGetPurchaseSettingsParams): OrganizationPurchasePrefsGetPurchaseSettings$Params {
    if (!params) {
      return {} as OrganizationPurchasePrefsGetPurchaseSettings$Params;
    }
    return {
    };
  }
};
