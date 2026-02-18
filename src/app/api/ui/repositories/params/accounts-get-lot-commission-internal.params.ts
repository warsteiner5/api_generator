import { AccountsGetLotCommissionInternal$Params } from '../../../swagger/fn/accounts/accounts-get-lot-commission-internal';

export interface AccountsGetLotCommissionInternalParams {
  lotId: number;
  supplierOrganizationId: number;
  quotation: number;
}

export const accountsGetLotCommissionInternalParamsAdapter = {
  adapt(params?: AccountsGetLotCommissionInternalParams): AccountsGetLotCommissionInternal$Params {
    if (!params) {
      return {} as AccountsGetLotCommissionInternal$Params;
    }
    return {
      lotId: params.lotId,
      supplierOrganizationId: params.supplierOrganizationId,
      quotation: params.quotation,
    };
  }
};
