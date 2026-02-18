import { AuthAuthorize$Params } from '../../../swagger/fn/auth/auth-authorize';

export interface AuthAuthorizeParams {
  appUrl: string;
}

export const authAuthorizeParamsAdapter = {
  adapt(params?: AuthAuthorizeParams): AuthAuthorize$Params {
    if (!params) {
      return {} as AuthAuthorize$Params;
    }
    return {
      appUrl: params.appUrl,
    };
  }
};
