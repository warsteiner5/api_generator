import { AuthSignOut$Params } from '../../../swagger/fn/auth/auth-sign-out';

export interface AuthSignOutParams {
}

export const authSignOutParamsAdapter = {
  adapt(params?: AuthSignOutParams): AuthSignOut$Params {
    if (!params) {
      return {} as AuthSignOut$Params;
    }
    return {
    };
  }
};
