import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionCreate$Params } from '../../../swagger/fn/quotation-session/quotation-session-create';
import { apiQuotationSessionAltDtoAdapter } from '../../adapters/models/api-quotation-session.adapter';

// @ts-ignore
export interface QuotationSessionCreateParams {
  body?: QuotationSessionAlt;
}

export function quotationSessionCreateAdapter(params?: QuotationSessionCreateParams): QuotationSessionCreate$Params {
  if (!params) {
    return {} as QuotationSessionCreate$Params;
  }
  return {
      body: apiQuotationSessionAltDtoAdapter(params.body),
  };
}
