import { ApiFinishReviewApplicationDto } from '../../../swagger/models/api-finish-review-application-dto';
import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { applicationReviewAdapter } from './application-review.adapter';
import { tradeDocumentAdapter } from './trade-document.adapter';

export const finishReviewApplicationAdapter = (source?: ApiFinishReviewApplicationDto | null): FinishReviewApplication => {
  return {
    applicationReviews: source?.ApplicationReviews?.map((item) => applicationReviewAdapter(item)),
    checkIfLotStateDealSigning: source?.CheckIfLotStateDealSigning,
    currentStageId: source?.CurrentStageId,
    fileIdList: source?.FileIdList?.map((item) => tradeDocumentAdapter(item)),
    isOrder: source?.IsOrder,
    isSingleParticipantContractForKrista: source?.IsSingleParticipantContractForKrista,
    lotAuctionId: source?.LotAuctionId,
    lotId: source?.LotId,
    tradeId: source?.TradeId,
  };
}
