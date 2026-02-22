import { OrganizationProfileDocument } from '../../models/organization-profile-document.interface';
import { ApiOrganizationProfileDocumentDto } from '../../../swagger/models/api-organization-profile-document-dto';
import { apiMarketOrganizationDocumentTypeEnumAdapter } from '../enums/api-market-organization-document-type-enum.adapter';

export const apiOrganizationProfileDocumentDtoAdapter = (source?: OrganizationProfileDocument | null): ApiOrganizationProfileDocumentDto => {
  return {
    Comment: source?.comment,
    DocumentType: source?.documentType === null ? undefined : apiMarketOrganizationDocumentTypeEnumAdapter(source?.documentType),
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
  };
}
