import { OrganizationSignatureStampFormatSettings } from '../../models/organization-signature-stamp-format-settings.interface';
import { ApiOrganizationSignatureStampFormatSettingsDto } from '../../../swagger/models/api-organization-signature-stamp-format-settings-dto';
import { adaptApiSignatureStampFormatEnum } from './api-signature-stamp-format-enum.adapter';

export function adaptApiOrganizationSignatureStampFormatSettingsDto(source?: OrganizationSignatureStampFormatSettings | null): ApiOrganizationSignatureStampFormatSettingsDto {
  return {
    SignatureStampFormat: adaptApiSignatureStampFormatEnum(source?.signatureStampFormat),
  };
}
