import { AccountGetExternalLogins$Params } from '../../../swagger/fn/account/account-get-external-logins';

export interface AccountGetExternalLoginsParams {
  returnUrl: string;
  redirectAfterloginUrl?: string;
  generateState?: boolean;
}

export const accountGetExternalLoginsParamsAdapter = {
  adapt(params?: AccountGetExternalLoginsParams): AccountGetExternalLogins$Params {
    if (!params) {
      return {} as AccountGetExternalLogins$Params;
    }
    return {
      returnUrl: params.returnUrl,
      redirectAfterloginUrl: params.redirectAfterloginUrl,
      generateState: params.generateState,
    };
  }
};
