import { ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto } from '../../../swagger/models/api-market-json-result-of-market-organization-company-profile-dto';
import { MarketJsonResultOfMarketOrganizationCompanyProfile } from '../../models/market-json-result-of-market-organization-company-profile.interface';

export function adaptMarketJsonResultOfMarketOrganizationCompanyProfileToUI(source?: ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto | null): MarketJsonResultOfMarketOrganizationCompanyProfile {
  return (source ?? {}) as MarketJsonResultOfMarketOrganizationCompanyProfile;
}
