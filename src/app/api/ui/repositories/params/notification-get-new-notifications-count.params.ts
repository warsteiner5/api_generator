import { NotificationGetNewNotificationsCount$Params } from '../../../swagger/fn/notification/notification-get-new-notifications-count';

export interface NotificationGetNewNotificationsCountParams {
}

export const notificationGetNewNotificationsCountParamsAdapter = {
  adapt(params?: NotificationGetNewNotificationsCountParams): NotificationGetNewNotificationsCount$Params {
    if (!params) {
      return {} as NotificationGetNewNotificationsCount$Params;
    }
    return {
    };
  }
};
