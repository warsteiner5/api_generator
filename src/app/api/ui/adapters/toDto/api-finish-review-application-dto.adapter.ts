import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { ApiFinishReviewApplicationDto } from '../../../swagger/models/api-finish-review-application-dto';
import { adaptApiApplicationReviewDto } from './api-application-review-dto.adapter';
import { adaptApiTradeDocumentDto } from './api-trade-document-dto.adapter';

export function adaptApiFinishReviewApplicationDto(source?: FinishReviewApplication | null): ApiFinishReviewApplicationDto {
  return {
    ApplicationReviews: (source?.applicationReviews ?? []).map((item) => adaptApiApplicationReviewDto(item)),
    CheckIfLotStateDealSigning: source?.checkIfLotStateDealSigning,
    CurrentStageId: source?.currentStageId,
    FileIdList: (source?.fileIdList ?? []).map((item) => adaptApiTradeDocumentDto(item)),
    IsOrder: source?.isOrder,
    IsSingleParticipantContractForKrista: source?.isSingleParticipantContractForKrista,
    LotAuctionId: source?.lotAuctionId,
    LotId: source?.lotId,
    TradeId: source?.tradeId,
  };
}
