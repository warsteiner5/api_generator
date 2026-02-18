import { ApiOrganizationRegistrationAgreementFileDto } from '../../../swagger/models/api-organization-registration-agreement-file-dto';
import { OrganizationRegistrationAgreementFile } from '../../models/organization-registration-agreement-file.interface';
import { adaptDocumentTypesAltEnumToUI } from './document-types-alt-enum.adapter';

export function adaptOrganizationRegistrationAgreementFileToUI(source?: ApiOrganizationRegistrationAgreementFileDto | null): OrganizationRegistrationAgreementFile {
  return {
    documentType: adaptDocumentTypesAltEnumToUI(source?.DocumentType),
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
  };
}
