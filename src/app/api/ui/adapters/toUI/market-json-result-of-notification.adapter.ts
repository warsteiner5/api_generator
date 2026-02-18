import { ApiMarketJsonResultOfNotificationDto } from '../../../swagger/models/api-market-json-result-of-notification-dto';
import { MarketJsonResultOfNotification } from '../../models/market-json-result-of-notification.interface';

export function adaptMarketJsonResultOfNotificationToUI(source?: ApiMarketJsonResultOfNotificationDto | null): MarketJsonResultOfNotification {
  return (source ?? {}) as MarketJsonResultOfNotification;
}
