/* tslint:disable */
/* eslint-disable */
import { ApiBiddingInfoTypeAltEnum } from '../models/api-bidding-info-type';
import { ApiBiddingParticipationStatusAltEnum } from '../models/api-bidding-participation-status';
export interface ApiCompletedBiddingInfoAltDto {
  BestBid?: number | null;
  Comment?: string | null;
  CurrentUserBestBid?: number | null;
  CurrentUserRank?: number | null;
  EndDate?: string;
  InfoType?: ApiBiddingInfoTypeAltEnum;
  IsWinner?: boolean;
  Name?: string | null;
  ParticipantsCount?: number;
  ParticipationStatus?: ApiBiddingParticipationStatusAltEnum;
  ReductionPrice?: number;
  StartPrice?: number;
  WaitingFinalProposal?: boolean;
  WinnerOrganizationId?: string | null;
  WinnerOrganizationName?: string | null;
}
