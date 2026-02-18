import { ApiMarketFullOrderDealDto } from '../../../swagger/models/api-market-full-order-deal-dto';
import { MarketFullOrderDeal } from '../../models/market-full-order-deal.interface';

export function adaptMarketFullOrderDealToUI(source?: ApiMarketFullOrderDealDto | null): MarketFullOrderDeal {
  return (source ?? {}) as MarketFullOrderDeal;
}
