import { DealRejectionReason } from './deal-rejection-reason.interface';

// @ts-ignore
export interface DealRejectionReasonList {
  dealRejectionReasons: DealRejectionReason[];
  enableDealRejectReasonComment: boolean;
  enableDealRejectionReasonsList: boolean;
}
