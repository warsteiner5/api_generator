import { MarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarket } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-plan-lot-market.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-lot-market-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarket | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarketDto;
}
