import { ApiDoNotConcludeDealRequestDto } from '../../../swagger/models/api-do-not-conclude-deal-request-dto';
import { DoNotConcludeDealRequest } from '../../models/do-not-conclude-deal-request.interface';

export const doNotConcludeDealRequestAdapter = (source?: ApiDoNotConcludeDealRequestDto | null): DoNotConcludeDealRequest => {
  return {
    applicationId: source?.ApplicationId,
    lotId: source?.LotId,
    reason: source?.Reason,
    tradeId: source?.TradeId,
  };
}
