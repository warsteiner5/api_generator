import { ApiMarketTradePersonAltDto } from '../../../swagger/models/api-market-trade-person';
import { MarketTradePersonAlt } from '../../models/market-trade-person-alt.interface';

export function adaptMarketTradePersonAltToUI(source?: ApiMarketTradePersonAltDto | null): MarketTradePersonAlt {
  return {
    contactEmail: source?.ContactEmail ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    phone: source?.Phone ?? '',
    position: source?.Position ?? '',
  };
}
