import { AccountsCreateBanksDetailsByAccount$Params } from '../../../swagger/fn/accounts/accounts-create-banks-details-by-account';
import { BankingDetails } from '../../models/banking-details.interface';
import { apiBankingDetailsDtoAdapter } from '../../adapters/models/api-banking-details-dto.adapter';

// @ts-ignore
export interface AccountsCreateBanksDetailsByAccountParams {
  accountNumber: string;
  body?: BankingDetails;
}

export function accountsCreateBanksDetailsByAccountAdapter(params?: AccountsCreateBanksDetailsByAccountParams): AccountsCreateBanksDetailsByAccount$Params {
  if (!params) {
    return {} as AccountsCreateBanksDetailsByAccount$Params;
  }
  return {
      accountNumber: params.accountNumber,
      body: apiBankingDetailsDtoAdapter(params.body),
  };
}
