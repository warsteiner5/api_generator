import { TradeProtocolsGetAutoProtocol$Params } from '../../../swagger/fn/trade-protocols/trade-protocols-get-auto-protocol';

export interface TradeProtocolsGetAutoProtocolParams {
  tradeId: number;
}

export const tradeProtocolsGetAutoProtocolParamsAdapter = {
  adapt(params?: TradeProtocolsGetAutoProtocolParams): TradeProtocolsGetAutoProtocol$Params {
    if (!params) {
      return {} as TradeProtocolsGetAutoProtocol$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
