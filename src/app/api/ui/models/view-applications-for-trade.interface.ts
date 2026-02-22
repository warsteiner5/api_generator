import { ApplicationInfoForTrade } from './application-info-for-trade.interface';
import { ApplicationRejectionReason } from './application-rejection-reason.interface';
import { DealRejectionReasonList } from './deal-rejection-reason-list.interface';
import { DealStateEnum } from '../enums/deal-state.enum';

// @ts-ignore
export interface ViewApplicationsForTrade {
  applications: ApplicationInfoForTrade[];
  dealId: number;
  dealRejectionReasonList: DealRejectionReasonList;
  dealState: DealStateEnum;
  isApplicationAlreadyCreated: boolean;
  isWaitingPeriodEnabled: boolean;
  rejectionReasons: ApplicationRejectionReason[];
}
