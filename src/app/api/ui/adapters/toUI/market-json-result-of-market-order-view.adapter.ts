import { ApiMarketJsonResultOfMarketOrderViewDto } from '../../../swagger/models/api-market-json-result-of-market-order-view-dto';
import { MarketJsonResultOfMarketOrderView } from '../../models/market-json-result-of-market-order-view.interface';

export function adaptMarketJsonResultOfMarketOrderViewToUI(source?: ApiMarketJsonResultOfMarketOrderViewDto | null): MarketJsonResultOfMarketOrderView {
  return (source ?? {}) as MarketJsonResultOfMarketOrderView;
}
