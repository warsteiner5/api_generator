import { QuotationSessionCancellationRequestNewAlt } from '../../models/quotation-session-cancellation-request-new-alt.interface';
import { ApiQuotationSessionCancellationRequestNewAltDto } from '../../../swagger/models/api-quotation-session-cancellation-request-new';

export function adaptApiQuotationSessionCancellationRequestNewAltDto(source?: QuotationSessionCancellationRequestNewAlt | null): ApiQuotationSessionCancellationRequestNewAltDto {
  return {
    CancellationReason: source?.cancellationReason,
    RejectionDate: source?.rejectionDate,
    TradeGuid: source?.tradeGuid,
  };
}
