import { ApiNotificationFilterObjectAltDto } from '../../../swagger/models/api-notification-filter-object';
import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';

export function adaptNotificationFilterObjectAltToUI(source?: ApiNotificationFilterObjectAltDto | null): NotificationFilterObjectAlt {
  return (source ?? {}) as NotificationFilterObjectAlt;
}
