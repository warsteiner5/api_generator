import { AccountsGetCommissionByTrade$Params } from '../../../swagger/fn/accounts/accounts-get-commission-by-trade';

export interface AccountsGetCommissionByTradeParams {
  tradeId: number;
}

export const accountsGetCommissionByTradeParamsAdapter = {
  adapt(params?: AccountsGetCommissionByTradeParams): AccountsGetCommissionByTrade$Params {
    if (!params) {
      return {} as AccountsGetCommissionByTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
