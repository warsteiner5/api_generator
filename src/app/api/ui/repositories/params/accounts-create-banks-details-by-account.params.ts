import { AccountsCreateBanksDetailsByAccount$Params } from '../../../swagger/fn/accounts/accounts-create-banks-details-by-account';
import { BankingDetails } from '../../models/banking-details.interface';
import { adaptApiBankingDetailsDto } from '../../adapters/toDto/api-banking-details-dto.adapter';

export interface AccountsCreateBanksDetailsByAccountParams {
  accountNumber: string;
  body?: BankingDetails;
}

export const accountsCreateBanksDetailsByAccountParamsAdapter = {
  adapt(params?: AccountsCreateBanksDetailsByAccountParams): AccountsCreateBanksDetailsByAccount$Params {
    if (!params) {
      return {} as AccountsCreateBanksDetailsByAccount$Params;
    }
    return {
      accountNumber: params.accountNumber,
      body: adaptApiBankingDetailsDto(params.body),
    };
  }
};
