import { ApplicationGetOrganizationAccounts$Params } from '../../../swagger/fn/application/application-get-organization-accounts';

export interface ApplicationGetOrganizationAccountsParams {
}

export const applicationGetOrganizationAccountsParamsAdapter = {
  adapt(params?: ApplicationGetOrganizationAccountsParams): ApplicationGetOrganizationAccounts$Params {
    if (!params) {
      return {} as ApplicationGetOrganizationAccounts$Params;
    }
    return {
    };
  }
};
