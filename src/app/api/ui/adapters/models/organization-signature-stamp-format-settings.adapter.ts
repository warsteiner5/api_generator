import { ApiOrganizationSignatureStampFormatSettingsDto } from '../../../swagger/models/api-organization-signature-stamp-format-settings-dto';
import { OrganizationSignatureStampFormatSettings } from '../../models/organization-signature-stamp-format-settings.interface';
import { signatureStampFormatEnumAdapter } from '../enums/signature-stamp-format-enum.adapter';

export const organizationSignatureStampFormatSettingsAdapter = (source?: ApiOrganizationSignatureStampFormatSettingsDto | null): OrganizationSignatureStampFormatSettings => {
  return {
    signatureStampFormat: source?.SignatureStampFormat === null ? undefined : signatureStampFormatEnumAdapter(source?.SignatureStampFormat),
  };
}
