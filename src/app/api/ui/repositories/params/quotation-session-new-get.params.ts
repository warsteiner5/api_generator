import { QuotationSessionNewGet$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-get';

// @ts-ignore
export interface QuotationSessionNewGetParams {
  tradeGuid: string;
}

export function quotationSessionNewGetAdapter(params?: QuotationSessionNewGetParams): QuotationSessionNewGet$Params {
  if (!params) {
    return {} as QuotationSessionNewGet$Params;
  }
  return {
      tradeGuid: params.tradeGuid,
  };
}
