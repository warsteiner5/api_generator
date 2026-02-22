import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionNewSaveAsDraft$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-save-as-draft';
import { apiQuotationSessionAltDtoAdapter } from '../../adapters/models/api-quotation-session.adapter';

// @ts-ignore
export interface QuotationSessionNewSaveAsDraftParams {
  body?: QuotationSessionAlt;
}

export function quotationSessionNewSaveAsDraftAdapter(params?: QuotationSessionNewSaveAsDraftParams): QuotationSessionNewSaveAsDraft$Params {
  if (!params) {
    return {} as QuotationSessionNewSaveAsDraft$Params;
  }
  return {
      body: apiQuotationSessionAltDtoAdapter(params.body),
  };
}
