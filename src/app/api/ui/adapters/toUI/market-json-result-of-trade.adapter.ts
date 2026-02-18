import { ApiMarketJsonResultOfTradeDto } from '../../../swagger/models/api-market-json-result-of-trade-dto';
import { MarketJsonResultOfTrade } from '../../models/market-json-result-of-trade.interface';

export function adaptMarketJsonResultOfTradeToUI(source?: ApiMarketJsonResultOfTradeDto | null): MarketJsonResultOfTrade {
  return (source ?? {}) as MarketJsonResultOfTrade;
}
