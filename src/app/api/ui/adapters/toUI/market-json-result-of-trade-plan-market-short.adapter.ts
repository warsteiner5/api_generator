import { ApiMarketJsonResultOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-json-result-of-trade-plan-market-short-dto';
import { MarketJsonResultOfTradePlanMarketShort } from '../../models/market-json-result-of-trade-plan-market-short.interface';

export function adaptMarketJsonResultOfTradePlanMarketShortToUI(source?: ApiMarketJsonResultOfTradePlanMarketShortDto | null): MarketJsonResultOfTradePlanMarketShort {
  return (source ?? {}) as MarketJsonResultOfTradePlanMarketShort;
}
