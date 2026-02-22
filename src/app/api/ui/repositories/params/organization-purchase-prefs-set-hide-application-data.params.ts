import { HideApplicationSettings } from '../../models/hide-application-settings.interface';
import { OrganizationPurchasePrefsSetHideApplicationData$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-hide-application-data';
import { apiHideApplicationSettingsDtoAdapter } from '../../adapters/models/api-hide-application-settings-dto.adapter';

// @ts-ignore
export interface OrganizationPurchasePrefsSetHideApplicationDataParams {
  body?: HideApplicationSettings;
}

export function organizationPurchasePrefsSetHideApplicationDataAdapter(params?: OrganizationPurchasePrefsSetHideApplicationDataParams): OrganizationPurchasePrefsSetHideApplicationData$Params {
  if (!params) {
    return {} as OrganizationPurchasePrefsSetHideApplicationData$Params;
  }
  return {
      body: apiHideApplicationSettingsDtoAdapter(params.body),
  };
}
