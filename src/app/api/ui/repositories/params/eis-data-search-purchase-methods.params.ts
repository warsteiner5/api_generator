import { EisDataSearchPurchaseMethods$Params } from '../../../swagger/fn/eis-data/eis-data-search-purchase-methods';

export interface EisDataSearchPurchaseMethodsParams {
  tradeId: number;
}

export const eisDataSearchPurchaseMethodsParamsAdapter = {
  adapt(params?: EisDataSearchPurchaseMethodsParams): EisDataSearchPurchaseMethods$Params {
    if (!params) {
      return {} as EisDataSearchPurchaseMethods$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
