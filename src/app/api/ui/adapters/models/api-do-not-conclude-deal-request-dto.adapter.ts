import { DoNotConcludeDealRequest } from '../../models/do-not-conclude-deal-request.interface';
import { ApiDoNotConcludeDealRequestDto } from '../../../swagger/models/api-do-not-conclude-deal-request-dto';

export const apiDoNotConcludeDealRequestDtoAdapter = (source?: DoNotConcludeDealRequest | null): ApiDoNotConcludeDealRequestDto => {
  return {
    ApplicationId: source?.applicationId,
    LotId: source?.lotId,
    Reason: source?.reason,
    TradeId: source?.tradeId,
  };
}
