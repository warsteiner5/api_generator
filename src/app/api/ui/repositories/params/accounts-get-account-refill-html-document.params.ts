import { AccountsGetAccountRefillHtmlDocument$Params } from '../../../swagger/fn/accounts/accounts-get-account-refill-html-document';

export interface AccountsGetAccountRefillHtmlDocumentParams {
  accountNumber: string;
  sum: number;
}

export const accountsGetAccountRefillHtmlDocumentParamsAdapter = {
  adapt(params?: AccountsGetAccountRefillHtmlDocumentParams): AccountsGetAccountRefillHtmlDocument$Params {
    if (!params) {
      return {} as AccountsGetAccountRefillHtmlDocument$Params;
    }
    return {
      accountNumber: params.accountNumber,
      sum: params.sum,
    };
  }
};
