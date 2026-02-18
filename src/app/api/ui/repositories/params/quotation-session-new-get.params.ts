import { QuotationSessionNewGet$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-get';

export interface QuotationSessionNewGetParams {
  tradeGuid: string;
}

export const quotationSessionNewGetParamsAdapter = {
  adapt(params?: QuotationSessionNewGetParams): QuotationSessionNewGet$Params {
    if (!params) {
      return {} as QuotationSessionNewGet$Params;
    }
    return {
      tradeGuid: params.tradeGuid,
    };
  }
};
