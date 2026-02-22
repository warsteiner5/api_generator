import { MarketFullDeal } from '../../models/market-full-deal.interface';
import { ApiMarketFullDealDto } from '../../../swagger/models/api-market-full-deal-dto';

export const apiMarketFullDealDtoAdapter = (source?: MarketFullDeal | null): ApiMarketFullDealDto => {
  return (source ?? {}) as ApiMarketFullDealDto;
}
