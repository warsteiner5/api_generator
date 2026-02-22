import { QuotationSessionNewEdit$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-edit';

// @ts-ignore
export interface QuotationSessionNewEditParams {
  tradeGuid: string;
}

export function quotationSessionNewEditAdapter(params?: QuotationSessionNewEditParams): QuotationSessionNewEdit$Params {
  if (!params) {
    return {} as QuotationSessionNewEdit$Params;
  }
  return {
      tradeGuid: params.tradeGuid,
  };
}
