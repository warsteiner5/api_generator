import { NotificationsSendDealSigningExpiredNotification$Params } from '../../../swagger/fn/notifications/notifications-send-deal-signing-expired-notification';
import { SendDealSigningExpiredNotificationParamAlt } from '../../models/send-deal-signing-expired-notification-param-alt.interface';
import { apiSendDealSigningExpiredNotificationParamAltDtoAdapter } from '../../adapters/models/api-send-deal-signing-expired-notification-param.adapter';

// @ts-ignore
export interface NotificationsSendDealSigningExpiredNotificationParams {
  body?: SendDealSigningExpiredNotificationParamAlt;
}

export function notificationsSendDealSigningExpiredNotificationAdapter(params?: NotificationsSendDealSigningExpiredNotificationParams): NotificationsSendDealSigningExpiredNotification$Params {
  if (!params) {
    return {} as NotificationsSendDealSigningExpiredNotification$Params;
  }
  return {
      body: apiSendDealSigningExpiredNotificationParamAltDtoAdapter(params.body),
  };
}
