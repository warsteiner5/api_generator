import { EisDataSearchPurchaseMethods$Params } from '../../../swagger/fn/eis-data/eis-data-search-purchase-methods';

// @ts-ignore
export interface EisDataSearchPurchaseMethodsParams {
  tradeId: number;
}

export function eisDataSearchPurchaseMethodsAdapter(params?: EisDataSearchPurchaseMethodsParams): EisDataSearchPurchaseMethods$Params {
  if (!params) {
    return {} as EisDataSearchPurchaseMethods$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
