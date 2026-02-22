import { OrganizationRegistrationAgreementFile } from '../../models/organization-registration-agreement-file.interface';
import { ApiOrganizationRegistrationAgreementFileDto } from '../../../swagger/models/api-organization-registration-agreement-file-dto';
import { apiDocumentTypesAltEnumAdapter } from '../enums/api-document-types.adapter';

export const apiOrganizationRegistrationAgreementFileDtoAdapter = (source?: OrganizationRegistrationAgreementFile | null): ApiOrganizationRegistrationAgreementFileDto => {
  return {
    DocumentType: source?.documentType === null ? undefined : apiDocumentTypesAltEnumAdapter(source?.documentType),
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
  };
}
