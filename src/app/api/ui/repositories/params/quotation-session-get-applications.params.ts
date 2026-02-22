import { QuotationSessionGetApplications$Params } from '../../../swagger/fn/quotation-session/quotation-session-get-applications';

// @ts-ignore
export interface QuotationSessionGetApplicationsParams {
  id: number;
}

export function quotationSessionGetApplicationsAdapter(params?: QuotationSessionGetApplicationsParams): QuotationSessionGetApplications$Params {
  if (!params) {
    return {} as QuotationSessionGetApplications$Params;
  }
  return {
      id: params.id,
  };
}
