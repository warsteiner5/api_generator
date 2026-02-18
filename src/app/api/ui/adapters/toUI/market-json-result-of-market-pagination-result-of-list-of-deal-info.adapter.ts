import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-deal-info';
import { MarketJsonResultOfMarketPaginationResultOfListOfDealInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-deal-info.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfDealInfoToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfo | null): MarketJsonResultOfMarketPaginationResultOfListOfDealInfo {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfDealInfo;
}
