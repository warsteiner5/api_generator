import { QuotationSessionImportDetailsRequestAlt } from '../../models/quotation-session-import-details-request-alt.interface';
import { QuotationSessionNewImportDetails$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-import-details';
import { apiQuotationSessionImportDetailsRequestAltDtoAdapter } from '../../adapters/models/api-quotation-session-import-details-request.adapter';

// @ts-ignore
export interface QuotationSessionNewImportDetailsParams {
  body?: QuotationSessionImportDetailsRequestAlt;
}

export function quotationSessionNewImportDetailsAdapter(params?: QuotationSessionNewImportDetailsParams): QuotationSessionNewImportDetails$Params {
  if (!params) {
    return {} as QuotationSessionNewImportDetails$Params;
  }
  return {
      body: apiQuotationSessionImportDetailsRequestAltDtoAdapter(params.body),
  };
}
