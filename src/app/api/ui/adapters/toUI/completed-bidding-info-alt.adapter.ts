import { ApiCompletedBiddingInfoAltDto } from '../../../swagger/models/api-completed-bidding-info';
import { CompletedBiddingInfoAlt } from '../../models/completed-bidding-info-alt.interface';
import { adaptBiddingInfoTypeAltEnumToUI } from './bidding-info-type-alt-enum.adapter';
import { adaptBiddingParticipationStatusAltEnumToUI } from './bidding-participation-status-alt-enum.adapter';

export function adaptCompletedBiddingInfoAltToUI(source?: ApiCompletedBiddingInfoAltDto | null): CompletedBiddingInfoAlt {
  return {
    bestBid: source?.BestBid ?? 0,
    comment: source?.Comment ?? '',
    currentUserBestBid: source?.CurrentUserBestBid ?? 0,
    currentUserRank: source?.CurrentUserRank ?? 0,
    endDate: source?.EndDate ?? '',
    infoType: adaptBiddingInfoTypeAltEnumToUI(source?.InfoType),
    isWinner: source?.IsWinner ?? false,
    name: source?.Name ?? '',
    participantsCount: source?.ParticipantsCount ?? 0,
    participationStatus: adaptBiddingParticipationStatusAltEnumToUI(source?.ParticipationStatus),
    reductionPrice: source?.ReductionPrice ?? 0,
    startPrice: source?.StartPrice ?? 0,
    waitingFinalProposal: source?.WaitingFinalProposal ?? false,
    winnerOrganizationId: source?.WinnerOrganizationId ?? '',
    winnerOrganizationName: source?.WinnerOrganizationName ?? '',
  };
}
