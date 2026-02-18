import { ApiMarketJsonResultOfMessengerStatus } from '../../../swagger/models/api-market-json-result-of-messenger-status';
import { MarketJsonResultOfMessengerStatus } from '../../models/market-json-result-of-messenger-status.interface';

export function adaptMarketJsonResultOfMessengerStatusToUI(source?: ApiMarketJsonResultOfMessengerStatus | null): MarketJsonResultOfMessengerStatus {
  return (source ?? {}) as MarketJsonResultOfMessengerStatus;
}
