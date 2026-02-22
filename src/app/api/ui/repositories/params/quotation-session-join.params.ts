import { QuotationSessionJoin$Params } from '../../../swagger/fn/quotation-session/quotation-session-join';
import { QuotationSessionJoinAlt } from '../../models/quotation-session-join-alt.interface';
import { apiQuotationSessionJoinAltDtoAdapter } from '../../adapters/models/api-quotation-session-join.adapter';

// @ts-ignore
export interface QuotationSessionJoinParams {
  body?: QuotationSessionJoinAlt;
}

export function quotationSessionJoinAdapter(params?: QuotationSessionJoinParams): QuotationSessionJoin$Params {
  if (!params) {
    return {} as QuotationSessionJoin$Params;
  }
  return {
      body: apiQuotationSessionJoinAltDtoAdapter(params.body),
  };
}
