import { AccountsGetLotCommissionByLot$Params } from '../../../swagger/fn/accounts/accounts-get-lot-commission-by-lot';

export interface AccountsGetLotCommissionByLotParams {
  lotId: number;
}

export const accountsGetLotCommissionByLotParamsAdapter = {
  adapt(params?: AccountsGetLotCommissionByLotParams): AccountsGetLotCommissionByLot$Params {
    if (!params) {
      return {} as AccountsGetLotCommissionByLot$Params;
    }
    return {
      lotId: params.lotId,
    };
  }
};
