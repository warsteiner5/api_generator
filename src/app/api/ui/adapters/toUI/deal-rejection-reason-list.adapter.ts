import { ApiDealRejectionReasonListDto } from '../../../swagger/models/api-deal-rejection-reason-list-dto';
import { DealRejectionReasonList } from '../../models/deal-rejection-reason-list.interface';
import { adaptDealRejectionReasonToUI } from './deal-rejection-reason.adapter';

export function adaptDealRejectionReasonListToUI(source?: ApiDealRejectionReasonListDto | null): DealRejectionReasonList {
  return {
    dealRejectionReasons: (source?.DealRejectionReasons ?? []).map((item) => adaptDealRejectionReasonToUI(item)),
    enableDealRejectReasonComment: source?.EnableDealRejectReasonComment ?? false,
    enableDealRejectionReasonsList: source?.EnableDealRejectionReasonsList ?? false,
  };
}
