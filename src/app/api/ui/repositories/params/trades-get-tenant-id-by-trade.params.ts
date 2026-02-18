import { TradesGetTenantIdByTrade$Params } from '../../../swagger/fn/trades/trades-get-tenant-id-by-trade';

export interface TradesGetTenantIdByTradeParams {
  tradeId: number;
}

export const tradesGetTenantIdByTradeParamsAdapter = {
  adapt(params?: TradesGetTenantIdByTradeParams): TradesGetTenantIdByTrade$Params {
    if (!params) {
      return {} as TradesGetTenantIdByTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
