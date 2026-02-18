import { TradesSaveSupplierFromMmo$Params } from '../../../swagger/fn/trades/trades-save-supplier-from-mmo';

export interface TradesSaveSupplierFromMmoParams {
  tradeId: number;
  sessionGuid: string;
}

export const tradesSaveSupplierFromMmoParamsAdapter = {
  adapt(params?: TradesSaveSupplierFromMmoParams): TradesSaveSupplierFromMmo$Params {
    if (!params) {
      return {} as TradesSaveSupplierFromMmo$Params;
    }
    return {
      tradeId: params.tradeId,
      sessionGuid: params.sessionGuid,
    };
  }
};
