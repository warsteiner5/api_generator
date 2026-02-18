import { ApiMarketOrganizationProfileDocumentDto } from '../../../swagger/models/api-market-organization-profile-document-dto';
import { MarketOrganizationProfileDocument } from '../../models/market-organization-profile-document.interface';

export function adaptMarketOrganizationProfileDocumentToUI(source?: ApiMarketOrganizationProfileDocumentDto | null): MarketOrganizationProfileDocument {
  return {
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
  };
}
