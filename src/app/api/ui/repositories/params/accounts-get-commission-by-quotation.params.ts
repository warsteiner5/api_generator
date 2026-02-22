import { AccountsGetCommissionByQuotation$Params } from '../../../swagger/fn/accounts/accounts-get-commission-by-quotation';

// @ts-ignore
export interface AccountsGetCommissionByQuotationParams {
  tradeId: number;
  quotation: number;
}

export function accountsGetCommissionByQuotationAdapter(params?: AccountsGetCommissionByQuotationParams): AccountsGetCommissionByQuotation$Params {
  if (!params) {
    return {} as AccountsGetCommissionByQuotation$Params;
  }
  return {
      tradeId: params.tradeId,
      quotation: params.quotation,
  };
}
