import { MarketJsonResultOfNotification } from '../../models/market-json-result-of-notification.interface';
import { ApiMarketJsonResultOfNotificationDto } from '../../../swagger/models/api-market-json-result-of-notification-dto';

export function adaptApiMarketJsonResultOfNotificationDto(source?: MarketJsonResultOfNotification | null): ApiMarketJsonResultOfNotificationDto {
  return (source ?? {}) as ApiMarketJsonResultOfNotificationDto;
}
