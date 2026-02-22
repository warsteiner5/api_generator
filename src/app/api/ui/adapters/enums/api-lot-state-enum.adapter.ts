import { LotStateEnum } from '../../enums/lot-state.enum';
import { ApiLotStateEnum } from '../../../swagger/models/api-lot-state-enum';

export const apiLotStateEnumAdapter = (source?: LotStateEnum | null): ApiLotStateEnum => {
  switch (source) {
    case LotStateEnum.Publication:
      return ApiLotStateEnum.Publication;
    case LotStateEnum.FilingApplications:
      return ApiLotStateEnum.FilingApplications;
    case LotStateEnum.ReviewApplications:
      return ApiLotStateEnum.ReviewApplications;
    case LotStateEnum.Withdrawn:
      return ApiLotStateEnum.Withdrawn;
    case LotStateEnum.AuctionWaiting:
      return ApiLotStateEnum.AuctionWaiting;
    case LotStateEnum.NotTookPlace:
      return ApiLotStateEnum.NotTookPlace;
    case LotStateEnum.AuctionInProgress:
      return ApiLotStateEnum.AuctionInProgress;
    case LotStateEnum.DeterminingWinner:
      return ApiLotStateEnum.DeterminingWinner;
    case LotStateEnum.DealSigning:
      return ApiLotStateEnum.DealSigning;
    case LotStateEnum.DealComplete:
      return ApiLotStateEnum.DealComplete;
    case LotStateEnum.Suspended:
      return ApiLotStateEnum.Suspended;
    case LotStateEnum.RetradingWaiting:
      return ApiLotStateEnum.RetradingWaiting;
    case LotStateEnum.RetradingInProgress:
      return ApiLotStateEnum.RetradingInProgress;
    case LotStateEnum.ReviewFirstPartApplications:
      return ApiLotStateEnum.ReviewFirstPartApplications;
    case LotStateEnum.ReviewSecondPartApplications:
      return ApiLotStateEnum.ReviewSecondPartApplications;
    case LotStateEnum.DealRejected:
      return ApiLotStateEnum.DealRejected;
    case LotStateEnum.ReviewingWaiting:
      return ApiLotStateEnum.ReviewingWaiting;
    case LotStateEnum.FinalProposalsReviewing:
      return ApiLotStateEnum.FinalProposalsReviewing;
    case LotStateEnum.FilingPreliminaryApplications:
      return ApiLotStateEnum.FilingPreliminaryApplications;
    case LotStateEnum.RefinementDocuments:
      return ApiLotStateEnum.RefinementDocuments;
    case LotStateEnum.OpenAccess:
      return ApiLotStateEnum.OpenAccess;
    case LotStateEnum.EvaluationApplication:
      return ApiLotStateEnum.EvaluationApplication;
    case LotStateEnum.ReadyToPublish:
      return ApiLotStateEnum.ReadyToPublish;
    case LotStateEnum.SpecificationProposalsDiscussion:
      return ApiLotStateEnum.SpecificationProposalsDiscussion;
    case LotStateEnum.SpecificationProposalsDiscussionWaiting:
      return ApiLotStateEnum.SpecificationProposalsDiscussionWaiting;
    case LotStateEnum.FinalProposalsReviewWaiting:
      return ApiLotStateEnum.FinalProposalsReviewWaiting;
    case LotStateEnum.DeterminingWinnerWaiting:
      return ApiLotStateEnum.DeterminingWinnerWaiting;
    case LotStateEnum.SpecificationDiscussion:
      return ApiLotStateEnum.SpecificationDiscussion;
    case LotStateEnum.Qualification:
      return ApiLotStateEnum.Qualification;
    case LotStateEnum.RetradingReview:
      return ApiLotStateEnum.RetradingReview;
    case LotStateEnum.Archive:
      return ApiLotStateEnum.Archive;
    case LotStateEnum.NoApplications:
      return ApiLotStateEnum.NoApplications;
    case LotStateEnum.GeneralDiscussionAndRefinementDocuments:
      return ApiLotStateEnum.GeneralDiscussionAndRefinementDocuments;
    case LotStateEnum.GeneralFilingApplications:
      return ApiLotStateEnum.GeneralFilingApplications;
    case LotStateEnum.Active:
      return ApiLotStateEnum.Active;
    case LotStateEnum.GeneralTrading:
      return ApiLotStateEnum.GeneralTrading;
    case LotStateEnum.Forming:
      return ApiLotStateEnum.Forming;
    default:
      throw new Error(`Enum value is not defined: LotStateEnum=${String(source)}`);
  }
}
