import { ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-partner-organization-dto';
import { MarketJsonResultOfListOfMarketPartnerOrganization } from '../../models/market-json-result-of-list-of-market-partner-organization.interface';

export function adaptMarketJsonResultOfListOfMarketPartnerOrganizationToUI(source?: ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto | null): MarketJsonResultOfListOfMarketPartnerOrganization {
  return (source ?? {}) as MarketJsonResultOfListOfMarketPartnerOrganization;
}
