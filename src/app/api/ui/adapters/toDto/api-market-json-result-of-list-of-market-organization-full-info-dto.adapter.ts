import { MarketJsonResultOfListOfMarketOrganizationFullInfo } from '../../models/market-json-result-of-list-of-market-organization-full-info.interface';
import { ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-organization-full-info-dto';

export function adaptApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto(source?: MarketJsonResultOfListOfMarketOrganizationFullInfo | null): ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto;
}
