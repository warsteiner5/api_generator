import { ApiMarketJsonResultOfDealFullPriceChangeDto } from '../../../swagger/models/api-market-json-result-of-deal-full-price-change-dto';
import { MarketJsonResultOfDealFullPriceChange } from '../../models/market-json-result-of-deal-full-price-change.interface';

export function adaptMarketJsonResultOfDealFullPriceChangeToUI(source?: ApiMarketJsonResultOfDealFullPriceChangeDto | null): MarketJsonResultOfDealFullPriceChange {
  return (source ?? {}) as MarketJsonResultOfDealFullPriceChange;
}
