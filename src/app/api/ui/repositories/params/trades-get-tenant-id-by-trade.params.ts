import { TradesGetTenantIdByTrade$Params } from '../../../swagger/fn/trades/trades-get-tenant-id-by-trade';

// @ts-ignore
export interface TradesGetTenantIdByTradeParams {
  tradeId: number;
}

export function tradesGetTenantIdByTradeAdapter(params?: TradesGetTenantIdByTradeParams): TradesGetTenantIdByTrade$Params {
  if (!params) {
    return {} as TradesGetTenantIdByTrade$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
