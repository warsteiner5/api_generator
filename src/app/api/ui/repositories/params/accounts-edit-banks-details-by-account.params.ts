import { AccountsEditBanksDetailsByAccount$Params } from '../../../swagger/fn/accounts/accounts-edit-banks-details-by-account';
import { BankingDetails } from '../../models/banking-details.interface';
import { apiBankingDetailsDtoAdapter } from '../../adapters/models/api-banking-details-dto.adapter';

// @ts-ignore
export interface AccountsEditBanksDetailsByAccountParams {
  accountNumber: string;
  bankingDetailsId: number;
  body?: BankingDetails;
}

export function accountsEditBanksDetailsByAccountAdapter(params?: AccountsEditBanksDetailsByAccountParams): AccountsEditBanksDetailsByAccount$Params {
  if (!params) {
    return {} as AccountsEditBanksDetailsByAccount$Params;
  }
  return {
      accountNumber: params.accountNumber,
      bankingDetailsId: params.bankingDetailsId,
      body: apiBankingDetailsDtoAdapter(params.body),
  };
}
