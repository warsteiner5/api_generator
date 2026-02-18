import { ApiMarketJsonResultOfMarketFullOrderDealDto } from '../../../swagger/models/api-market-json-result-of-market-full-order-deal-dto';
import { MarketJsonResultOfMarketFullOrderDeal } from '../../models/market-json-result-of-market-full-order-deal.interface';

export function adaptMarketJsonResultOfMarketFullOrderDealToUI(source?: ApiMarketJsonResultOfMarketFullOrderDealDto | null): MarketJsonResultOfMarketFullOrderDeal {
  return (source ?? {}) as MarketJsonResultOfMarketFullOrderDeal;
}
