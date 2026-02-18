import { MarketJsonResultOfMarketPaginationResultOfListOfDealInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-deal-info.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-deal-info';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo(source?: MarketJsonResultOfMarketPaginationResultOfListOfDealInfo | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo;
}
