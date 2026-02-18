import { TradesGetConsiderationProtocol$Params } from '../../../swagger/fn/trades/trades-get-consideration-protocol';

export interface TradesGetConsiderationProtocolParams {
  id: number;
}

export const tradesGetConsiderationProtocolParamsAdapter = {
  adapt(params?: TradesGetConsiderationProtocolParams): TradesGetConsiderationProtocol$Params {
    if (!params) {
      return {} as TradesGetConsiderationProtocol$Params;
    }
    return {
      id: params.id,
    };
  }
};
