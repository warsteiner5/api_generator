import { ApiMarketJsonResultOfDateTime } from '../../../swagger/models/api-market-json-result-of-date-time';
import { MarketJsonResultOfDateTime } from '../../models/market-json-result-of-date-time.interface';

export function adaptMarketJsonResultOfDateTimeToUI(source?: ApiMarketJsonResultOfDateTime | null): MarketJsonResultOfDateTime {
  return (source ?? {}) as MarketJsonResultOfDateTime;
}
