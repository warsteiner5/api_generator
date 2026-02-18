import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionCreate$Params } from '../../../swagger/fn/quotation-session/quotation-session-create';
import { adaptApiQuotationSessionAltDto } from '../../adapters/toDto/api-quotation-session.adapter';

export interface QuotationSessionCreateParams {
  body?: QuotationSessionAlt;
}

export const quotationSessionCreateParamsAdapter = {
  adapt(params?: QuotationSessionCreateParams): QuotationSessionCreate$Params {
    if (!params) {
      return {} as QuotationSessionCreate$Params;
    }
    return {
      body: adaptApiQuotationSessionAltDto(params.body),
    };
  }
};
