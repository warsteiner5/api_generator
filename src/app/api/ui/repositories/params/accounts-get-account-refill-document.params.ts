import { AccountsGetAccountRefillDocument$Params } from '../../../swagger/fn/accounts/accounts-get-account-refill-document';

export interface AccountsGetAccountRefillDocumentParams {
  accountNumber: string;
  sum: number;
}

export const accountsGetAccountRefillDocumentParamsAdapter = {
  adapt(params?: AccountsGetAccountRefillDocumentParams): AccountsGetAccountRefillDocument$Params {
    if (!params) {
      return {} as AccountsGetAccountRefillDocument$Params;
    }
    return {
      accountNumber: params.accountNumber,
      sum: params.sum,
    };
  }
};
