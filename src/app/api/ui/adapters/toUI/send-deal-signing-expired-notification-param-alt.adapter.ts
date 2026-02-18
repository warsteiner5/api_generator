import { ApiSendDealSigningExpiredNotificationParamAltDto } from '../../../swagger/models/api-send-deal-signing-expired-notification-param';
import { SendDealSigningExpiredNotificationParamAlt } from '../../models/send-deal-signing-expired-notification-param-alt.interface';

export function adaptSendDealSigningExpiredNotificationParamAltToUI(source?: ApiSendDealSigningExpiredNotificationParamAltDto | null): SendDealSigningExpiredNotificationParamAlt {
  return {
    applicationId: source?.ApplicationId ?? 0,
    businessFlowType: source?.BusinessFlowType ?? 0,
    isWinner: source?.IsWinner ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
