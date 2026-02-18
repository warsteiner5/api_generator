import { UpdateOrganizationDocument } from '../../models/update-organization-document.interface';
import { ApiUpdateOrganizationDocumentDto } from '../../../swagger/models/api-update-organization-document-dto';

export function adaptApiUpdateOrganizationDocumentDto(source?: UpdateOrganizationDocument | null): ApiUpdateOrganizationDocumentDto {
  return {
    FileGuid: source?.fileGuid,
    IsActual: source?.isActual,
  };
}
