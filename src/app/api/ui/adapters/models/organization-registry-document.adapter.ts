import { ApiOrganizationRegistryDocumentDto } from '../../../swagger/models/api-organization-registry-document-dto';
import { OrganizationRegistryDocument } from '../../models/organization-registry-document.interface';
import { documentTypesAltEnumAdapter } from '../enums/document-types-alt-enum.adapter';

export const organizationRegistryDocumentAdapter = (source?: ApiOrganizationRegistryDocumentDto | null): OrganizationRegistryDocument => {
  return {
    customType: source?.CustomType,
    fileName: source?.FileName,
    id: source?.Id,
    organizationId: source?.OrganizationId,
    type: source?.Type === null ? undefined : documentTypesAltEnumAdapter(source?.Type),
  };
}
