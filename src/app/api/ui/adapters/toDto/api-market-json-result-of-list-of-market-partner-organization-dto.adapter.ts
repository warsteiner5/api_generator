import { MarketJsonResultOfListOfMarketPartnerOrganization } from '../../models/market-json-result-of-list-of-market-partner-organization.interface';
import { ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-partner-organization-dto';

export function adaptApiMarketJsonResultOfListOfMarketPartnerOrganizationDto(source?: MarketJsonResultOfListOfMarketPartnerOrganization | null): ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto;
}
