import { TradesRegisterForTradeLot$Params } from '../../../swagger/fn/trades/trades-register-for-trade-lot';

// @ts-ignore
export interface TradesRegisterForTradeLotParams {
  id: number;
}

export function tradesRegisterForTradeLotAdapter(params?: TradesRegisterForTradeLotParams): TradesRegisterForTradeLot$Params {
  if (!params) {
    return {} as TradesRegisterForTradeLot$Params;
  }
  return {
      id: params.id,
  };
}
