import { QuotationSessionGetApplications$Params } from '../../../swagger/fn/quotation-session/quotation-session-get-applications';

export interface QuotationSessionGetApplicationsParams {
  id: number;
}

export const quotationSessionGetApplicationsParamsAdapter = {
  adapt(params?: QuotationSessionGetApplicationsParams): QuotationSessionGetApplications$Params {
    if (!params) {
      return {} as QuotationSessionGetApplications$Params;
    }
    return {
      id: params.id,
    };
  }
};
