import { MarketJsonResultOfMessengerStatus } from '../../models/market-json-result-of-messenger-status.interface';
import { ApiMarketJsonResultOfMessengerStatus } from '../../../swagger/models/api-market-json-result-of-messenger-status';

export function adaptApiMarketJsonResultOfMessengerStatus(source?: MarketJsonResultOfMessengerStatus | null): ApiMarketJsonResultOfMessengerStatus {
  return (source ?? {}) as ApiMarketJsonResultOfMessengerStatus;
}
