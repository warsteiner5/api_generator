import { TradesGetConsiderationProtocol$Params } from '../../../swagger/fn/trades/trades-get-consideration-protocol';

// @ts-ignore
export interface TradesGetConsiderationProtocolParams {
  id: number;
}

export function tradesGetConsiderationProtocolAdapter(params?: TradesGetConsiderationProtocolParams): TradesGetConsiderationProtocol$Params {
  if (!params) {
    return {} as TradesGetConsiderationProtocol$Params;
  }
  return {
      id: params.id,
  };
}
