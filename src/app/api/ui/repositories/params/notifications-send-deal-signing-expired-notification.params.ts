import { NotificationsSendDealSigningExpiredNotification$Params } from '../../../swagger/fn/notifications/notifications-send-deal-signing-expired-notification';
import { SendDealSigningExpiredNotificationParamAlt } from '../../models/send-deal-signing-expired-notification-param-alt.interface';
import { adaptApiSendDealSigningExpiredNotificationParamAltDto } from '../../adapters/toDto/api-send-deal-signing-expired-notification-param.adapter';

export interface NotificationsSendDealSigningExpiredNotificationParams {
  body?: SendDealSigningExpiredNotificationParamAlt;
}

export const notificationsSendDealSigningExpiredNotificationParamsAdapter = {
  adapt(params?: NotificationsSendDealSigningExpiredNotificationParams): NotificationsSendDealSigningExpiredNotification$Params {
    if (!params) {
      return {} as NotificationsSendDealSigningExpiredNotification$Params;
    }
    return {
      body: adaptApiSendDealSigningExpiredNotificationParamAltDto(params.body),
    };
  }
};
