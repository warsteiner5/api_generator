import { QuotationSessionCopy$Params } from '../../../swagger/fn/quotation-session/quotation-session-copy';

// @ts-ignore
export interface QuotationSessionCopyParams {
  id: number;
}

export function quotationSessionCopyAdapter(params?: QuotationSessionCopyParams): QuotationSessionCopy$Params {
  if (!params) {
    return {} as QuotationSessionCopy$Params;
  }
  return {
      id: params.id,
  };
}
