import { NicRegistriesFindMyTrade$Params } from '../../../swagger/fn/nic-registries/nic-registries-find-my-trade';

// @ts-ignore
export interface NicRegistriesFindMyTradeParams {
  tradeNumber: string;
}

export function nicRegistriesFindMyTradeAdapter(params?: NicRegistriesFindMyTradeParams): NicRegistriesFindMyTrade$Params {
  if (!params) {
    return {} as NicRegistriesFindMyTrade$Params;
  }
  return {
      tradeNumber: params.tradeNumber,
  };
}
