import { MarketJsonResultOfMarketCompositeOrganizationShortInfo } from '../../models/market-json-result-of-market-composite-organization-short-info.interface';
import { ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto } from '../../../swagger/models/api-market-json-result-of-market-composite-organization-short-info-dto';

export function adaptApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto(source?: MarketJsonResultOfMarketCompositeOrganizationShortInfo | null): ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto;
}
