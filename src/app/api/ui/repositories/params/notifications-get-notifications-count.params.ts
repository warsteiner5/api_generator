import { NotificationsGetNotificationsCount$Params } from '../../../swagger/fn/notifications/notifications-get-notifications-count';

export interface NotificationsGetNotificationsCountParams {
}

export const notificationsGetNotificationsCountParamsAdapter = {
  adapt(params?: NotificationsGetNotificationsCountParams): NotificationsGetNotificationsCount$Params {
    if (!params) {
      return {} as NotificationsGetNotificationsCount$Params;
    }
    return {
    };
  }
};
