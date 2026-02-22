import { QuotationSessionNewGetItems$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-get-items';

// @ts-ignore
export interface QuotationSessionNewGetItemsParams {
  tradeGuid: string;
  pageNumber: number;
  pageSize: number;
}

export function quotationSessionNewGetItemsAdapter(params?: QuotationSessionNewGetItemsParams): QuotationSessionNewGetItems$Params {
  if (!params) {
    return {} as QuotationSessionNewGetItems$Params;
  }
  return {
      tradeGuid: params.tradeGuid,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
  };
}
