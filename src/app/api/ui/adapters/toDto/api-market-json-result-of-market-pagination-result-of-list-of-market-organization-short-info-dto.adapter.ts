import { MarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-organization-short-info.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-organization-short-info-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfo | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto;
}
