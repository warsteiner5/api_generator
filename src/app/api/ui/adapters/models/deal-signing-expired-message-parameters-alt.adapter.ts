import { ApiDealSigningExpiredMessageParametersAltDto } from '../../../swagger/models/api-deal-signing-expired-message-parameters';
import { DealSigningExpiredMessageParametersAlt } from '../../models/deal-signing-expired-message-parameters-alt.interface';

export const dealSigningExpiredMessageParametersAltAdapter = (source?: ApiDealSigningExpiredMessageParametersAltDto | null): DealSigningExpiredMessageParametersAlt => {
  return {
    discussionOwnerId: source?.DiscussionOwnerId,
    isWinner: source?.IsWinner,
    tradeId: source?.TradeId,
  };
}
