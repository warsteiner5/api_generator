import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarket } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-plan-lot-market.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto | null): MarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarket {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarket;
}
