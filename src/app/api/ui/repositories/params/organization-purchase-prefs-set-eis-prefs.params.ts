import { OrganizationPurchasePrefsSetEisPrefs$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-eis-prefs';
import { OrganizationPurchaseSettingsEisPrefs } from '../../models/organization-purchase-settings-eis-prefs.interface';
import { adaptApiOrganizationPurchaseSettingsEisPrefsDto } from '../../adapters/toDto/api-organization-purchase-settings-eis-prefs-dto.adapter';

export interface OrganizationPurchasePrefsSetEisPrefsParams {
  body?: OrganizationPurchaseSettingsEisPrefs;
}

export const organizationPurchasePrefsSetEisPrefsParamsAdapter = {
  adapt(params?: OrganizationPurchasePrefsSetEisPrefsParams): OrganizationPurchasePrefsSetEisPrefs$Params {
    if (!params) {
      return {} as OrganizationPurchasePrefsSetEisPrefs$Params;
    }
    return {
      body: adaptApiOrganizationPurchaseSettingsEisPrefsDto(params.body),
    };
  }
};
