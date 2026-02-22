import { AuthGetSsoRedirectUrl$Params } from '../../../swagger/fn/auth/auth-get-sso-redirect-url';

// @ts-ignore
export interface AuthGetSsoRedirectUrlParams {
  returnUrl: string;
}

export function authGetSsoRedirectUrlAdapter(params?: AuthGetSsoRedirectUrlParams): AuthGetSsoRedirectUrl$Params {
  if (!params) {
    return {} as AuthGetSsoRedirectUrl$Params;
  }
  return {
      returnUrl: params.returnUrl,
  };
}
