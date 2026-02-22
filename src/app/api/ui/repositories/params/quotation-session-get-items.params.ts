import { QuotationSessionGetItems$Params } from '../../../swagger/fn/quotation-session/quotation-session-get-items';

// @ts-ignore
export interface QuotationSessionGetItemsParams {
  id: number;
  pageNumber: number;
  pageSize: number;
}

export function quotationSessionGetItemsAdapter(params?: QuotationSessionGetItemsParams): QuotationSessionGetItems$Params {
  if (!params) {
    return {} as QuotationSessionGetItems$Params;
  }
  return {
      id: params.id,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
  };
}
