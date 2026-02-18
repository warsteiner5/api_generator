import { DealRejectionReason } from './deal-rejection-reason.interface';

export interface DealRejectionReasonList {
  dealRejectionReasons: DealRejectionReason[];
  enableDealRejectReasonComment: boolean;
  enableDealRejectionReasonsList: boolean;
}
