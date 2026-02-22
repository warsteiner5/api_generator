import { AccountsGetAccountRefillHtmlDocument$Params } from '../../../swagger/fn/accounts/accounts-get-account-refill-html-document';

// @ts-ignore
export interface AccountsGetAccountRefillHtmlDocumentParams {
  accountNumber: string;
  sum: number;
}

export function accountsGetAccountRefillHtmlDocumentAdapter(params?: AccountsGetAccountRefillHtmlDocumentParams): AccountsGetAccountRefillHtmlDocument$Params {
  if (!params) {
    return {} as AccountsGetAccountRefillHtmlDocument$Params;
  }
  return {
      accountNumber: params.accountNumber,
      sum: params.sum,
  };
}
