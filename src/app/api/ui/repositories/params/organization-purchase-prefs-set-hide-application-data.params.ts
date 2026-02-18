import { HideApplicationSettings } from '../../models/hide-application-settings.interface';
import { OrganizationPurchasePrefsSetHideApplicationData$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-hide-application-data';
import { adaptApiHideApplicationSettingsDto } from '../../adapters/toDto/api-hide-application-settings-dto.adapter';

export interface OrganizationPurchasePrefsSetHideApplicationDataParams {
  body?: HideApplicationSettings;
}

export const organizationPurchasePrefsSetHideApplicationDataParamsAdapter = {
  adapt(params?: OrganizationPurchasePrefsSetHideApplicationDataParams): OrganizationPurchasePrefsSetHideApplicationData$Params {
    if (!params) {
      return {} as OrganizationPurchasePrefsSetHideApplicationData$Params;
    }
    return {
      body: adaptApiHideApplicationSettingsDto(params.body),
    };
  }
};
