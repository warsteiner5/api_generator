import { OrganizationSignatureStampFormatSettings } from '../../models/organization-signature-stamp-format-settings.interface';
import { ApiOrganizationSignatureStampFormatSettingsDto } from '../../../swagger/models/api-organization-signature-stamp-format-settings-dto';
import { apiSignatureStampFormatEnumAdapter } from '../enums/api-signature-stamp-format-enum.adapter';

export const apiOrganizationSignatureStampFormatSettingsDtoAdapter = (source?: OrganizationSignatureStampFormatSettings | null): ApiOrganizationSignatureStampFormatSettingsDto => {
  return {
    SignatureStampFormat: source?.signatureStampFormat === null ? undefined : apiSignatureStampFormatEnumAdapter(source?.signatureStampFormat),
  };
}
