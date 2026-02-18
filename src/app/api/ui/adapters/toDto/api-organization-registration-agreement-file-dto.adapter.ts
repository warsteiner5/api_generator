import { OrganizationRegistrationAgreementFile } from '../../models/organization-registration-agreement-file.interface';
import { ApiOrganizationRegistrationAgreementFileDto } from '../../../swagger/models/api-organization-registration-agreement-file-dto';
import { adaptApiDocumentTypesAltEnum } from './api-document-types.adapter';

export function adaptApiOrganizationRegistrationAgreementFileDto(source?: OrganizationRegistrationAgreementFile | null): ApiOrganizationRegistrationAgreementFileDto {
  return {
    DocumentType: adaptApiDocumentTypesAltEnum(source?.documentType),
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
  };
}
