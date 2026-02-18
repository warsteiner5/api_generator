import { AccountsEditBanksDetailsByAccount$Params } from '../../../swagger/fn/accounts/accounts-edit-banks-details-by-account';
import { BankingDetails } from '../../models/banking-details.interface';
import { adaptApiBankingDetailsDto } from '../../adapters/toDto/api-banking-details-dto.adapter';

export interface AccountsEditBanksDetailsByAccountParams {
  accountNumber: string;
  bankingDetailsId: number;
  body?: BankingDetails;
}

export const accountsEditBanksDetailsByAccountParamsAdapter = {
  adapt(params?: AccountsEditBanksDetailsByAccountParams): AccountsEditBanksDetailsByAccount$Params {
    if (!params) {
      return {} as AccountsEditBanksDetailsByAccount$Params;
    }
    return {
      accountNumber: params.accountNumber,
      bankingDetailsId: params.bankingDetailsId,
      body: adaptApiBankingDetailsDto(params.body),
    };
  }
};
