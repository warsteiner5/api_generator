import { ApiRejectApplicationDealRequestAltDto } from '../../../swagger/models/api-reject-application-deal-request';
import { RejectApplicationDealRequestAlt } from '../../models/reject-application-deal-request-alt.interface';

export function adaptRejectApplicationDealRequestAltToUI(source?: ApiRejectApplicationDealRequestAltDto | null): RejectApplicationDealRequestAlt {
  return {
    applicationId: source?.ApplicationId ?? 0,
    rejectionReason: source?.RejectionReason ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
