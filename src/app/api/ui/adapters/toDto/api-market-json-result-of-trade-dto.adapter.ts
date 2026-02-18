import { MarketJsonResultOfTrade } from '../../models/market-json-result-of-trade.interface';
import { ApiMarketJsonResultOfTradeDto } from '../../../swagger/models/api-market-json-result-of-trade-dto';

export function adaptApiMarketJsonResultOfTradeDto(source?: MarketJsonResultOfTrade | null): ApiMarketJsonResultOfTradeDto {
  return (source ?? {}) as ApiMarketJsonResultOfTradeDto;
}
