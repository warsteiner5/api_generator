import { QuotationSessionImportDetails$Params } from '../../../swagger/fn/quotation-session/quotation-session-import-details';
import { QuotationSessionImportDetailsRequestAlt } from '../../models/quotation-session-import-details-request-alt.interface';
import { adaptApiQuotationSessionImportDetailsRequestAltDto } from '../../adapters/toDto/api-quotation-session-import-details-request.adapter';

export interface QuotationSessionImportDetailsParams {
  body?: QuotationSessionImportDetailsRequestAlt;
}

export const quotationSessionImportDetailsParamsAdapter = {
  adapt(params?: QuotationSessionImportDetailsParams): QuotationSessionImportDetails$Params {
    if (!params) {
      return {} as QuotationSessionImportDetails$Params;
    }
    return {
      body: adaptApiQuotationSessionImportDetailsRequestAltDto(params.body),
    };
  }
};
