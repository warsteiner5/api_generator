import { ApiMarketJsonResultOfOrganizationProfileDocumentDto } from '../../../swagger/models/api-market-json-result-of-organization-profile-document-dto';
import { MarketJsonResultOfOrganizationProfileDocument } from '../../models/market-json-result-of-organization-profile-document.interface';

export function adaptMarketJsonResultOfOrganizationProfileDocumentToUI(source?: ApiMarketJsonResultOfOrganizationProfileDocumentDto | null): MarketJsonResultOfOrganizationProfileDocument {
  return (source ?? {}) as MarketJsonResultOfOrganizationProfileDocument;
}
