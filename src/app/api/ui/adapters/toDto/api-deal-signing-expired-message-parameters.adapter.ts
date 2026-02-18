import { DealSigningExpiredMessageParametersAlt } from '../../models/deal-signing-expired-message-parameters-alt.interface';
import { ApiDealSigningExpiredMessageParametersAltDto } from '../../../swagger/models/api-deal-signing-expired-message-parameters';

export function adaptApiDealSigningExpiredMessageParametersAltDto(source?: DealSigningExpiredMessageParametersAlt | null): ApiDealSigningExpiredMessageParametersAltDto {
  return {
    DiscussionOwnerId: source?.discussionOwnerId,
    IsWinner: source?.isWinner,
    TradeId: source?.tradeId,
  };
}
