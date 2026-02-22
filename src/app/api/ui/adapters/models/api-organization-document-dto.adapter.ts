import { OrganizationDocument } from '../../models/organization-document.interface';
import { ApiOrganizationDocumentDto } from '../../../swagger/models/api-organization-document-dto';

export const apiOrganizationDocumentDtoAdapter = (source?: OrganizationDocument | null): ApiOrganizationDocumentDto => {
  return {
    DateCreated: source?.dateCreated,
    DocumentName: source?.documentName,
    FileGuid: source?.fileGuid,
    FileSize: source?.fileSize,
    Id: source?.id,
    IsActual: source?.isActual,
    Name: source?.name,
    OrganizationId: source?.organizationId,
  };
}
