import { ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-bid-info-of';
import { MarketJsonResultOfMarketPaginationResultOfBidInfoOf } from '../../models/market-json-result-of-market-pagination-result-of-bid-info-of.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfBidInfoOfToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf | null): MarketJsonResultOfMarketPaginationResultOfBidInfoOf {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfBidInfoOf;
}
