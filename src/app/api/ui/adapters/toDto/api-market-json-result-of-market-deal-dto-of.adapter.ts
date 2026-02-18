import { MarketJsonResultOfMarketDealDtoOf } from '../../models/market-json-result-of-market-deal-dto-of.interface';
import { ApiMarketJsonResultOfMarketDealDtoOf } from '../../../swagger/models/api-market-json-result-of-market-deal-dto-of';

export function adaptApiMarketJsonResultOfMarketDealDtoOf(source?: MarketJsonResultOfMarketDealDtoOf | null): ApiMarketJsonResultOfMarketDealDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfMarketDealDtoOf;
}
