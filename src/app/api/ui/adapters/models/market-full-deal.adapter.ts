import { ApiMarketFullDealDto } from '../../../swagger/models/api-market-full-deal-dto';
import { MarketFullDeal } from '../../models/market-full-deal.interface';

export const marketFullDealAdapter = (source?: ApiMarketFullDealDto | null): MarketFullDeal => {
  return (source ?? {}) as MarketFullDeal;
}
