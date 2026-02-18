import { ApiFinishReviewApplicationDto } from '../../../swagger/models/api-finish-review-application-dto';
import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { adaptApplicationReviewToUI } from './application-review.adapter';
import { adaptTradeDocumentToUI } from './trade-document.adapter';

export function adaptFinishReviewApplicationToUI(source?: ApiFinishReviewApplicationDto | null): FinishReviewApplication {
  return {
    applicationReviews: (source?.ApplicationReviews ?? []).map((item) => adaptApplicationReviewToUI(item)),
    checkIfLotStateDealSigning: source?.CheckIfLotStateDealSigning ?? false,
    currentStageId: source?.CurrentStageId ?? 0,
    fileIdList: (source?.FileIdList ?? []).map((item) => adaptTradeDocumentToUI(item)),
    isOrder: source?.IsOrder ?? false,
    isSingleParticipantContractForKrista: source?.IsSingleParticipantContractForKrista ?? false,
    lotAuctionId: source?.LotAuctionId ?? 0,
    lotId: source?.LotId ?? 0,
    tradeId: source?.TradeId ?? 0,
  };
}
