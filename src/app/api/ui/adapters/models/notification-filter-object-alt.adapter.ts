import { ApiNotificationFilterObjectAltDto } from '../../../swagger/models/api-notification-filter-object';
import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';

export const notificationFilterObjectAltAdapter = (source?: ApiNotificationFilterObjectAltDto | null): NotificationFilterObjectAlt => {
  return (source ?? {}) as NotificationFilterObjectAlt;
}
