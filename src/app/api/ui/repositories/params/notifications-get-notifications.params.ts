import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { NotificationsGetNotifications$Params } from '../../../swagger/fn/notifications/notifications-get-notifications';
import { adaptApiNotificationFilterObjectAltDto } from '../../adapters/toDto/api-notification-filter-object.adapter';

export interface NotificationsGetNotificationsParams {
  body?: NotificationFilterObjectAlt;
}

export const notificationsGetNotificationsParamsAdapter = {
  adapt(params?: NotificationsGetNotificationsParams): NotificationsGetNotifications$Params {
    if (!params) {
      return {} as NotificationsGetNotifications$Params;
    }
    return {
      body: adaptApiNotificationFilterObjectAltDto(params.body),
    };
  }
};
