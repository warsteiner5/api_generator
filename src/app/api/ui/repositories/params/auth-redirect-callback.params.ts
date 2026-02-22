import { AuthRedirectCallback$Params } from '../../../swagger/fn/auth/auth-redirect-callback';

// @ts-ignore
export interface AuthRedirectCallbackParams {
}

export function authRedirectCallbackAdapter(params?: AuthRedirectCallbackParams): AuthRedirectCallback$Params {
  if (!params) {
    return {} as AuthRedirectCallback$Params;
  }
  return {
  };
}
