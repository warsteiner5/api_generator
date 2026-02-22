import { AccountsGetAccountRefillDocument$Params } from '../../../swagger/fn/accounts/accounts-get-account-refill-document';

// @ts-ignore
export interface AccountsGetAccountRefillDocumentParams {
  accountNumber: string;
  sum: number;
}

export function accountsGetAccountRefillDocumentAdapter(params?: AccountsGetAccountRefillDocumentParams): AccountsGetAccountRefillDocument$Params {
  if (!params) {
    return {} as AccountsGetAccountRefillDocument$Params;
  }
  return {
      accountNumber: params.accountNumber,
      sum: params.sum,
  };
}
