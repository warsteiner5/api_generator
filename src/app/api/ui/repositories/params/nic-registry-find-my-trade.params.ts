import { NicRegistryFindMyTrade$Params } from '../../../swagger/fn/nic-registry/nic-registry-find-my-trade';

export interface NicRegistryFindMyTradeParams {
  tradeNumber: string;
}

export const nicRegistryFindMyTradeParamsAdapter = {
  adapt(params?: NicRegistryFindMyTradeParams): NicRegistryFindMyTrade$Params {
    if (!params) {
      return {} as NicRegistryFindMyTrade$Params;
    }
    return {
      tradeNumber: params.tradeNumber,
    };
  }
};
