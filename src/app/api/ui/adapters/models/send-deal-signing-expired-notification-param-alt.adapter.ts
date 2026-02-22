import { ApiSendDealSigningExpiredNotificationParamAltDto } from '../../../swagger/models/api-send-deal-signing-expired-notification-param';
import { SendDealSigningExpiredNotificationParamAlt } from '../../models/send-deal-signing-expired-notification-param-alt.interface';

export const sendDealSigningExpiredNotificationParamAltAdapter = (source?: ApiSendDealSigningExpiredNotificationParamAltDto | null): SendDealSigningExpiredNotificationParamAlt => {
  return {
    applicationId: source?.ApplicationId,
    businessFlowType: source?.BusinessFlowType,
    isWinner: source?.IsWinner,
    tradeId: source?.TradeId,
  };
}
