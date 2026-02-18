import { QuotationSessionCancellationRequestNewAlt } from '../../models/quotation-session-cancellation-request-new-alt.interface';
import { QuotationSessionNewCancel$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-cancel';
import { adaptApiQuotationSessionCancellationRequestNewAltDto } from '../../adapters/toDto/api-quotation-session-cancellation-request-new.adapter';

export interface QuotationSessionNewCancelParams {
  body?: QuotationSessionCancellationRequestNewAlt;
}

export const quotationSessionNewCancelParamsAdapter = {
  adapt(params?: QuotationSessionNewCancelParams): QuotationSessionNewCancel$Params {
    if (!params) {
      return {} as QuotationSessionNewCancel$Params;
    }
    return {
      body: adaptApiQuotationSessionCancellationRequestNewAltDto(params.body),
    };
  }
};
