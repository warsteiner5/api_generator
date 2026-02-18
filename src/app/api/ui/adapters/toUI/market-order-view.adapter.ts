import { ApiMarketOrderViewDto } from '../../../swagger/models/api-market-order-view-dto';
import { MarketOrderView } from '../../models/market-order-view.interface';

export function adaptMarketOrderViewToUI(source?: ApiMarketOrderViewDto | null): MarketOrderView {
  return (source ?? {}) as MarketOrderView;
}
