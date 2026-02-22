import { QuotationSessionEdit$Params } from '../../../swagger/fn/quotation-session/quotation-session-edit';

// @ts-ignore
export interface QuotationSessionEditParams {
  id: number;
}

export function quotationSessionEditAdapter(params?: QuotationSessionEditParams): QuotationSessionEdit$Params {
  if (!params) {
    return {} as QuotationSessionEdit$Params;
  }
  return {
      id: params.id,
  };
}
