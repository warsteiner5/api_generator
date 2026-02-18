import { NotificationsGetNotification$Params } from '../../../swagger/fn/notifications/notifications-get-notification';

export interface NotificationsGetNotificationParams {
  id: number;
}

export const notificationsGetNotificationParamsAdapter = {
  adapt(params?: NotificationsGetNotificationParams): NotificationsGetNotification$Params {
    if (!params) {
      return {} as NotificationsGetNotification$Params;
    }
    return {
      id: params.id,
    };
  }
};
