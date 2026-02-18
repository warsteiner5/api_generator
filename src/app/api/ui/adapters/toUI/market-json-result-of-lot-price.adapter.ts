import { ApiMarketJsonResultOfLotPrice } from '../../../swagger/models/api-market-json-result-of-lot-price';
import { MarketJsonResultOfLotPrice } from '../../models/market-json-result-of-lot-price.interface';

export function adaptMarketJsonResultOfLotPriceToUI(source?: ApiMarketJsonResultOfLotPrice | null): MarketJsonResultOfLotPrice {
  return (source ?? {}) as MarketJsonResultOfLotPrice;
}
