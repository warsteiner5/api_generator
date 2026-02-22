import { ApiRejectApplicationDealRequestAltDto } from '../../../swagger/models/api-reject-application-deal-request';
import { RejectApplicationDealRequestAlt } from '../../models/reject-application-deal-request-alt.interface';

export const rejectApplicationDealRequestAltAdapter = (source?: ApiRejectApplicationDealRequestAltDto | null): RejectApplicationDealRequestAlt => {
  return {
    applicationId: source?.ApplicationId,
    rejectionReason: source?.RejectionReason,
    tradeId: source?.TradeId,
  };
}
