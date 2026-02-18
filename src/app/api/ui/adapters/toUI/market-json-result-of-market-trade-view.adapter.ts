import { ApiMarketJsonResultOfMarketTradeViewDto } from '../../../swagger/models/api-market-json-result-of-market-trade-view-dto';
import { MarketJsonResultOfMarketTradeView } from '../../models/market-json-result-of-market-trade-view.interface';

export function adaptMarketJsonResultOfMarketTradeViewToUI(source?: ApiMarketJsonResultOfMarketTradeViewDto | null): MarketJsonResultOfMarketTradeView {
  return (source ?? {}) as MarketJsonResultOfMarketTradeView;
}
