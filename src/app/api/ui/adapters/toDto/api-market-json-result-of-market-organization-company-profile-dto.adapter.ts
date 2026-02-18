import { MarketJsonResultOfMarketOrganizationCompanyProfile } from '../../models/market-json-result-of-market-organization-company-profile.interface';
import { ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto } from '../../../swagger/models/api-market-json-result-of-market-organization-company-profile-dto';

export function adaptApiMarketJsonResultOfMarketOrganizationCompanyProfileDto(source?: MarketJsonResultOfMarketOrganizationCompanyProfile | null): ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto;
}
