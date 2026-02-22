import { NotificationsSendApplicatonEndDateNotificationForMmo$Params } from '../../../swagger/fn/notifications/notifications-send-applicaton-end-date-notification-for-mmo';

// @ts-ignore
export interface NotificationsSendApplicatonEndDateNotificationForMmoParams {
  tradeId: number;
}

export function notificationsSendApplicatonEndDateNotificationForMmoAdapter(params?: NotificationsSendApplicatonEndDateNotificationForMmoParams): NotificationsSendApplicatonEndDateNotificationForMmo$Params {
  if (!params) {
    return {} as NotificationsSendApplicatonEndDateNotificationForMmo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
