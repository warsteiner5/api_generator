import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionNewCreate$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-create';
import { apiQuotationSessionAltDtoAdapter } from '../../adapters/models/api-quotation-session.adapter';

// @ts-ignore
export interface QuotationSessionNewCreateParams {
  body?: QuotationSessionAlt;
}

export function quotationSessionNewCreateAdapter(params?: QuotationSessionNewCreateParams): QuotationSessionNewCreate$Params {
  if (!params) {
    return {} as QuotationSessionNewCreate$Params;
  }
  return {
      body: apiQuotationSessionAltDtoAdapter(params.body),
  };
}
