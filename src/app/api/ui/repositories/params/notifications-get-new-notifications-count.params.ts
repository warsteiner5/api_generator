import { NotificationsGetNewNotificationsCount$Params } from '../../../swagger/fn/notifications/notifications-get-new-notifications-count';

export interface NotificationsGetNewNotificationsCountParams {
}

export const notificationsGetNewNotificationsCountParamsAdapter = {
  adapt(params?: NotificationsGetNewNotificationsCountParams): NotificationsGetNewNotificationsCount$Params {
    if (!params) {
      return {} as NotificationsGetNewNotificationsCount$Params;
    }
    return {
    };
  }
};
