import { ApiDoNotConcludeDealRequestDto } from '../../../swagger/models/api-do-not-conclude-deal-request-dto';
import { DoNotConcludeDealRequest } from '../../models/do-not-conclude-deal-request.interface';

export function adaptDoNotConcludeDealRequestToUI(source?: ApiDoNotConcludeDealRequestDto | null): DoNotConcludeDealRequest {
  return {
    applicationId: source?.ApplicationId ?? 0,
    lotId: source?.LotId ?? 0,
    reason: source?.Reason ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
