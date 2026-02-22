import { RejectApplicationDealRequestAlt } from '../../models/reject-application-deal-request-alt.interface';
import { ApiRejectApplicationDealRequestAltDto } from '../../../swagger/models/api-reject-application-deal-request';

export const apiRejectApplicationDealRequestAltDtoAdapter = (source?: RejectApplicationDealRequestAlt | null): ApiRejectApplicationDealRequestAltDto => {
  return {
    ApplicationId: source?.applicationId,
    RejectionReason: source?.rejectionReason,
    TradeId: source?.tradeId,
  };
}
