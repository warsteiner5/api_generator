import { AuthRedirectCallback$Params } from '../../../swagger/fn/auth/auth-redirect-callback';

export interface AuthRedirectCallbackParams {
}

export const authRedirectCallbackParamsAdapter = {
  adapt(params?: AuthRedirectCallbackParams): AuthRedirectCallback$Params {
    if (!params) {
      return {} as AuthRedirectCallback$Params;
    }
    return {
    };
  }
};
