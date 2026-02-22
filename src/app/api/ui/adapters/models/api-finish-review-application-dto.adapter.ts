import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { ApiFinishReviewApplicationDto } from '../../../swagger/models/api-finish-review-application-dto';
import { apiApplicationReviewDtoAdapter } from './api-application-review-dto.adapter';
import { apiTradeDocumentDtoAdapter } from './api-trade-document-dto.adapter';

export const apiFinishReviewApplicationDtoAdapter = (source?: FinishReviewApplication | null): ApiFinishReviewApplicationDto => {
  return {
    ApplicationReviews: source?.applicationReviews?.map((item) => apiApplicationReviewDtoAdapter(item)),
    CheckIfLotStateDealSigning: source?.checkIfLotStateDealSigning,
    CurrentStageId: source?.currentStageId,
    FileIdList: source?.fileIdList?.map((item) => apiTradeDocumentDtoAdapter(item)),
    IsOrder: source?.isOrder,
    IsSingleParticipantContractForKrista: source?.isSingleParticipantContractForKrista,
    LotAuctionId: source?.lotAuctionId,
    LotId: source?.lotId,
    TradeId: source?.tradeId,
  };
}
