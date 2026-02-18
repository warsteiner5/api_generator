import { QuotationSessionCancellationRequestAlt } from '../../models/quotation-session-cancellation-request-alt.interface';
import { ApiQuotationSessionCancellationRequestAltDto } from '../../../swagger/models/api-quotation-session-cancellation-request';

export function adaptApiQuotationSessionCancellationRequestAltDto(source?: QuotationSessionCancellationRequestAlt | null): ApiQuotationSessionCancellationRequestAltDto {
  return {
    CancellationReason: source?.cancellationReason,
    RejectionDate: source?.rejectionDate,
    TradeId: source?.tradeId,
  };
}
