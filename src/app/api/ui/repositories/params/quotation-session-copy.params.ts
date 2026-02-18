import { QuotationSessionCopy$Params } from '../../../swagger/fn/quotation-session/quotation-session-copy';

export interface QuotationSessionCopyParams {
  id: number;
}

export const quotationSessionCopyParamsAdapter = {
  adapt(params?: QuotationSessionCopyParams): QuotationSessionCopy$Params {
    if (!params) {
      return {} as QuotationSessionCopy$Params;
    }
    return {
      id: params.id,
    };
  }
};
