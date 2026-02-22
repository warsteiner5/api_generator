import { ApiOrganizationDocumentDto } from '../../../swagger/models/api-organization-document-dto';
import { OrganizationDocument } from '../../models/organization-document.interface';

export const organizationDocumentAdapter = (source?: ApiOrganizationDocumentDto | null): OrganizationDocument => {
  return {
    dateCreated: source?.DateCreated,
    documentName: source?.DocumentName,
    fileGuid: source?.FileGuid,
    fileSize: source?.FileSize,
    id: source?.Id,
    isActual: source?.IsActual,
    name: source?.Name,
    organizationId: source?.OrganizationId,
  };
}
