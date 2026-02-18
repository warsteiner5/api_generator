import { OrganizationPurchasePrefsSetOtherPrefs$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-other-prefs';
import { OrganizationPurchaseSettingsOtherPrefs } from '../../models/organization-purchase-settings-other-prefs.interface';
import { adaptApiOrganizationPurchaseSettingsOtherPrefsDto } from '../../adapters/toDto/api-organization-purchase-settings-other-prefs-dto.adapter';

export interface OrganizationPurchasePrefsSetOtherPrefsParams {
  body?: OrganizationPurchaseSettingsOtherPrefs;
}

export const organizationPurchasePrefsSetOtherPrefsParamsAdapter = {
  adapt(params?: OrganizationPurchasePrefsSetOtherPrefsParams): OrganizationPurchasePrefsSetOtherPrefs$Params {
    if (!params) {
      return {} as OrganizationPurchasePrefsSetOtherPrefs$Params;
    }
    return {
      body: adaptApiOrganizationPurchaseSettingsOtherPrefsDto(params.body),
    };
  }
};
