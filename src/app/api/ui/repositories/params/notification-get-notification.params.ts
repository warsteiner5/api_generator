import { NotificationGetNotification$Params } from '../../../swagger/fn/notification/notification-get-notification';

export interface NotificationGetNotificationParams {
  id: number;
}

export const notificationGetNotificationParamsAdapter = {
  adapt(params?: NotificationGetNotificationParams): NotificationGetNotification$Params {
    if (!params) {
      return {} as NotificationGetNotification$Params;
    }
    return {
      id: params.id,
    };
  }
};
