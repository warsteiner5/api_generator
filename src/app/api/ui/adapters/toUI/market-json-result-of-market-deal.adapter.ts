import { ApiMarketJsonResultOfMarketDealDto } from '../../../swagger/models/api-market-json-result-of-market-deal-dto';
import { MarketJsonResultOfMarketDeal } from '../../models/market-json-result-of-market-deal.interface';

export function adaptMarketJsonResultOfMarketDealToUI(source?: ApiMarketJsonResultOfMarketDealDto | null): MarketJsonResultOfMarketDeal {
  return (source ?? {}) as MarketJsonResultOfMarketDeal;
}
