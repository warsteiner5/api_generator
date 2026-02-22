import { OrganizationPurchasePrefsSetSignatureStampFormat$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-signature-stamp-format';
import { OrganizationSignatureStampFormatSettings } from '../../models/organization-signature-stamp-format-settings.interface';
import { apiOrganizationSignatureStampFormatSettingsDtoAdapter } from '../../adapters/models/api-organization-signature-stamp-format-settings-dto.adapter';

// @ts-ignore
export interface OrganizationPurchasePrefsSetSignatureStampFormatParams {
  body?: OrganizationSignatureStampFormatSettings;
}

export function organizationPurchasePrefsSetSignatureStampFormatAdapter(params?: OrganizationPurchasePrefsSetSignatureStampFormatParams): OrganizationPurchasePrefsSetSignatureStampFormat$Params {
  if (!params) {
    return {} as OrganizationPurchasePrefsSetSignatureStampFormat$Params;
  }
  return {
      body: apiOrganizationSignatureStampFormatSettingsDtoAdapter(params.body),
  };
}
