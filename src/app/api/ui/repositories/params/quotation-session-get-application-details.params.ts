import { QuotationSessionGetApplicationDetails$Params } from '../../../swagger/fn/quotation-session/quotation-session-get-application-details';

export interface QuotationSessionGetApplicationDetailsParams {
  id: number;
  applicationId: number;
}

export const quotationSessionGetApplicationDetailsParamsAdapter = {
  adapt(params?: QuotationSessionGetApplicationDetailsParams): QuotationSessionGetApplicationDetails$Params {
    if (!params) {
      return {} as QuotationSessionGetApplicationDetails$Params;
    }
    return {
      id: params.id,
      applicationId: params.applicationId,
    };
  }
};
