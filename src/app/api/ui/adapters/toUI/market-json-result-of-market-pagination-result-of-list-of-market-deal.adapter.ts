import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-deal';
import { MarketJsonResultOfMarketPaginationResultOfListOfMarketDeal } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-deal.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMarketDealToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal | null): MarketJsonResultOfMarketPaginationResultOfListOfMarketDeal {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMarketDeal;
}
