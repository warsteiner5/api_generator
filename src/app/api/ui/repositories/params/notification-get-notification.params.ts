import { NotificationGetNotification$Params } from '../../../swagger/fn/notification/notification-get-notification';

// @ts-ignore
export interface NotificationGetNotificationParams {
  id: number;
}

export function notificationGetNotificationAdapter(params?: NotificationGetNotificationParams): NotificationGetNotification$Params {
  if (!params) {
    return {} as NotificationGetNotification$Params;
  }
  return {
      id: params.id,
  };
}
