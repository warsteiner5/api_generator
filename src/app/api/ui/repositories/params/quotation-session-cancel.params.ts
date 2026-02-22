import { QuotationSessionCancel$Params } from '../../../swagger/fn/quotation-session/quotation-session-cancel';
import { QuotationSessionCancellationRequestAlt } from '../../models/quotation-session-cancellation-request-alt.interface';
import { apiQuotationSessionCancellationRequestAltDtoAdapter } from '../../adapters/models/api-quotation-session-cancellation-request.adapter';

// @ts-ignore
export interface QuotationSessionCancelParams {
  body?: QuotationSessionCancellationRequestAlt;
}

export function quotationSessionCancelAdapter(params?: QuotationSessionCancelParams): QuotationSessionCancel$Params {
  if (!params) {
    return {} as QuotationSessionCancel$Params;
  }
  return {
      body: apiQuotationSessionCancellationRequestAltDtoAdapter(params.body),
  };
}
