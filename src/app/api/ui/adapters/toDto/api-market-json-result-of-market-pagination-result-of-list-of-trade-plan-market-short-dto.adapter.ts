import { MarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShort } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-plan-market-short.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-plan-market-short-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShort | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShortDto;
}
