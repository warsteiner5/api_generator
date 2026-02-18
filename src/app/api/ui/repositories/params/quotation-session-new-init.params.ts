import { QuotationSessionNewInit$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-init';

export interface QuotationSessionNewInitParams {
}

export const quotationSessionNewInitParamsAdapter = {
  adapt(params?: QuotationSessionNewInitParams): QuotationSessionNewInit$Params {
    if (!params) {
      return {} as QuotationSessionNewInit$Params;
    }
    return {
    };
  }
};
