import { NicRegistryFindMyTrade$Params } from '../../../swagger/fn/nic-registry/nic-registry-find-my-trade';

// @ts-ignore
export interface NicRegistryFindMyTradeParams {
  tradeNumber: string;
}

export function nicRegistryFindMyTradeAdapter(params?: NicRegistryFindMyTradeParams): NicRegistryFindMyTrade$Params {
  if (!params) {
    return {} as NicRegistryFindMyTrade$Params;
  }
  return {
      tradeNumber: params.tradeNumber,
  };
}
