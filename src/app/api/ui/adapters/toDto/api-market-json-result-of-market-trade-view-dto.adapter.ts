import { MarketJsonResultOfMarketTradeView } from '../../models/market-json-result-of-market-trade-view.interface';
import { ApiMarketJsonResultOfMarketTradeViewDto } from '../../../swagger/models/api-market-json-result-of-market-trade-view-dto';

export function adaptApiMarketJsonResultOfMarketTradeViewDto(source?: MarketJsonResultOfMarketTradeView | null): ApiMarketJsonResultOfMarketTradeViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketTradeViewDto;
}
