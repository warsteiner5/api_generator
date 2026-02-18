/* tslint:disable */
/* eslint-disable */
import { ApiApplicationReviewDto } from '../models/api-application-review-dto';
import { ApiTradeDocumentDto } from '../models/api-trade-document-dto';
export interface ApiFinishReviewApplicationDto {
  ApplicationReviews?: Array<ApiApplicationReviewDto> | null;
  CheckIfLotStateDealSigning?: boolean;
  CurrentStageId?: number;
  FileIdList?: Array<ApiTradeDocumentDto> | null;
  IsOrder?: boolean;
  IsSingleParticipantContractForKrista?: boolean;
  LotAuctionId?: number | null;
  LotId?: number;
  TradeId?: number;
}
