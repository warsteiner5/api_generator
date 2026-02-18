import { TradesRegisterForTradeLot$Params } from '../../../swagger/fn/trades/trades-register-for-trade-lot';

export interface TradesRegisterForTradeLotParams {
  id: number;
}

export const tradesRegisterForTradeLotParamsAdapter = {
  adapt(params?: TradesRegisterForTradeLotParams): TradesRegisterForTradeLot$Params {
    if (!params) {
      return {} as TradesRegisterForTradeLot$Params;
    }
    return {
      id: params.id,
    };
  }
};
