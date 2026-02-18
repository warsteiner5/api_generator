import { ApiOrganizationDocumentDto } from '../../../swagger/models/api-organization-document-dto';
import { OrganizationDocument } from '../../models/organization-document.interface';

export function adaptOrganizationDocumentToUI(source?: ApiOrganizationDocumentDto | null): OrganizationDocument {
  return {
    dateCreated: source?.DateCreated ?? '',
    documentName: source?.DocumentName ?? '',
    fileGuid: source?.FileGuid ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? 0,
    isActual: source?.IsActual ?? false,
    name: source?.Name ?? '',
    organizationId: source?.OrganizationId ?? 0,
  };
}
