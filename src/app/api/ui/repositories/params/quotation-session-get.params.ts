import { QuotationSessionGet$Params } from '../../../swagger/fn/quotation-session/quotation-session-get';

// @ts-ignore
export interface QuotationSessionGetParams {
  id: number;
}

export function quotationSessionGetAdapter(params?: QuotationSessionGetParams): QuotationSessionGet$Params {
  if (!params) {
    return {} as QuotationSessionGet$Params;
  }
  return {
      id: params.id,
  };
}
