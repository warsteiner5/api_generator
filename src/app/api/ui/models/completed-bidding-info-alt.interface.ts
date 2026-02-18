import { BiddingInfoTypeAltEnum } from '../enums/bidding-info-type-alt.enum';
import { BiddingParticipationStatusAltEnum } from '../enums/bidding-participation-status-alt.enum';

export interface CompletedBiddingInfoAlt {
  bestBid: number;
  comment: string;
  currentUserBestBid: number;
  currentUserRank: number;
  endDate: string;
  infoType: BiddingInfoTypeAltEnum;
  isWinner: boolean;
  name: string;
  participantsCount: number;
  participationStatus: BiddingParticipationStatusAltEnum;
  reductionPrice: number;
  startPrice: number;
  waitingFinalProposal: boolean;
  winnerOrganizationId: string;
  winnerOrganizationName: string;
}
