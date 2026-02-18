import { MarketJsonResultOfTradePlanMarketShort } from '../../models/market-json-result-of-trade-plan-market-short.interface';
import { ApiMarketJsonResultOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-json-result-of-trade-plan-market-short-dto';

export function adaptApiMarketJsonResultOfTradePlanMarketShortDto(source?: MarketJsonResultOfTradePlanMarketShort | null): ApiMarketJsonResultOfTradePlanMarketShortDto {
  return (source ?? {}) as ApiMarketJsonResultOfTradePlanMarketShortDto;
}
