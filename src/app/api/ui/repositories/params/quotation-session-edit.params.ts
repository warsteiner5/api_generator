import { QuotationSessionEdit$Params } from '../../../swagger/fn/quotation-session/quotation-session-edit';

export interface QuotationSessionEditParams {
  id: number;
}

export const quotationSessionEditParamsAdapter = {
  adapt(params?: QuotationSessionEditParams): QuotationSessionEdit$Params {
    if (!params) {
      return {} as QuotationSessionEdit$Params;
    }
    return {
      id: params.id,
    };
  }
};
