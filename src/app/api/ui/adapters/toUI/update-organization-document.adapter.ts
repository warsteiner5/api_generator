import { ApiUpdateOrganizationDocumentDto } from '../../../swagger/models/api-update-organization-document-dto';
import { UpdateOrganizationDocument } from '../../models/update-organization-document.interface';

export function adaptUpdateOrganizationDocumentToUI(source?: ApiUpdateOrganizationDocumentDto | null): UpdateOrganizationDocument {
  return {
    fileGuid: source?.FileGuid ?? '',
    isActual: source?.IsActual ?? false,
  };
}
