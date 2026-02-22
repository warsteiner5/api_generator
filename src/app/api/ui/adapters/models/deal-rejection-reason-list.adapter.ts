import { ApiDealRejectionReasonListDto } from '../../../swagger/models/api-deal-rejection-reason-list-dto';
import { DealRejectionReasonList } from '../../models/deal-rejection-reason-list.interface';
import { dealRejectionReasonAdapter } from './deal-rejection-reason.adapter';

export const dealRejectionReasonListAdapter = (source?: ApiDealRejectionReasonListDto | null): DealRejectionReasonList => {
  return {
    dealRejectionReasons: source?.DealRejectionReasons?.map((item) => dealRejectionReasonAdapter(item)),
    enableDealRejectReasonComment: source?.EnableDealRejectReasonComment,
    enableDealRejectionReasonsList: source?.EnableDealRejectionReasonsList,
  };
}
