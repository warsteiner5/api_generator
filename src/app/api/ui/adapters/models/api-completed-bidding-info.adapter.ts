import { CompletedBiddingInfoAlt } from '../../models/completed-bidding-info-alt.interface';
import { ApiCompletedBiddingInfoAltDto } from '../../../swagger/models/api-completed-bidding-info';
import { apiBiddingInfoTypeAltEnumAdapter } from '../enums/api-bidding-info-type.adapter';
import { apiBiddingParticipationStatusAltEnumAdapter } from '../enums/api-bidding-participation-status.adapter';

export const apiCompletedBiddingInfoAltDtoAdapter = (source?: CompletedBiddingInfoAlt | null): ApiCompletedBiddingInfoAltDto => {
  return {
    BestBid: source?.bestBid,
    Comment: source?.comment,
    CurrentUserBestBid: source?.currentUserBestBid,
    CurrentUserRank: source?.currentUserRank,
    EndDate: source?.endDate,
    InfoType: source?.infoType === null ? undefined : apiBiddingInfoTypeAltEnumAdapter(source?.infoType),
    IsWinner: source?.isWinner,
    Name: source?.name,
    ParticipantsCount: source?.participantsCount,
    ParticipationStatus: source?.participationStatus === null ? undefined : apiBiddingParticipationStatusAltEnumAdapter(source?.participationStatus),
    ReductionPrice: source?.reductionPrice,
    StartPrice: source?.startPrice,
    WaitingFinalProposal: source?.waitingFinalProposal,
    WinnerOrganizationId: source?.winnerOrganizationId,
    WinnerOrganizationName: source?.winnerOrganizationName,
  };
}
