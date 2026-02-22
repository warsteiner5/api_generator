import { AccountsGetCommissionByTrade$Params } from '../../../swagger/fn/accounts/accounts-get-commission-by-trade';

// @ts-ignore
export interface AccountsGetCommissionByTradeParams {
  tradeId: number;
}

export function accountsGetCommissionByTradeAdapter(params?: AccountsGetCommissionByTradeParams): AccountsGetCommissionByTrade$Params {
  if (!params) {
    return {} as AccountsGetCommissionByTrade$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
