import { QuotationSessionGetItems$Params } from '../../../swagger/fn/quotation-session/quotation-session-get-items';

export interface QuotationSessionGetItemsParams {
  id: number;
  pageNumber: number;
  pageSize: number;
}

export const quotationSessionGetItemsParamsAdapter = {
  adapt(params?: QuotationSessionGetItemsParams): QuotationSessionGetItems$Params {
    if (!params) {
      return {} as QuotationSessionGetItems$Params;
    }
    return {
      id: params.id,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
    };
  }
};
