import { ApiOrganizationRegistryDocumentDto } from '../../../swagger/models/api-organization-registry-document-dto';
import { OrganizationRegistryDocument } from '../../models/organization-registry-document.interface';
import { adaptDocumentTypesAltEnumToUI } from './document-types-alt-enum.adapter';

export function adaptOrganizationRegistryDocumentToUI(source?: ApiOrganizationRegistryDocumentDto | null): OrganizationRegistryDocument {
  return {
    customType: source?.CustomType ?? '',
    fileName: source?.FileName ?? '',
    id: source?.Id ?? '',
    organizationId: source?.OrganizationId ?? 0,
    type: adaptDocumentTypesAltEnumToUI(source?.Type),
  };
}
