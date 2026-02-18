import { MarketJsonResultOfMarketOrganizationFullInfo } from '../../models/market-json-result-of-market-organization-full-info.interface';
import { ApiMarketJsonResultOfMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-json-result-of-market-organization-full-info-dto';

export function adaptApiMarketJsonResultOfMarketOrganizationFullInfoDto(source?: MarketJsonResultOfMarketOrganizationFullInfo | null): ApiMarketJsonResultOfMarketOrganizationFullInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketOrganizationFullInfoDto;
}
