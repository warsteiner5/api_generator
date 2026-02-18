import { ApiQuotationSessionCancellationRequestAltDto } from '../../../swagger/models/api-quotation-session-cancellation-request';
import { QuotationSessionCancellationRequestAlt } from '../../models/quotation-session-cancellation-request-alt.interface';

export function adaptQuotationSessionCancellationRequestAltToUI(source?: ApiQuotationSessionCancellationRequestAltDto | null): QuotationSessionCancellationRequestAlt {
  return {
    cancellationReason: source?.CancellationReason ?? '',
    rejectionDate: source?.RejectionDate ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
