import { NotificationsMarkAllNotificationsAsRead$Params } from '../../../swagger/fn/notifications/notifications-mark-all-notifications-as-read';

export interface NotificationsMarkAllNotificationsAsReadParams {
}

export const notificationsMarkAllNotificationsAsReadParamsAdapter = {
  adapt(params?: NotificationsMarkAllNotificationsAsReadParams): NotificationsMarkAllNotificationsAsRead$Params {
    if (!params) {
      return {} as NotificationsMarkAllNotificationsAsRead$Params;
    }
    return {
    };
  }
};
