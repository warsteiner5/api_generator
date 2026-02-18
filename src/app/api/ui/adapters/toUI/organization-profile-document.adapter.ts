import { ApiOrganizationProfileDocumentDto } from '../../../swagger/models/api-organization-profile-document-dto';
import { OrganizationProfileDocument } from '../../models/organization-profile-document.interface';
import { adaptMarketOrganizationDocumentTypeEnumToUI } from './market-organization-document-type-enum.adapter';

export function adaptOrganizationProfileDocumentToUI(source?: ApiOrganizationProfileDocumentDto | null): OrganizationProfileDocument {
  return {
    comment: source?.Comment ?? '',
    documentType: adaptMarketOrganizationDocumentTypeEnumToUI(source?.DocumentType),
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
  };
}
