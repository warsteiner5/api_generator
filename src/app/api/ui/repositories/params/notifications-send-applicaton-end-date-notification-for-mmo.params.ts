import { NotificationsSendApplicatonEndDateNotificationForMmo$Params } from '../../../swagger/fn/notifications/notifications-send-applicaton-end-date-notification-for-mmo';

export interface NotificationsSendApplicatonEndDateNotificationForMmoParams {
  tradeId: number;
}

export const notificationsSendApplicatonEndDateNotificationForMmoParamsAdapter = {
  adapt(params?: NotificationsSendApplicatonEndDateNotificationForMmoParams): NotificationsSendApplicatonEndDateNotificationForMmo$Params {
    if (!params) {
      return {} as NotificationsSendApplicatonEndDateNotificationForMmo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
