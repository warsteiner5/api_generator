import { AccountsGetLotCommissionByQuotation$Params } from '../../../swagger/fn/accounts/accounts-get-lot-commission-by-quotation';

export interface AccountsGetLotCommissionByQuotationParams {
  lotId: number;
  quotation: number;
}

export const accountsGetLotCommissionByQuotationParamsAdapter = {
  adapt(params?: AccountsGetLotCommissionByQuotationParams): AccountsGetLotCommissionByQuotation$Params {
    if (!params) {
      return {} as AccountsGetLotCommissionByQuotation$Params;
    }
    return {
      lotId: params.lotId,
      quotation: params.quotation,
    };
  }
};
