import { ApiQuotationSessionCancellationRequestAltDto } from '../../../swagger/models/api-quotation-session-cancellation-request';
import { QuotationSessionCancellationRequestAlt } from '../../models/quotation-session-cancellation-request-alt.interface';

export const quotationSessionCancellationRequestAltAdapter = (source?: ApiQuotationSessionCancellationRequestAltDto | null): QuotationSessionCancellationRequestAlt => {
  return {
    cancellationReason: source?.CancellationReason,
    rejectionDate: source?.RejectionDate,
    tradeId: source?.TradeId,
  };
}
