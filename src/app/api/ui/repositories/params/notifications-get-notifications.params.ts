import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { NotificationsGetNotifications$Params } from '../../../swagger/fn/notifications/notifications-get-notifications';
import { apiNotificationFilterObjectAltDtoAdapter } from '../../adapters/models/api-notification-filter-object.adapter';

// @ts-ignore
export interface NotificationsGetNotificationsParams {
  body?: NotificationFilterObjectAlt;
}

export function notificationsGetNotificationsAdapter(params?: NotificationsGetNotificationsParams): NotificationsGetNotifications$Params {
  if (!params) {
    return {} as NotificationsGetNotifications$Params;
  }
  return {
      body: apiNotificationFilterObjectAltDtoAdapter(params.body),
  };
}
