import { QuotationSessionInit$Params } from '../../../swagger/fn/quotation-session/quotation-session-init';

// @ts-ignore
export interface QuotationSessionInitParams {
}

export function quotationSessionInitAdapter(params?: QuotationSessionInitParams): QuotationSessionInit$Params {
  if (!params) {
    return {} as QuotationSessionInit$Params;
  }
  return {
  };
}
