import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionSaveAsDraft$Params } from '../../../swagger/fn/quotation-session/quotation-session-save-as-draft';
import { apiQuotationSessionAltDtoAdapter } from '../../adapters/models/api-quotation-session.adapter';

// @ts-ignore
export interface QuotationSessionSaveAsDraftParams {
  body?: QuotationSessionAlt;
}

export function quotationSessionSaveAsDraftAdapter(params?: QuotationSessionSaveAsDraftParams): QuotationSessionSaveAsDraft$Params {
  if (!params) {
    return {} as QuotationSessionSaveAsDraft$Params;
  }
  return {
      body: apiQuotationSessionAltDtoAdapter(params.body),
  };
}
