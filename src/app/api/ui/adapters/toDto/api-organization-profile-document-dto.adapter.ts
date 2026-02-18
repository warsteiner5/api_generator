import { OrganizationProfileDocument } from '../../models/organization-profile-document.interface';
import { ApiOrganizationProfileDocumentDto } from '../../../swagger/models/api-organization-profile-document-dto';
import { adaptApiMarketOrganizationDocumentTypeEnum } from './api-market-organization-document-type-enum.adapter';

export function adaptApiOrganizationProfileDocumentDto(source?: OrganizationProfileDocument | null): ApiOrganizationProfileDocumentDto {
  return {
    Comment: source?.comment,
    DocumentType: adaptApiMarketOrganizationDocumentTypeEnum(source?.documentType),
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
  };
}
