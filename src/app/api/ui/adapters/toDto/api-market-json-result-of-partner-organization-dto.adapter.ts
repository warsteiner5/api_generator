import { MarketJsonResultOfPartnerOrganization } from '../../models/market-json-result-of-partner-organization.interface';
import { ApiMarketJsonResultOfPartnerOrganizationDto } from '../../../swagger/models/api-market-json-result-of-partner-organization-dto';

export function adaptApiMarketJsonResultOfPartnerOrganizationDto(source?: MarketJsonResultOfPartnerOrganization | null): ApiMarketJsonResultOfPartnerOrganizationDto {
  return (source ?? {}) as ApiMarketJsonResultOfPartnerOrganizationDto;
}
