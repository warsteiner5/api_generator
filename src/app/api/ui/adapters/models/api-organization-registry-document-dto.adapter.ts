import { OrganizationRegistryDocument } from '../../models/organization-registry-document.interface';
import { ApiOrganizationRegistryDocumentDto } from '../../../swagger/models/api-organization-registry-document-dto';
import { apiDocumentTypesAltEnumAdapter } from '../enums/api-document-types.adapter';

export const apiOrganizationRegistryDocumentDtoAdapter = (source?: OrganizationRegistryDocument | null): ApiOrganizationRegistryDocumentDto => {
  return {
    CustomType: source?.customType,
    FileName: source?.fileName,
    Id: source?.id,
    OrganizationId: source?.organizationId,
    Type: source?.type === null ? undefined : apiDocumentTypesAltEnumAdapter(source?.type),
  };
}
