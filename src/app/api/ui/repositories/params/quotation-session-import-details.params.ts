import { QuotationSessionImportDetails$Params } from '../../../swagger/fn/quotation-session/quotation-session-import-details';
import { QuotationSessionImportDetailsRequestAlt } from '../../models/quotation-session-import-details-request-alt.interface';
import { apiQuotationSessionImportDetailsRequestAltDtoAdapter } from '../../adapters/models/api-quotation-session-import-details-request.adapter';

// @ts-ignore
export interface QuotationSessionImportDetailsParams {
  body?: QuotationSessionImportDetailsRequestAlt;
}

export function quotationSessionImportDetailsAdapter(params?: QuotationSessionImportDetailsParams): QuotationSessionImportDetails$Params {
  if (!params) {
    return {} as QuotationSessionImportDetails$Params;
  }
  return {
      body: apiQuotationSessionImportDetailsRequestAltDtoAdapter(params.body),
  };
}
