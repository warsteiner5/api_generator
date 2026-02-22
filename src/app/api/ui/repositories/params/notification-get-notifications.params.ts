import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { NotificationGetNotifications$Params } from '../../../swagger/fn/notification/notification-get-notifications';
import { apiNotificationFilterObjectAltDtoAdapter } from '../../adapters/models/api-notification-filter-object.adapter';

// @ts-ignore
export interface NotificationGetNotificationsParams {
  body?: NotificationFilterObjectAlt;
}

export function notificationGetNotificationsAdapter(params?: NotificationGetNotificationsParams): NotificationGetNotifications$Params {
  if (!params) {
    return {} as NotificationGetNotifications$Params;
  }
  return {
      body: apiNotificationFilterObjectAltDtoAdapter(params.body),
  };
}
