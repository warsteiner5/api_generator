import { ApiMarketOrganizationProfileDocumentDto } from '../../../swagger/models/api-market-organization-profile-document-dto';
import { MarketOrganizationProfileDocument } from '../../models/market-organization-profile-document.interface';

export const marketOrganizationProfileDocumentAdapter = (source?: ApiMarketOrganizationProfileDocumentDto | null): MarketOrganizationProfileDocument => {
  return {
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
  };
}
