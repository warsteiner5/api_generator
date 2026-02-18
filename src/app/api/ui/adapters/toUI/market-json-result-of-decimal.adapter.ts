import { ApiMarketJsonResultOfDecimal } from '../../../swagger/models/api-market-json-result-of-decimal';
import { MarketJsonResultOfDecimal } from '../../models/market-json-result-of-decimal.interface';

export function adaptMarketJsonResultOfDecimalToUI(source?: ApiMarketJsonResultOfDecimal | null): MarketJsonResultOfDecimal {
  return (source ?? {}) as MarketJsonResultOfDecimal;
}
