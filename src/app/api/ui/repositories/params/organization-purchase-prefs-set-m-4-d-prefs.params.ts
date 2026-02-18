import { OrganizationPurchasePrefsSetM4DPrefs$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-m-4-d-prefs';
import { OrganizationPurchaseSettingsPoa } from '../../models/organization-purchase-settings-poa.interface';
import { adaptApiOrganizationPurchaseSettingsPoaDto } from '../../adapters/toDto/api-organization-purchase-settings-poa-dto.adapter';

export interface OrganizationPurchasePrefsSetM4DPrefsParams {
  body?: OrganizationPurchaseSettingsPoa;
}

export const organizationPurchasePrefsSetM4DPrefsParamsAdapter = {
  adapt(params?: OrganizationPurchasePrefsSetM4DPrefsParams): OrganizationPurchasePrefsSetM4DPrefs$Params {
    if (!params) {
      return {} as OrganizationPurchasePrefsSetM4DPrefs$Params;
    }
    return {
      body: adaptApiOrganizationPurchaseSettingsPoaDto(params.body),
    };
  }
};
