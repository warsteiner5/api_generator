import { MarketJsonResultOfMarketFullOrderDeal } from '../../models/market-json-result-of-market-full-order-deal.interface';
import { ApiMarketJsonResultOfMarketFullOrderDealDto } from '../../../swagger/models/api-market-json-result-of-market-full-order-deal-dto';

export function adaptApiMarketJsonResultOfMarketFullOrderDealDto(source?: MarketJsonResultOfMarketFullOrderDeal | null): ApiMarketJsonResultOfMarketFullOrderDealDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketFullOrderDealDto;
}
