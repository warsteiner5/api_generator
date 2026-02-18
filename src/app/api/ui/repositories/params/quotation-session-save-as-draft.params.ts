import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionSaveAsDraft$Params } from '../../../swagger/fn/quotation-session/quotation-session-save-as-draft';
import { adaptApiQuotationSessionAltDto } from '../../adapters/toDto/api-quotation-session.adapter';

export interface QuotationSessionSaveAsDraftParams {
  body?: QuotationSessionAlt;
}

export const quotationSessionSaveAsDraftParamsAdapter = {
  adapt(params?: QuotationSessionSaveAsDraftParams): QuotationSessionSaveAsDraft$Params {
    if (!params) {
      return {} as QuotationSessionSaveAsDraft$Params;
    }
    return {
      body: adaptApiQuotationSessionAltDto(params.body),
    };
  }
};
