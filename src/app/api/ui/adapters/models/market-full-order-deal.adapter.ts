import { ApiMarketFullOrderDealDto } from '../../../swagger/models/api-market-full-order-deal-dto';
import { MarketFullOrderDeal } from '../../models/market-full-order-deal.interface';

export const marketFullOrderDealAdapter = (source?: ApiMarketFullOrderDealDto | null): MarketFullOrderDeal => {
  return (source ?? {}) as MarketFullOrderDeal;
}
