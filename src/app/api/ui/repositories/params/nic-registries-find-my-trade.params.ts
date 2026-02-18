import { NicRegistriesFindMyTrade$Params } from '../../../swagger/fn/nic-registries/nic-registries-find-my-trade';

export interface NicRegistriesFindMyTradeParams {
  tradeNumber: string;
}

export const nicRegistriesFindMyTradeParamsAdapter = {
  adapt(params?: NicRegistriesFindMyTradeParams): NicRegistriesFindMyTrade$Params {
    if (!params) {
      return {} as NicRegistriesFindMyTrade$Params;
    }
    return {
      tradeNumber: params.tradeNumber,
    };
  }
};
