import { QuotationSessionNewEdit$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-edit';

export interface QuotationSessionNewEditParams {
  tradeGuid: string;
}

export const quotationSessionNewEditParamsAdapter = {
  adapt(params?: QuotationSessionNewEditParams): QuotationSessionNewEdit$Params {
    if (!params) {
      return {} as QuotationSessionNewEdit$Params;
    }
    return {
      tradeGuid: params.tradeGuid,
    };
  }
};
