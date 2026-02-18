import { MarketJsonResultOfDateTime } from '../../models/market-json-result-of-date-time.interface';
import { ApiMarketJsonResultOfDateTime } from '../../../swagger/models/api-market-json-result-of-date-time';

export function adaptApiMarketJsonResultOfDateTime(source?: MarketJsonResultOfDateTime | null): ApiMarketJsonResultOfDateTime {
  return (source ?? {}) as ApiMarketJsonResultOfDateTime;
}
