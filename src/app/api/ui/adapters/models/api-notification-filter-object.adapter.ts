import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { ApiNotificationFilterObjectAltDto } from '../../../swagger/models/api-notification-filter-object';

export const apiNotificationFilterObjectAltDtoAdapter = (source?: NotificationFilterObjectAlt | null): ApiNotificationFilterObjectAltDto => {
  return (source ?? {}) as ApiNotificationFilterObjectAltDto;
}
