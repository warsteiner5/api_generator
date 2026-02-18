import { ApiDealSigningExpiredMessageParametersAltDto } from '../../../swagger/models/api-deal-signing-expired-message-parameters';
import { DealSigningExpiredMessageParametersAlt } from '../../models/deal-signing-expired-message-parameters-alt.interface';

export function adaptDealSigningExpiredMessageParametersAltToUI(source?: ApiDealSigningExpiredMessageParametersAltDto | null): DealSigningExpiredMessageParametersAlt {
  return {
    discussionOwnerId: source?.DiscussionOwnerId ?? 0,
    isWinner: source?.IsWinner ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
