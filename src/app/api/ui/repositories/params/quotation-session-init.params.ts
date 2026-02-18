import { QuotationSessionInit$Params } from '../../../swagger/fn/quotation-session/quotation-session-init';

export interface QuotationSessionInitParams {
}

export const quotationSessionInitParamsAdapter = {
  adapt(params?: QuotationSessionInitParams): QuotationSessionInit$Params {
    if (!params) {
      return {} as QuotationSessionInit$Params;
    }
    return {
    };
  }
};
