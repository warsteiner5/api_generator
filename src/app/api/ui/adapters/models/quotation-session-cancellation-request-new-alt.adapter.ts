import { ApiQuotationSessionCancellationRequestNewAltDto } from '../../../swagger/models/api-quotation-session-cancellation-request-new';
import { QuotationSessionCancellationRequestNewAlt } from '../../models/quotation-session-cancellation-request-new-alt.interface';

export const quotationSessionCancellationRequestNewAltAdapter = (source?: ApiQuotationSessionCancellationRequestNewAltDto | null): QuotationSessionCancellationRequestNewAlt => {
  return {
    cancellationReason: source?.CancellationReason,
    rejectionDate: source?.RejectionDate,
    tradeGuid: source?.TradeGuid,
  };
}
