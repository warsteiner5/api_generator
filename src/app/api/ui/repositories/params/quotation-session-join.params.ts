import { QuotationSessionJoin$Params } from '../../../swagger/fn/quotation-session/quotation-session-join';
import { QuotationSessionJoinAlt } from '../../models/quotation-session-join-alt.interface';
import { adaptApiQuotationSessionJoinAltDto } from '../../adapters/toDto/api-quotation-session-join.adapter';

export interface QuotationSessionJoinParams {
  body?: QuotationSessionJoinAlt;
}

export const quotationSessionJoinParamsAdapter = {
  adapt(params?: QuotationSessionJoinParams): QuotationSessionJoin$Params {
    if (!params) {
      return {} as QuotationSessionJoin$Params;
    }
    return {
      body: adaptApiQuotationSessionJoinAltDto(params.body),
    };
  }
};
