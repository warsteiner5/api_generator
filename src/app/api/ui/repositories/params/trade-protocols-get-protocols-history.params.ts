import { TradeProtocolsGetProtocolsHistory$Params } from '../../../swagger/fn/trade-protocols/trade-protocols-get-protocols-history';

// @ts-ignore
export interface TradeProtocolsGetProtocolsHistoryParams {
  tradeId: number;
}

export function tradeProtocolsGetProtocolsHistoryAdapter(params?: TradeProtocolsGetProtocolsHistoryParams): TradeProtocolsGetProtocolsHistory$Params {
  if (!params) {
    return {} as TradeProtocolsGetProtocolsHistory$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
