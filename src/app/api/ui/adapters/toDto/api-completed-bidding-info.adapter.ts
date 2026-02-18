import { CompletedBiddingInfoAlt } from '../../models/completed-bidding-info-alt.interface';
import { ApiCompletedBiddingInfoAltDto } from '../../../swagger/models/api-completed-bidding-info';
import { adaptApiBiddingInfoTypeAltEnum } from './api-bidding-info-type.adapter';
import { adaptApiBiddingParticipationStatusAltEnum } from './api-bidding-participation-status.adapter';

export function adaptApiCompletedBiddingInfoAltDto(source?: CompletedBiddingInfoAlt | null): ApiCompletedBiddingInfoAltDto {
  return {
    BestBid: source?.bestBid,
    Comment: source?.comment,
    CurrentUserBestBid: source?.currentUserBestBid,
    CurrentUserRank: source?.currentUserRank,
    EndDate: source?.endDate,
    InfoType: adaptApiBiddingInfoTypeAltEnum(source?.infoType),
    IsWinner: source?.isWinner,
    Name: source?.name,
    ParticipantsCount: source?.participantsCount,
    ParticipationStatus: adaptApiBiddingParticipationStatusAltEnum(source?.participationStatus),
    ReductionPrice: source?.reductionPrice,
    StartPrice: source?.startPrice,
    WaitingFinalProposal: source?.waitingFinalProposal,
    WinnerOrganizationId: source?.winnerOrganizationId,
    WinnerOrganizationName: source?.winnerOrganizationName,
  };
}
