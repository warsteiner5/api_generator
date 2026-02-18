import { MarketJsonResultOfBoolean } from '../../models/market-json-result-of-boolean.interface';
import { ApiMarketJsonResultOfBoolean } from '../../../swagger/models/api-market-json-result-of-boolean';

export function adaptApiMarketJsonResultOfBoolean(source?: MarketJsonResultOfBoolean | null): ApiMarketJsonResultOfBoolean {
  return (source ?? {}) as ApiMarketJsonResultOfBoolean;
}
