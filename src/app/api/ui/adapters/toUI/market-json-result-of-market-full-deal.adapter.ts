import { ApiMarketJsonResultOfMarketFullDealDto } from '../../../swagger/models/api-market-json-result-of-market-full-deal-dto';
import { MarketJsonResultOfMarketFullDeal } from '../../models/market-json-result-of-market-full-deal.interface';

export function adaptMarketJsonResultOfMarketFullDealToUI(source?: ApiMarketJsonResultOfMarketFullDealDto | null): MarketJsonResultOfMarketFullDeal {
  return (source ?? {}) as MarketJsonResultOfMarketFullDeal;
}
