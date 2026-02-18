import { OrganizationRegistryDocument } from '../../models/organization-registry-document.interface';
import { ApiOrganizationRegistryDocumentDto } from '../../../swagger/models/api-organization-registry-document-dto';
import { adaptApiDocumentTypesAltEnum } from './api-document-types.adapter';

export function adaptApiOrganizationRegistryDocumentDto(source?: OrganizationRegistryDocument | null): ApiOrganizationRegistryDocumentDto {
  return {
    CustomType: source?.customType,
    FileName: source?.fileName,
    Id: source?.id,
    OrganizationId: source?.organizationId,
    Type: adaptApiDocumentTypesAltEnum(source?.type),
  };
}
