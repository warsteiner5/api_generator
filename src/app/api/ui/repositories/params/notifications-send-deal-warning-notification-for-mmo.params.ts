import { NotificationsSendDealWarningNotificationForMmo$Params } from '../../../swagger/fn/notifications/notifications-send-deal-warning-notification-for-mmo';

// @ts-ignore
export interface NotificationsSendDealWarningNotificationForMmoParams {
  tradeId: number;
  dealId: number;
}

export function notificationsSendDealWarningNotificationForMmoAdapter(params?: NotificationsSendDealWarningNotificationForMmoParams): NotificationsSendDealWarningNotificationForMmo$Params {
  if (!params) {
    return {} as NotificationsSendDealWarningNotificationForMmo$Params;
  }
  return {
      tradeId: params.tradeId,
      dealId: params.dealId,
  };
}
