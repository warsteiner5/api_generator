import { ApiLotStateEnum } from '../../../swagger/models/api-lot-state-enum';
import { LotStateEnum } from '../../enums/lot-state.enum';

export function adaptLotStateEnumToUI(source?: ApiLotStateEnum | null): LotStateEnum {
  switch (source) {
    case ApiLotStateEnum.Publication:
      return LotStateEnum.Publication;
    case ApiLotStateEnum.FilingApplications:
      return LotStateEnum.FilingApplications;
    case ApiLotStateEnum.ReviewApplications:
      return LotStateEnum.ReviewApplications;
    case ApiLotStateEnum.Withdrawn:
      return LotStateEnum.Withdrawn;
    case ApiLotStateEnum.AuctionWaiting:
      return LotStateEnum.AuctionWaiting;
    case ApiLotStateEnum.NotTookPlace:
      return LotStateEnum.NotTookPlace;
    case ApiLotStateEnum.AuctionInProgress:
      return LotStateEnum.AuctionInProgress;
    case ApiLotStateEnum.DeterminingWinner:
      return LotStateEnum.DeterminingWinner;
    case ApiLotStateEnum.DealSigning:
      return LotStateEnum.DealSigning;
    case ApiLotStateEnum.DealComplete:
      return LotStateEnum.DealComplete;
    case ApiLotStateEnum.Suspended:
      return LotStateEnum.Suspended;
    case ApiLotStateEnum.RetradingWaiting:
      return LotStateEnum.RetradingWaiting;
    case ApiLotStateEnum.RetradingInProgress:
      return LotStateEnum.RetradingInProgress;
    case ApiLotStateEnum.ReviewFirstPartApplications:
      return LotStateEnum.ReviewFirstPartApplications;
    case ApiLotStateEnum.ReviewSecondPartApplications:
      return LotStateEnum.ReviewSecondPartApplications;
    case ApiLotStateEnum.DealRejected:
      return LotStateEnum.DealRejected;
    case ApiLotStateEnum.ReviewingWaiting:
      return LotStateEnum.ReviewingWaiting;
    case ApiLotStateEnum.FinalProposalsReviewing:
      return LotStateEnum.FinalProposalsReviewing;
    case ApiLotStateEnum.FilingPreliminaryApplications:
      return LotStateEnum.FilingPreliminaryApplications;
    case ApiLotStateEnum.RefinementDocuments:
      return LotStateEnum.RefinementDocuments;
    case ApiLotStateEnum.OpenAccess:
      return LotStateEnum.OpenAccess;
    case ApiLotStateEnum.EvaluationApplication:
      return LotStateEnum.EvaluationApplication;
    case ApiLotStateEnum.ReadyToPublish:
      return LotStateEnum.ReadyToPublish;
    case ApiLotStateEnum.SpecificationProposalsDiscussion:
      return LotStateEnum.SpecificationProposalsDiscussion;
    case ApiLotStateEnum.SpecificationProposalsDiscussionWaiting:
      return LotStateEnum.SpecificationProposalsDiscussionWaiting;
    case ApiLotStateEnum.FinalProposalsReviewWaiting:
      return LotStateEnum.FinalProposalsReviewWaiting;
    case ApiLotStateEnum.DeterminingWinnerWaiting:
      return LotStateEnum.DeterminingWinnerWaiting;
    case ApiLotStateEnum.SpecificationDiscussion:
      return LotStateEnum.SpecificationDiscussion;
    case ApiLotStateEnum.Qualification:
      return LotStateEnum.Qualification;
    case ApiLotStateEnum.RetradingReview:
      return LotStateEnum.RetradingReview;
    case ApiLotStateEnum.Archive:
      return LotStateEnum.Archive;
    case ApiLotStateEnum.NoApplications:
      return LotStateEnum.NoApplications;
    case ApiLotStateEnum.GeneralDiscussionAndRefinementDocuments:
      return LotStateEnum.GeneralDiscussionAndRefinementDocuments;
    case ApiLotStateEnum.GeneralFilingApplications:
      return LotStateEnum.GeneralFilingApplications;
    case ApiLotStateEnum.Active:
      return LotStateEnum.Active;
    case ApiLotStateEnum.GeneralTrading:
      return LotStateEnum.GeneralTrading;
    case ApiLotStateEnum.Forming:
      return LotStateEnum.Forming;
    default:
      throw new Error(`Enum value is not defined: ApiLotStateEnum=${String(source)}`);
  }
}
