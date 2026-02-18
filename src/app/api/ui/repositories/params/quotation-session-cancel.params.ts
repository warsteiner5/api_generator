import { QuotationSessionCancel$Params } from '../../../swagger/fn/quotation-session/quotation-session-cancel';
import { QuotationSessionCancellationRequestAlt } from '../../models/quotation-session-cancellation-request-alt.interface';
import { adaptApiQuotationSessionCancellationRequestAltDto } from '../../adapters/toDto/api-quotation-session-cancellation-request.adapter';

export interface QuotationSessionCancelParams {
  body?: QuotationSessionCancellationRequestAlt;
}

export const quotationSessionCancelParamsAdapter = {
  adapt(params?: QuotationSessionCancelParams): QuotationSessionCancel$Params {
    if (!params) {
      return {} as QuotationSessionCancel$Params;
    }
    return {
      body: adaptApiQuotationSessionCancellationRequestAltDto(params.body),
    };
  }
};
