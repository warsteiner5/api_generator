import { NotificationsGetNotification$Params } from '../../../swagger/fn/notifications/notifications-get-notification';

// @ts-ignore
export interface NotificationsGetNotificationParams {
  id: number;
}

export function notificationsGetNotificationAdapter(params?: NotificationsGetNotificationParams): NotificationsGetNotification$Params {
  if (!params) {
    return {} as NotificationsGetNotification$Params;
  }
  return {
      id: params.id,
  };
}
