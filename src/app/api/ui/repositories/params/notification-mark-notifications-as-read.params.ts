import { NotificationMarkNotificationsAsRead$Params } from '../../../swagger/fn/notification/notification-mark-notifications-as-read';

export interface NotificationMarkNotificationsAsReadParams {
  body?: number[];
}

export const notificationMarkNotificationsAsReadParamsAdapter = {
  adapt(params?: NotificationMarkNotificationsAsReadParams): NotificationMarkNotificationsAsRead$Params {
    if (!params) {
      return {} as NotificationMarkNotificationsAsRead$Params;
    }
    return {
      body: params.body,
    };
  }
};
