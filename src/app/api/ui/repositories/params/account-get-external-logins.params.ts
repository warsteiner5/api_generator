import { AccountGetExternalLogins$Params } from '../../../swagger/fn/account/account-get-external-logins';

// @ts-ignore
export interface AccountGetExternalLoginsParams {
  returnUrl: string;
  redirectAfterloginUrl?: string;
  generateState?: boolean;
}

export function accountGetExternalLoginsAdapter(params?: AccountGetExternalLoginsParams): AccountGetExternalLogins$Params {
  if (!params) {
    return {} as AccountGetExternalLogins$Params;
  }
  return {
      returnUrl: params.returnUrl,
      redirectAfterloginUrl: params.redirectAfterloginUrl,
      generateState: params.generateState,
  };
}
