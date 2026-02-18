import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShort } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-plan-market-short.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto | null): MarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShort {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShort;
}
