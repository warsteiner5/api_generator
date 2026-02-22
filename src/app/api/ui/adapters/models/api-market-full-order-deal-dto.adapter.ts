import { MarketFullOrderDeal } from '../../models/market-full-order-deal.interface';
import { ApiMarketFullOrderDealDto } from '../../../swagger/models/api-market-full-order-deal-dto';

export const apiMarketFullOrderDealDtoAdapter = (source?: MarketFullOrderDeal | null): ApiMarketFullOrderDealDto => {
  return (source ?? {}) as ApiMarketFullOrderDealDto;
}
