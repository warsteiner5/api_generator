import { MarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResult } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-search-result.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResult | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto;
}
