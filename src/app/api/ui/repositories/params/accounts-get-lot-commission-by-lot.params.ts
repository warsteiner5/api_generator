import { AccountsGetLotCommissionByLot$Params } from '../../../swagger/fn/accounts/accounts-get-lot-commission-by-lot';

// @ts-ignore
export interface AccountsGetLotCommissionByLotParams {
  lotId: number;
}

export function accountsGetLotCommissionByLotAdapter(params?: AccountsGetLotCommissionByLotParams): AccountsGetLotCommissionByLot$Params {
  if (!params) {
    return {} as AccountsGetLotCommissionByLot$Params;
  }
  return {
      lotId: params.lotId,
  };
}
