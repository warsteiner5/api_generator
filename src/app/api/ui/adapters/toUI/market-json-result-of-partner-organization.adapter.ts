import { ApiMarketJsonResultOfPartnerOrganizationDto } from '../../../swagger/models/api-market-json-result-of-partner-organization-dto';
import { MarketJsonResultOfPartnerOrganization } from '../../models/market-json-result-of-partner-organization.interface';

export function adaptMarketJsonResultOfPartnerOrganizationToUI(source?: ApiMarketJsonResultOfPartnerOrganizationDto | null): MarketJsonResultOfPartnerOrganization {
  return (source ?? {}) as MarketJsonResultOfPartnerOrganization;
}
