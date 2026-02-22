import { QuotationSessionJoinNewAlt } from '../../models/quotation-session-join-new-alt.interface';
import { QuotationSessionNewJoin$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-join';
import { apiQuotationSessionJoinNewAltDtoAdapter } from '../../adapters/models/api-quotation-session-join-new.adapter';

// @ts-ignore
export interface QuotationSessionNewJoinParams {
  body?: QuotationSessionJoinNewAlt;
}

export function quotationSessionNewJoinAdapter(params?: QuotationSessionNewJoinParams): QuotationSessionNewJoin$Params {
  if (!params) {
    return {} as QuotationSessionNewJoin$Params;
  }
  return {
      body: apiQuotationSessionJoinNewAltDtoAdapter(params.body),
  };
}
