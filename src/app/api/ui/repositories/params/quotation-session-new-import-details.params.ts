import { QuotationSessionImportDetailsRequestAlt } from '../../models/quotation-session-import-details-request-alt.interface';
import { QuotationSessionNewImportDetails$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-import-details';
import { adaptApiQuotationSessionImportDetailsRequestAltDto } from '../../adapters/toDto/api-quotation-session-import-details-request.adapter';

export interface QuotationSessionNewImportDetailsParams {
  body?: QuotationSessionImportDetailsRequestAlt;
}

export const quotationSessionNewImportDetailsParamsAdapter = {
  adapt(params?: QuotationSessionNewImportDetailsParams): QuotationSessionNewImportDetails$Params {
    if (!params) {
      return {} as QuotationSessionNewImportDetails$Params;
    }
    return {
      body: adaptApiQuotationSessionImportDetailsRequestAltDto(params.body),
    };
  }
};
