import { ApiMarketJsonResultOfBoolean } from '../../../swagger/models/api-market-json-result-of-boolean';
import { MarketJsonResultOfBoolean } from '../../models/market-json-result-of-boolean.interface';

export function adaptMarketJsonResultOfBooleanToUI(source?: ApiMarketJsonResultOfBoolean | null): MarketJsonResultOfBoolean {
  return (source ?? {}) as MarketJsonResultOfBoolean;
}
