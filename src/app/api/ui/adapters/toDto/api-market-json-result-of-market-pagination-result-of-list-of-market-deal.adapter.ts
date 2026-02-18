import { MarketJsonResultOfMarketPaginationResultOfListOfMarketDeal } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-deal.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-deal';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal(source?: MarketJsonResultOfMarketPaginationResultOfListOfMarketDeal | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal;
}
