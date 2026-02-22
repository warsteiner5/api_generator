import { TradesSaveSupplierFromMmo$Params } from '../../../swagger/fn/trades/trades-save-supplier-from-mmo';

// @ts-ignore
export interface TradesSaveSupplierFromMmoParams {
  tradeId: number;
  sessionGuid: string;
}

export function tradesSaveSupplierFromMmoAdapter(params?: TradesSaveSupplierFromMmoParams): TradesSaveSupplierFromMmo$Params {
  if (!params) {
    return {} as TradesSaveSupplierFromMmo$Params;
  }
  return {
      tradeId: params.tradeId,
      sessionGuid: params.sessionGuid,
  };
}
