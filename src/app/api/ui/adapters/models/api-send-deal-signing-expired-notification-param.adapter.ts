import { SendDealSigningExpiredNotificationParamAlt } from '../../models/send-deal-signing-expired-notification-param-alt.interface';
import { ApiSendDealSigningExpiredNotificationParamAltDto } from '../../../swagger/models/api-send-deal-signing-expired-notification-param';

export const apiSendDealSigningExpiredNotificationParamAltDtoAdapter = (source?: SendDealSigningExpiredNotificationParamAlt | null): ApiSendDealSigningExpiredNotificationParamAltDto => {
  return {
    ApplicationId: source?.applicationId,
    BusinessFlowType: source?.businessFlowType,
    IsWinner: source?.isWinner,
    TradeId: source?.tradeId,
  };
}
