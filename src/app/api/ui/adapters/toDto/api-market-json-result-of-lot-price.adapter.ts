import { MarketJsonResultOfLotPrice } from '../../models/market-json-result-of-lot-price.interface';
import { ApiMarketJsonResultOfLotPrice } from '../../../swagger/models/api-market-json-result-of-lot-price';

export function adaptApiMarketJsonResultOfLotPrice(source?: MarketJsonResultOfLotPrice | null): ApiMarketJsonResultOfLotPrice {
  return (source ?? {}) as ApiMarketJsonResultOfLotPrice;
}
