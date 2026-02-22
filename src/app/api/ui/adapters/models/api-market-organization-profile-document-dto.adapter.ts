import { MarketOrganizationProfileDocument } from '../../models/market-organization-profile-document.interface';
import { ApiMarketOrganizationProfileDocumentDto } from '../../../swagger/models/api-market-organization-profile-document-dto';

export const apiMarketOrganizationProfileDocumentDtoAdapter = (source?: MarketOrganizationProfileDocument | null): ApiMarketOrganizationProfileDocumentDto => {
  return {
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
  };
}
