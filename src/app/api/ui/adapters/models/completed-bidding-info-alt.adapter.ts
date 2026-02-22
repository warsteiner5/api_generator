import { ApiCompletedBiddingInfoAltDto } from '../../../swagger/models/api-completed-bidding-info';
import { CompletedBiddingInfoAlt } from '../../models/completed-bidding-info-alt.interface';
import { biddingInfoTypeAltEnumAdapter } from '../enums/bidding-info-type-alt-enum.adapter';
import { biddingParticipationStatusAltEnumAdapter } from '../enums/bidding-participation-status-alt-enum.adapter';

export const completedBiddingInfoAltAdapter = (source?: ApiCompletedBiddingInfoAltDto | null): CompletedBiddingInfoAlt => {
  return {
    bestBid: source?.BestBid,
    comment: source?.Comment,
    currentUserBestBid: source?.CurrentUserBestBid,
    currentUserRank: source?.CurrentUserRank,
    endDate: source?.EndDate,
    infoType: source?.InfoType === null ? undefined : biddingInfoTypeAltEnumAdapter(source?.InfoType),
    isWinner: source?.IsWinner,
    name: source?.Name,
    participantsCount: source?.ParticipantsCount,
    participationStatus: source?.ParticipationStatus === null ? undefined : biddingParticipationStatusAltEnumAdapter(source?.ParticipationStatus),
    reductionPrice: source?.ReductionPrice,
    startPrice: source?.StartPrice,
    waitingFinalProposal: source?.WaitingFinalProposal,
    winnerOrganizationId: source?.WinnerOrganizationId,
    winnerOrganizationName: source?.WinnerOrganizationName,
  };
}
