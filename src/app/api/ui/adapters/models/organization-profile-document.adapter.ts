import { ApiOrganizationProfileDocumentDto } from '../../../swagger/models/api-organization-profile-document-dto';
import { OrganizationProfileDocument } from '../../models/organization-profile-document.interface';
import { marketOrganizationDocumentTypeEnumAdapter } from '../enums/market-organization-document-type-enum.adapter';

export const organizationProfileDocumentAdapter = (source?: ApiOrganizationProfileDocumentDto | null): OrganizationProfileDocument => {
  return {
    comment: source?.Comment,
    documentType: source?.DocumentType === null ? undefined : marketOrganizationDocumentTypeEnumAdapter(source?.DocumentType),
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
  };
}
