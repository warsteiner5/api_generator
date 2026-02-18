import { MarketJsonResultOfDecimal } from '../../models/market-json-result-of-decimal.interface';
import { ApiMarketJsonResultOfDecimal } from '../../../swagger/models/api-market-json-result-of-decimal';

export function adaptApiMarketJsonResultOfDecimal(source?: MarketJsonResultOfDecimal | null): ApiMarketJsonResultOfDecimal {
  return (source ?? {}) as ApiMarketJsonResultOfDecimal;
}
