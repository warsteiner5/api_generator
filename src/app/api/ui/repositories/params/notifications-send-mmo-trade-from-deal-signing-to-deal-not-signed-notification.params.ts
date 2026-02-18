import { NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Params } from '../../../swagger/fn/notifications/notifications-send-mmo-trade-from-deal-signing-to-deal-not-signed-notification';

export interface NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParams {
  tradeId: number;
  dealId: number;
}

export const notificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParamsAdapter = {
  adapt(params?: NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParams): NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Params {
    if (!params) {
      return {} as NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Params;
    }
    return {
      tradeId: params.tradeId,
      dealId: params.dealId,
    };
  }
};
