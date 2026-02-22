import { AccountsGetLotCommissionByQuotation$Params } from '../../../swagger/fn/accounts/accounts-get-lot-commission-by-quotation';

// @ts-ignore
export interface AccountsGetLotCommissionByQuotationParams {
  lotId: number;
  quotation: number;
}

export function accountsGetLotCommissionByQuotationAdapter(params?: AccountsGetLotCommissionByQuotationParams): AccountsGetLotCommissionByQuotation$Params {
  if (!params) {
    return {} as AccountsGetLotCommissionByQuotation$Params;
  }
  return {
      lotId: params.lotId,
      quotation: params.quotation,
  };
}
