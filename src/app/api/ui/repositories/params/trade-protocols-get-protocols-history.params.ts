import { TradeProtocolsGetProtocolsHistory$Params } from '../../../swagger/fn/trade-protocols/trade-protocols-get-protocols-history';

export interface TradeProtocolsGetProtocolsHistoryParams {
  tradeId: number;
}

export const tradeProtocolsGetProtocolsHistoryParamsAdapter = {
  adapt(params?: TradeProtocolsGetProtocolsHistoryParams): TradeProtocolsGetProtocolsHistory$Params {
    if (!params) {
      return {} as TradeProtocolsGetProtocolsHistory$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
