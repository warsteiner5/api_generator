import { AuthGetSsoRedirectUrl$Params } from '../../../swagger/fn/auth/auth-get-sso-redirect-url';

export interface AuthGetSsoRedirectUrlParams {
  returnUrl: string;
}

export const authGetSsoRedirectUrlParamsAdapter = {
  adapt(params?: AuthGetSsoRedirectUrlParams): AuthGetSsoRedirectUrl$Params {
    if (!params) {
      return {} as AuthGetSsoRedirectUrl$Params;
    }
    return {
      returnUrl: params.returnUrl,
    };
  }
};
