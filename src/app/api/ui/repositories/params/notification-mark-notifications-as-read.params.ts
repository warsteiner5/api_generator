import { NotificationMarkNotificationsAsRead$Params } from '../../../swagger/fn/notification/notification-mark-notifications-as-read';

// @ts-ignore
export interface NotificationMarkNotificationsAsReadParams {
  body?: number[];
}

export function notificationMarkNotificationsAsReadAdapter(params?: NotificationMarkNotificationsAsReadParams): NotificationMarkNotificationsAsRead$Params {
  if (!params) {
    return {} as NotificationMarkNotificationsAsRead$Params;
  }
  return {
      body: params.body,
  };
}
