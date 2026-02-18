import { OrganizationPurchasePrefsSetSignatureStampFormat$Params } from '../../../swagger/fn/organization-purchase-prefs/organization-purchase-prefs-set-signature-stamp-format';
import { OrganizationSignatureStampFormatSettings } from '../../models/organization-signature-stamp-format-settings.interface';
import { adaptApiOrganizationSignatureStampFormatSettingsDto } from '../../adapters/toDto/api-organization-signature-stamp-format-settings-dto.adapter';

export interface OrganizationPurchasePrefsSetSignatureStampFormatParams {
  body?: OrganizationSignatureStampFormatSettings;
}

export const organizationPurchasePrefsSetSignatureStampFormatParamsAdapter = {
  adapt(params?: OrganizationPurchasePrefsSetSignatureStampFormatParams): OrganizationPurchasePrefsSetSignatureStampFormat$Params {
    if (!params) {
      return {} as OrganizationPurchasePrefsSetSignatureStampFormat$Params;
    }
    return {
      body: adaptApiOrganizationSignatureStampFormatSettingsDto(params.body),
    };
  }
};
