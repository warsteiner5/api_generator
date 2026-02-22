import { ApiMarketOrderViewDto } from '../../../swagger/models/api-market-order-view-dto';
import { MarketOrderView } from '../../models/market-order-view.interface';

export const marketOrderViewAdapter = (source?: ApiMarketOrderViewDto | null): MarketOrderView => {
  return (source ?? {}) as MarketOrderView;
}
