import { NotificationFilterObjectAlt } from '../../models/notification-filter-object-alt.interface';
import { NotificationGetNotifications$Params } from '../../../swagger/fn/notification/notification-get-notifications';
import { adaptApiNotificationFilterObjectAltDto } from '../../adapters/toDto/api-notification-filter-object.adapter';

export interface NotificationGetNotificationsParams {
  body?: NotificationFilterObjectAlt;
}

export const notificationGetNotificationsParamsAdapter = {
  adapt(params?: NotificationGetNotificationsParams): NotificationGetNotifications$Params {
    if (!params) {
      return {} as NotificationGetNotifications$Params;
    }
    return {
      body: adaptApiNotificationFilterObjectAltDto(params.body),
    };
  }
};
