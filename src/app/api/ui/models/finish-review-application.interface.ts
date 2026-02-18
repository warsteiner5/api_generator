import { ApplicationReview } from './application-review.interface';
import { TradeDocument } from './trade-document.interface';

export interface FinishReviewApplication {
  applicationReviews: ApplicationReview[];
  checkIfLotStateDealSigning: boolean;
  currentStageId: number;
  fileIdList: TradeDocument[];
  isOrder: boolean;
  isSingleParticipantContractForKrista: boolean;
  lotAuctionId: number;
  lotId: number;
  tradeId: number;
}
