import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { QuotationSessionNewSaveAsDraft$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-save-as-draft';
import { adaptApiQuotationSessionAltDto } from '../../adapters/toDto/api-quotation-session.adapter';

export interface QuotationSessionNewSaveAsDraftParams {
  body?: QuotationSessionAlt;
}

export const quotationSessionNewSaveAsDraftParamsAdapter = {
  adapt(params?: QuotationSessionNewSaveAsDraftParams): QuotationSessionNewSaveAsDraft$Params {
    if (!params) {
      return {} as QuotationSessionNewSaveAsDraft$Params;
    }
    return {
      body: adaptApiQuotationSessionAltDto(params.body),
    };
  }
};
