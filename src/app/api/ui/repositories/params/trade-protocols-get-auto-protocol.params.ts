import { TradeProtocolsGetAutoProtocol$Params } from '../../../swagger/fn/trade-protocols/trade-protocols-get-auto-protocol';

// @ts-ignore
export interface TradeProtocolsGetAutoProtocolParams {
  tradeId: number;
}

export function tradeProtocolsGetAutoProtocolAdapter(params?: TradeProtocolsGetAutoProtocolParams): TradeProtocolsGetAutoProtocol$Params {
  if (!params) {
    return {} as TradeProtocolsGetAutoProtocol$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
