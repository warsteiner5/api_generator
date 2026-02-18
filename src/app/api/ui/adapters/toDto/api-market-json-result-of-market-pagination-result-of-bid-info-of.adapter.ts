import { MarketJsonResultOfMarketPaginationResultOfBidInfoOf } from '../../models/market-json-result-of-market-pagination-result-of-bid-info-of.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-bid-info-of';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf(source?: MarketJsonResultOfMarketPaginationResultOfBidInfoOf | null): ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf;
}
