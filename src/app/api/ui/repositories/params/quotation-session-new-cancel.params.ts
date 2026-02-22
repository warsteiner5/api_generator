import { QuotationSessionCancellationRequestNewAlt } from '../../models/quotation-session-cancellation-request-new-alt.interface';
import { QuotationSessionNewCancel$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-cancel';
import { apiQuotationSessionCancellationRequestNewAltDtoAdapter } from '../../adapters/models/api-quotation-session-cancellation-request-new.adapter';

// @ts-ignore
export interface QuotationSessionNewCancelParams {
  body?: QuotationSessionCancellationRequestNewAlt;
}

export function quotationSessionNewCancelAdapter(params?: QuotationSessionNewCancelParams): QuotationSessionNewCancel$Params {
  if (!params) {
    return {} as QuotationSessionNewCancel$Params;
  }
  return {
      body: apiQuotationSessionCancellationRequestNewAltDtoAdapter(params.body),
  };
}
