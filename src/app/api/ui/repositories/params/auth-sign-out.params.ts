import { AuthSignOut$Params } from '../../../swagger/fn/auth/auth-sign-out';

// @ts-ignore
export interface AuthSignOutParams {
}

export function authSignOutAdapter(params?: AuthSignOutParams): AuthSignOut$Params {
  if (!params) {
    return {} as AuthSignOut$Params;
  }
  return {
  };
}
