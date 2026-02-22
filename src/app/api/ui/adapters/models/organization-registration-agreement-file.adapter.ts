import { ApiOrganizationRegistrationAgreementFileDto } from '../../../swagger/models/api-organization-registration-agreement-file-dto';
import { OrganizationRegistrationAgreementFile } from '../../models/organization-registration-agreement-file.interface';
import { documentTypesAltEnumAdapter } from '../enums/document-types-alt-enum.adapter';

export const organizationRegistrationAgreementFileAdapter = (source?: ApiOrganizationRegistrationAgreementFileDto | null): OrganizationRegistrationAgreementFile => {
  return {
    documentType: source?.DocumentType === null ? undefined : documentTypesAltEnumAdapter(source?.DocumentType),
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
  };
}
