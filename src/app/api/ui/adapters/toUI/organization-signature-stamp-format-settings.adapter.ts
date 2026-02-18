import { ApiOrganizationSignatureStampFormatSettingsDto } from '../../../swagger/models/api-organization-signature-stamp-format-settings-dto';
import { OrganizationSignatureStampFormatSettings } from '../../models/organization-signature-stamp-format-settings.interface';
import { adaptSignatureStampFormatEnumToUI } from './signature-stamp-format-enum.adapter';

export function adaptOrganizationSignatureStampFormatSettingsToUI(source?: ApiOrganizationSignatureStampFormatSettingsDto | null): OrganizationSignatureStampFormatSettings {
  return {
    signatureStampFormat: adaptSignatureStampFormatEnumToUI(source?.SignatureStampFormat),
  };
}
