import { QuotationSessionGet$Params } from '../../../swagger/fn/quotation-session/quotation-session-get';

export interface QuotationSessionGetParams {
  id: number;
}

export const quotationSessionGetParamsAdapter = {
  adapt(params?: QuotationSessionGetParams): QuotationSessionGet$Params {
    if (!params) {
      return {} as QuotationSessionGet$Params;
    }
    return {
      id: params.id,
    };
  }
};
