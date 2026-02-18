import { NotificationsSendDealWarningNotificationForMmo$Params } from '../../../swagger/fn/notifications/notifications-send-deal-warning-notification-for-mmo';

export interface NotificationsSendDealWarningNotificationForMmoParams {
  tradeId: number;
  dealId: number;
}

export const notificationsSendDealWarningNotificationForMmoParamsAdapter = {
  adapt(params?: NotificationsSendDealWarningNotificationForMmoParams): NotificationsSendDealWarningNotificationForMmo$Params {
    if (!params) {
      return {} as NotificationsSendDealWarningNotificationForMmo$Params;
    }
    return {
      tradeId: params.tradeId,
      dealId: params.dealId,
    };
  }
};
