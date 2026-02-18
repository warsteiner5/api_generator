import { MarketJsonResultOfOrganizationProfileDocument } from '../../models/market-json-result-of-organization-profile-document.interface';
import { ApiMarketJsonResultOfOrganizationProfileDocumentDto } from '../../../swagger/models/api-market-json-result-of-organization-profile-document-dto';

export function adaptApiMarketJsonResultOfOrganizationProfileDocumentDto(source?: MarketJsonResultOfOrganizationProfileDocument | null): ApiMarketJsonResultOfOrganizationProfileDocumentDto {
  return (source ?? {}) as ApiMarketJsonResultOfOrganizationProfileDocumentDto;
}
