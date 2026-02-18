import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionNewCreate$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-create';
import { adaptApiQuotationSessionAltDto } from '../../adapters/toDto/api-quotation-session.adapter';

export interface QuotationSessionNewCreateParams {
  body?: QuotationSessionAlt;
}

export const quotationSessionNewCreateParamsAdapter = {
  adapt(params?: QuotationSessionNewCreateParams): QuotationSessionNewCreate$Params {
    if (!params) {
      return {} as QuotationSessionNewCreate$Params;
    }
    return {
      body: adaptApiQuotationSessionAltDto(params.body),
    };
  }
};
