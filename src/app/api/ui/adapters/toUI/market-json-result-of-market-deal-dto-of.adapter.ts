import { ApiMarketJsonResultOfMarketDealDtoOf } from '../../../swagger/models/api-market-json-result-of-market-deal-dto-of';
import { MarketJsonResultOfMarketDealDtoOf } from '../../models/market-json-result-of-market-deal-dto-of.interface';

export function adaptMarketJsonResultOfMarketDealDtoOfToUI(source?: ApiMarketJsonResultOfMarketDealDtoOf | null): MarketJsonResultOfMarketDealDtoOf {
  return (source ?? {}) as MarketJsonResultOfMarketDealDtoOf;
}
