import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { ApiNotificationFilterObjectAltDto } from '../../../swagger/models/api-notification-filter-object';

export function adaptApiNotificationFilterObjectAltDto(source?: NotificationFilterObjectAlt | null): ApiNotificationFilterObjectAltDto {
  return (source ?? {}) as ApiNotificationFilterObjectAltDto;
}
